export const addFoodItem =(data)=>{
    return {type :'ADD_ITEM', payload : data}
}
export const fetchFoodItem =(data) =>{
    return {type :'FETCH_ITEM', payload : data}
}

export const incrementFoodItem =(data) =>{
    return {type :'INCREMENT_ITEM', payload : data}
}

export const decrementFoodItem =(data) =>{
    return {type :'DECREMENT_ITEM', payload : data}
}

export const removeFoodItem =(data) =>{
    return {type :'REMOVE_ITEM', payload : data}
}
