var removeElement = function(nums, val) {
    let index = 0;  
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {  
            nums[index] = nums[i]; 
            index++;  
        }
    }

    return index; 
};


let nums1 = [3, 2, 2, 3];
let val1 = 3;
let k1 = removeElement(nums1, val1);  
console.log(k1);  
console.log(nums1.slice(0, k1)); 

// Example 2
// let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
// let val2 = 2;
// let k2 = removeElement(nums2, val2);  // Output will be 5
// console.log(k2);  // Output: 5
// console.log(nums2.slice(0, k2));  // Output: [0, 1, 3, 0, 4]
