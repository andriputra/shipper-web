import React, { Component } from "react";
import axios from "axios";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get("https://ghibliapi.herokuapp.com/films")
      .then(parsedJSON => {
        return parsedJSON.data.map(data =>(
          {
            id: `${data.id}`,
            title: `${data.title}`,
            rt_score: `${data.rt_score}`,
            director: `${data.director}`,
            producer: `${data.producer}`,
            release_date: `${data.release_date}`,
            description: `${data.description}`
          }
        ))
      })
      .then(items => this.setState({
        items: [
          ...this.state.items.slice(0, 0),
          ...items,
        ],
        isLoaded: false
      }))
      .catch(error => console.log('parsing failed', error))
  }

  render() {
    const { items } = this.state;

    return (
      <React.Fragment>
      <h2 className="bigTitle">Box Office Movie</h2>
      <div className="boxContent">
        {
          (items || []).length > 0 ? items.map(item => {
            const { title, rt_score, director, producer, release_date, description } = item;
            return (
              <div className="boxItem">
                <div className="boxItem__div">
                  <div className="boxItem__thumb">
                    <img src="https://via.placeholder.com/200x250"/>
                  </div>
                  <div className="boxItem__description">
                    <h3>{title} <span className="rating">{rt_score}</span></h3>
                    <div className="boxItem__description__detail">
                      <table>
                        <tr>
                          <td><p>Director</p></td>
                          <td><p>:</p></td>
                          <td><p>{director}</p></td>
                        </tr>
                        <tr>
                          <td><p>Producer</p></td>
                          <td><p>:</p></td>
                          <td><p>{producer}</p></td>
                        </tr>
                        <tr>
                          <td><p>Release</p></td>
                          <td><p>:</p></td>
                          <td><p>{release_date}</p></td>
                        </tr>
                      </table>
                      <dic className="desc">
                        <h4>Sinopsis</h4>
                        <p>{description}</p>
                      </dic>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) : null
        }
      </div>
      </React.Fragment>
    );
  }
}