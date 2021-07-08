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
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // accumulate all values
        total += child.val;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return total;

    // MY ATTEMPT: 
    // if (!this.root) return 0;

    // let total = this.root.val;
    // const toVisitStack = [this];

    // while (toVisitStack.length){
    //   const current = toVisitStack.shift();
    //   if(current.val){
    //     total += current.val;
    //   }
    //   for(let child of current.children){
    //     toVisitStack.push(child)
    //   }
      
    // }
    // return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1: 0;

    function evensHelper(node){
      // traverse children for a node
      for (let child of node.children){
        // Child val even = add to count
        if(child.val % 2 === 0) count ++;
        // if there are node children
        if (child.children.length > 0){
          // recurse child as root
          evensHelper(child)
        }
      }
    }

    evensHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function lowerBoundHelper(node){
      // traverse children for a node
      for (let child of node.children) {
        // Add to count if child val is greater than lower bound
        if (child.val > lowerBound) count ++
        // Check for node children
        if (child.children.length > 0){
          lowerBoundHelper(child)
        }
      }
    }

    lowerBoundHelper(this.root)
    return count;
  }
}

const numTree = new Tree(
  new TreeNode(5,
    [new TreeNode(10),
     new TreeNode(20),
     new TreeNode(30)]))

module.exports = { Tree, TreeNode };