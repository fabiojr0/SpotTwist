import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { exchangeCodeForAccessToken } from '../codes/fetchToken';
import { spotifyInfos } from '../codes/spotifyInfos';

function Auth() {
    const location = useLocation();
    
    useEffect(() => {
            const code = new URLSearchParams(location.search).get('code');

            if (code) {
            // Trocar o código de autorização por um token de acesso
                exchangeCodeForAccessToken(code);
            } else {
                const authUrl = `${spotifyInfos.apiAuth}client_id=${spotifyInfos.clientId}&redirect_uri=${encodeURIComponent(spotifyInfos.redirectUri)}&response_type=code&scope=${spotifyInfos.scope}`;
                                    
                window.location.href = authUrl;                    
            }
    }, [location.search]);
    
    return (
        <div>

        </div>
    )
}

export default Auth;