
import { render, screen, fireEvent } from '@testing-library/react';
import Surveillant from './Surveillant';

describe('Surveillant Component', () => {
  test('renders all form fields correctly', () => {
    render(<Surveillant />);

    // Vérifie le titre
    expect(screen.getByText('SURVEILLANT GÉNÉRAL')).toBeInTheDocument();

    // Vérifie les inputs
    expect(screen.getByPlaceholderText('Numéro de CNI')).toBeInTheDocument();
    expect(screen.getByText('Photo')).toBeInTheDocument();
    expect(screen.getByText('CV (PDF)')).toBeInTheDocument();
    expect(screen.getByText('Zone de service')).toBeInTheDocument();

    // Vérifie le bouton
    expect(screen.getByRole('button', { name: /soumettre/i })).toBeInTheDocument();
  });

  test('allows user to fill out and submit the form', () => {
    render(<Surveillant />);

    const cniInput = screen.getByPlaceholderText('Numéro de CNI') as HTMLInputElement;
    const zoneSelect = screen.getByRole('combobox') as HTMLSelectElement;
    const submitButton = screen.getByRole('button', { name: /soumettre/i });

    // Remplir le champ CNI
    fireEvent.change(cniInput, { target: { value: 'CNI123456' } });
    expect(cniInput.value).toBe('CNI123456');

    // Sélectionner une zone
    fireEvent.change(zoneSelect, { target: { value: 'Zone B' } });
    expect(zoneSelect.value).toBe('Zone B');

    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    // Soumettre le formulaire
    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith({
      cni: 'CNI123456',
      zoneService: 'Zone B',
      photo: null,
      cv: null,
    });

    consoleSpy.mockRestore();
  });
});
