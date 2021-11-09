# 삽입 정렬
 - Merge sort uses the concept of divide-and-conquer to sort the given list of elements
 - It breaks down the problem into smaller subproblems until they become simple enough to solve directly.

# 정렬 방법
 - Split the given list into two halves.
 - Continue dividing the subarrays in the same manner until you are left with only single element arrays.
 **- It takes logN until this phase.**
 - Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted. **(It takes N to sort ever single subarrays)**
 - Repeat step 3 unit with end up with a single sorted array.
  

# 장점
 - 안정적인 정렬 방법 : 데이터의 분포에 영향을 덜 받음. 입력 데이터가 무엇이든 정렬되는 시간은 항상 동일. (최악, 평균, 최선 모두 N * logN)
 - 레코드를 연결 리스트로 구성하면, 링크의 삽입 삭제의 시간이 O(1)(삽입, 삭제 공간의 이전 노드를 알 경우)이므로 데이터의 이동은 무시할 수 있을 정도로 작아짐. 즉, 제자리 정렬로 구현할 수 있음.
 - 크기가 큰 레코드를 정렬할 경우 연결리스트를 사용하면 합병정렬은 안정적이고 효율적인 정렬이 됨.

# 단점
 - 레코드를 배열로 구성하면, 데이터의 이동을 위한 임시 배열이 필요함. (제자리 정렬이 아님)

# 시간복잡도
 - 배열을 분할하는데 (logN)
 - 분할 된 배열 각 단계마다 정렬하는 데 (N)
 - 병합 단계에서 이동 연산 (2N)
 - N * logN * 2N = 3N * logN