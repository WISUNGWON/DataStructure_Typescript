export {};
const arr = [1, 2, 3, 4];
const n = 2;
let visited = [false, false, false, false];
let selectedNums: number[] = [];
const permutation = (cnt: number): void => {
  if (cnt === n) {
    console.log(selectedNums);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selectedNums.push(arr[i]);
    permutation(cnt + 1);
    visited[i] = false;
    selectedNums.pop();
  }
};

permutation(0);
