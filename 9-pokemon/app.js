const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
request.addEventListener('load', function() {
  const ability = JSON.parse(this.responseText).abilities[0].ability.url;
  const request = new XMLHttpRequest();
  request.open('GET', `${ability}`);
  request.send();
  request.addEventListener('load', function() {
    const effect_entries = JSON.parse(this.responseText).effect_entries;
    const desc = effect_entries.reduce((acc, val) => {
      if (val.language.name === 'en')
        return val.effect;
    });
    console.log(desc);
  });
})