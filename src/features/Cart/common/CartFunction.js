import uniqid from 'uniqid';

export const addProductToCart = (productId, cartProducts, week, userId) => {
    const productExists = cartProducts.find(cartItem => cartItem.productId === productId && cartItem.week === week);
    const cartItemId = uniqid.process(userId + '-' + week + '-');
    const newProduct = productExists ? { ...productExists, amount: productExists.amount + 1 }
        : { cartItemId, productId, amount: 1, week, };
    return [newProduct].concat(cartProducts.filter(cartItem => (cartItem.cartItemId !== newProduct.cartItemId)));
}