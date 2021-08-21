import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserReviews } from "../../store/reviews"
import ReviewDetails from "./ReviewDetails"
const UserReviews = ({reviews}) => {
    return(
        <div>
            {reviews && reviews.map(review => {
                return (
                    <ReviewDetails key = {review.id} reviewId={review.id}></ReviewDetails>
                )
            })}
        </div>
    )
}
export default UserReviews
