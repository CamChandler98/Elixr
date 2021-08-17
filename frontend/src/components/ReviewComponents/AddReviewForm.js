import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addReview } from "../../store/reviews"

const AddReviewForm = () =>{
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const [rating , setRating] = useState(1)
    const [image, setImage] = useState(null)
    const drinkId = 1

    const userId = useSelector(state => state.session.user.id)
    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
      };

      const handleSubmit = async (e) =>{
          e.preventDefault()
            dispatch(addReview({content,rating,image,userId,drinkId}))
            setContent('')
            setRating(1)
            setImage(null)
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor = 'review-content'>What did you think</label>
                    <textarea
                        id = 'review-content'
                        cols = '30'
                        rows ='10'
                        onChange= {e => setContent(e.target.value)}
                        placeholder = 'Let the world know how you feel'
                        value = {content}
                    >
                    </textarea>
                </div>
                <div>
                    <label htmlFor = "rating">
                        ADD SLIDDER
                    </label>
                    <select
                        value = {rating}
                        onChange = { e => setRating(e.target.value)}
                    >
                        <option value = {1}>1</option>
                        <option value = {2}>2</option>
                        <option value = {3}>3</option>
                        <option value = {4}>4</option>
                        <option value = {5}>5</option>
                    </select>
                </div>
                <div>
                    <label> add button </label>
                    <input type="file" onChange={updateFile} />
                </div>
                <button type = 'submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default AddReviewForm
