const ul=document.querySelector('.display');


window.addEventListener("scroll", () => {

})
//     const{ scrollHeight , scrollTop, clientHeight} = document.documentElement;
//     if(scrollTop + clientHeight < scrollHeight - 100);
// });
//  function progreso (){
//      let scroll = documentElement.scrollTop
//      let alto = document.documentElement.scrollHeight - documentElement.clientHeight
//      let progreso = (scroll/alto)*100;
//      document.getElementsByClassName("barra")[0].style.width = progreso+"%";
//  }
// let ubicacionPrincipal = window.pageXOffset;
// function menu(){
//     let desplazamientoActual = window.pageXOffset;
//     if(ubicacionPrincipal >= desplazamientoActual){
// document.getElementsByClassName("display").style.top = "0";
//     }else{
//         document.getElementsByClassName("display").style.top = "-100";
//     }
// }

const getPokemons= async ()=>{
let pokemonJsonOutSide =[];    
for (let i = 1; i < 152; i++) {
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
    types: Element.types[0].type.name
   
}));

displayPokemon(mappedPokemon);
};

const displayPokemon=(mappedPokemon)=>{
    const pokemonsHtml=mappedPokemon.map(
        (element)=>
        `<li><h3>${element.name}</h3>
        <p>${Element.types}</p>
        <img src="${element.image1}" alt="${element.name}"/>
        <img src="${element.image2}" alt="${element.name}"/>
        
        </li>`
    ).join('');
    
    ul.innerHTML=pokemonsHtml;
}

getPokemons();
