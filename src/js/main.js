//トレンド

// const arr = ["aaa", "bbb", "ccc"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((c) => {
//   console.log(c);
// });

// arr.map((c) => {
//   console.log(c);
// });

// クラス名が "btn" の要素を選択する例
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  //どちらか
  console.log(btn);
  console.log(e.target);
});

const obj = {
  id: 1,
  // name: "Tanaka",
  age: 20,
};

// if (obj.name) {
//   console.log(obj.name);
// }

console.log(obj?.name);
