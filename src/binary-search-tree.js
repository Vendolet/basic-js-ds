const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.dataNode = null;
  }

  root() {
      return this.dataNode;
  }

  add(value) {

    function addingFunk(node, value) {
      if (!node){
        return new Node(value);
      }

      if(node.data === value) {
        return node;
      }

      if(value < node.data){
        node.left = addingFunk(node.left, value);
      } else{
        node.right = addingFunk(node.right, value);
      }

      return node;
    }

    this.dataNode = addingFunk(this.dataNode, value);
  }

  has(value) {

   function searchData(node, value){
     if (!node){
       return false;
     }
     if (node.data === value){
       return true;
     }

     return value < node.data ? searchData(node.left, value) 
                              : searchData(node.right, value);
   }

   return searchData(this.dataNode, value);
  }

  find(value) {

    function searchData(node, value){
      if (!node){
        return null;
      }
      if (node.data === value){
        return node;
      }
 
      return value < node.data ? searchData(node.left, value) 
                               : searchData(node.right, value);
    }

    return searchData(this.dataNode, value);
  }

  remove(value) {
    
    function removeFunk(node, value){
      if (!node){
        return null;
      }

      if (value < node.data){
        node.left = removeFunk(node.left, value);
        return node;
      } else if (value > node.data){
        node.right = removeFunk(node.right, value);
        return node;
      } else{
        if (!node.left && !node.right){
          return null;
        }

        if (!node.left){
          node = node.right;
          return node;
        }

        if (!node.right){
          node = node.left;
          return node;
        }

        let minRightData = node.right;

        while (minRightData.left){
          minRightData = minRightData.left;
        }
        node.data = minRightData.data;

        node.right = removeFunk(node.right, minRightData.data);

        return node;
      }
    }
    this.dataNode = removeFunk(this.dataNode, value);
  }

  min() {
    
    if (!this.dataNode){
      return null;
    }

    let node = this.dataNode;
    while (node.left){
      node = node.left;
    }

    return node.data;
  }

  max() {

    if (!this.dataNode){
      return null;
    }

    let node = this.dataNode;
    while (node.right){
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};