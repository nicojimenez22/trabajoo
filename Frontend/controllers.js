import axios from 'axios';

// Función para obtener productos
export const getProducts = async () => {
    try {
      const response = await axios.get('/api/product');  // Asegúrate de que esto sea correcto
      return response.data;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw new Error('Error al cargar los productos');
    }
  };

// Función para eliminar un producto por ID

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`/api/product/${id}`);
    return response.data;  // Axios ya convierte la respuesta en JSON automáticamente
  } catch (error) {
    throw new Error("No se pudo eliminar el producto: " + error.response?.data?.message || error.message);
  }
};

