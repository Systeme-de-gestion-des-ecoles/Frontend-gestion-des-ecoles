import { render, screen } from '@testing-library/react';
import Remplissage_note from './Remplissage_note';

describe('Remplissage_note component', () => {
  test('renders all select fields and the submit button', () => {
    render(<Remplissage_note />);

    // Titre
    expect(screen.getByRole('heading', { name: /REMPLISSAGE DE NOTES/i })).toBeInTheDocument();

    // Vérifie chaque champ de sélection avec le bon label
    expect(screen.getByRole('combobox', { name: /Classe/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /Matière/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /Code/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /Séquence/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /Coefficient/i })).toBeInTheDocument();

    // Vérifie le nombre total de selects
    expect(screen.getAllByRole('combobox')).toHaveLength(5);

    // Vérifie le bouton de soumission
    expect(screen.getByRole('button', { name: /SOUMETTRE/i })).toBeInTheDocument();
  });
});
