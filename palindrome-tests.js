module("(p)alindrome");

test("p", function() {
    ok(q.isO(p), "is an object");
});

test("isPalindrome", function() {
    ok(q.isF(p.isPalindrome), "is a function");
    equal(false, p.isPalindrome(1234), "rejects ints");
    equal(false, p.isPalindrome(12.34), "rejects floats");   
    equal(false, p.isPalindrome({}), "rejects objs");
    equal(false, p.isPalindrome(function(){}), "rejects functions");
    
});
