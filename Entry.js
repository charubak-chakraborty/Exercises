let LinkedList=require('./LinkedList');
let Tree=require('./Tree');
let Graph=require('./Graph');
/*let list= new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(10);
list.addAtPos(4,20);
list.removeFromPos(2);
list.prettyPrint();*/

let tree=new Tree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(21);
tree.insert(2);

//tree.postOrder();
let graph= new Graph();
graph.traverse_bfs(tree.getRoot(),21);