##20180923  
在reducer.js裡面使用的 Object.assign() 可參考 [這裡](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 的敘述，  
其中因為 **來源物件之間又有相同的屬性名稱，則後者會將前者覆寫** 。所以修改後的state才會在assign時放在原本的state後方。  

##20180924  
在const的用法中，如果是物件或陣列，在宣告後修改其值是不會有錯的。可參考 [此連結](https://pjchender.blogspot.com/2017/01/const.html)  
EX:  
const a = { cat: 'white' };  
const b = { dog: 'yellow' };  
a.cat = 'black'; // a還是指向原本的記憶體位置，所以不會有錯誤。  
console.log(a); // 會是{ cat: 'black' }  
b = { dog: 'pink' }; // 這樣是將b重新指向新的記憶體位置，所以會有錯誤。  
console.log(b); // 會是Uncaught SyntaxError: Identifier 'b' has already been declared  
---  
`mapStateToProps` 是辨別 container 的用途的方法。  
---  
[Array.prototype.filter()的參考資料](https://wcc723.github.io/javascript/2017/06/29/es6-native-array/#Array-prototype-filter)  
---  
教學裡的link.jsx中：  
import React, { PropTypes } from 'react';  
因為React.PropTypes 自 React v15.5 已捨棄。改用 prop-types 代替：  
`npm install --save prop-types`  
且link.jsx的import改為：  
import React from 'react';  
import PropTypes from 'prop-types';  