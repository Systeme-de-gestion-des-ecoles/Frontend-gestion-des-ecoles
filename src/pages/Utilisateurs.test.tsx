import { render, screen } from '@testing-library/react';
import Utilisateurs from './Utilisateurs';

describe('Utilisateurs Component', () => {
  test('affiche le titre et la liste des utilisateurs avec les boutons', () => {
    render(<Utilisateurs />);

    // Vérifie le titre
    expect(screen.getByText('LISTE DES UTILISATEURS')).toBeInTheDocument();

    // Liste des labels attendus
    const labels = [
      'Administrateur',
      'Chauffeur',
      'Chef cuisinier',
      'Enseignant',
      'Parent',
      'Surveillant général',
    ];

    // Vérifie que chaque label est affiché
    labels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    // Vérifie que chaque bouton "Voir la liste" est affiché
    const buttons = screen.getAllByRole('button', { name: /voir la liste/i });
    expect(buttons).toHaveLength(labels.length);
  });
});
