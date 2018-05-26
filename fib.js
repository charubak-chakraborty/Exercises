class fib{
    getFibRec(n){
        if(n<=1){
            return n;
        }else{
            return this.getFib(n-1)+this.getFib(n-2);
        }
    }
    getFibItr(n){
        let result=[];
        result[0]=0;
        result[1]=1;
        for(let index=2; index<=n;index++){
            result[index]=result[index-1]+result[index-2];
        }
        return result[result.length-1];
    }
}

let f=new fib();
let result=f.getFibItr(6);
console.log(result);