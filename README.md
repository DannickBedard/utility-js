# utility-js

### Set to null object
```
      let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
      let setNull = obj => setAll(obj, null);
      setNull(this.inspectionDetail);
```
