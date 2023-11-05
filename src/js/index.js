window.addEventListener("load", function () {
  // ローディング画面の要素を取得
  const loader = document.querySelector(".loader");

  // ローディング画面を非表示にするためにクラスを削除
  loader.classList.add("hide-loader");

  // ローディング画面を非表示にするアニメーションの時間（ミリ秒）
  const animationDuration = 1000; // 1秒

  // アニメーションが終了したらローディング画面を完全に非表示にする
  setTimeout(function () {
    loader.style.display = "none";
  }, animationDuration);
});
