// Importación del modelo 'Product' que representa la estructura de la colección de productos en la base de datos.
import Product from "../models/products.model.js";

// Declaración del objeto 'productDAO', que contendrá los métodos para interactuar con la base de datos relacionados con productos.
const productDAO = {};

// Definición del método 'getAll' de 'productDAO' como asíncrono para permitir operaciones asíncronas.
productDAO.getAll = async () => {
  try {
    // Utiliza el modelo 'Product' para realizar una consulta y obtener todos los productos desde la base de datos.
    const products = await Product.find();

    // Retorna la lista de productos obtenidos.
    return products;
  } catch (error) {
    // Manejo de errores: Puedes agregar lógica adicional según tus necesidades.
    console.error("Error while fetching products:", error);
    throw error; // Puedes decidir si relanzar el error o manejarlo de otra manera.
  }
};

productDAO.getOne = async (barcode) => {
  const product = await Product.findOne({ barcode: barcode });

  return product;
};

productDAO.insertOne = async (product) => {
  return await Product.create(product);
};

productDAO.updateOne = async (barcode, product) => {
  return await Product.findOneAndUpdate({ barcode: barcode }, product);
};

productDAO.deleteOne = async (barcode) => {
  return await Product.findOneAndDelete({barcode: barcode });
};

// Exportación del objeto 'productDAO' para que pueda ser utilizado por otros módulos.
export default productDAO;
