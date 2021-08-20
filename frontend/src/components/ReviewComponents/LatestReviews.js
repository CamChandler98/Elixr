import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllReviews } from "../../store/reviews"
import ReviewDetails from "./ReviewDetails"

const LatestReviews = () => {
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAllReviews())
    },[])
    let reviewsState = useSelector(state => state.reviews)
    let allReviews = Object.values(reviewsState).reverse()
    console.log(allReviews)
        return(
            <div>
                {allReviews && allReviews.map(review => {
                return (
                    <ReviewDetails key = {review.id} reviewId= {review.id}></ReviewDetails>
                )
             })}
            </div>
        )
}

export default LatestReviews
