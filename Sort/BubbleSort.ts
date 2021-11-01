// ref : https://www.aritsltd.com/blog/frontend-development/cannot-redeclare-block-scoped-variable-the-reason-behind-the-error-and-the-way-to-resolve-it/
export {};
let targetArr = [9, 8, 1, 3, 2];

const swap = (i: number, j: number, arr: number[]) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const bubbleSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) swap(j, j + 1, arr);
    }
  }
};

console.log(targetArr);
bubbleSort(targetArr);
console.log(targetArr);
