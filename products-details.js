
"use strict";

window.onload = () => {
  displayProductDetails();
};

function displayProductDetails() {
  const id = window.location.search.split("=")[1];
  const detailsContainer = document.getElementById("detailsContainer");

  fetch("http://localhost:8081/api/products/" + id)
    .then((res) => res.json())
    .then((product) => {
      const { productName, unitPrice, unitsInStock, supplier } = product;
      detailsContainer.innerHTML = `
        <div id="product">
          <h1>Name:${productName}</h1>
          <p>Price: $${unitPrice}</p>
          <p>Number in Stock: ${unitsInStock}</p>
          <p>Supplier: ${supplier}</p>
        </div>
      `;
    });
}
