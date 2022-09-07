import React from "react";
import VideoDetail from "./component/VideoDetail";
import SearchBar from "./component/SearchBar";
import { Grid } from "@mui/material";
import youtube from "./Api/youtube";
import VideoList from "./component/VideoList";
import Head from "./component/Head";
import Footer from "./component/Footer";

export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAhCbF8iwGnTexFKnsDNsSR2A3H5t9fVtg",
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    return (
      <div className="App">
        <Head />
        <SearchBar onFormSubmit={this.handleSubmit} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Grid justifyItems="center" container spacing={2}>
          <Grid item xs={8}>
            <VideoDetail videos={this.state.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}
