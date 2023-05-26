import axios from 'axios';

const url = 'http://localhost:4000/api/productos/';


const ProductoServices = {
  getProductos: () => {
    return axios.get(url);
  }
}

export default ProductoServices;