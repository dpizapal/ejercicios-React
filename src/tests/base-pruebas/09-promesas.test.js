import {getHeroeByIdAsync} from '../../base-pruebas/09-promesas'

describe('pruebas en 09 promesas', () => {

    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
      const id = 1;
      getHeroeByIdAsync (id)
        .then( hero => {

            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            
            done();
        });
    });


    test('getHeroeByIdAsync debe de obtener un error si héroe no existe', (done) => {
      const id = 20;
      getHeroeByIdAsync (id)
        .catch ( error => {

            expect ( error ).toBe(`No se pudo encontrar el heroe con ${id}`);
            done();
        });

        
    });
    

});
