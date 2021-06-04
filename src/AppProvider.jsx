import React, {  useState ,createContext} from "react";

export const AppContext =createContext(null);

 const AppProvider  = ({children})=> {
  const [search, setSearch] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [episode, setEpisode] = useState(null);

 return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        episodes,
        setEpisodes,
        episode,
        setEpisode
       }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;