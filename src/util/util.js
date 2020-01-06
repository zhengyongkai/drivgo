//字符串变成数组
function convert2Array(str) {
    console.log(str ? str.split(',') : [])
    return str ? str.split(',') : [];
}


export {
    convert2Array
}
