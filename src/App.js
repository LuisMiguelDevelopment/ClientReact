import React, { useEffect, useState } from 'react';
import ProductoServices from './services/producto-services.service';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    ProductoServices.getProductos()
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
 
  return (
    <div>
       {productos.map((producto, index) => (
    <tr key={index}>
      <td>{producto.Nombre}</td>
      <td>{producto.Precio}</td>
      <td>{producto.Marca}</td>
      {}
    </tr>
  ))}
    </div>
  );
};

export default Productos;