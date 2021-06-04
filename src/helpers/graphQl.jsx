import React,{useState} from 'react';
import { useQuery, gql } from '@apollo/client';

const EPISODES = gql`
query getAllEpisodes {
    episodes{
      results{
        id
        name
        air_date
        characters{
          image
        }
      }
    }
  }
`;
const SingleEpisode=gql`
query getSingleEpisode ($episodeId: [ID!]!) {
 
    episodesByIds(ids:$episodeId ){
       name
       id
       air_date 
    }
 
  }`;

export default function EpisodesGraph() {
  const { loading, error, data } = useQuery(EPISODES);

    if (loading) return null ;
    if (error) return error;

    let ep= data.episodes.results

    return ep

}

export  function EpisodeGraph(id) {
    const { loading, error, data } = useQuery(SingleEpisode,{
        variables:{episodeId: id},
    });
  
    if (loading) return null;
    if (error) return null;
     
        console.log('Single',data)
        let ep= data.episodesByIds[0]
        return ep
 
  
  }
      
    
  
