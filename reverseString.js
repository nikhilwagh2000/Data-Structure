class Solution {
    
    reverseWord(s){
        
        let z='';
        for (let i=s.length-1;i>=0;i--){
            z=z+s[i];
        }
        return(z);
    }
}


y = new Solution();

console.log(y.reverseWord("Geeks"));