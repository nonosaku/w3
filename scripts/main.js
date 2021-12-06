// Image switcher code

let myImage = document.querySelector('img');
//documentは組み込みのオブジェクト
//ブラウザが表示しているページ、DOM(Document Object Modelの略)とも呼ぶ。
//querySelectorはページの一部(HTML要素)を呼ぶ関数。

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','tsuda.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  //promptは組み込みの関数。prompt windowを表示してユーザ入力させる。
  
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    //入力データを特別な場所(変数ではないファイルなどに相当)に保存する。
    myHeading.innerHTML = 'こんにちは, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'さようなら, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
