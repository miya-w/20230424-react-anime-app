import React from "react";
// import MyAnimeList from "./myAnimeList-card";
// import AnimeInfo from "./AnimeInfo";
import RemoveFromList from "../components/RemoveFromList";
// import HomePage from "./HomePage";

//context
import AddToListContext from "../Context/AddToListContext";
import { useContext } from "react";

export default function MyList() {
  const { myAnimeList,removeFrom  } = useContext(AddToListContext);

  console.log(myAnimeList);
 
  // function sayHello(){
  //   console.log("Hello")
  // }



  function MyAnimeList(props) {
    // const {title,animeComponent ,handleList,}=props.myanimelist
    // console.log(props);
    return (
      <>
        {myAnimeList.map((myanimelist, index,) => {
          console.log("console.log(myanimelist)")
          console.log(myanimelist)
          return (
            <>
              <div className="card" key={index}>
                <img
                  src={myanimelist.images.jpg.large_image_url}
                  alt="animeImage"
                />
                <div className="anime-info">
                  <h4>{myanimelist.title}</h4>

                  {/* <div  onClick={removeFrom}>
                    <RemoveFromList />
                  </div> */}
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div>
      <h2 className="text-heading">My List</h2>
      <div  onClick={removeFrom}>
                    <RemoveFromList />
      </div>
      </div> 
      
   
      <hr />
      <div className="anime-row">
        <MyAnimeList
          myanimelist={myAnimeList}
          // animeComponent={RemoveFromList}
          // handleList={(myAnimeList) => removeFrom(myAnimeList)}
        />
      </div>
    </>
  );
}

{
  /* <button onClick={removeFrom}>Remove</button> */
}
