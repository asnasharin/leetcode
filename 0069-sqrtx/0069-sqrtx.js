/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x

    let left = 1;
    let right = x;
    ans = 0

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (mid * mid === x) return mid; 
        else if (mid * mid < x) {
            ans = mid; 
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }
    return ans
};