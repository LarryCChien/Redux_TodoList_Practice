##20180923
在reducer.js裡面使用的 Object.assign() 可參考 [這裡](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 的敘述，
其中因為 **來源物件之間又有相同的屬性名稱，則後者會將前者覆寫** 。所以修改後的state才會在assign時放在原本的state後方。