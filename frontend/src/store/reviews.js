import { csrfFetch } from './csrf';

const LOAD = 'reviews/load'

const load = reviewList => ({
    type: LOAD,
    reviewList
})

export const getDrinkReviews = (drinkId) => async (dispatch) =>{
    const res = await fetch(`/api/reviews/drinks/${drinkId}`)
    if(res.ok){
        const reviewList = await res.json()
        dispatch(load(reviewList))
    }
}

export const getUserReviews = (userId) => async (dispatch) =>{
    const res = await fetch(`/api/reviews/users/${userId}`)
    if(res.ok){
        const reviewList = await res.json()
        dispatch(load(reviewList))
    }
}
const reviewReducer = (state = {}, action) => {
    switch(action.type){
        case LOAD:{
            let reviews = action.reviewList.reduce((accum,review) => {
                accum[review.id] = review
                return accum
            },{})
            return{
                ...state,
                ...reviews
            }
        }
        default:
            return state
        }
    }


export default reviewReducer
