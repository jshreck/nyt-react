import React, { Component } from "react";
import API from "../utils/API";
import Article from "../components/Article";

class Saved extends Component {
  state = {
    articles: []
  };

  //on load, get saved articles from db
  componentDidMount(){
    API.getSavedArticles()
    .then((res) => {
      console.log(res.data);
      this.setState({articles:res.data});
    });
}

deleteArticle = (event, data) => {
  const id = event.currentTarget.getAttribute("data-id");
  API.deleteArticle(id)
  .then((res) => {
    console.log(res);
    const articles = this.state.articles.filter(article => article._id !== id);
    this.setState({articles: articles});
  });
}

  render() {
    return (
      <div>
      <ul>
      {this.state.articles.map((article, i) => (
       <li> <Article 
        key = {i}
        id = {article._id}
        title = {article.title}
        byline = {article.byline}
        pubDate = {article.pubDate.replace(/T.*/,'')}
        snippet = {article.snippet}
        link = {article.link}
        onClick = {this.deleteArticle}
        btnTxt = "Delete It"
       /></li>
      ))}
      </ul>
      </div>
    );
  }
}

export default Saved;