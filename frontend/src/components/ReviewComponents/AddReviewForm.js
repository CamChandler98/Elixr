import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addReview } from "../../store/reviews"
import styled from "styled-components"
import { getOneDrink } from "../../store/drinks"
import cameraButton from '../DrinkComponents/images/thumbnail/photo-button.svg'

const AddReviewSty = styled.div`
form{
    display: flex;
    flex-direction: column;
    align-items:center;
    padding:25px;
    margin:1%;
    gap: 25px;
}
.content-photo{
    display:flex;
    gap:15px
}
input[type="file"]{
    display: none;
}
img{
    margin: 2%;
    width:90px;
    max-height: 90px;
    object-fit: cover;
}
.remove{
    width:90px;
    margin: 2%;

}
.submit{
    width: 50%;
    height: 30px;
    border-radius: 8px;
    border: 0px;
    background-color: rgb(143,69,182);
    color: #fff;
    font-weight: 500;
}
`

const AddReviewForm = ({drinkId}) =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneDrink(drinkId))
    },[])

    console.log(drinkId)
    let drink = useSelector(state => state.drinks[drinkId])
    const [content, setContent] = useState('')
    const [rating , setRating] = useState(1)
    const [image, setImage] = useState(null)
    const [tempImgUrl, setTempImgUrl] = useState('')
    const userId = useSelector(state => state.session.user.id)
    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file){
            setImage(file);
            let tempUrl = URL.createObjectURL(e.target.files[0])
            setTempImgUrl(tempUrl)
        }
      };

      const handleSubmit = async (e) =>{
          e.preventDefault()
            dispatch(addReview({content,rating,image,userId,drinkId}))
            setContent('')
            setRating(1)
            setImage(null)
      }

      const removeImage = (e) => {
             e.preventDefault()
            URL.revokeObjectURL(tempImgUrl)
            setTempImgUrl('')
      }

    return(
        <div>
            <AddReviewSty>
            <form onSubmit={handleSubmit}>
                <h2>{drink?.name}</h2>
                <div className= 'content-photo'>
                    <label htmlFor = 'review-content'></label>
                    <textarea
                        id = 'review-content'
                        cols = '30'
                        rows ='5'
                        onChange= {e => setContent(e.target.value)}
                        placeholder = 'Let the world know how you feel'
                        value = {content}
                    >
                    </textarea>
                     <label htmlFor ='add-photo'>
                    <input id ='add-photo'type="file" onChange={updateFile} />
                       <img src = {tempImgUrl ? tempImgUrl: cameraButton} onClick ={tempImgUrl ? (e)=> {e.preventDefault()} : console.log('hi')}/>
                       {tempImgUrl && <button className ='remove' onClick ={ e => {
                           removeImage(e)
                       }}>remove</button>}
                    </label>
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
                <button className= 'submit' type = 'submit'>SUBMIT</button>
            </form>
            </AddReviewSty>
        </div>
    )
}

export default AddReviewForm
