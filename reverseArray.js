// Reverse the array

var reverseString = function(s) {
    for (let i = 0; i <Math.floor(s.length/2); i++) {
            temp=s[s.length-1-i];
            s[s.length-1-i]=s[i];
            s[i]=temp
    }
    console.log(s);
};

reverseString(["h","e","l","l","o"]);