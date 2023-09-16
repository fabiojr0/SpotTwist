import React, { useEffect, useState } from 'react'
import { checkToken } from '../codes/checkToken';
import { fetchInfos } from '../codes/fetchInfos';
import { SpotifyLogo } from '@phosphor-icons/react';
import Track from '../components/Track';

function TopTracks() {
    const accessToken = localStorage.getItem('accessToken')
    const [userInfos, setUserInfos] = useState();
    const [userTopTracks, setUserTopTracks] = useState();
    const [userTopTracks2, setUserTopTracks2] = useState();

    useEffect(() => {

        checkToken(accessToken)
        .then(res => {
  
          if (res === true) {
            console.log("Válido") 
  
            fetchInfos('https://api.spotify.com/v1/me',accessToken)
            .then(data => {
              // Faça o que precisa com os dados aqui
              setUserInfos(data)
            })
            .catch(error => {
              console.error('Erro ao buscar informações da API:', error);
              // Lide com o erro de acordo com suas necessidades
            })
            

            fetchInfos(`https://api.spotify.com/v1/me/top/${"tracks"}?limit=${50}`,accessToken)
            .then(data => {
              // Faça o que precisa com os dados aqui
              setUserTopTracks(data)
            })
            .catch(error => {
              console.error('Erro ao buscar informações da API:', error);
              // Lide com o erro de acordo com suas necessidades
            })

            fetchInfos(`https://api.spotify.com/v1/me/top/${"tracks"}?offset=${49}&limit=${50}`,accessToken)
            .then(data => {
              // Faça o que precisa com os dados aqui
              setUserTopTracks2(data)
            })
            .catch(error => {
              console.error('Erro ao buscar informações da API:', error);
              // Lide com o erro de acordo com suas necessidades
            })
            
  
          } else {
            
            console.log("Inválido");
          }
  
        })
        .catch(error => {
  
          console.log("Inválido", error)  
  
        });


    }, [accessToken]);

    return (
        <div>
            <div className="flex items-center justify-between p-2">
                <h1 className='text-zinc-50 text-2xl font-bold'>Top Tracks</h1>
                {accessToken ? userInfos && <img src={userInfos.images[0].url} className="rounded-full h-10 w-10 object-cover"/>  : <Link to={"/Auth"} className="text-zinc-50 bg-lightGreen p-2 rounded-full flex items-center gap-1"><SpotifyLogo weight="fill" className="inline text-2xl"/>Login</Link>}
            </div> 
            {userTopTracks && console.log(userTopTracks)}
            {userTopTracks2 && console.log(userTopTracks2)}
            <div className='flex flex-col p-2'>
                {userTopTracks && userTopTracks.items.map((item,index) => {
                    return (
                        <Track item={item} index={index+1} key={item.id}/>
                    )
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
