module.exports = function (){
    return {
        concat: function(word1, word2) { 
            // add code here 
            return word1 + word2;
        },
        repeat: function(word, times) {
            // add code here 
            return word.repeat(times);
        },
        toString: function(input) {
            // add code here 
            return input.toString();
        },
        charAt: function(word, index) {
            // add code here
            return word.charAt(index);
        }
    }
};