var random;
var innum;
function r() {
    var rand =Math.random();
    innum = parseInt(document.getElementById("su").value);
    random = Math.floor(rand * innum)+1;
    var a = [innum];
    for (var i = 0; i <= a.length - 1; i++) {
        for (var j = i + 1; j <= a.length; i++) {
            a[i] = j;
            break;
        }
        console.log("rand "+rand);
        console.log("innum " + innum);
        console.log("random " + random);


    }
    return random;
}
//     function n() {
//         document.getElementById("d").innerHTML="a[innum]";
//     }
// }
function result() {
    document.getElementById("d").innerHTML=r();
}

