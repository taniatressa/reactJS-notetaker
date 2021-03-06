// reverse string

//concatenation done well in modern browsers but slow in IE8

function revString(str) {
  var strLength = str.length - 1,
    revStr = '',
    i;
  for (i = strLength; i >= 0; i--) {
    revStr += str[i];

  }
  return revStr;
}

console.log(revString("my name"));

//-----using array but complexity is o(n)----
function revString1(str) {
  if (!str || typeof str != 'string' || str.length < 2) return str;

  var revArr = [],
    i, strLength = str.length - 1;
  for (i = strLength; i >= 0; i--) {
		revArr.push(str[i]);
  }
  return revArr.join('');
}

console.log(revString1("my name"));

//----reducing complexity travesing till half------

function revString2(str) {
  if (!str || typeof str != 'string' || str.length < 2) return str;
 str = str.split('');
  var revstr = '',
    i, len = str.length,halfLength = Math.floor(str.length/2)-1
  for (i = 0; i <= halfLength; i++) {
		revStr = str[len-i-1];
    str[len-i-1] = str[i];
    str[i] = revStr;
  }
  return str.join('');
}

console.log(revString2("my name"));

//---using resursion-----

function reverseString3(str) {
  if (str === "") {
    return "";
  } else {
    console.log(str.charAt(0))
    return reverseString3(str.substr(1)) + str.charAt(0);
  }

}
//---built in method--
function reverseString4(str) {
  if (!str || typeof str !== 'string' || str.length < 2) {
    return str;

  }
  
return str.split('').reverse().join('');
}

console.log(reverseString3("my name"));
console.log(reverseString4("my name"));

//-------------reverse words but keep the numbers---------------
function reverseWordsKeepNumbers(str) {
  return str.split(/([^\d\.])/).reverse('').join('');
}
console.log(reverseWordsKeepNumbers('my nam34.89e is .45'));

//incrementing and decrementing using 2 for loops
function revereString5(str) {
  var o = [],
    strLength = str.length - 1,
    j, i;

  for (i = strLength, j = 0; i >= 0; i--, j++) {
    o[j] = str[i]
  }
  return o.join('');
}
console.log(revereString5("my name"));

//incrementing for loop with array pushing
function reverseString6(str) {
  var strLength = str.length,
    i, o = [];
  for (i = 0; i < strLength; i--) {
    o.push(str.charAt(strLength - i));
  }
  return o.join('');
}
console.log(reverseString6("my name"));


