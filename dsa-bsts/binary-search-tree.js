class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // if bst empty, add new Node
    if (this.root === null) {
      this.root = new Node(val);

      return this;
    }

    let current = this.root;

    while (current !== null) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);

          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);

          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);

      return this;
    }

  }

  /** find(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) {
      return undefined;
    }

    let current = this.root;

    while (current !== null) {
      if (val === current.val) {
        return current;
      } else if (val < current.val) {
        if (current.left === null) {
          return undefined;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          return undefined;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** findRecursively(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root, visitedNodes=[]) {
    // params: what node, array
    // if not null add to array
    // go left
    // go right
    // go back
    if (node) {
      visitedNodes.push(node.val);
      this.dfsPreOrder(node.left, visitedNodes);
      this.dfsPreOrder(node.right, visitedNodes);
    }

    return visitedNodes;

    // TODO: iterative??
    // make a stack and track visited
    // let visitedNodes = [];

    // if (this.root === null) return visitedNodes;

    // let current = this.root;

    // while () {
    //   visitedNodes.push(current);

    //   if (current.left !== null) {
    //     current = current.left;
    //   } else if (current.right !== null) {
    //     current = current.right;
    //   }
    // }
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(): Find the node with the next largest value.
   * Return successor node or undefined if not found. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
