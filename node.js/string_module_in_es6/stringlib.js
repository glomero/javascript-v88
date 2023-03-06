class Stringlib{
    concat(word1, word2) { 
        // add code here 
        return word1 + word2;
    };
    repeat(word, times) {
        // add code here 
        return word.repeat(times);
    };
    toString(input) {
        // add code here 
        return input.toString();
    };
    charAt(word, index) {
        // add code here
        return word.charAt(index);
    };
};
module.exports = Stringlib;