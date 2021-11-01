export {};
let targetArr = [9, 8, 1, 3, 2];

const InsertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
      } else {
        break; // key가 더 클 경우 정렬이 보장되어 있으므로, 이미 정렬 된 배열에서 데이터 삽입시 최선의 경우 O(n)으로 정렬 가능
      }
    }
    arr[j + 1] = key;
  }
};

console.log(targetArr);
InsertionSort(targetArr);
console.log(targetArr);
