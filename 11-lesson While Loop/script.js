for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 3; j++  ) {
    document.write(i);
  }
}






for (let i = 0; i <= 2; i++) {
  console.log(i + "- First level loop");
  for (let j = 0; j <= 3; j++) {
    console.log(j + " -- Second level loop");
  }
}







let i = 0;
while (i <= 2) {
  console.log(i + "- First level loop");
  i++;
  let j = 0;
  while (j <= 5) {
    console.log(j + "-- Second level loop");
    j++;
  }
}


