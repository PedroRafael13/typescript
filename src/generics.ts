function getFirstElement<T>(data: T[]): T | null {
  if (!data.length) {
    return null
  };

  const [firstElement] = data;
  return firstElement;
};

const stringArray: string[] = ["Pedro", "Rafael", "Ana"]
const stringNumber: number[] = [1, 2, 4,]

console.log(getFirstElement<string>(stringArray))
console.log(getFirstElement<number>(stringNumber))