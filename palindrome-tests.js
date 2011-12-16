module("(p)alindrome");

test("p", function() {
    ok(q.isO(p), "is an object");
});

test("isPalindrome", function() {
    ok(q.isF(p.isPalindrome), "is a function");
    equal(p.isPalindrome(1234), false, "rejects ints");
    equal(p.isPalindrome(12.34), false, "rejects floats");   
    equal(p.isPalindrome({}), false,  "rejects objs");
    equal(p.isPalindrome(function(){}), false, "rejects functions");
    equal(p.isPalindrome('a'), false, "rejects single characters");
    
    equal(p.isPalindrome("hello"), false, "Rejects non-palidromic strings");
    equal(p.isPalindrome("anna"), true, "Recognises even palindromes");
    equal(p.isPalindrome("tot"), true, "Recognises odd palindromes");
    equal(p.isPalindrome("3223"), true, "Recognises numeric palindromes");
});
