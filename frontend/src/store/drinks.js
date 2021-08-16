const LOAD = 'drinks/LOAD';

const load = list => ({
    type: LOAD,
    list
})

export const getDrinks = () => async (dispatch) => {
    const res = await fetch('/api/drinks')
    if (res.ok){
        const list = await res.json()
        console.log('list',list)
        dispatch(load(list))
    }
}



const drinkReducer = (state = {drinks:{}}, action) => {
    switch(action.type){
        case LOAD: {
            let drinks = action.list.reduce((accum,drink) => {
                accum[drink.id] = drink
                return accum
            },{})

            return{
                ...state,
                drinks: drinks
            }
        }
        default:
            return state
    }
}

export default drinkReducer
