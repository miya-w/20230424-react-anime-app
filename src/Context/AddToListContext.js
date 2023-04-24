import { createContext, useState } from "react";

const AddToListContext = createContext();

export function AddToListProvider({ children }) {
  const [myAnimeList, setMyAnimeList] = useState([]);

  const listLength = myAnimeList.length;

  // Add to list
  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };

  // Remove all from the List
  const removeFrom = (animelist) => {
 
    const newArray = myAnimeList.filter((myanimelist) => {
      return myanimelist.mal_id !== myanimelist.mal_id;
    });
    setMyAnimeList(newArray);
  };

  const AddToListValue = { myAnimeList, addTo, removeFrom, listLength };

  return (
    <AddToListContext.Provider value={AddToListValue}>
      {children}
    </AddToListContext.Provider>
  );
}

export default AddToListContext;
