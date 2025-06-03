import { render, screen, fireEvent } from '@testing-library/react';
import ListEleves from './ListEleves';
import '@testing-library/jest-dom';



describe('Composant ListEleves', () => {
  test('affiche correctement le titre principal', () => {
    render(<ListEleves />);
    const titre = screen.getByText(/LISTE DES ELEVES DE LA CLASSE CM2/i);
    expect(titre).toBeInTheDocument();
  });

  test('affiche les statistiques de présence et absence correctement', () => {
    render(<ListEleves />);
    expect(screen.getByText(/Présents : 3/)).toBeInTheDocument();
    expect(screen.getByText(/Absents : 2/)).toBeInTheDocument();
  });

  test('filtre les élèves selon la recherche', () => {
    render(<ListEleves />);
    const input = screen.getByPlaceholderText(/Rechercher un élève.../i);
    fireEvent.change(input, { target: { value: 'DALVIRA' } });

    expect(screen.getByText(/DALVIRA/i)).toBeInTheDocument();
    expect(screen.queryByText(/Esperance/i)).not.toBeInTheDocument();
  });

  test('bascule le statut d\'un élève au clic', () => {
    render(<ListEleves />);
    const statutAvant = screen.getAllByText('PRESENT')[0];
    fireEvent.click(statutAvant); // toggle
    const statutApres = screen.getAllByText('ABSENT')[0];
    expect(statutApres).toBeInTheDocument();
  });

  test('affiche tous les élèves au départ', () => {
    render(<ListEleves />);
    const lignes = screen.getAllByRole('row');
    // 1 ligne d'en-tête + 5 lignes d'élèves
    expect(lignes.length).toBe(6);
  });

  test('le bouton "VALIDER APPELS" est visible', () => {
    render(<ListEleves />);
    const bouton = screen.getByText(/VALIDER APPELS/i);
    expect(bouton).toBeInTheDocument();
  });
});
