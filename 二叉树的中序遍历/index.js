
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


let inorderTraversal = root => {
    let arr = []
    const dfs = (node) => {
        if (!node) return []
        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    return arr
}




let root = new TreeNode(10)
root.left = new TreeNode(2)
root.right = new TreeNode(7)
root.left.left = new TreeNode(8)
root.left.right = new TreeNode(4)

console.log(root)
let res = inorderTraversal(root)
console.log(res)