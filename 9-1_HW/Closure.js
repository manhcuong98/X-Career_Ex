/*
1. CLOSURE là gì? 
Closure là những function tham chiếu đến các biến tự do (free avariable) tách biệt.
Nói cách khác, function được định nghĩa trong closure sẽ ghi nhớ môi trường (environment) trong nó được tạo ra.


2. Let và var đối với Clousure scope khác nhau như thế nào?
*/

//Ex: fix code below ( anywhrew) so the console.log will display true

var x = 2,
  fns = [];

(function () {
  var x = 5;
  for (let i = 0; i < x; i++) {
    fns[i] = () => i;
  }
})();

console.log(x * 2 === fns[x * 2]());
