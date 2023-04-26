export const isEmptyArr = (array) => {
    return (
        Array.isArray(array) &&
        array &&
        array.length > 0
    );
};