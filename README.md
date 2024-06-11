  # Sistema de Pedidos para Restaurante

## Descripción

Este proyecto es un sistema de pedidos para un restaurante utilizando Node.js, Express.js y MySQL. Permite ingresar pedidos, calcular el subtotal y el total (incluyendo una propina del 10%), y registrar el número de mesa.

## Instrucciones

### Configuración y Ejecución del Proyecto

1. Clonar el repositorio.
2. Inicializar NPM `npm init -y`
2. Instalar dependencias: `npm install express mysql body-parser`
3. Configurar la base de datos en MySQL iniciado con XAMPP presentado en el PDF.
4. Ejecutar el servidor: `node app.js`
5. Acceder a la interfaz web por medio de `index.html` y realizar pedidos.

## Capturas de Pantalla

![image](https://github.com/AxlF/Tarea/assets/172321719/6b7ea697-6702-4ada-b166-cddddee8794b)


## Documentación del Código

1. `connection.js`:

- Este archivo establece la conexión a la base de datos MySQL utilizando el módulo mysql.
- Crea una conexión con la configuración proporcionada (host, usuario, contraseña, base de datos).
- Maneja cualquier error de conexión y exporta el objeto de conexión para que otros archivos lo utilicen.

2. `order.js`:

- Importa la conexión a la base de datos desde connection.js.
- Define una función createOrder que toma varios parámetros (número de mesa, elementos del pedido, subtotal, total) y un callback.
- Dentro de createOrder, ejecuta una consulta SQL para insertar un nuevo pedido en la tabla orders.
- Llama al callback con el ID del pedido insertado si la consulta se realiza con éxito.
- Exporta la función createOrder.

3. `orders.js`:

- Importa Express y el modelo Order desde order.js.
- Define un enrutador para las rutas relacionadas con los pedidos (/orders/new).
- Dentro de la ruta POST, valida los datos recibidos en la solicitud (número de mesa, elementos del pedido).
- Calcula el subtotal y el total del pedido, luego utiliza la función createOrder del modelo Order para crear el pedido en la base de datos.
- Maneja las respuestas y errores de la creación del pedido.

4. `app.js`:

- Importa Express, body-parser, y el enrutador de pedidos (ordersRouter) desde los archivos correspondientes.
- Configura Express para usar body-parser y el enrutador de pedidos en la ruta /orders.
- Define una ruta GET para la página de inicio.
- Inicia el servidor Express en el puerto 3000.

5. `index.html`:

- Define una página HTML básica con un formulario para crear un pedido.
- El formulario captura el número de mesa y los elementos del pedido (se espera que estén en formato JSON en el campo de texto).
- Utiliza un script (scripts.js) para enviar la solicitud POST al servidor cuando se envía el formulario.

6. `styles.css`:

- Define estilos CSS básicos para la página HTML, como el estilo del cuerpo, el formulario, los campos de entrada y el botón de envío.

7. `scripts.js`:
   
- Agrega un evento de escucha al formulario de pedido para capturar la solicitud de envío.
- Captura los datos del formulario (número de mesa y elementos del pedido) y los envía al servidor como una solicitud POST utilizando fetch.
- Muestra una alerta con la respuesta del servidor o maneja errores de conexión.
