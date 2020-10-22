module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 == 1) {
        return false;
    }
    
    var array = [];
    
    for (var i = 0; i < str.length; i++) {
        
        var chars = false;
        
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0]) {
                chars = true;
                if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
                    if (array[array.length - 1] == bracketsConfig[j][0]) {
                        array.pop();
                        break;
                    }
                }
                array.push(bracketsConfig[j][1]);
                break;
            }
        }
        
        if (!chars) {
            if (array.length == 0 || str[i] != array[array.length - 1]) {
                return false;
            }
            array.pop();
        }
    }
    return array.length == 0 ? true : false;
}