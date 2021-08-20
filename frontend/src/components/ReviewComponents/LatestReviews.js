import { useEffect } from "react"
import { useSelector } from "react-redux"
import ReviewDetails from "./ReviewDetails"

const LatestReviews = () => {
    useEffect(()=> )
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
