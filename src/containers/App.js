import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import AppBar from '../components/appbar';
import CategoryList from '../components/categoryList';
import ChuckJoke from '../components/category';
import RandomButton from '../components/randomJokeButton';



const App = () => {

  const [SelectedCategory, setSelectedCategory] = useState('movie')

  const categorySelectHandler = event => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
  }

  const HandleRandomJokes = () => {
    console.log(SelectedCategory);
    setSelectedCategory(SelectedCategory);
  }

  return (
    <div className=''>
      <AppBar />
      <CategoryList
        onSelectedItem={categorySelectHandler}
        selectedCateg={SelectedCategory}
      />
      <ChuckJoke selectedCateg={SelectedCategory} />
      <RandomButton onGetMoreJokes={HandleRandomJokes} />


    </div>

  );

}


export default App;

