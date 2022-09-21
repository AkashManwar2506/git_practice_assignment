function if_prime(x){
    for (k=2; k<x; k++){
        if (x%k==0){
            return "Not a prime number";
        }
        return "Prime Number";
    }
    
    let a= if_prime(55);
    console.log(a);
}