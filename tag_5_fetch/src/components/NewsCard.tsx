interface NewsCardProps {
    author: string;
    title: string;
    content: string;
    description?: string;
  }
  
  function NewsCard(props: NewsCardProps) {
    return (
      
      <div className="news-card">
        
        <h3 className="title">{props.title}</h3>
        <h2 className="author">{props.author}</h2>
        <h4 className="content">{props.content}</h4>
      </div>
      
    );
  }
  
  export default NewsCard;