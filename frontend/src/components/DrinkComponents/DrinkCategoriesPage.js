import catImages from './image-handler'

const { useEffect, useState } = require("react")
const { NavLink} = require('react-router-dom')
const DrinkCategoriesPage = () => {

    const [categories,setCategories] = useState([])
    useEffect(() => {
        async function fetchData(){
                let res = await fetch('/api/categories')
                let foundCategories = await res.json()
                setCategories(foundCategories)
        }
        fetchData()
    },[])

    return (
        <div className = 'categories-container'>
            <div className = 'title'><p>Pick Your Poison</p></div>
           {categories.map(category => {
               return (
                   <div className = {`magic ${category.name.toLowerCase()}`}>
                       <div className = 'inner-cat'>
                       <NavLink to = {`/categories/${category.id}/${category.name}`}>
                       <img className ='catimg' src = {catImages[category.id]}></img>
                       {category.name}</NavLink>
                        </div>
                   </div>
               )
           })}


        </div>
    )
}


export default DrinkCategoriesPage
