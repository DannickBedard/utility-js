# utility-js

### Set object and its child to null
```js
let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
let setNull = obj => setAll(obj, null);
setNull(this.inspectionDetail);
```

### Delete HTML tag in string
``` js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
```

### Format a number to a string with comma
```js
function numberToStringWithComma(number) {
    // convert number to string
    let str = String(number);
    
    let s = '';
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      s = str[i] + s
      count++
      // add a comma to every three numbers
      if (count % 3 == 0 && i != 0) {
        s = ',' + s
      }
    }
    return s
}
```
