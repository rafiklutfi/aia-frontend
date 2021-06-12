import React from "react";
// import './App.css';
import ImgList from "./components/ImgList";
import ImgSearch from "./components/ImgSearch";

class App extends React.Component {
  state = {
    images: [],
    error: null,
  };

  handleRequest = async (ev) => {
    ev.preventDefault();

    const searchTerm = ev.target.elements.searchValue.value;

    const url = `https://aiatest-backend.herokuapp.com/flickr?tags=${searchTerm}`;

    const request = await fetch(url);
    const response = await request.json();

    if (!searchTerm) {
      this.setState({ error: "Please provide a value" });
    } else {
      this.setState({ images: response.photos.photo, error: null });
    }

    console.log(searchTerm);
    console.log(this.state.images);
  };

  render() {
    return (
      <div>
        <ImgSearch handleRequest={this.handleRequest} />
        {this.state.error !== null ? (
          <div style={{ color: "#fff", textAlign: "center" }}>
            {this.state.error}
          </div>
        ) : (
          <ImgList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
