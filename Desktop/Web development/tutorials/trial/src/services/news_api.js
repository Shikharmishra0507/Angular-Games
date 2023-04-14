class NewsApi{

   
    fetchNewsByCategoryAndCountry(country ,category){
        if(category==="All")return "https://newsapi.org/v2/top-headlines?country="+ country+"&apiKey=9031a392b6464ad2a274039810d2e028";
        
        return "https://newsapi.org/v2/top-headlines?country="+ country+"&category="+category 
        +"&apiKey=9031a392b6464ad2a274039810d2e028";
    }
    
}
export default NewsApi;