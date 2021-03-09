// https://leetcode.com/problems/defanging-an-ip-address/

/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let resStr = "";
    for(const [val,i] of address) {
        console.log(i,val);
        if(val !== ".") {
            resStr = resStr + val;
        } else {
            resStr = resStr + "[.]"
        }
    }
    return resStr;
};

const result = defangIPaddr("1.1.1.1");

console.log(result);