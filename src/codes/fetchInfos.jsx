

export const fetchInfos = async (url,token) => {
        const  response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token
          },
        })
        try {
          if (!response.ok) {
            // Se a resposta não for bem-sucedida (status diferente de 200), lance um erro
            throw new Error('Erro ao buscar informações');
          }
      
          const data = await response.json(); // Converte a resposta em JSON
          return data;

        } catch (error) {
          console.log(error);
        }
}