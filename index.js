let driverId = 0;
let passengerId = 0;
let tripId = 0;

const store = {
    drivers: [],
    passengers: [],
    trips: []
}

class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;
        store.drivers.push(this);
    }
    trips() {
        return store.trips.filter((trip) => {
            return trip.driverId === this.id
        })
    }

    passengers() {
        return this.trips().map((trip) => {
            return trip.passenger();     
        })
    }
}

class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;
        store.passengers.push(this);
    }

    trips() {
        return store.trips.filter((trip) => {
            return trip.passengerId = this.id;
        })
    }

    drivers() {
        return this.trips().map((trip) => {
            return trip.driver();
        })
    }
}

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;
        if(passenger) {
            this.passengerId = passenger.id;
        }
        if(driver) {
            this.driverId = driver.id
        }
        store.trips.push(this);
        console.log(this);
    }

    passenger() {
        return store.passengers.find((passenger) => {
            return passenger.id === this.passengerId;
        })
    }

    driver() {
        return store.drivers.find((driver) => {
            return driver.id === this.driverId;
        })
    }
}