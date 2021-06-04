import React ,{ useEffect,useContext} from 'react';
import { AppContext } from "../../AppProvider";
import EpisodesGraph from '../../helpers/graphQl';
import Cards from '../shared/Card';
import './Main.css';



export default function Main() {
	const {episodes, setEpisodes} = useContext(AppContext);

	setEpisodes(EpisodesGraph());


	let loadMain;

	if(episodes !== null){
		loadMain = episodes.map((element,index)=><Cards 
					episodeName={element.name}
					image={`https://rickandmortyapi.com/api/character/avatar/${element.id}.jpeg`}
					date={element.air_date}
					key={element.id}></Cards>)
	}else{
		loadMain = <img src="images/circles.svg"/>
	}

	return (
		<div className='card-container'>
			{
				loadMain
			}

			
		</div>
	)
}