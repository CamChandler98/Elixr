import { useDispatch } from "react-redux"
import { Redirect, useHistory } from "react-router-dom"
import { removeReview } from "../../store/reviews"

let DeleteReview = ({reviewId , closeModal}) =>{
    let dispatch = useDispatch()
    let history = useHistory()
    let handleSubmit = () =>{
        dispatch(removeReview(reviewId))
        closeModal()
        return history.goBack()
        // return  (<Redirect to = {'/categories'}/>)
    }


    return(
        <div>
            <h1>
                Are you sure? You can not go back
            </h1>
            <button onClick = {handleSubmit}>Delete</button>
        </div>
    )
}
export default DeleteReview
