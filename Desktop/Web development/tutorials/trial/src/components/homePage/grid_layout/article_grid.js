
import ArticlesWidget from './article_item.js';
import {React,useEffect,useState} from 'react';
import './grid.css';
import axios from 'axios';
import Article from '../../../model/article.js';
import NewsApi from '../../../services/news_api.js';
function ArticlesGrid(props){
    
   const  [articlesData,setArticlesData]=useState([]);
    useEffect(() => {
        const newsApiObject=new NewsApi();
        const fetchArticles=async ()=>{
            const result =await axios(newsApiObject.fetchNewsByCategoryAndCountry("in",props.category));
            
            const tempData=[];
            const data=result.data;
           
            for(var i=0;i<data.articles.length;i++){
                var currArticle=new Article(data.articles[i].title,data.articles[i].urlToImage,data.articles[i].description,props.category,data.articles[i].publishedAt,
                data.articles[i].content,data.articles[i].url,data.articles[i].source);
                tempData.push(currArticle);
                
            }
            setArticlesData(tempData);
           
        }
        fetchArticles();

      }, [props.category]);
      
    return (
        
        <div className='grid-container'>

            
            {articlesData.map(article=>((article.category===props.category ||props.category==="All")?  <ArticlesWidget article={article}/> : null))}
        </div>
    );
}
export default ArticlesGrid;