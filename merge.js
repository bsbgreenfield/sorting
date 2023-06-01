
function merge(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i])
            i++
        }
        else {
            merged.push(arr2[j])
            j++
        }
    }
    let result = i <  arr1.length  ? merged.concat(arr1.slice(i)) : merged.concat(arr2.slice(j))
    return result
}


function mergeSort(arr){
   if(arr.length <= 1) return arr;// if there is notthing to split, return array
   const mid = Math.floor(arr.length/2) // find the midpoint to split the array
   const left = mergeSort(arr.slice(0,mid)) // split the left side
   const right = mergeSort(arr.slice(mid)) // split the right side
   return merge(left, right) // merge together two arrays
}


module.exports = { merge, mergeSort};