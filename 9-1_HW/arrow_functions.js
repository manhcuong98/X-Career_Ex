// rewrite all function below with arow functions and try to avoid curly braces {} as much as possible

const life = () => {
  const foo = (x) => {
    var y = x * 2;
    return (bar = (z) => {
      if (z.length > 3) {
        return z.map(
          (bar = (v) => {
            if (v > 3) return v + y;
            else return bar(v * 4);
          })
        );
      } else {
        var obj = [];
        setTimeout(
          (bam = () => {
            obj.length = 1;
            obj[0] = this.webkitCancelAnimationFrame;
          }),
          bind(this),
          100
        );
        return obj;
      }
    });
  };
  var p = foo(2);
  var list1 = [1, 3, 4];
  var list2 = list1.concat(6);

  list1 = p.call({ w: 42 }, list1);
  list2 = p(list2);

  setTimeout(() => {
    console.log(
      list1[0] ===
        list2.reduce((s, v) => {
          return s + v;
        }, 0)
    );
  }, 200);
};
console.log(life());
