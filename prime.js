function prime(n) {
     if ( n < 2) {
            return 'dont try over smart'
            
     }
    
    if (n == 2) {
      return "2 always prime";
    }
    for (let i = 2; i < n; i++) {
         
        
       
        if (n%2 == 0) {
            return 'its not prime';
            
        }
        return 'its  prime'
    }
}

console.log(prime(104729));
// console.log((3%2));