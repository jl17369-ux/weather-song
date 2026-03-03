

let locationField;
document.addEventListener('DOMContentLoaded', function(event) { 
  locationField = document.getElementById("location");
})

async function fetchData(){
  try{

    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+locationField.value+'/?key=YH5QF5SWJL5LZ8SFPZFT2RCC2')

      if(!response.ok){
        throw new Error("Could not get resource");

      }
      const data = await response.json();
      console.log(data);
      const temp = data.currentConditions.temp;
      console.log(temp)
      const imgElem = document.getElementById("weatherIMG");
      if (temp >= 80) {
        imgElem.src = 'img/hot.jpg';
        imgElem.style.display = "block";
      }
      else if (temp<=34){
        imgElem.src = 'img/cold.jpg';
        imgElem.style.display = "block";
      }
      else {
        imgElem.src = 'img/warm.jpg';
        imgElem.style.display = "block";
      }
    }

catch(error){
console.error(error);
}
}










