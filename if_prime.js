var n;
function if_prime(n){
    var count=0;
    for(var i=2;i<n;i++){
        if(n%i==0){
            count++;
        }
    }
    if(count>0){
        console.log(n+" "+"is prime");
    }
    else{
        console.log(n+" "+"is not prime");
    }
}

if_prime(6);