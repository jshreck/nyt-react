import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm"
import Article from "../components/Article";


class Articles extends Component {

  state = {
    articles: [],
    query: "",
    beginDate: "",
    endDate: ""
  };

  //on change, set the name of field to value
  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(`${name}:${value}`);
    this.setState({
      [name]: value
    });
  };

//on submit, capture form values and feed into searchArticles
handleSearchFormSubmit = (event) => {

  //check to make sure date is selected and endDate is after startDate
  if (this.state.startDate === undefined || this.state.endDate === undefined || this.state.startDate>this.state.endDate) {
    return alert("Please select a valid date range.");
  }

  // change dates to be compatible with NYT API
  const startDate = this.state.startDate.replace(/-/g,"");
  const endDate = this.state.endDate.replace(/-/g,"");

  this.searchArticles(this.state.query, startDate, endDate);
};

//search articles with parameters from form
searchArticles = (query, startYear, endYear) => {
  API.search(query, startYear, endYear)
      .then((res) => {
      this.setState({articles: res.data.response.docs});
      console.log(this.state.articles)
      })
      .catch(err => console.log(err))
};

saveArticle = (event, data) => {
  const id = event.currentTarget.getAttribute("data-id");
  const article = this.state.articles.filter(article => article._id === id);
  const toSave = {
    _id: article[0]._id,
    title: article[0].headline.main,
    byline: article[0].byline.original,
    pubDate: article[0].pub_date,
    snippet: article[0].snippet,
    link: article[0].web_url
  }
  API.saveArticle(toSave);
}

  render() {
    return (
      <div>

    <SearchForm 
    onChange = {this.handleInputChange}
    onClick = {this.handleSearchFormSubmit}
    query = {this.state.query}
    startYear = {this.state.startYear}
    endYear = {this.state.endYear}
    />

    <ul>
      {this.state.articles.map((article, i) => (
        <Article 
        key = {i}
        id = {article._id}
        title = {article.headline.main}
        byline = {article.byline.original}
        pubDate = {article.pub_date.replace(/T.*/,'')}
        snippet = {article.snippet}
        link = {article.web_url}
        onClick = {this.saveArticle}
        btnTxt = "Save"
       />
      ))}
      </ul>
    </div>
    );
  }
}

export default Articles;
