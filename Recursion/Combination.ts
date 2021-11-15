const arr = [1, 2, 3, 4];
const n = 2;
let selectedNums: number[] = [];

const comb = (startIdx: number, cnt: number): void => {
  if (cnt === n) {
    console.log(selectedNums);
    return;
  }

  for (let i = startIdx; i < arr.length; i++) {
    selectedNums.push(arr[i]);
    comb(i + 1, cnt + 1);
    selectedNums.pop();
  }
};

comb(0, 0);
