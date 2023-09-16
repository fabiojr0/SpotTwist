export const checkToken = async (token) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
 
        if (response.status === 200) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error('Erro ao verificar o token de acesso:', error);
        return false
    }

    
}
  

  