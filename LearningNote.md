### 20180923  
在reducer.js裡面使用的 Object.assign() 可參考 [這裡](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 的敘述，  
其中因為 **來源物件之間又有相同的屬性名稱，則後者會將前者覆寫** 。  
所以修改後的state才會在assign時放在原本的state後方。  

### 20180924  
在const的用法中，如果是物件或陣列，在宣告後修改其值是不會有錯的。可參考[此連結](https://pjchender.blogspot.com/2017/01/const.html)  
EX:  
```javascript
const a = { cat: 'white' };  
const b = { dog: 'yellow' };  
a.cat = 'black'; // a還是指向原本的記憶體位置，所以不會有錯誤。  
console.log(a); // 會是{ cat: 'black' }  
b = { dog: 'pink' }; // 這樣是將b重新指向新的記憶體位置，所以會有錯誤。  
console.log(b); // 會是Uncaught SyntaxError: Identifier 'b' has already been declared  
```

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

### 20180928  
導入ESLint並遵從AirBnB的規則，但 `空格` 則另行定應為： `空4格` 而非規則中的空2格。  
ESLint安裝在Global環境，並透過VS Code的擴充功能引用，而非各個Project的Webpack運行。  
如果要在Project的Webpack使用的話如下：  
```javascript
const CliEngine = require('eslint').CLIEngine;  
const eslintOptions = new CliEngine({  
    fixed: true,  
    emitError: true,  
    eslintPath: path.resolve(__dirname, '.eslintrc.json'),  
    eslint: {  
        configFile: path.resolve(__dirname, '.eslintrc.json'),  
    },  
});  
config.module.rules = [{  
    enforce: 'pre',  
    test: /\.jsx$/,  
    exclude: /node_modules/,  
    include: path.resolve(__dirname, 'app'),  
    loader: 'eslint-loader',  
    options: eslintOptions,  
}];  
```
