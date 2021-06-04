import React, { useContext,useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../../AppProvider";
import "./Header.css";
import home from "../../assets/images/homeIcon.jpg";
import user from "../../assets/images/user.jpeg";
import { EpisodeGraph } from "../../helpers/graphQl";

const Header = () => {
  const { episode,setEpisode } = useContext(AppContext);
   const { search, setSearch } = useContext(AppContext);
   const[onChange,setOnchange] = useState('')

  const history = useHistory();

  const haddleChange = (e) => {
   
    setOnchange(e.currentTarget.value)
  };

  const haddleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch(onChange);
    setOnchange('');
    history.push("/search")
  };

  return (
    <header className="container">
      <nav className="containerHeader">
        <li className="li-1">
          <Link to="/">
            <i class="fas fa-home"></i>
          </Link>
        </li>
        <h1>Rick and Morty</h1>
        <li>
          <Link to="/account">
            <i class="fas fa-user-circle"></i>
          </Link>
        </li>
      </nav>
      <form onSubmit={haddleSubmit}>
          <button type="submit">
            <i class="fas fa-search"></i>
          </button>
        <input
          type="text"
          value={onChange}
          onChange={haddleChange}
          placeholder="Search"
        />
      </form>
    </header>
  );
};
export default Header;
