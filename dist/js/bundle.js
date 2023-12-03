/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function () {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/js/index.js":
      /*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
      /***/ function (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n// window.addEventListener("load", function () {\n//   // ローディング画面の要素を取得\n//   const loader = document.querySelector(".loader");\n\n//   // ローディング画面を非表示にするためにクラスを削除\n//   loader.classList.add("hide-loader");\n\n//   // ローディング画面を非表示にするアニメーションの時間（ミリ秒）\n//   const animationDuration = 1000; // 1秒\n\n//   // アニメーションが終了したらローディング画面を完全に非表示にする\n//   setTimeout(function () {\n//     loader.style.display = "none";\n//   }, animationDuration);\n// });\n\n// ページの読み込みが完了したらローディング画面を非表示にする\n// window.addEventListener("load", () => {\n//   const loader = document.querySelector(".loader");\n//   loader.classList.add("none__loader");\n//   console.log(loader);\n// });\n\n// 10秒後に実行パターン\n// window.addEventListener("load", () => {\n//   const loader = document.querySelector(".loader");\n//   setTimeout(() => {\n//     loader.classList.add("none__loader");\n//   }, 10000);\n// });\n\nwindow.addEventListener("load", () => {\n  // sessionStorageに"key"が設定されていない場合、初回アクセスとして扱う\n  if (!sessionStorage.getItem("key")) {\n    // ローディング画面を表示\n    const loader = document.querySelector(".loader");\n    loader.classList.add("none__loader");\n\n    // 初回アクセスフラグを設定\n    sessionStorage.setItem("key", "a");\n  }\n});\n\n//# sourceURL=webpack://yarn_js/./src/js/index.js?'
        );

        /***/
      },

    /***/ "./src/js/main.js":
      /*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
      /***/ function (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n//トレンド\n\n// const arr = ["aaa", "bbb", "ccc"];\n// for (let i = 0; i < arr.length; i++) {\n//   console.log(arr[i]);\n// }\n\n// arr.forEach((c) => {\n//   console.log(c);\n// });\n\n// arr.map((c) => {\n//   console.log(c);\n// });\n\n// クラス名が "btn" の要素を選択する例\n// const btn = document.querySelector(".btn");\n\n// btn.addEventListener("click", (e) => {\n//   //どちらか\n//   // console.log(btn);\n//   btn.classList.toggle("active");\n//   console.log(e.target);\n// });\n\n// const obj = {\n//   id: 1,\n//   // name: "Tanaka",\n//   age: 20,\n// };\n\n// if (obj.name) {\n//   console.log(obj.name);\n// }\n\n// console.log(obj?.name);\n\n// const input = document.querySelector(".input");\n\n// const submit = document.querySelector(".submit");\n\n// input.addEventListener("input", (e) => {\n//   let val = e.target.value;\n//   console.log(val);\n//   console.log(e);\n// });\n\n// submit.addEventListener("click", (e) => {\n//   // ディフォルトの自動動作をリセット\n//   e.preventDefault();\n//   console.log(e);\n// });\n\n// const container = document.querySelector(".container");\n// const attr = container.getAttribute("id");\n// console.log(attr);\n\n// container.setAttribute("class", "wrapper");\n\n// container.classList.add("iii");\n// container.classList.remove("iii");\n\n//# sourceURL=webpack://yarn_js/./src/js/main.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The require scope
  /******/ var __webpack_require__ = {};
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/make namespace object */
  /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ __webpack_modules__["./src/js/index.js"](0, {}, __webpack_require__);
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/js/main.js"](0, __webpack_exports__, __webpack_require__);
  /******/
  /******/
})();
