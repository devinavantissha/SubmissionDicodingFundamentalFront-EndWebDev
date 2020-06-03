  
    const pokedex=document.getElementById("pokedex");
    console.log(pokedex);

    const fetchPokemon = ()=>{
    const promises=[];
    for(let i = 1; i<150; i++){
        const baseUrl=`https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(baseUrl).then((response)=>response.json()));
    }
    Promise.all(promises).then((results)=>{
        const pokemon = results.map((responseJson)=>({
            name: responseJson.name,
            id: responseJson.id,
            image: responseJson.sprites["front_default"],
            type: responseJson.types.map((type)=>type.type.name).join(", ")
        }));
        displayPokemon(pokemon);
    });

    };

    const displayPokemon=(pokemon)=>{
        console.log(pokemon);
        const pokemonHTMLString = pokemon.map((pokeman)=>`
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
            <div class="box-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                </div>
            </div>     
        </li>   
        `)
        .join('');
        pokedex.innerHTML=pokemonHTMLString;
    };

    const editPoke = (pokemon) => {
        // tuliskan kode di sini!
        fetch(`${baseUrl}/edit/${pokemon.id}`, {
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "X-Auth-Token": "12345"
            },
            body:JSON.stringify(book)
        })
        .then(response =>{
            return response.json();
        })
        .then(responseJson=>{
            showResponseMessage(responseJson.message);
            displayPokemon();
        })
        .catch(error=>{
            showResponseMessage(error);
        });
    };

fetchPokemon();