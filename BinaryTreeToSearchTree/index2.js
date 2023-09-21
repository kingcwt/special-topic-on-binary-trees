// 定义二叉树节点
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // 遍历二叉树并将节点值存储在数组中
  function traverseTree(root, arr) {
    if (root === null) {
      return;
    }
    traverseTree(root.left, arr);
    arr.push(root.value);
    traverseTree(root.right, arr);
  }
  
  // 通过升序数组构建二叉搜索树
  function buildBST(arr, start, end) {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const newNode = new Node(arr[mid]);
    newNode.left = buildBST(arr, start, mid - 1);
    newNode.right = buildBST(arr, mid + 1, end);
    return newNode;
  }
  
  // 将二叉树转化为二叉搜索树的函数
  function convertToBST(root) {
    if (root === null) {
      return null;
    }
    const arr = [];
    traverseTree(root, arr);
    arr.sort((a, b) => a - b);
    return buildBST(arr, 0, arr.length - 1);
  }
  
  // 示例用法
  // 创建一个二叉树
  const root = new Node(5);
  root.left = new Node(3);
  root.right = new Node(9);
  root.left.left = new Node(2);
  root.left.right = new Node(4);
  
  // 将二叉树转化为二叉搜索树
  const bstRoot = convertToBST(root);
  
  console.log(bstRoot);