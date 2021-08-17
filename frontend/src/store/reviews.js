import { csrfFetch } from './csrf';

const LOAD = 'reviews/load'
const ADD = 'reviews/add'

const add = review => ({
    type: ADD,
    review
})

const load = reviewList => ({
    type: LOAD,
    reviewList
})

export const addReview = (review) => async (dispatch) => {
    const {image, userId , drinkId, rating, content} = review

    const formData = new FormData()

    formData.append('userId',userId)
    formData.append('drinkId', drinkId)
    formData.append('rating',rating)
    formData.append('content',content)
    if(image) formData.append("image",image)
    const res = await csrfFetch(`/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const review = await res.json();
      dispatch(add(review));


}
export const editReview = (review) => async (dispatch) => {
    const {image, userId , drinkId, rating, content} = review

    const formData = new FormData()

    formData.append('userId',userId)
    formData.append('drinkId', drinkId)
    formData.append('rating',rating)
    formData.append('content',content)
    if(image) formData.append("image",image)
    const res = await csrfFetch(`/api/reviews/:reviewId`, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const review = await res.json();
      dispatch(add(review));
}

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
        case ADD: {
            if(!state[action.review.id]){
                return{
                    ...state,
                    [action.review.id] : action.review
                }
            }else{
                return{
                    ...state,
                    [action.review.id]: {
                        ...state[action.review.id],
                        ...action.review
                    }
                }
            }
        }
        default:
            return state
        }
    }


export default reviewReducer
