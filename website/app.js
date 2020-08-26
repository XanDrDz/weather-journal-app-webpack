/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let feelings = document.getElementById('feelings').value;

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=19c2aabe433bf85adec8693c492b7e38';

/* Function to POST data */
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newZip =  document.getElementById('zip').value;
getForecast(baseURL,newZip, apiKey)
.then(function(data){
  postData('/temperature', {temperature:data.temp, date:newDate, userResponse:feelings})

  //Update UI
updateUI()

}) 

}
const getForecast = async (baseURL, zip, key)=>{

  const res = await fetch(baseURL+zip+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

//post
const postData = async ( url = '', data = {}) =>{
  console.log(data)
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData
  }catch(error) {
    console.log('error', error);
  }
}

const updateUI = async () => {
  const request = await fetch('/all')
  try{
    const allData = await request.json()
    console.log(allData);

  console.log(allData);
  document.getElementById('date').innerHTML = allData[0].date;
  document.getElementById('temp').innerHTML = allData[0].temperature;
  document.getElementById('userResponse').innerHTML = allData[0].userResponse;


} catch (error){
  console.log('error', error)
}
}