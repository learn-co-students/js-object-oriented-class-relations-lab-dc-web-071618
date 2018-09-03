let driverId = 0
let passengerId = 0
let tripId = 0

let store = { drivers: [], passengers: [], trips: [] }

class Driver{
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  //returns all of the trips that a driver has taken
  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  // returns all of the passengers that a driver has taken on a trip
  passengers(){
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }
}

class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  //returns all of the trips that a passenger has taken
  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })

  }
  //returns all of the drivers that has taken a passenger on a trip
  drivers(){
    return this.trips().map(trip => {
      return trip.driver()
    })
  }
}

class Trip{
  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  //returns the driver associated with the trip
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }
  //returns the passenger associated with the trip
  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }
}
