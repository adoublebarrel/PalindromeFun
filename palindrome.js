var p = function(p){
    p.isPalindrome = function(s, x1, x2)
    {
        var isIt = false;
        
        if (q.isS(s) === false) {
            return false;
        }
        
        x1 = x1 ? x1 : 0;
        x2 = x2 ? x2 : s.length - 1;
        
        if (x1 >= x2 || [x1] === s[x2]) {
            return true;
        }
        
        if (s[x1] === s[x2]) {
            isIt = p.isPalindrome(s, x1 + 1, x2 - 1);
        }
        
        return isIt;
    }
    return p;
}(p || {});
