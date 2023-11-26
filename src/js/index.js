// window.addEventListener("load", function () {
//   // ローディング画面の要素を取得
//   const loader = document.querySelector(".loader");

//   // ローディング画面を非表示にするためにクラスを削除
//   loader.classList.add("hide-loader");

//   // ローディング画面を非表示にするアニメーションの時間（ミリ秒）
//   const animationDuration = 1000; // 1秒

//   // アニメーションが終了したらローディング画面を完全に非表示にする
//   setTimeout(function () {
//     loader.style.display = "none";
//   }, animationDuration);
// });

// ページの読み込みが完了したらローディング画面を非表示にする
// window.addEventListener("load", () => {
//   const loader = document.querySelector(".loader");
//   loader.classList.add("none__loader");
//   console.log(loader);
// });

// 10秒後に実行パターン
// window.addEventListener("load", () => {
//   const loader = document.querySelector(".loader");
//   setTimeout(() => {
//     loader.classList.add("none__loader");
//   }, 10000);
// });

/* This code is adding an event listener to the window object for the "load" event. When the page
finishes loading, the code inside the event listener will be executed. */

window.addEventListener("load", () => {
  // sessionStorageに"key"が設定されていない場合、初回アクセスとして扱う
  if (!sessionStorage.getItem("key")) {
    // ローディング画面を表示
    const loader = document.querySelector(".loader");
    loader.classList.add("none__loader");
    // 初回アクセスフラグを設定
    sessionStorage.setItem("key", "a");
  }
});
