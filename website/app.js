/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&appid=19c2aabe433bf85adec8693c492b7e38';


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
    console.log("error", error);
  }
}


/* Function to POST data */
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newZip =  document.getElementById('zip').value;
const feelings = document.getElementById('feelings').value;
getForecast(baseURL,newZip, apiKey)

  //Update UI

.then(function(data){

  console.log(data);

  postData('/all', {temp:data.main.temp, date:newDate, userResponse:feelings});

updateUI();
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


//gEt




const updateUI = async () => {
  const request = await fetch('/all')
  try{
    const allData = await request.json()
    console.log(allData);

  console.log(allData);
  document.getElementById('date').innerHTML = allData[allData.length-1].date;
  document.getElementById('temp').innerHTML = allData[allData.length-1].temp;
  document.getElementById('content').innerHTML = allData[allData.length-1].userResponse;


} catch (error){
  console.log('error', error)
}
}



