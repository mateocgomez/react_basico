import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
function App() {
  //Crear listado de productos
  const [productos, guardarProductos] = useState([
    {
      id: 1,
      nombre: "manzana 🍎",
      precio: 20,
    },
    {
      id: 2,
      nombre: "banana 🍌 ",
      precio: 20,
    },
    {
      id: 3,
      nombre: "limon 🍋 ",
      precio: 20,
    },
  ]);
  //state para un carrito de compras
  const [carrito, agregarProducto] = useState([]);
  //Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo="Esta es una prueba" edad={fecha} />
      <h1>Listado de productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          agregarProducto={agregarProducto}
          productos={productos}
        ></Producto>
      ))}
      <Carrito carrito={carrito} agregarProducto={agregarProducto}/>
      <Footer />
    </Fragment>
  );
}

export default App;
