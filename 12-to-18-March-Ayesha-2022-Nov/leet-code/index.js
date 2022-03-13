// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,,,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.


var removeElement = function (nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [1,3,5,6], target = 5
// Output: 2

var searchInsert = function(nums, target) {
    for(let i = 0; i< nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
        
    }
    return nums.length
};

console.log(searchInsert([1,3,5,6], 5))
// [9:25 pm, 13/03/2022] +91 83290 66236: [2,2,1]
     let numse = [4,1,2,1,2];
      function checkSome(numse) {
		  
        let num = nums.sort();
        console.log(numse);
        for (let i = 0; i < numse.length; i++) {
          if (num[i] === num[i + 1]) {
            return;
          } else if (num[i] === undefined) {
            return num[i];
          } else {
            return num[i];
          }
        }
      }
      console.log(checkSome(numse));
	///////////////////////////////////////////////////////
  
//  Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
var generate = function(numRows) {
    let ret = [];
    
    for(let i = 0; i < numRows; i++)
    {
        ret[i] = [];
        ret[i][0] = ret[i][i] = 1;
        for(let j = 1; j < i; j++)
        {
               ret[i][j] = ret[i-1][j] + ret[i-1][j-1]; 
        }
    }
    return ret;
}
console.log(generate(5))
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

//A subarray is a contiguous part of an array.

 var maxSubArray = function(nums) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < nums.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < nums.length; j++) {
      sumFixedStart += nums[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
};
//Leetcode No 977 Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


var arr = [2,3,1];
var square = arr.map((ele)=>{
    return ele * ele;
})
console.log(square.sort())
//12/03/2022
//question 1
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [nums[i],nums[j]]
                // return [i,j]//here we pass the index
            }
        }
    }
};
console.log(twoSum([3,3,4],6))
//question 2
var removeDuplicates = function(nums) {
    // if(nums.length == 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j ++){
        if(nums[j] !== nums[i]){
           i++;
           nums[i] = nums[j];
        }
    }

    return i + 1
}
console.log(removeDuplicates([0,1,1,2,3,3,4,4,4,5]))
//question 3
// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = chars.filter((ele, index) => {
//     return chars.indexOf(ele) === index;
// });
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);
//66
var plusOne = function(digits) {
    let digitsJoin=digits.join('');
    let digitsNumber=Number(digitsJoin)+1;
    return digitsNumber.toString().split('');
    };
  console.log(plusOne([9,9]))
  //349
  var intersection = function(nums1, nums2) {

    var value = nums1.filter(x => nums2.includes(x)) // returns intersection of two arrays
    
    var remDuplicate  = [...new Set(value)]; //removes duplicates from array

    return remDuplicate ;
};
console.log(intersection([1,2,2,1,3],[2,2,3]))
