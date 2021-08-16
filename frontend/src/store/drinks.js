const LOAD = 'drinks/LOAD';

const load = list => ({
    type: LOAD,
    list
})

export const getDrinks = () => async (dispatch) => {
    const res = await fetch('/api/drinks')
    if (res.ok){
        const list = res.json()
        dispatch(load(list))
    }
}



const drinkReducer = (state = {list:[]}, action) => {
    switch(action.type){
        case LOAD: {
            action.list
        }
    }
}

export default drinkReducer
