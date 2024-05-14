import sumarCadena from './sumadorDeCadenas';

describe("Sumar Cadenas", () => {
    it("deberia retornar 0 si la cadena que se le pasa esta vacia", () => {
      expect(sumarCadena(NaN)).toEqual(0);
    });
  });
  