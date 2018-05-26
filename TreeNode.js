class TreeNode{
    
    constructor(data,left,right){
        this.data=data;
        this.left=left||null;
        this.right=right||null;
    }
    getLeft(){
        return this.left;
    }
    setLeft(node){
        this.left=node;
    }
    getRight(){
        return this.right;
    }
    setRight(node){
        this.right=node;
    }
    getData(){
        return this.data;
    }
    getLinks(){
        let links=[];
        links.push(this.getLeft());
        links.push(this.getRight());
        return links;
    }
}

module.exports=TreeNode;