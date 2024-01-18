// if give a string to a function it should return that string in reverse order


a = 'ladha';
length = a.length;
//console.log(length);
const revers = (a) => {
    let jj= '';
 for(let i=length-1; i>=0;i--){
     jj = jj+a[i]
    if(i==0){
        return jj;
    }
}
}

console.log(revers(a))