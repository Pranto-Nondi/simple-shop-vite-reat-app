const getItemLocal = () => {
    let shoppingCart = {};
    const storedData = localStorage.getItem('shopping-cart');
    if (storedData) {
        shoppingCart = JSON.parse(storedData);

    }
    return shoppingCart;

}
const addToDb = id => {
    const shoppingCart = getItemLocal()
    const quantity = shoppingCart[id];
    if (quantity) {

        shoppingCart[id] = quantity + 1;
    }
    else {
        shoppingCart[id] = 1;

    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const removeCart = id => {
    const storedData = localStorage.getItem('shopping-cart');
    if (storedData) {
        const shoppingCart = JSON.parse(storedData)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

        }

    }

}

const deleteCart = () => {
    localStorage.removeItem('shopping-cart')
}

export { getItemLocal, addToDb, removeCart, deleteCart }