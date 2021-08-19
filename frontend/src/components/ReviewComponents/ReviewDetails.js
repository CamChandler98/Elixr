import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getOneReview } from "../../store/reviews"


const ReviewDetails = ({reviewId}) => {
    let dispatch = useDispatch()

    let review = useSelector(state => state.reviews[reviewId])
    useEffect(() => {
        dispatch(getOneReview(parseInt(reviewId)))
    },[reviewId,dispatch])


    return(
        <div className = 'review-details'>
            {review &&
                       <div className = 'review-details-top'>
                       <span className = 'review header'><NavLink to = {`/users/${review?.User.username}`}>{review?.User.username}</NavLink> is drinking <NavLink to = {`/drinks/${review?.drinkId}`}>{review?.Drink.name}</NavLink> brewed by {review?.Drink.User.username} </span>

                       <div className = 'review-details-rating'>
                           <p>Rating: {review?.rating}</p>
                           <p>{review?.content}</p>
                       </div>

                       <div className = 'review-image'>
                           <img src = {review?.imageUrl}></img>
                       </div>
                   </div>

            }
            {/* <div className = 'review-details-top'>
                <span className = 'review header'><NavLink to = {`/users/${review?.User.username}`}>{review?.User.username}</NavLink> is drinking <NavLink to = {`/drinks/${review?.drinkId}`}>{review?.Drink.name}</NavLink> brewed by {review?.Drink.User.username} </span>

                <div className = 'review-details-rating'>
                    <p>Rating: {review?.rating}</p>
                    <p>{review?.content}</p>
                </div>

                <div className = 'review-image'>
                    <img src = {review?.imageUrl}></img>
                </div>
            </div> */}
        </div>
    )
}

export default ReviewDetails
