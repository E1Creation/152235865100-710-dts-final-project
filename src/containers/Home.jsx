import React from "react";
import Footer from "../components/Footer";
import GamesList from "../components/GamesList";
import NavBar from "../components/NavBar";
import { useAllGamesQuery } from "../services/api/GamesAPI";

const Home = () => {
  return (
    <>
      <GamesList games={useAllGamesQuery()} />
    </>
  );
};

export default Home;
