# 퀵 정렬
 - First select an element which is to be called as pivot element.
 - Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it’s left and greater than pivot is to it’s right.
 - Finally, perform the same operations on left and right side elements to the pivot element.

# 정렬 방법
 - First find the “pivot” element in the array.
 - Start the left pointer at first element of the array.
 - Start the right pointer at last element of the array.
 - Compare the element pointing with left pointer and if it is less than the pivot element, then move the left pointer to the right (add 1 to the left index). Continue this until left side element is greater than or equal to the pivot element.
 - Compare the element pointing with right pointer and if it is greater than the pivot element, then move the right pointer to the left (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.
 - Check if left pointer is less than or equal to right pointer, then swap the elements in locations of these pointers.
 - Increment the left pointer and decrement the right pointer.
 - If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer.

# 장점
 - 속도가 빠르다. 시간 복잡도가 O(nlog₂n)를 가지는 다른 정렬 알고리즘과 비교했을 때도 가장 빠르다.
 - 추가 메모리 공간을 필요로 하지 않는다.
퀵 정렬은 O(log n)만큼의 메모리를 필요로 한다

# 단점
 - 정렬된 리스트에 대해서는 퀵 정렬의 불균형 분할에 의해 오히려 수행시간이 더 많이 걸린다.
 - 퀵 정렬의 불균형 분할을 방지하기 위하여 피벗을 선택할 때 더욱 리스트를 균등하게 분할할 수 있는 데이터를 선택한다.
 - EX) 리스트 내의 몇 개의 데이터 중에서 크기순으로 중간 값(medium)을 피벗으로 선택한다.


# 시간복잡도
 - N * logN

### ref
( https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html )
