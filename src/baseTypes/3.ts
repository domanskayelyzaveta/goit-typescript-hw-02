// let some: any;
// some = 'Text';
// let str: string;
// str = some;

// export { };

////////////////////

let some: unknown;
some = 'Text';
let str: string;


if (typeof some === "string") {
    str = some;
} else {
    console.error("Not a string");
}  

export { };