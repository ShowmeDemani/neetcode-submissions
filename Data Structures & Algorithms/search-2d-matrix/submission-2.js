class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
        searchMatrix(matrix, target) {
        //Iterate through each element in a subarray in the matrix

        for( let elem of matrix){
            // console.log(matrix[0][2])
        //check if the first element is less than the target and the last element is greater than the target
            if(elem[0] <= target && elem[elem.length-1] >= target){
                
        //if the row meets the condition iterate throught for target
                for(let i = 0; i < elem.length; i++){
                    if(elem[i] == target){
                        return true
                    }
                }
            }

        }
        //if elem is there return true if element is not return false
        return false
    }
    
}


