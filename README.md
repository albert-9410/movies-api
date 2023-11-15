# movies-api

## Descripción

Este proyecto es una API para la gestión de películas.

## Instalación

Para comenzar, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/albert-9410//movies-api.git
cd movies-api
Asegúrate de tener Node.js y npm instalados. Luego, instala las dependencias utilizando el siguiente comando:

bash
Copy code
npm install
Uso
Desarrollo
Para ejecutar el proyecto en modo de desarrollo, puedes usar el siguiente comando:

bash
Copy code
npm run dev
Esto iniciará el servidor en modo de desarrollo utilizando ts-node-dev.

Compilación
Para compilar el código TypeScript a JavaScript y ejecutar la aplicación, puedes utilizar:

bash
Copy code
npm start
Este comando compila el código TypeScript a la carpeta lib/ y luego ejecuta la aplicación Node.js.

Linting
Puedes verificar y corregir los estándares de codificación utilizando ESLint. Ejecuta:

bash
Copy code
npm run lint
# o
npm run lint:fix

Construcción de la base de datos
Para construir la base de datos, ejecuta:

bash
Copy code
npm run build:db
Este comando ejecutará el script build-database.js para construir la base de datos.

Pruebas
Puedes ejecutar las pruebas unitarias utilizando:

bash
Copy code
npm test
Este comando compila el código TypeScript y ejecuta las pruebas utilizando Mocha y NYC para la cobertura del código.
