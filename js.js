var random;

function r() {
    var innum = parseInt(document.getElementById("su").value);
    random = Math.floor(Math.random() * innum);
    var a = [innum];
    for(var i = 0;i<=a.length-1;i++){
        for(var j = i + 1;j <= a.length;i++){
            a[i] = j;
            break;
        }
    }
}
function click() {
    r();
}
