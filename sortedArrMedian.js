// https://leetcode.com/problems/median-of-two-sorted-arrays/

const res = findMedianSortedArrays([1,2], [3,4]);

console.log(res);

function findMedianSortedArrays(nums1, nums2) {
    const mergedArr = mergeSortedArrays(nums1, nums2);
    console.log(mergedArr);
    const arrLen = mergedArr.length;
    let median;
    if(arrLen % 2 === 0) {
        const middleIndex = arrLen/2 - 1;
        console.log(`middleIndex: ${middleIndex}`);
        median = (mergedArr[middleIndex] + mergedArr[middleIndex + 1])/2
    } else {
        median = mergedArr[Math.floor(arrLen/2)]
    }
    return median;
};

function mergeSortedArrays(arr1, arr2) {
    let outputArr = [];
    while(arr1.length && arr2.length) {
        const next = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
        outputArr.push(next);
    }

    if(arr1.length) {
        outputArr = outputArr.concat(arr1);
    } else {
        outputArr = outputArr.concat(arr2);
    }

    return outputArr;
}