import React, { useEffect, useState } from 'react'
import { fetchInfos } from '../codes/fetchInfos';
import { SpotifyLogo } from '@phosphor-icons/react';
import Track from '../components/Track';
import Button from '../components/Button';

function TopTracks({accessToken}) {
    const [userTopTracks, setUserTopTracks] = useState();
    const [userTopTracks2, setUserTopTracks2] = useState();
    const [timeRange, setTimeRange] = useState("long_term");
    const [selectedButton, setSelectedButton] = useState("long_term");

    useEffect(() => {
            fetchInfos(
              `https://api.spotify.com/v1/me/top/${"tracks"}?limit=${49}&time_range=${timeRange}`,
              accessToken
            )
              .then((data) => {
                // Faça o que precisa com os dados aqui
                const ids = data.items.map((item) => {
                  return item.id
                })
                fetchInfos(`https://api.spotify.com/v1/me/tracks/contains?ids=${ids.join(',')}`,accessToken)
                .then((follow) => {
                  data.items.map((item,index) => {
                    item.follow = follow[index]
                  })
                  
                  setUserTopTracks(data);
                })
                .catch((error) => {
                  console.error("Erro ao buscar informações da API:", error);
                })
              })
              .catch((error) => {
                console.error("Erro ao buscar informações da API:", error);
                // Lide com o erro de acordo com suas necessidades
              });

            fetchInfos(`https://api.spotify.com/v1/me/top/${"tracks"}?offset=${49}&limit=${50}&time_range=${timeRange}`,accessToken)
            .then(data => {
              // Faça o que precisa com os dados aqui
              const ids = data.items.map((item) => {
                return item.id
              })
              fetchInfos(`https://api.spotify.com/v1/me/tracks/contains?ids=${ids.join(',')}`,accessToken)
              .then((follow) => {
                data.items.map((item,index) => {
                  item.follow = follow[index]
                })
                setUserTopTracks2(data)
              })
              .catch((error) => {
                console.error("Erro ao buscar informações da API:", error);
              })
            })
            .catch(error => {
              console.error('Erro ao buscar informações da API:', error);
              // Lide com o erro de acordo com suas necessidades
            })
            

    }, [accessToken,timeRange]);

    const handleClickButton = (range) => {
      setTimeRange(range);
      setSelectedButton(range);
    }

    return (
        <div className=''>
            <div className='flex items-center gap-2 px-2 py-1'>
              <Button selected={selectedButton === "short_term"} onClick={() => handleClickButton("short_term")}>
                4 Weeks
              </Button>
              <Button selected={selectedButton === "medium_term"} onClick={() => handleClickButton("medium_term")}>
                6 Months
              </Button>
              <Button selected={selectedButton === "long_term"} onClick={() => handleClickButton("long_term")}>
                All time
              </Button>
            </div>
            <div className='flex flex-col p-2'>
                {userTopTracks && userTopTracks.items.map((item,index) => {
                    return (
                      <Track item={item} index={index + 1} key={item.id} />
                    );
                })}
                {userTopTracks2 && userTopTracks2.items.map((item,index) => {
                    return (
                        <Track item={item} index={index+50} key={item.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default TopTracks;
