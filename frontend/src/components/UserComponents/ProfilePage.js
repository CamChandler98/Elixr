import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUser } from "../../store/profile"
import { getUserReviews } from "../../store/reviews"
import UserReviews from '../ReviewComponents/UserReviews'

const ProfilePage = () => {

    let {username} = useParams()
    console.log('username',username)

    let dispatch = useDispatch()
    useEffect(()=>{
        console.log('getting name')
        dispatch(getUser(username))
    },[])

    let userId = useSelector(state => state.profile?.id)
    console.log(userId)
    useEffect(()=> {
        console.log('getting reviews')
        if(userId){
        dispatch(getUserReviews(userId))
        }
    },[userId])

    let reviewsState = useSelector (state => state.reviews.userReviews)
    let allReviews = Object.values(reviewsState)
    let reviews = allReviews.filter( review => review.userId === + userId).reverse()
    console.log(reviews)
    return (
        <>
        <div>
            {reviews && <UserReviews reviews = {reviews} />}
        </div>
        </>
    )
}

export default ProfilePage
