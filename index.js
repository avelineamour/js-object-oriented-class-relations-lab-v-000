

// A driver has many trips, and has many passengers through trips.
// A passenger has many trips, and has many drivers through trips.
// A trip belongs to a driver and belongs to a passenger.

let store = {drivers: [], passengers: [], trips: []}

let driverID = 0
let passengerID = 0
let tripID = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverID
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {return trip.driverId === this.id})
    }

  passengers() {
    return this.trips().map(x => {return x.passenger()})
  }

}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerID
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id})
  }

  drivers() {
    return this.trips().map(x => {return x.driver()})
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripID
    if(driver){
     this.driverId = driver.id
   }
   if(passenger){
     this.passengerId = passenger.id
   }
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(function(driver){
      return driver.id === this.driverId}.bind(this))
  }

  passenger() {
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId}.bind(this))
  }
}
