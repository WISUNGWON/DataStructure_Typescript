export {};
const arr = [1, 2, 3, 4];
let visited = [false, false, false, false];
let selectedNums: number[] = [];
const subset = (cnt: number): void => {
  if (cnt === visited.length) {
    console.log(selectedNums);
    return;
  }

  visited[cnt] = true;
  selectedNums.push(arr[cnt]);
  subset(cnt + 1);
  visited[cnt] = false;
  selectedNums.pop();
  subset(cnt + 1);
};

subset(0);
