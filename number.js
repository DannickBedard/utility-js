export const isNumeric = (str) => {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}


export const countDecimalPlaces = (num) => {
    // Convert number to string
    const str = num.toString();

    // Use regular expression to match decimal portion of string
    const match = str.match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

    // If there is no match, return 0
    if (!match) {
        return 0;
    }

    // Get the decimal portion of the match and return its length
    const decimals = match[1] ? match[1].length : 0;
    return decimals;
}