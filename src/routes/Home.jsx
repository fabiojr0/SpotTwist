import { useEffect, useState } from "react"
import { fetchInfos } from "../codes/fetchInfos";
import { spotifyInfos } from "../codes/spotifyInfos";
import Playlist from "../components/Playlist";

function Home({accessToken}) {
    const [myInfos, setMyInfos] = useState();
    const [myPlaylists, setMyPlaylists] = useState();
    const myId = spotifyInfos.myId;

    useEffect(() => {

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

    }, [accessToken]);


    return (
    <div>
      <div className="w-full">
        {myInfos && <h1 className="text-zinc-50 font-semibold p-2">{myInfos.display_name}'s Playlists</h1> }
        
        {myPlaylists &&
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 sm:gap-4 md:grid-cols-5 md:gap-6 md:px-4">
          {myPlaylists.items.map((item) => {
            return (<Playlist item={item} key={item.name}/>)
          }) }
        </div>}
      </div>
    </div>
  )
}

export default Home
