import { render, screen, fireEvent } from '@testing-library/react';
import PageProf from './PageProf';
import '@testing-library/jest-dom';

describe('Composant PageProf', () => {
  test('affiche correctement le titre principal', () => {
    render(<PageProf />);
    const titre = screen.getByText(/GESTION DES NOTES DES ÉLÈVES/i);
    expect(titre).toBeInTheDocument();
  });

  test('affiche un message lorsque aucune classe n\'est sélectionnée', () => {
    render(<PageProf />);
    const message = screen.getByText(/Veuillez sélectionner une classe pour afficher la liste des élèves./i);
    expect(message).toBeInTheDocument();
  });

  test('permet de sélectionner une classe et affiche les élèves correspondants', () => {
    render(<PageProf />);
    const selects = screen.getAllByRole('combobox');
    const selectClasse = selects[0]; // Premier select : classe
    fireEvent.change(selectClasse, { target: { value: 'CM2' } });

    const eleve = screen.getByText(/Espérance/i);
    expect(eleve).toBeInTheDocument();
  });

  test('permet de sélectionner une matière après avoir sélectionné une classe', () => {
    render(<PageProf />);
    const selects = screen.getAllByRole('combobox');
    const selectClasse = selects[0];
    const selectMatiere = selects[1];

    fireEvent.change(selectClasse, { target: { value: 'CM2' } });
    expect(selectMatiere).not.toBeDisabled();

    fireEvent.change(selectMatiere, { target: { value: 'Mathématiques' } });
    const note = screen.getByText(/Mathématiques: 15\/20/i);
    expect(note).toBeInTheDocument();
  });

  test('filtre les élèves selon la recherche', () => {
    render(<PageProf />);
    const selects = screen.getAllByRole('combobox');
    const selectClasse = selects[0];
    fireEvent.change(selectClasse, { target: { value: 'CM2' } });

    const inputRecherche = screen.getByPlaceholderText(/Rechercher un élève.../i);
    fireEvent.change(inputRecherche, { target: { value: 'DALVIRA' } });

    const eleve = screen.getByText(/Dalvira/i);
    expect(eleve).toBeInTheDocument();
    expect(screen.queryByText(/Espérance/i)).not.toBeInTheDocument();
  });
});
