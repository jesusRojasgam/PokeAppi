const ul=document.querySelector('.display');


window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight + 0.5 >= scrollHeight) {
    lastPokemon += 10;
    getPokemons();
  }
});


const getPokemons= async ()=>{
let pokemonJsonOutSide =[];    
for (let i = 1; i < lastPokemon && i < 152; i++) {
    let pokemonUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    let pokemonsJson = await pokemonUrl.json();
    pokemonJsonOutSide.push(pokemonsJson)
    console.log(pokemonJsonOutSide)
}

const mappedPokemon= pokemonJsonOutSide.map((Element) => ({
    name: Element.name,
    id: Element.id,
    image1: Element.sprites.other["official-artwork"]["front_default"],
    image2: Element.sprites.other["dream_world"]["front_default"],
    
   
}));

displayPokemon(mappedPokemon);
};

const displayPokemon=(mappedPokemon)=>{
    const pokemonsHtml=mappedPokemon.map(
        (element)=>
        `<li><h3>${element.name}</h3>
        <img src="${element.image1}" alt="${element.name}"/>
        <img src="${element.image2}" alt="${element.name}"/>
        
        </li>`
    ).join('');
    
    ul.innerHTML=pokemonsHtml;
}

getPokemons();
