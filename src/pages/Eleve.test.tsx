import { render, screen, fireEvent } from '@testing-library/react';
import Eleve from './Eleve';

describe('Eleve component', () => {
  it('affiche tous les champs attendus', () => {
    render(<Eleve />);

    expect(screen.getByPlaceholderText(/matricule/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/nom du parent/i)).toBeInTheDocument();
    expect(screen.getByText(/télécharger une photo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /soumettre/i })).toBeInTheDocument();

    expect(screen.getByTestId('cycle')).toBeInTheDocument();
    expect(screen.getByTestId('classe')).toBeInTheDocument();
    expect(screen.getByTestId('dateNaissance')).toBeInTheDocument(); 
  });

  it('soumet les données sans erreur', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Eleve />);

    fireEvent.change(screen.getByTestId('cycle'), { target: { value: '1er Cycle' } });
    fireEvent.change(screen.getByTestId('classe'), { target: { value: '5e' } });
    fireEvent.change(screen.getByPlaceholderText(/matricule/i), { target: { value: 'ABC123' } });
    fireEvent.change(screen.getByPlaceholderText(/nom du parent/i), { target: { value: 'Dupont' } });
    fireEvent.change(screen.getByTestId('dateNaissance'), { target: { value: '2000-01-01' } }); 

    fireEvent.click(screen.getByRole('button', { name: /soumettre/i }));

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        cycle: '1er Cycle',
        classe: '5e',
        matricule: 'ABC123',
        nomParent: 'Dupont',
        dateNaissance: '2000-01-01',
        photo: null,
      })
    );

    consoleSpy.mockRestore();
  });
});
