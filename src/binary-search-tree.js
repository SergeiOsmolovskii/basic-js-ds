const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {

    const addInside = (node, data) => {
      if (!node) {
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
    this.rootNode = addInside(this.rootNode, data);
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
    return hasInside(this.rootNode, data);
  }

  find(data) {

    const findInside = (node, data) => {

      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findInside(node.left, data);
      } else {
        return findInside(node.right, data);
      }
    }
    return findInside(this.rootNode, data);
  }

  remove(data) {

    const removeInside = (node, data) => {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeInside(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeInside(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeInside(node.right, minFromRight.data);
        return node;
      }
    }
    return removeInside(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) return;
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) return;
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}