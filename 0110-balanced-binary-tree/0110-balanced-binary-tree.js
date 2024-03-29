/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const dfs = function(root) {
    if (!root) {
        return 0;
    }

    const leftHeight = dfs(root.left);
    const rightHeight = dfs(root.right);

    if (leftHeight === -1 || rightHeight === -1) {
        return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
}

const isBalanced = function(root) {
    return dfs(root) !== -1;
};