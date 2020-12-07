class Traveler {
    constructor(name){
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
    }

    hunt(){
        this.food += 2;


    }
    eat(){
        if (this.food >= 1){

        return this.food -= 1;

        }else{
            return this.isHealthy = false;
        }

    }
}

class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passenger = [];
        // this.passenger = new Array()
    }

    getAvailableSeatCount(){

            return this.capacity - this.passenger.length;
        
    }
    
    join(traveler){
        // this.getAvailableSeatCount()

        if (this.getAvailableSeatCount() !== 0){
            this.passenger.push(traveler);
        }
        

       
    }
    shouldQuarantine(){
        for (let i = 0; i < this.passenger.length; i++ ){
            if (this.passenger[i].isHealthy === false){
                return true;
            }
        }
        return false
    }

    totalFood(){
        let total = 0;
        for (let i = 0; i < this.passenger.length; i++){
            total += this.passenger[i].food;

        }
        return total;

    }

}
