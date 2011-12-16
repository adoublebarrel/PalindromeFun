var p = function(p){
    var verify = function(s)
    {
        var r = false, l = s.length;
        
        // No more string to check, it's all matched, success!
        if (l < 2) {
            return true;
        }
        
        // There's still string to go...
        if (s[0] === s[l - 1]) {
            r = verify(s.slice(1, -1));
        }
        
        // Propogate success or failure up
        // the recursion chain
        return r;
    }
    
    p.isPalindrome = function(s)
    {   
        if (q.isS(s) === false || s.length < 2) {
            return false;
        }
        
        return verify(s);
    }
    return p;
}(p || {});
