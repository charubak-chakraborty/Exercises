let Stack=require('./Stack');
let Queue=require('./Queue');
class Graph{
    constructor(){
        this.stack=new Stack(10);
        this.queue=new Queue(10);
    }
    traverse_bfs(node,item){
        if(node.getData()==item){
            console.log('found');
        }else{
            if(node.getLeft()){
                this.queue.enqueue(node.getLeft());
            }
            if(node.getRight()){
                this.queue.enqueue(node.getRight());
            }
            
            let node1=this.queue.dequeue();
            this.traverse_bfs(node1,item);
        }
    }
}

module.exports=Graph;