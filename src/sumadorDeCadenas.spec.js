import sumarCadena from './sumadorDeCadenas';

describe("Sumar Cadenas", () => {
    it("deberia retornar 0 si la cadena que se le pasa esta vacia", () => {
      expect(sumarCadena(NaN)).toEqual(0);
    });
    it("deberia retornar 2 si la cadena de entrada es 2", () =>{
        expect(sumarCadena("2")).toEqual(2);
    })
  });
  