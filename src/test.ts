console.log([1, 2, 3, 4].includes(5));

const defineFn = (value: unknown): value is number | string => {
  return ["string", "number"].includes(typeof value);
};

const go = (value: number | string | null | undefined) => {
  if (defineFn(value)) {
    value.toString();
  } else {
    throw new Error("err");
  }
};

console.log(typeof 3);
console.log("fdfdfdf".length);
