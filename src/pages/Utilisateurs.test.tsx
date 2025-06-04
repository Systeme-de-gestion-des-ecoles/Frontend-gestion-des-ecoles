import { render, screen } from '@testing-library/react';
import Utilisateurs from './Utilisateurs';

describe('Utilisateurs Component', () => {
  test('affiche le titre et la liste des utilisateurs avec les boutons', () => {
    render(<Utilisateurs />);

 
    expect(screen.getByText('LISTE DES UTILISATEURS')).toBeInTheDocument();

  
    const labels = [
      'Administrateur',
      'Chauffeur',
      'Chef cuisinier',
      'Enseignant',
      'Parent',
      'Surveillant général',
    ];

    labels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });

   
    const buttons = screen.getAllByRole('button', { name: /voir la liste/i });
    expect(buttons).toHaveLength(labels.length);
  });
});
