const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (previousValue, currentValue) => currentValue(previousValue), comp);
}


export default compose();

