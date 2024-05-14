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
    it("deberia retornar 6 si la cadena de entrada es 1,2,3", () =>{
        expect(sumarCadena("1,2,3")).toEqual(6);
    })
    it("deberia retornar 10 si la cadena de entrada es 1-2,3-4", () =>{
        expect(sumarCadena("1-2,3-4")).toEqual(10);
    })
    it("deberia retornar 12 si la cadena de entrada es //[:] 6,3-2:1", () =>{
        expect(sumarCadena("//[:] 6,3-2:1")).toEqual(12);
    })
    it("deberia retornar 6 si la cadena de entrada es 1,2,3,1001", () =>{
        expect(sumarCadena("1,2,3,1001")).toEqual(6);
    })
    it("deberia retornar 6 si la cadena de entrada es //[:] 1-2,4:1000", () =>{
        expect(sumarCadena("//[:] 1-2,4:1000")).toEqual(7);
    })
  });
  