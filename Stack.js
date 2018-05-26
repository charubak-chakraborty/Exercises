class Stack{
    constructor(size){
        this.items=[];
        this.length=0;
        this.size=size;
        this.top=-1;
    }
    push(item){
        if(!this.isFull()){
            this.items[this.top+1]=item;
            this.length++;
            this.top++;
        }else{
            throw "Full Stack";
        }
    }
    pop(){
        if(!this.isEmpty()){
            let item=this.items[this.top];
            this.length--;
            this.top--;
            return item;
        }else{
            throw "Empty Stack";
        }
    }
    isEmpty(){
        return this.top==-1;
    }
    isFull(){
        return this.top==this.size-1;
    }
    display(){
        console.log(this.items);
    }
}
module.exports=Stack;