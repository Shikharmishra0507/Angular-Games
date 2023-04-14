class Article {
  showContent=false;
  constructor(title, imageSrc, description,category,publishedAt,content,url,source) {
      
      this.imageSrc = imageSrc;
      this.description = description;
      this.category=category;
      this.publishedAt=publishedAt;
      this.content=content;
      this.title=title;
      this.url=url;
      this.source=source;
      this.showContent=false;
    }
    setShowContent(showContentFlag){
      this.showContent=this.setShowContent;
    }
  }
export default Article;
  