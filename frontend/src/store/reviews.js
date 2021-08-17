import { csrfFetch } from './csrf';

const LOAD = 'reviews/load'
const ADD = 'reviews/add'
const REMOVE ='reviews/remove'

const remove = (reviewId) =>({
    type: REMOVE,
    reviewId
})
const add = review => ({
    type: ADD,
    review
})

const load = reviewList => ({
    type: LOAD,
    reviewList
})

export const removeReview = (reviewId) => async (dispatch) => {
    let res = await csrfFetch(`/api/reviews/${reviewId}`,{
        method: 'delete'
    })

    const trash = res.json()

    dispatch(remove(reviewId))
}

export const addReview = (review) => async (dispatch) => {
    const {image, userId , drinkId, rating, content} = review

    const formData = new FormData()

    formData.append('userId',userId)
    formData.append('drinkId', drinkId)
    formData.append('rating',rating)
    formData.append('content',content)
    if(image) formData.append("image",image)

    consolew.log('here')
    const res = await csrfFetch(`/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const newReview = await res.json();
      dispatch(add(newReview));


}
export const editReview = (review) => async (dispatch) => {
    const {image, rating, content, removeImg} = review

    const formData = new FormData()


    formData.append('rating',rating)
    formData.append('content',content)
    formData.append('removeImg', removeImg)

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
        case REMOVE:{
            let newState = {...state}

            delete newState[action.reviewId]

            return {...newState}
        }
        default:
            return state
        }
    }


export default reviewReducer
