//https://docs.google.com/presentation/d/1B04XZ9-XsVOsMBFFcNd9kwyrgSq1w5WGQ4p0hcpyZUI/edit?usp=sharing
function* generateId(){
    console.log('generateid func')
    let id=1;
    while(true){
        const adder = yield id;
        if(adder){
            id+= adder;
        } else{
            id++;
        }
    }
   
}

let obj = generateId(); //initializes the generator
console.log(obj.next()); // returns 1
console.log(obj.next(4));// returns 5
console.log(obj.next()); // returns 6

