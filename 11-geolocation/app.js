function getCoords() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      resolve(position);
    }, error => {
      reject(error);
    });
  });
}

getCoords()
  .then( res => {
    console.log(`${res.coords.latitude} : ${res.coords.longitude}`);
  })
  .catch(error => {
    console.log(error.message);
  })
