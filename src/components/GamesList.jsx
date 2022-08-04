import { Box } from "@mui/material";
import React from "react";
// import { useCategoriesQuery } from "../services/api/FoodAPI";
// import { useAllGamesQuery } from "../services/api/GamesAPI";
import GamesItem from "./GamesItem";
import Loading from "./Loading";

const GamesList = ({ games }) => {
  const { data, isLoading, error } = games;
  console.log("data :" + data);
  console.log("loading : " + isLoading);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: 5,
        gap: 5,
      }}
    >
      {error ? (
        <>Ada Error</>
      ) : isLoading ? (
        <Loading />
      ) : (
        data.map((game) => <GamesItem key={game.dealID} game={game} />)
      )}
    </Box>
  );
};

export default GamesList;
