import React from "react";
import "../App.css";
import { Paper, Typography } from "@mui/material";
import Home from "./Home";
const VideoDetail = ({ videos }) => {
  if (!videos)
    return (
      <div className="lad">
        <Home />
      </div>
    );
  console.log(videos);

  const videoSrc = `https://www.youtube.com/embed/${videos.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          className="videos"
          frameBorder="0"
          height="100%"
          width="100%"
          title="video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {videos.snippet.title} - {videos.snippet.channelTitle}{" "}
        </Typography>
        <Typography variant="submit1">{videos.snippet.ChannelTitle}</Typography>
        <Typography variant="submit2">{videos.snippet.descrption}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
