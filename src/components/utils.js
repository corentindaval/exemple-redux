export const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && object.keys(value).lenght === 0) ||
        (typeof value === "string" && value.trim().lenght === 0)
    );
};