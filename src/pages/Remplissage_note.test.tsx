
import { render, screen, fireEvent } from '@testing-library/react';
import Remplissage_note from './Remplissage_note';

describe('Remplissage_note component', () => {
  it('renders all select fields and the submit button', () => {
    render(<Remplissage_note />);

    expect(screen.getByText(/REMPLISSAGE DE NOTES/i)).toBeInTheDocument();

    expect(screen.getByRole('combobox', { name: '' })).toBeInTheDocument();
    expect(screen.getAllByRole('combobox')).toHaveLength(5); // 5 selects

    expect(screen.getByRole('button', { name: /SOUMETTRE/i })).toBeInTheDocument();
  });

  it('updates form state on select change and logs formData on submit', () => {
    render(<Remplissage_note />);

    const selects = screen.getAllByRole('combobox');

    fireEvent.change(selects[0], { target: { value: '6e' } }); 
    fireEvent.change(selects[1], { target: { value: 'Math' } }); 
    fireEvent.change(selects[2], { target: { value: 'MAT101' } }); 
    fireEvent.change(selects[3], { target: { value: '1' } }); 
    fireEvent.change(selects[4], { target: { value: '2' } }); 

    const formData = {
      classe: '6e',
      matiere: 'Math',
      code: 'MAT101',
      sequence: '1',
      coefficient: '2',
    };

 
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    fireEvent.click(screen.getByRole('button', { name: /SOUMETTRE/i }));

    expect(logSpy).toHaveBeenCalledWith(formData);

    logSpy.mockRestore();
  });
});
