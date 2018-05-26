class Queue{
    constructor(size){
        this.size=size;
        this.front=0;
        this.rear=-1;
        this.length=0;
        this.items=[];
    }
    isFull(){
        if(this.length==this.size){
            return true;
        }else{
            return false;
        }
    }
    isEmpty(){
        if(this.length==0){
            return true;
        }else{
            return false;
        }
    }
    enqueue(item){
        if(!this.isFull()){
            this.rear++;
            if(this.rear==this.size-1){
                this.rear=0;
            }
            this.items[this.rear]=item;
            this.length++;
        }else{
            throw "Queue overflow";
        }
    }
    dequeue(){
        let item=null;
        if(!this.isEmpty()){
            item=this.items[this.front];
            this.items[this.front]=null;
            this.front++;
            if(this.front==this.size-1){
                this.front=0;
            }
            this.length--;
            return item;
        }else{
            throw "Queue Empty";
        }
    }
}

module.exports=Queue;