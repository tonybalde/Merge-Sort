function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursive calls to mergeSort for each half
  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  // Merge the two sorted halves
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two halves by comparing elements
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Append any remaining elements
  merged.push(...left.slice(leftIndex));
  merged.push(...right.slice(rightIndex));

  return merged;
}
