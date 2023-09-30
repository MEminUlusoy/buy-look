const reducer = (state,action) => {
    /* switch(action.type){
        case 'INCREASE':
            
            let tempCard = state.cart.map((cartItem) => {
                if(cartItem.id === action.payload){
                    return {...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem;
            });
            
            return {...state, cart: tempCard}
             */

        /* 
        case 'DECREASE':
            let tempCart = state.cart.map((item) => {
                if(item.id === action.payload){
                    return {...item, amount: state.amount - 1 }
                }
                return item;
            });
            return {...state, cart: tempCart}
            
        default:
            throw new Error('dispatch yakalıyamadı.')
            
    } */    
    if(action.type==='INCREASE'){
        
        let tempCart = state.cart.map((cartItem)=>{
            
            if(cartItem.id === action.payload){
                console.log(state.cart);
                return {...cartItem, amount: cartItem.amount + 1  }
            }
            
            return cartItem;
        });
        return {...state, cart: tempCart }
    }

    
    if(action.type==='DECREASE'){
        let tempCard = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload){
                return {...cartItem, amount: cartItem.amount - 1  }
            }
            return cartItem;
        }).filter((carItem) => carItem.amount > 0);
        return {...state, cart: tempCard }
    }



}

export default reducer;