import {React,useState,useEffect} from 'react';
import NavBar from '../components/homePage/NavBar/nav_bar.js';
import {items} from '../data/news_category_data.js';
import ArticlesGrid from '../components/homePage/grid_layout/article_grid.js';

function HomePage() {
  const [category,setCategory]=useState('All');
  
  //useEffect(()=>{},[category]);
  function changeCategory(category){
    setCategory(category);
   
    
  }
  return (
    <div>
    
      < NavBar items={items} onChangeCategory={changeCategory} />
      <ArticlesGrid category={category}/>
    </div>
  );
}

export default HomePage;