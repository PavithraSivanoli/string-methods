//string methods
//var a="she is an angle"; // length
//len=a.length;
//console.log(len)
  //replace
//result=a.replace('a','n')
//console.log(result)
//indexof
//var index=a.indexOf('a')
//console.log(index)
//startswith            //returns boolean
//res=a.startsWith('is')
//console.log(res)
//endswith
//res1=a.endsWith('angle')
//console.log(res1)
//to upper case
//res2=a.toUpperCase();
//console.log(res2);
//TOLOWER
//var msg="SHE IS PRETTY";
 //lower=msg.toLowerCase();
//console.log(lower)
 //includes
 //var include=a.includes('is')  //boolean
 //console.log(include);
 //repeat
// n='nithiya'
// res=a.repeat(2);
 //document.write(res)
 //index1=n.charAt(3);
 //console.log(index1);     //indexof and charAt is difference
 //substring
 //res=n.substring(0,2)   //0 to within the value
 //console.log(res);
 //padstart
// var padstart=n.padStart(10,"&");
 //console.log(padstart)
// var padend=n.padEnd(10,"()")
 //console.log(padend)
//slice
//let a="she is an amazing  "
//res=a.slice(0,8);
//console.log(res);
//trim
//res1=a.trim();
// console.log(res1);   //removing white space
//split
//a="she is pretty";
//res=a.split(": :")
//console.log(res)  //array output
//concat
//str=a.concat(" she is beauty")
//console.log(str);
//replaceall
//var msg="ball bat"
//str=msg.replaceAll('b','c')//replace entire string and replace it 
//console.log(str);



//string methods:
//1.charAt it will display the character
var s=" JAVASCRIPT";
var s2="     PAVI";
var s3="Learn EASY AND ALSO Learn ONCE";
console.log(s2.charAt(3));
//2.charCodeAt it will display the binary value of that character
console.log(s2.charCodeAt(3));
//3.concat
console.log(s.concat(s2));
//4.startsWith//returns boolean
//console.log(s.startsWith("J"));
//5.endsWith//returns boolean
console.log(s2.endsWith("I"));
//6.fromCharCode it will display the binary value character
console.log(String.fromCharCode(73));
//7.includes()it returns true or false
console.log(s2.includes("thara"));
//8.indexOf()it will display the string index position
console.log(s3.indexOf("LEARN"));
//9.lastIndexOf
console.log(s3.lastIndexOf("LEARN"));
//10.match g means lowercase in array i means uppercase both gi upper and lower
console.log(s3.match(/Learn/gi));
//11.repeat()it will display the string how many times we want 
console.log(s2.repeat(5));
//12.replace() change the string upper to lower case
console.log(s3.replace(/earn/g,"EARN"));
console.log(s3.replace(/E/i,"earn"));
//13.search it will search the start index position
console.log(s3.search("AND"));
//14.slice starting index position and ending index position same as //15.substring
console.log(s3.slice(0,10));
//16.split
console.log(s3.split(" "));
//17.substr
console.log(s3.substr(5,15));
//18.toUpperCase it will change the lowercase to uppercase
console.log(s3.toUpperCase( ));
//19.toLowerCase it will change the uppercase to lowercase
console.log(s3.toLowerCase( ));
//20.trim()removes the white spaces
console.log(s2.trim( ));
console.log(s3.lastIndexOf("LEARN"));
console.log(s3.indexOf("LEARN"));

var n="THE MORNING IS UPON US."
console.log(n.slice(8,4));
console.log(n.substring(8,4));
console.log(n.startsWith("T"));
console.log(n.charCodeAt(8));
console.log(String.fromCharCode(72));
console.log(n.split(" ",3));
console.log(n.replace(/Morn/i,"Morn"));
console.log(n.substr(5,15));
console.log(n.charAt(5));
console.log(s2.charCodeAt(5));

//console.log(s3.replace(/earn/g,"EARN"));
console.log(s.replace(/EARN/i,"earn"));

/*//match
const msg="javascript is a programming language.";
const exp='is';
res=msg.match(exp);
console.log(res);*/




















