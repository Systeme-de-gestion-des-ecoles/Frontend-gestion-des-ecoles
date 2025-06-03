import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Eleve from './Eleve';

describe('Eleve component', () => {
  it('affiche correctement tous les champs du formulaire', () => {
    render(<Eleve />);

    // Vérifier la présence des champs select
    expect(screen.getByRole('combobox', { name: /cycle/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /classe/i })).toBeInTheDocument();

    // Vérifier la présence des champs input texte/date
    expect(screen.getByPlaceholderText(/matricule/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /nom du parent/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/télécharger une photo/i)).toBeInTheDocument();

    // Vérifier la présence du champ date (input type date)
    expect(screen.getByLabelText(/date de naissance/i)).toBeInTheDocument();

    // Vérifier la présence du bouton submit
    expect(screen.getByRole('button', { name: /soumettre/i })).toBeInTheDocument();
  });

  it('met à jour les champs du formulaire lors de la saisie', () => {
    render(<Eleve />);

    const cycleSelect = screen.getByRole('combobox', { name: /cycle/i });
    fireEvent.change(cycleSelect, { target: { value: '1er Cycle' } });
    expect((cycleSelect as HTMLSelectElement).value).toBe('1er Cycle');

    const classeSelect = screen.getByRole('combobox', { name: /classe/i });
    fireEvent.change(classeSelect, { target: { value: '5e' } });
    expect((classeSelect as HTMLSelectElement).value).toBe('5e');

    const matriculeInput = screen.getByPlaceholderText(/matricule/i);
    fireEvent.change(matriculeInput, { target: { value: 'ABC123' } });
    expect((matriculeInput as HTMLInputElement).value).toBe('ABC123');

    const nomParentInput = screen.getByPlaceholderText(/nom du parent/i);
    fireEvent.change(nomParentInput, { target: { value: 'Dupont' } });
    expect((nomParentInput as HTMLInputElement).value).toBe('Dupont');

    const dateInput = screen.getByLabelText(/date de naissance/i);
    fireEvent.change(dateInput, { target: { value: '2000-01-01' } });
    expect((dateInput as HTMLInputElement).value).toBe('2000-01-01');
  });

  it('gère le téléchargement de la photo', () => {
    render(<Eleve />);

    const file = new File(['photo'], 'photo.png', { type: 'image/png' });

    const fileInput = screen.getByLabelText(/télécharger une photo/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Vérifie que le nom du fichier s'affiche
    expect(screen.getByText('photo.png')).toBeInTheDocument();
  });

  it('soumet le formulaire et affiche les données dans la console', () => {
    // On peut mocker console.log pour vérifier l'appel
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Eleve />);

    fireEvent.change(screen.getByRole('combobox', { name: /cycle/i }), { target: { value: '1er Cycle' } });
    fireEvent.change(screen.getByRole('combobox', { name: /classe/i }), { target: { value: '5e' } });
    fireEvent.change(screen.getByPlaceholderText(/matricule/i), { target: { value: 'ABC123' } });
    fireEvent.change(screen.getByPlaceholderText(/nom du parent/i), { target: { value: 'Dupont' } });
    fireEvent.change(screen.getByLabelText(/date de naissance/i), { target: { value: '2000-01-01' } });

    fireEvent.submit(screen.getByRole('button', { name: /soumettre/i }));

    expect(consoleSpy).toHaveBeenCalledWith({
      cycle: '1er Cycle',
      classe: '5e',
      matricule: 'ABC123',
      dateNaissance: '2000-01-01',
      nomParent: 'Dupont',
      photo: null,
    });

    consoleSpy.mockRestore();
  });
});
