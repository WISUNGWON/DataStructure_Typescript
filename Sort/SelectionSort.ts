let targetArr = [9, 8, 1, 3, 2]; // in JS Array is Pass by Refernece

const swap = (i: number, j: number, arr: number[]) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      swap(i, minIdx, arr);
    }
  }
};

console.log(targetArr, " : Before");
selectionSort(targetArr);
console.log(targetArr, " : After");
