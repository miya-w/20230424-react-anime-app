import React from 'react'
import { useState } from "react";

function  AnimeInfo  (props) {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating,duration, synopsis}=props.animeInfo
    const [showed, setShowed] = useState(false);
    const handleClick = (event) => {
        event.preventDefault();
        setShowed(!showed);
      }
  return (
    <>
        <div className="anime-content" style={{display: showed ? "none": " "}} >
            <h3>{title}</h3><br />
            <img src={large_image_url} alt="" /><br /><br />
            <div className="info">
                <h3>#Rank: {rank}</h3>
                <h3>#Score: {score}</h3>
                <h3>#Popularity: {popularity}</h3><hr/><br />
                <h4>Members:{members}</h4>
                <h4>Source:{source}</h4>
                <h4>Duration:{duration}</h4>
                <h4>Status:{status}</h4>
                <h4>Rating:{rating}</h4><br />
                <h4>{synopsis}</h4>
                <button onClick={handleClick }>Close</button>

            </div>
        </div>
    </>
  )
}


export default AnimeInfo