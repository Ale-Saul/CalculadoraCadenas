import sumarCadena from './sumadorDeCadenas';

describe("Sumar Cadenas", () => {
    it("deberia retornar 0 si la cadena que se le pasa esta vacia", () => {
      expect(sumarCadena("")).toEqual(0);
    });
    it("deberia retornar 2 si la cadena de entrada es 2", () =>{
        expect(sumarCadena("2")).toEqual(2);
    })
    it("deberia retornar 3 si la cadena de entrada es 1,2", () =>{
        expect(sumarCadena("1,2")).toEqual(3);
    })
  });
  