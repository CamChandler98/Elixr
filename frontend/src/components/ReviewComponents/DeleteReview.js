import { useDispatch } from "react-redux"
import { removeReview } from "../../store/reviews"

let DeleteReview = ({reviewId}) =>{
    let dispatch = useDispatch()

    let handleSubmit = () =>{
        dispatch(removeReview(reviewId))
    }


    return(
        <div>
            <h1>
                Are you sure? You can not go back
            </h1>
            <button>Delete</button>
        </div>
    )
}
