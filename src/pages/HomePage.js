import React, { useEffect, useState } from "react";

import AnimeList from "./AnimeList";
import AnimeInfo from "./AnimeInfo";
import AddToList from "../components/addToList";

//context
import AddToListContext from "../Context/AddToListContext";
import { useContext } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("spy Family");
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();

  const { addTo } = useContext(AddToListContext);

  // Fetch anime data from api
  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=30`
    );
    const resData = await res.json();
    // console.log(resData);
    setAnimeData(resData.data);
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="main">
      {/* Search Box */}
      <div className="search-box">
        <input
          type="search"
          placeholder="Search your anime ex.Spy x Family"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        {/* //AnimeInfo */}
        <div className="animeInfo">
          {/* Conditional rendering */}
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>

        <h2 className="text-heading">Anime</h2>

        <div className="anime-row">
          <AnimeList
            animelist={animeData}
            setAnimeInfo={setAnimeInfo}
            animeComponent={AddToList}
            handleList={(anime) => addTo(anime)}
          />
        </div>
      </div>
    </div>
  );
}
