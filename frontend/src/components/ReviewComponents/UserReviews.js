import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserReviews } from "../../store/reviews"

const UserReviews = () => {
    let dispatch = useDispatch()
    let userId = useSelector(state => state.session.user.id)
    useEffect(()=>{
        dispatch(getUserReviews(userId))
    })

    let reviews = useSelector (state => state.reviews.UserReviews )
    console.log(reviews)
    return(
        <div>

        </div>
    )
}
export default UserReviews
