/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sumTotal = 0;
    let toVisitStack = [this.root];

    if (this.root === null) return 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      sumTotal += current.val;

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
    
    return sumTotal;
  }

  
  // TODO: recursive solution
  // debugger;
  // let toVisitStack = []; won't make stack, have a stack already
  // if (toVisitStack.length === 0) return 0;

  // // recursively add children of Node
  // let sumTotal = sumValues()
  // sumValues(node) {
  //   debugger;
  //   let sumTotal = 0;

  //   console.log("node=", node);
    
  //   if (node === undefined) return 0;

  //   let nextNode = this.sumValues(node.children[0]).val;

  //   // need to loop through children??

  //   return sumTotal += nextNode.val;
  // }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let evensCount = 0;
    let toVisitStack = [this.root];

    if (this.root === null) return 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      
      if (current.val % 2 === 0) {
        evensCount += 1;
      }

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return evensCount;

    // TODO: recursive solution
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let greaterThanCount = 0;
    let toVisitStack = [this.root];

    if (this.root === null) return 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val > lowerBound) {
        greaterThanCount += 1;
      }

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return greaterThanCount;
  }
}

module.exports = { Tree, TreeNode };
