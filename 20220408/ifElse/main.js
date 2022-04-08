let isShow = true;
let checked = false;

if(isShow) { // (조건), ( ) 안의 조건이 참이면 코드를 실행한다.
  console.log('Show!'); // Show!
}

if (checked) { // ( )안의 조건이 거짓이므로 코드를 실행하지 않는다.
  console.log('Checked');
}

// else

if(isShow) {
  console.log('Show!');
} else {
  console.log('Hide?');
}