module.exports = function check(str, bracketsConfig) {
	
    let openSk = [];
	let sArray = str.split('');
	
    for ( let i = 0;  i < str.length; i++) {
        for ( let j = 0; j < bracketsConfig.length; j++) {
            if (sArray[i] === bracketsConfig[j][1] && openSk[openSk.length - 1] === bracketsConfig[j][0]) {
                openSk.pop();  
            }
             else if (sArray[i] === bracketsConfig[j][0]) {
				openSk.push(sArray[i]);
            }
        }
    }
	return (openSk.length === 0) ? true : false;
}
