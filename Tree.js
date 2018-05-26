let TreeNode=require('./TreeNode');
class Tree{
    constructor(){
        this.root=null;
    }
    insert(data){
        this.root=this.insertIntoTree(this.root,data);
    }
    insertIntoTree(node,data){
        if(node==null){
            node=new TreeNode(data); 
        }else if(data<node.getData()){
            node.setLeft(this.insertIntoTree(node.getLeft(),data));
        }else{
            node.setRight(this.insertIntoTree(node.getRight(),data));
        }
        return node;
    }
    isEmpty(){
        return this.root==null;
    }
    inOrder(){
        this.inOrderTraversal(this.root);
    }
    inOrderTraversal(node){
        if(node!=null){
            this.inOrderTraversal(node.getLeft());
            console.log(node.getData());
            this.inOrderTraversal(node.getRight());
        }
    }
    preOrder(){
        this.preOrderTraversal(this.root);
    }
    preOrderTraversal(node){
        if(node!=null){
            console.log(node.getData());
            this.preOrderTraversal(node.getLeft());
            this.preOrderTraversal(node.getRight());
        }
    }
    postOrder(){
        this.postOrderTraversal(this.root);
    }
    postOrderTraversal(node){
        if(node!=null){
            this.postOrderTraversal(node.getLeft());
            this.postOrderTraversal(node.getRight());
            console.log(node.getData());
        }
    }
    getRoot(){
        return this.root;
    }
}
module.exports=Tree;