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

  minDepth() {

    if (!this.root) return 0;

    function minDepthHelper(node){
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDepthHelper(node.right) + 1;
      if (node.right === null) return minDepthHelper(node.left) + 1;
      return (
        Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1
      );

    }
    return minDepthHelper(this.root)

    // MY ATTEMPT:
    // if (!this.root) return 0;

    // let depth = this.root ? 1 : 0;

    // function minDepthHelper(node) {
    //   // traverse children of node
    //   for (let child of node.right) {
    //     let count = 1;
    //     if (child.right) {
    //       count += 1;
    //       count < depth ? depth = count : depth = depth;
    //     }
    //     if (child.right.length > 0){
    //       minDepthHelper(child)
    //     }
    //   }
    //   for (let child of node.left) {
    //     let count = 1;
    //     if (child.left) {
    //       count += 1;
    //       count < depth ? depth = count : depth = depth;
    //     }
    //     if (child.left.length > 0){
    //       minDepthHelper(child)
    //     }
    //   }
    // }

    // minDepthHelper(this.root);
    // return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

   maxDepth() {
    if (!this.root) return 0;

    function maxDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDepthHelper(node.right) + 1;
      if (node.right === null) return maxDepthHelper(node.left) + 1;
      return (
        Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1
      );
    }

    return maxDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    let result = 0;

    function maxSumHelper(node){
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    const toVisitQueue = [this.root];
    let   closest = null;

    while (toVisitQueue.length) {
      let currentNode = toVisitQueue.shift();
      let currentVal = currentNode.val;
      let high = currentVal > lowerBound;
      let reassignClosest = currentVal < closest || closest === null;    
      
      if(high && reassignClosest){
        closest = currentVal
      }

      if (currentNode.left) toVisitQueue.push(currentNode.left)
      if (currentNode.right) toVisitQueue.push(currentNode.right)
    }

    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

emptyTree = new BinaryTree();

// build small tree;
let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

// build large tree
let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);

module.exports = { BinaryTree, BinaryTreeNode };
