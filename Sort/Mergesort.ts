const merge = (left: number[], right: number[]) => {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
};

const mergeSort = (array: number[]) => {
  if (array.length < 2) {
    return array;
  }
  const half = array.length / 2;
  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
};

console.log(mergeSort([7, 8, 9, 3, 2, 1, 4, 5]));
