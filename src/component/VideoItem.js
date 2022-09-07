import { Paper, Grid, Typography } from "@mui/material";
import React from "react";
import "../App.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={19}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <h5>{video.snippet.title}</h5>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
