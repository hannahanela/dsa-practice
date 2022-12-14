/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (node === null) return 0;

    let toVisitQueue = [{"node": node, "depth": 1}];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if ((current.node.left === null) && (current.node.right === null)) {
        return current.depth;
      }

      if (current.node.left) {
        toVisitQueue.push({"node": current.node.left, "depth": (current.depth + 1)});
      }

      if (current.node.right) {
        toVisitQueue.push({"node": current.node.right, "depth": (current.depth + 1)});
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (node === null) return 0;

    let maxDepth = 0;
    let toVisitQueue = [{"node": node, "depth": 1}];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if ((current.node.left === null) && (current.node.right) === null) {
        maxDepth = Math.max(current.depth, maxDepth); 
      }

      if (current.node.left) {
        toVisitQueue.push({"node": current.node.left, "depth": (current.depth + 1)});
      }

      if (current.node.right) {
        toVisitQueue.push({"node": current.node.right, "depth": (current.depth + 1)});
      }
    }

    return maxDepth;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
