let inventario = [];

function agregarProducto() {
  const nombre = prompt("Ingresa el nombre de tu producto");
  let cantidad;
  do {
    cantidad = parseInt(prompt("Ingresa la cantidad el producto"));
    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Por favor, ingresa una cantidad válida (número positivo).");
    }
  } while (isNaN(cantidad) || cantidad <= 0);

  let precio;
  do {
    precio = parseFloat(prompt("Ingresa el precio del producto"));
    if (isNaN(precio) || precio <= 0) {
      alert("Por favor, ingresa un precio válido (número positivo).");
    }
  } while (isNaN(precio) || precio <= 0);

  const nuevoProducto = {
    nombre: nombre,
    cantidad: cantidad,
    precio: precio,
  };

  inventario.push(nuevoProducto);
}

function eliminarProducto() {
  const nombre = prompt("Ingrese el nombre del producto a eliminar:");
  const productoExistente = inventario.find(
    (producto) => producto.nombre === nombre
  );

  if (productoExistente) {
    inventario = inventario.filter((producto) => producto.nombre !== nombre);
    alert(`${nombre} ha sido eliminado del inventario.`);
  } else {
    alert(
      "Producto no encontrado, por favor revisa el nombre del producto a eliminar en la opción 4"
    );
  }
}

function actualizarProducto() {
  const nombre = prompt("Ingrese el nombre del producto a actualizar:");
  const producto = inventario.find((producto) => producto.nombre === nombre);

  if (producto) {
    let nuevaCantidad;
    do {
      nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad:"));
      if (isNaN(nuevaCantidad) || nuevaCantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida (número positivo).");
      }
    } while (isNaN(nuevaCantidad) || nuevaCantidad <= 0);

    let nuevoPrecio;
    do {
      nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio:"));
      if (isNaN(nuevoPrecio) || nuevoPrecio <= 0) {
        alert("Por favor, ingresa un precio válido (número positivo).");
      }
    } while (isNaN(nuevoPrecio) || nuevoPrecio <= 0);

    producto.cantidad = nuevaCantidad;
    producto.precio = nuevoPrecio;

    alert(`${nombre} ha sido actualizado.`);
  } else {
    alert("Producto no encontrado.");
  }
}

function mostrarInventario() {
  if (inventario.length === 0) {
    alert("El inventario está vacío.");
    return;
  }

  let mensaje = "Inventario:\n";
  inventario.forEach((producto) => {
    mensaje += `Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio: ${producto.precio}\n`;
  });
  alert(mensaje);
}

let continuar = true;

while (continuar) {
  const opcion = prompt(
    "¿Qué deseas hacer?\n1. Agregar producto\n2. Eliminar producto\n3. Actualizar producto\n4. Mostrar inventario\n5. Salir"
  );

  switch (opcion) {
    case "1":
      agregarProducto();
      break;
    case "2":
      eliminarProducto();
      break;
    case "3":
      actualizarProducto();
      break;
    case "4":
      mostrarInventario();
      break;
    case "5":
      continuar = false;
      alert("Gracias por usar el control de inventario.");
      break;
    default:
      alert("Opción no válida. Inténtalo de nuevo.");
  }
}
