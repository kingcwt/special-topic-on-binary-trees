
class TreeNode {
  constructor(node) {
    this.val = node
    this.left = null
    this.right = null
  }
}



function inorderTraversal(root, result) {
  if (!root) return null
  inorderTraversal(root.left, result)
  result.push(root.val)
  inorderTraversal(root.right, result)
}

function sortedArrayToBST(nums) {
  let len = Math.floor(nums.length / 2)
  if (nums.length === 0) return null
  let root = new TreeNode(nums[len])
  root.left = sortedArrayToBST(nums.slice(0, len))
  root.right = sortedArrayToBST(nums.slice(len + 1, nums.length))
  return root
}

function convertToBST(root) {
  let values = []
  inorderTraversal(root, values)
  values = values.sort((a, b) => a - b)
  return sortedArrayToBST(values)
}


let root = new TreeNode(10)
root.left = new TreeNode(2)
root.right = new TreeNode(7)
root.left.left = new TreeNode(8)
root.left.right = new TreeNode(4)


console.log(convertToBST(root))