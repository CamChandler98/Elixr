import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserReviews } from "../../store/reviews"
import ReviewDetails from "./ReviewDetails"
const UserReviews = () => {
    let dispatch = useDispatch()

    let userId = useSelector(state => state.session.user.id)

    useEffect(()=>{
        dispatch(getUserReviews(userId))
    },[userId, dispatch])

    let reviews = useSelector(state => state.reviews.userReviews)

    return(
        <div>
            {reviews && reviews.map(review => {
                return (
                    <ReviewDetails reviewId={review.id}></ReviewDetails>
                )
            })}
        </div>
    )
}
export default UserReviews
