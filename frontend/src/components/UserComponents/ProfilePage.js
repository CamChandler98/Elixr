import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUser } from "../../store/profile"
import { getUserReviews } from "../../store/reviews"
import UserReviews from '../ReviewComponents/UserReviews'

const ProfilePage = () => {
    const [focus, setFocus] = useState('user')
    let {username} = useParams()
    console.log('username',username)

    let dispatch = useDispatch()
    useEffect(()=>{
        console.log('getting name')
        dispatch(getUser(username))
    },[])

    let user = useSelector(state => state?.profile)

    useEffect(()=> {
        console.log('getting reviews')
        if(user.id){
        dispatch(getUserReviews(user.id))
        }
    },[user.id])

    let reviews = useSelector (state => state.reviews.userReviews)

    console.log(reviews)
    return (
        <>
        <div>
            {user && <h1>{user.username}</h1>}

            {reviews && <h2>Total Reviews: {reviews.length}</h2>}
        </div>
        <div>
            {reviews && focus === 'user' && <UserReviews reviews = {reviews} />}
            
        </div>
        </>
    )
}

export default ProfilePage
