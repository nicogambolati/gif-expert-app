import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("test in <AddCategory />", () => {
  test("You must change the value of the textbox", () => {
    // Creo el sujeto de pruebas
    render(<AddCategory onNewCategory={() => {}} />);

    // Extraigo el input
    const input = screen.getByRole("textbox");

    // Disparo el evento
    fireEvent.input(input, { target: { value: "Saitama" } });

    // Hago la sesion de lo que estoy esperando que suceda despues del evento
    expect(input.value).toBe("Saitama");

    // screen.debug();
  });

  test("Must call onNewCategory if the input has a value", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn(); // jest funtion => Simula una la funcion

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");

    // Comprueba que la funcion haya sido llamada
    expect(onNewCategory).toHaveBeenCalled();

    // Comprueba que la funcion haya sido llamada SOLO 1 vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);

    // Comprueba que la funcion haya sido llamada con el VALOR del inputValue
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("Should not call New Category if the input is empty", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    // o tambien se puede hacer:
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
