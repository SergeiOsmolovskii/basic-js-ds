const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
  
    const addInside = (node, data) => {
      if(!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }
      
      if (data < node.data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }
      return node;
    } 
    this.root = addInside(this.root, data)
  }

  has(data) {
    const hasInside = (node, data) => {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasInside(node.left, data);
      } else {
        return hasInside(node.right, data);
      }
    }
    return hasInside(this.root, data);
  }

  

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.root) return;
    let node = this.root;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) return;
    
    let node = this.root;

    while(node.right) {
      node = node.right;
    }
    return node.data;
  }

}