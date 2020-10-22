module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 == 1) {
        return false;
    }
    
    var stack = [];
    for (var i = 0; i <= str.length - 1; i++) {
        var chars = false;
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0]) {
                chars = true;
                if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
                    if (stack[stack.length - 1] == bracketsConfig[j][0]) {
                        stack.pop();
                        break;
                    }
                }
                stack.push(bracketsConfig[j][1]);
                break;
            }
        }
        if (!chars) {
            if (stack.length == 0 || str[i] != stack[stack.length - 1]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length == 0 ? true : false;
}