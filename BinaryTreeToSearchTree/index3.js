class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // 将二叉树的节点值存储到一个数组中
  function inorderTraversal(root, result) {
    if (root === null) return;
    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
  }
  
  // 将有序数组转化为二叉搜索树
  function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;
    const middleIndex = Math.floor(nums.length / 2);
    
    const root = new TreeNode(nums[middleIndex]);
    root.left = sortedArrayToBST(nums.slice(0, middleIndex));
    root.right = sortedArrayToBST(nums.slice(middleIndex + 1));
    
    return root;
  }
  
  // 将二叉树转化为二叉搜索树的函数
  function convertToBST(root) {
    const values = [];
    inorderTraversal(root, values);
    values.sort((a, b) => a - b);
    return sortedArrayToBST(values);
  }
  
  let root = new TreeNode(10)
  root.left = new TreeNode(2)
  root.right = new TreeNode(7)
  root.left.left = new TreeNode(8)
  root.left.right = new TreeNode(4)


  console.log(convertToBST(root))