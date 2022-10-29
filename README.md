# pos-platform
## integrantes
 * Luis Eduardo Alvarado Celano - 0900-20-7376
 * Carlos Alejandro Ayala Valdez - 0900-20-11026
 * Geycow Steven Hernandez Roca - 0900-15-6452
 * Diego Josué Velásquez Díaz - 0900-20-13452
 * Nils Estuardo Estrada Miron - 0900-17-5475
 
## Diagrama E-R

![DIAGRAMA POS drawio](https://user-images.githubusercontent.com/57637647/198847204-27d1d2bf-236e-415e-b9d6-32cd86d74454.png)

## Instalación
 - Seguir estos pasos a continuación:
 - Crear un servidor en SQL server
 - Agregar las credenciales en `src/config/development`
 
    ```
      export default {
        DB_SERVER: 'localhost',
        DB_PORT: 1433,
        DATABASE: 'PROYECTO_POS',
        DB_USER: 'sa',
        DB_PASSWORD: 'Admin12345!'
      }
     ```
 - Instalar Node JS - https://nodejs.org/en/download/
 - Instalar paquetes - `npm install`
 - Correr la aplicación (modo desarrollo) - `npm run start:dev` 
 - Correr la aplicación (modo producción) - `npm run start`
  
