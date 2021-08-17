import { useState } from "react"

const AddReviewForm = () =>{
    const [content, setContent] = useState('')
    const [rating , setRating] = useState(5)
    return(
        <div>
            <form>
                <div>
                    <label htmlFor = 'review-content'>What did you think</label>
                    <textarea
                        id = 'review-content'
                        cols = '30'
                        rows ='10'
                        onChange= {e => setContent(e.target.value)}
                        placeholder = 'Let the world know how you feel'
                    >
                    </textarea>
                </div>
                <div>
                    <label htmlFor = "rating">
                        ADD SLIDDER
                    </label>
                    <select
                        value = {rating}
                        
                </div>
            </form>
        </div>
    )
}

export default AddReviewForm
