// Primera Pre-Entrega Schanzenbach (:
//--------------------------------------------------------------------
let products = "";
let totalPrice = 0;

function productBudget() {
  let selector = parseInt(
    prompt(`
    Ingrese el número para agregar al carrito y "0" para ver el precio final:
    1- Producto 1 - $500
    2- Producto 2 - $100
    3- Producto 3 - $3.300
    4- Producto 4 - $550
    `)
  );

  while (selector !== 0) {
    if (selector === 1) {
      products += `
        - Producto 1
        `;
      totalPrice += 500;
    } else if (selector === 2) {
      products += `
        - Producto 2
        `;
      totalPrice += 100;
    } else if (selector === 3) {
      products += `
        - Producto 3
        `;
      totalPrice += 3300;
    } else if (selector === 4) {
      products += `
        - Producto 4
        `;
      totalPrice += 550;
    } else {
      alert("Opción inválida, ingrese una opción válida.");
    }
    selector = parseInt(
      prompt(`
        Ingrese el número para agregar al carrito y "0" para ver el precio final:
        1- Producto 1 - $500
        2- Producto 2 - $100
        3- Producto 3 - $3.300
        4- Producto 4 - $550
        `)
    );
  }
}

function totalBudget() {
  alert(`
    ${products}
    Precio Total: $${totalPrice}
    `);
}

productBudget();
totalBudget();