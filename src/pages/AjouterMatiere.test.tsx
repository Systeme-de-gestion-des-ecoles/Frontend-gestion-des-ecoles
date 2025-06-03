import { render, screen, fireEvent } from '@testing-library/react';
import AjouterMatiere from './Ajouter_matiere';

describe('AjouterMatiere', () => {
  it('render correctement tous les champs du formulaire', () => {
    render(<AjouterMatiere />);

    expect(screen.getByPlaceholderText('Nom de la matière')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Code')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
    expect(screen.getByTestId('select-heures')).toBeInTheDocument();
    expect(screen.getByTestId('select-classe')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /soumettre/i })).toBeInTheDocument();
  });

  it('met à jour les champs lorsqu’on saisit des valeurs', () => {
    render(<AjouterMatiere />);

    const nomInput = screen.getByPlaceholderText('Nom de la matière');
    const codeInput = screen.getByPlaceholderText('Code');
    const descriptionInput = screen.getByPlaceholderText('Description');

    fireEvent.change(nomInput, { target: { value: 'Maths' } });
    fireEvent.change(codeInput, { target: { value: 'MATH101' } });
    fireEvent.change(descriptionInput, { target: { value: 'Cours de mathématiques' } });

    expect(nomInput).toHaveValue('Maths');
    expect(codeInput).toHaveValue('MATH101');
    expect(descriptionInput).toHaveValue('Cours de mathématiques');
  });

  it('soumet le formulaire sans crash', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<AjouterMatiere />);

    fireEvent.change(screen.getByPlaceholderText('Nom de la matière'), {
      target: { value: 'Physique' },
    });
    fireEvent.change(screen.getByPlaceholderText('Code'), {
      target: { value: 'PHY101' },
    });
    fireEvent.change(screen.getByPlaceholderText('Description'), {
      target: { value: 'Cours de physique' },
    });
    fireEvent.change(screen.getByTestId('select-heures'), {
      target: { value: '2h' },
    });
    fireEvent.change(screen.getByTestId('select-classe'), {
      target: { value: 'Seconde' },
    });

    fireEvent.click(screen.getByRole('button', { name: /soumettre/i }));

    expect(consoleSpy).toHaveBeenCalledWith({
      nomMatiere: 'Physique',
      code: 'PHY101',
      heures: '2h',
      classe: 'Seconde',
      description: 'Cours de physique',
    });

    consoleSpy.mockRestore();
  });
});
