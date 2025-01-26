var lengthOfLastWord = function(s) {
    
    s = s.trim();
    
    
    let words = s.split(" ");
    
    
    return words[words.length - 1].length;
};


console.log(lengthOfLastWord("Hello World")); 
console.log(lengthOfLastWord("   fly me   to   the moon  "));  
