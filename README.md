# E-Commerce Talento Tech

Este proyecto es una aplicación de e-commerce desarrollada como parte del programa Talento Tech. Utiliza React para el frontend y Express para el backend, ambos escritos en JavaScript.

## Descripción

La aplicación e-commerce desarrollada en este proyecto ofrece a los usuarios una plataforma para comprar una variedad de productos en línea. Proporciona características como navegación de productos, carrito de compras.

## Características

- Registro de usuarios y autenticación
- Navegación y búsqueda de productos
- Agregar productos al carrito de compras
- Panel de administración para gestionar productos y pedidos

## Tecnologías Utilizadas

- React
- Express
- JavaScript
- BD MySQL
- ORM para modelado Sequelize

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/enrojass04/E-Commerce-Talento-Tech.git

2. Navega al directorio del proyecto:
    ```bash
    cd E-Commerce-Talento-Tech
    ```

3. Instalación del frontend:
    ```bash
    cd frontend
    npm install
    ```
    Crea un archivo .env en la raíz de esta carpeta y establece la URL principal como se muestra en el ejemplo:
    ```
    VITE_API_URL=http://127.0.0.1:3000/api/
    ```  
    Ejecuta el frontend con el comando:
    ```bash
    cd frontend
    npm install
    ```

4. Instalación del backend:
    ```bash
    cd ../backend
    npm install
    ```
    Crea un archivo .env en la raíz y proporciona los datos de tu base de datos como se muestra en el ejemplo:
    ```
    DB_NAME='database'
    DB_USER='user'
    DB_PASSWORD='password'
    DB_HOST='localhost'
    JWT_SECRET=mysecret
    ```
    
    Luego, ejecuta los siguientes comandos para crear la base de datos y realizar migraciones:
    ```bash
    npx sequelize db:create
    npx sequelize db:migrate
    ```
    Crea en tu base de datos un role administrador y un role user y además un usuario administrador.
    ```bash
    cd frontend
    ```

5.  Ejecución del proyecto.

    Ejecuta el comando en consola tanto en la ruta ../backend como en ../frontend

    npm run dev
