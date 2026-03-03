
async function fetchData(){
  try{
    

    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/?key=YH5QF5SWJL5LZ8SFPZFT2RCC2&elements=temp')

      if(!response.ok){
        throw new Error("Could not get resource");

      }
      const data = await response.json();
      console.log(data);
      const temp = response.currentConditions;
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










