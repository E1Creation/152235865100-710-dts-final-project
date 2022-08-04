import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import GamesList from "../components/GamesList";
import NavBar from "../components/NavBar";
import { useSearchGamesQuery } from "../services/api/GamesAPI";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  return (
    <>
      <GamesList games={useSearchGamesQuery(q)} />
    </>
  );
};

export default Search;
