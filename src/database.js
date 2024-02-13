// Importación del paquete mongoose, que facilita la interacción con MongoDB desde Node.js.
import mongoose from 'mongoose';

// Configuración de la conexión a la base de datos mediante la cadena de conexión proporcionada en la variable de entorno.
mongoose.connect(process.env.CONNECTION_STRING_DB)
  .then(db => console.log('Database connection established')) // Éxito: se imprime un mensaje indicando que la conexión a la base de datos se ha establecido.
  .catch(err => console.error(err)); // Error: en caso de fallo, se imprime el error en la consola.

// Exportación del objeto mongoose, que ahora contiene la conexión establecida, para que pueda ser utilizado en otros módulos.
export default mongoose;
