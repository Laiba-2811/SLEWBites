export const addToCart=(product,quantity)=>{
    var cartItem={
        name:product.name,
        img:product.img,
        quantity:quantity,
        price:product.price*quantity,
        category:product.Category.name
    };
    dispatchEvent({type:'ADD_TO_CART', payload:cartItem})

};