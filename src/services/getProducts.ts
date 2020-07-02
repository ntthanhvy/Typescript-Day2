export const getProducts = () => {
  return fetch("https://min-shop.herokuapp.com/rest/product")
    .then(res => res.json())
    .catch(err => console.log(err));
};
