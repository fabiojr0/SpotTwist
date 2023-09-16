import { Link } from "react-router-dom"
import { checkToken } from "../codes/checkToken"
import { useEffect, useState } from "react"
import { fetchInfos } from "../codes/fetchInfos";
import { Circle, SpotifyLogo } from "@phosphor-icons/react";
import { spotifyInfos } from "../codes/spotifyInfos";


function Home() {
    const accessToken = localStorage.getItem('accessToken')
    const [userInfos, setUserInfos] = useState();
    const [myInfos, setMyInfos] = useState();
    const [myPlaylists, setMyPlaylists] = useState();
    const myId = spotifyInfos.myId;

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
          

          fetchInfos(`https://api.spotify.com/v1/users/${myId}`,accessToken)
          .then(data => {
            // Faça o que precisa com os dados aqui
            setMyInfos(data)
          })
          .catch(error => {
            console.error('Erro ao buscar informações da API:', error);
            // Lide com o erro de acordo com suas necessidades
          })


          fetchInfos(`https://api.spotify.com/v1/users/${myId}/playlists`,accessToken)
          .then(data => {
            // Faça o que precisa com os dados aqui
            setMyPlaylists(data)
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
        <h1 className='text-zinc-50 text-2xl font-bold'>Home</h1>
        {accessToken ? userInfos ? <img src={userInfos.images[0].url} className="rounded-full h-10 w-10 object-cover"/> : <></> : <Link to={"/Auth"} className="text-zinc-50 bg-lightGreen p-2 rounded-full flex items-center gap-1"><SpotifyLogo weight="fill" className="inline text-2xl"/>Login</Link>}
      </div>

      <div className="">
        {myInfos ? <h1 className="text-zinc-50 font-semibold p-2">{myInfos.display_name}'s Playlists</h1> : <></>}

        {myPlaylists ? 
        <div className="grid grid-cols-2 w-screen gap-2 p-2">
          {myPlaylists.items.map((item) => {
            return (<a className="flex flex-col " key={item.id} href={item.external_urls.spotify} target="_blank">
              <img src={item.images[0].url} alt={item.name} className="aspect-square object-cover"/>
              <p className="text-sm text-zinc-50 line-clamp-1 w-full">{item.name}</p>
              <p className="text-xs text-zinc-400 font-semibold w-full line-clamp-2">Playlist <Circle size={10} weight="fill"  className="inline pb-1"/> {item.description.length > 1 ? item.description.replace('&#x2F;','/') : `From ${userInfos.display_name}`}</p>
            </a>)
          }) }
        </div>: <div>a</div>}
      </div>
    </div>
  )
}

export default Home
