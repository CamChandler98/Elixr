import './DrinkCategory.css'
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
        <div className = 'category-container'>
           {categories.map(category => {
               return (
                   <NavLink to = {`/categories/${category.id}`}>{category.name}</NavLink>
               )
           })}


        </div>
    )
}


export default DrinkCategoriesPage
