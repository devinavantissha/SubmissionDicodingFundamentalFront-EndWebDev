class DataSource{
    static searchPoke(keyword){
        return fetch(`https://pokeapi.co/api/v2/pokemon/=${keyword}`)
        .then(response=>response.json())
        .then(responseJson=>{
            if(responseJson.teams){
                return Promise.resolve(responseJson.teams);
            }else{
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}
export default DataSource;
