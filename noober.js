let renderRide = function(ride){
  borderColor ='border-gray-900'
  if(ride.length>1){
    levelOfService = 'Noober Pool'
  }else{
    if(ride[0].purpleRequested){
      levelOfService = 'Noober Purple'
      borderColor = 'border-purple-500'
    }else{
      if(ride[0].numberOfPassengers>3){
        levelOfService = 'Noober XL'
      }else{
        levelOfService = 'Noober X'
      }
    }
  }

//title
  let outputElement = document.querySelector('.rides')
  outputElement.insertAdjacentHTML('beforeend', ` 
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>
  `)

  //legs
  for (let i = 0; i < ride.length; i++) { 
    outputElement.insertAdjacentHTML('beforeend', ` 
    <div class="border-4 ${borderColor} p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ride[i].passengerDetails.first} ${ride[i].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ride[i].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
          ${ride[i].numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ride[i].pickupLocation.address}</p>
          <p>${ride[i].pickupLocation.city}, ${ride[i].pickupLocation.state} ${ride[i].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride[i].dropoffLocation.address}</p>
          <p>${ride[i].dropoffLocation.city}, ${ride[i].dropoffLocation.state} ${ride[i].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
  `)
  }
 }



async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
   document.querySelector('.rides').innerHTML = "";

  for (let i = 0; i < json.length; i++) { 
    renderRide(json[i])
  }
}

window.addEventListener('DOMContentLoaded', pageLoaded)

