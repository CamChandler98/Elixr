import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import DrinkCategoriesPage from "./components/DrinkComponents/DrinkCategoriesPage";

import CategorySty from "./components/DrinkComponents/Category-PageStyle";
import CategoryPage from "./components/DrinkComponents/Category-Page";
import DrinkPage from "./components/DrinkComponents/DrinkPage";
import AddReviewForm from "./components/ReviewComponents/AddReviewForm";
import UserReviews from "./components/ReviewComponents/UserReviews";
import LatestReviews from "./components/ReviewComponents/LatestReviews";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Route exact path ='/thecoven'>
        <LatestReviews/>
      </Route>
      <Route exact path = "/categories">
            <CategorySty />
          </Route>
          <Route path = {'/categories/:categoryId/:categoryName'}>
          <CategoryPage />
        </Route>
        <Route exact path = {'/drinks/:drinkId'}>
          <DrinkPage />
        </Route>
        <Route path = {'/review/:reviewId'} component = {} />
        {/* {isLoaded && <Route path = {'/review/new'} component = {sessionUser ? AddReviewForm : LoginFormPage}/>} */}
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>



        </Switch>
      )}
      {/* <Switch>
      <Route exact path = "/categories">
            <CategorySty />
          </Route>
          <Route path = {'/categories/:categoryId/:categoryName'}>
          <CategoryPage />
        </Route>
        <Route path = {'/drinks/:drinkId'}>
          <DrinkPage />
        </Route>
        {isLoaded && <Route path = {'/review/new'} component = {sessionUser ? AddReviewForm : LoginFormPage}/>}
      </Switch> */}
    </>
  );
}

export default App;
