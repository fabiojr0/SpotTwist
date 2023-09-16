import { spotifyInfos } from "./spotifyInfos";

export const exchangeCodeForAccessToken = async (code) => {
    const requestBody = `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(spotifyInfos.redirectUri)}`;

    try {
      const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(spotifyInfos.clientId + ':' + spotifyInfos.clientSecret),
        },
        body: requestBody,
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access_token;
        const refreshToken = data.refresh_token;

        // Salvar o token de acesso em localStorage ou sessionStorage para reutilização futura
        localStorage.setItem('accessToken', accessToken);

        // Agora você pode usar o accessToken para fazer chamadas à API do Spotify
        console.log('Token de Acesso:', accessToken);

        window.location.href = '/';
      } else {
        // Lida com erros de solicitação
        console.error('Erro na solicitação para obter o token de acesso.');
      }
    } catch (error) {
      // Lida com erros de rede
      console.error('Erro de rede ao obter o token de acesso:', error);
    }
  };

