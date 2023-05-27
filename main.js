var one = +prompt("birinchi sonni kiriting");
var twoo = +prompt("ikkinchi sonni kiriting");
var thre = +prompt("uchinchi sonni kiriting");




if (one < twoo && one > thre || one > twoo && one < thre  ) {
    console.log( one );
} else if (twoo < one && twoo > thre || twoo > one && twoo < thre){
    console.log(  twoo);
} else if (thre < one && thre > twoo || thre > one && thre < twoo) {
    console.log(thre);
}