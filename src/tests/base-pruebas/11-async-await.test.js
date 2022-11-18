import { string } from 'prop-types';
import {getImagen} from '../../base-pruebas/11-async-await'

describe('Pruebas en 11-async-await', () => { 
    
    test('getImagen debe retornar un error ', async() => {
      
       const resp = await getImagen();

       //expect ( typeof url ).toBe('string');
       expect ( resp ).toBe('No se encontró la imagen');

    });
     

})


