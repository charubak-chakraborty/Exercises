class Node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
    getData(){
        console.log(this.data);
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }
    prettyPrint(){
        let cur = this.head;
        let result='';
        if(cur==null){
            console.log('empty list');
        }else{
            while(cur){
                if(cur.next){
                    result+=cur.data+'-';
                }else{
                    result+=cur.data;
                }
                cur=cur.next;
            }
        }
        console.log(result+' : '+this.length);
    }
    append(val){
        if(this.head==null){
            let node= new Node(val,null);
            this.head=node;
        }else{
            let cur=this.head;
            while(cur.next!=null){
                cur=cur.next;
            }
            let node= new Node(val,null);
            cur.next=node;
        }
        this.length+=1;
    }
    prepend(val){
        let node= new Node(val,this.head);
        this.head=node;
        this.length++;
    }
    addAtBeginning(node){
        node.next=this.head;
        this.head=node;
    }reverse(){
        let cur= this.head;
        let prev=null;
        let next=null;
        while(cur){
            next=cur.next;
            cur.next=prev;
            prev=cur;
            cur=next;
        }
        this.head=prev;
    }
    
    addToNumberRepresentation(number){
        this.reverse();
        this.addCarryVal(number,this.head);
        this.reverse();
        this.prettyPrint();
    }
    addCarryVal(number,node){
        let addedVal=node.data+number;
        let carryVal=parseInt(addedVal/10);
        node.data=addedVal%10;
        if(carryVal>=1){
            this.addCarryVal(carryVal, node.next);
        }else{
            return;
        }
    }
    findMid(){
        let cur=this.head;
        let fastCur=this.head;
        while(fastCur.next!=null && fastCur.next.next!=null){
            cur=cur.next;
            fastCur=fastCur.next.next;
        }
        console.log(cur.data);
    }
    addAtPos(pos,element){
        let curPos=0;
        let cur=this.head;
        if(pos==0){
            let node= new Node(element,this.head);
            this.head= node;
        }else{
            while(curPos<pos-1){
                cur=cur.next;
                curPos++;
            }
            let node= new Node(element,cur.next);
            cur.next=node;
        }
        
        this.length++;
    }
    removeFromPos(pos){
        let curPos=0;
        let cur=this.head;
        if(pos==0){
            this.head=this.next.head;
        }else{
            while(curPos<pos-1){
                cur=cur.next;
                curPos++;
            }
            cur.next=cur.next.next;
        }
        this.length--;
    }
}
module.exports=LinkedList;