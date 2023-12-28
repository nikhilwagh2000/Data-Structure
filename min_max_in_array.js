// •	Find the maximum and minimum element in an array

// •	Given an array A of size N of integers. Your task is to find the sum of minimum and maximum element in the array.
 
// Example 1:
// Input:
// N = 5
// A[] = {-2, 1, -4, 5, 3}
// Output: 1
// Explanation: min = -4, max =  5. Sum = -4 + 5 = 1


// Method 1 Sorting (for loop and temp variable)
class Solution{
    findSum(a,N){
        for (let i=0; i<a.length; i++){
            for (let j=0; j<a.length; j++){
                if (a[j]> a[j+1]){
                    let tmp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=tmp;
                }
            }

        }

        let  min = a[0]; 
        let max=a[a.length-1];
        let sum = min + max;

        //console.log (min)
        //console.log  (max)
        //console.log (sum)
        return sum;
    }
}


// Method 2 (without sorting)
class Solution{
    findSum(a,N){
        let min=a[0]
        let max=a[0]
        for  (let i=0; i<a.length; i++){
            if (a[i]<min){
                min = a[i]
            }
            if (a[i]>=max){
                max = a[i]
            }
        }
        return max+min;
    }
    
    
}

a = new Solution();

console.log(a.findSum([-2, 1, -4, 5, 3], 5));

