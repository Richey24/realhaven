// window.navigator.geolocation.getCurrentPosition(async (position) => {
//     const { latitude, longitude } = position.coords;
//     const res = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a06ee162a5a1476a87cdbec1d7c4f197`)
//     const loc = await res.data
//     const state = loc.results[0].components.state === "Federal Capital Territory" ? loc.results[0].components.state : loc.results[0].components.state.split(" ")[0]
//     const city = loc.results[0].components.county
  
// }, console.log("sad"))