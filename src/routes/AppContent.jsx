import Home from './Home.jsx';
import Auth from './Auth.jsx';
import TopTracks from './TopTracks.jsx';
import TopArtists from './TopArtists.jsx';
import Navbar from "../components/Navbar.jsx";
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { SpotifyLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { fetchInfos } from '../codes/fetchInfos.jsx';
import { checkToken } from '../codes/checkToken.jsx';
import Settings from './Settings.jsx';
import NotFound from './NotFound.jsx';

const routeNames = {
  '/': 'Home',
  '/Auth': 'Authentication',
  '/TopTracks': 'Top Tracks',
  '/TopArtists': 'Top Artists',
  '/Settings': 'Settings',
};

export const AppContent = ({}) => {
    const location = useLocation();
    const currentRouteName = routeNames[location.pathname] || 'Not Found';
    const accessToken = localStorage.getItem('accessToken')
    const [userInfos, setUserInfos] = useState();
    const [isValid, setIsValid] = useState(false);
    const navigate =useNavigate();
    
    useEffect(() => {
        checkToken(accessToken)
        .then(res => {

            if (res === true) {
                setIsValid(true)
                fetchInfos("https://api.spotify.com/v1/me", accessToken)
                .then((data) => {
                  // Faça o que precisa com os dados aqui
                  setUserInfos(data);
                })
                .catch((error) => {
                  console.error("Erro ao buscar informações da API:", error);
                  // Lide com o erro de acordo com suas necessidades
                });
            } else {
                setIsValid(false)
                navigate('/Auth')
                console.log("Inválido");
            }
  
        })
        .catch(error => {
  
          console.log("Inválido", error)  
  
        });
    }, [accessToken]);

    return (
    <div>
        <Navbar/>
        <div className="flex items-center justify-between p-2">

            <h1 className='text-zinc-50 text-2xl font-bold'>{currentRouteName}</h1>
            {isValid ? userInfos && <Link to={"/Settings"}><img src={userInfos.images[0].url} className="rounded-full h-10 w-10 object-cover"/></Link> : <Link to={"/Auth"} className="text-zinc-50 bg-lightGreen p-2 rounded-full flex items-center gap-1"><SpotifyLogo weight="fill" className="inline text-2xl"/>Login</Link>}
        </div>
            
        <Routes>
            <Route path="/" element={<Home accessToken={accessToken}/>} />
            <Route path="/TopTracks" element={<TopTracks accessToken={accessToken}/>} />
            <Route path="/TopArtists" element={<TopArtists accessToken={accessToken}/>} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <div className='h-16 bg-transparent'></div>
    </div>
  );
};

