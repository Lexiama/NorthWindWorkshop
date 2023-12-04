"use strict";

window.onload = () => {
  const baseUrl = "http://localhost:8081/api";
  let firstSelect = document.getElementById("firstSelect");
  let container = document.getElementById("container");

  firstSelect.addEventListener("change", handleSelectChange);

  function handleSelectChange() {
    const value = firstSelect.value;
    container.innerHTML = "";

    if (value === "all") {
      getAllProducts();
    }
  }

  function getAllProducts() {
    fetch(baseUrl + "/products")
      .then((res) => res.json())
      .then((data) => {
        displayProducts(data);
      });
  }

  function displayProducts(products) {
    products.forEach((product) => {
      const { productName, supplier, unitPrice, productId } = product;
      container.innerHTML += `
        <div id="product">
          <p>Name: <strong>${productName}</strong></p>
          <p>Supplier: ${supplier}</p>
          <p>Price: $${unitPrice}</p>
          <a href="./details.html?id=${productId}" id="detailsBtn">See Details</a>
        </div>
      `;
    });
  }
};

