import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const GamesItem = ({ game }) => {
  console.log("data item: " + game);
  return (
    <Card
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <CardMedia
        component={"img"}
        src={game.thumb}
        alt={game.title === undefined ? game.external : game.title}
      />
      <CardContent>
        <Typography variant="h5">
          {game.title === undefined ? game.external : game.title}
        </Typography>
        <Typography variant="body2">
          ${game.normalPrice === undefined ? game.cheapest : game.normalPrice}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GamesItem;
