import { Grid } from "@mui/material";
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const isAdd = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {isAdd}
    </Grid>
  );
};

export default VideoList;
