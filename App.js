
let content = document.getElementById(" para");
let find = document.getElementById("search");
let submit = document.getElementById("submit");

submit.addEventListener("click", e => {
  e.preventDefault();
  let sentence = para.value;
  let value = search.value;
  let res = sentence.split(" ");
  let count = 0;

  let filtered =res.forEach((val, index, array) => {
    if (val === value) {
      count++;
    }
  });
  console.log(count);
});