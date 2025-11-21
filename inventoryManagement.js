//Step 2: Create an array of products to store products names.

const products = ["Laptop", "Phone", "Headphones", "Monitor"];

//Step 3: Function to console log the details of first product.

function logFirstProduct() {
  console.log(products[0]);
}

//Step 4: Function to add new product to the array

function addProduct(name) {
  products.push(name);
}
addProduct("Printer");

//Step 5: Function to change name of a product.

function updateProductName(position, newName) {
  products[position] = newName;
}
updateProductName([1], "Smart Phone");

//Step 6: Function to remove the last product from the array

function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct:
    typeof logFirstProduct !== "undefined" ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== "undefined" ? addProduct : undefined,
  updateProductName:
    typeof updateProductName !== "undefined" ? updateProductName : undefined,
  removeLastProduct:
    typeof removeLastProduct !== "undefined" ? removeLastProduct : undefined,
  products,
};
