import { csrfFetch } from './csrf';
const LOAD = 'drinks/load';
const ADD_DRINK = 'drinks/addDrink'

const load = list => ({
    type: LOAD,
    list
})


const addOneDrink = drink =>({
    type: ADD_DRINK,
    drink
})

export const getDrinks = () => async (dispatch) => {
    const res = await fetch('/api/drinks')
    if (res.ok){
        const list = await res.json()
        dispatch(load(list))
    }
}

export const addDrink = (drink) => async (dispatch) => {
    let res = await csrfFetch('/api/drinks',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(drink)
    })


    if(res.ok){
        let newDrink = await res.json()
        dispatch(addOneDrink(newDrink))
        return newDrink
    }
}

export const editDrink = (drink) => async (dispatch) => {
    console.log(drink)
    let res = await csrfFetch(`/api/drinks/${drink.id}`,{
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(drink)
    })
    console.log('res',res)
    if(res.ok){
        let newDrink = await res.json()
        dispatch(addOneDrink(newDrink))
        return newDrink
    }
}




const drinkReducer = (state = {}, action) => {
    switch(action.type){
        case LOAD: {
            let drinks = action.list.reduce((accum,drink) => {
                accum[drink.id] = drink
                return accum
            },{})
            return{
                ...state,
                ...drinks
            }
        }
        case ADD_DRINK:{
            if(!state[action.drink.id]){
                return{
                    ...state,
                    [action.drink.id] : action.drink
                }
            }else{
                return{
                    ...state,
                    [action.drink.id]: {
                        ...state[action.drink.id],
                        ...action.drink
                    }
                }
            }
        }
        default:
            return state
    }
}

export default drinkReducer
