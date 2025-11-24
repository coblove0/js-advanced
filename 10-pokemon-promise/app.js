fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => fetch(`${data.abilities[0].ability.url}`))
  .then(response => response.json())
  .then(ability => {
    console.log(ability.effect_entries.find((val) => val.language.name === 'en').effect);
  })
  .catch(err => {
    console.log(`Error: ${err.message}`);
  })