var son = +prompt("Qo'ylar sonini kiritinglar");

if (isNaN(son) || son <= 0) {
  console.log("NaN");
} else {
  var qoylar = '';

  for (var i = 1; i <= son; i++) {
    if (i == 1) {
      qoylar += i + " qo'y";
    } else {
      qoylar += ' ' + i + " qo'ylar";
    }
  }

  console.log(qoylar);
}
