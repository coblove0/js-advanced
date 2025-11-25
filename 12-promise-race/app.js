'use strict'
const getProduct = async (id) => {
  const response = await fetch('https://dummyjson.com/products/' + id);
  const data = await response.json();
  // console.log(data);
  return data;
}

const getProductError = async (id) => {
  const response = await fetch('https://dummyjson.com/productss/' + id);
  const data = await response.json();
  // console.log(data);
  return data;
}

async function race(promisesArray) {
  const res = await Promise.race(promisesArray);
  // const data = await res.json();
  console.log(res);
}

race([getProduct(1), getProduct(2),getProduct(3), getProductError(1), getProductError(1)])
