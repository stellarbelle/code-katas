//binary chop
export const chop = (int, arr) => {
  let target = -1;
  let start = 0;
  while (arr.length) {
    const midIdx = arr.length === 1 ? 0 : parseInt(arr.length / 2);
    const mid = arr[midIdx];
    if (mid === int) {
      intIdx = start + midIdx;
      break;
    } else if (midIdx === 0) {
      break;
    } else if (mid < int) {
      start += midIdx;
      arr = arr.slice(midIdx);
    } else {
      arr = arr.slice(start, -midIdx);
    }
  }
  return target;
};

export const chop2 = (int, arr, start = 0, target = -1) => {
  let target = intIndex;
  let arr = arr;
  const midIdx = arr.length === 1 ? 0 : parseInt(arr.length / 2);
  const mid = arr[midIdx];

  if (mid === int) {
    target = start + midIdx;
    return target;
  } else if (midIdx === 0) {
    return target;
  } else if (mid < int) {
    start += midIdx;
    arr = arr.slice(midIdx);
    return chop2(int, arr, start, target);
  } else {
    arr = arr.slice(0, -midIdx);
    return chop2(int, arr, start, target);
  }
};

export const chop3 = (int, arr) => {
  let target = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = arr.length === 1 ? 0 : parseInt((start + end) / 2);
    let midInt = arr[mid];
    if (midInt === int) {
      target = mid;
      break;
    }
    if (midInt > int) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return target;
};

export const chop4 = (int, arr, start = 0, end = arr.length - 1) => {
  let mid = arr.length === 1 ? 0 : parseInt((start + end) / 2);
  let midInt = arr[mid];
  if (start > end) return -1;
  if (midInt === int) return mid;
  if (midInt > int) {
    return chop4(int, arr, start, (end = mid - 1));
  } else {
    return chop4(int, arr, (start = mid + 1), high);
  }
};

const getRefInt = (arr) => {
  let max = arr.length - 1;
  let min = 0;
  let refIdx = Math.floor(Math.random() * (max - min) + min);
  let refInt = arr[refIdx];
  return [refInt, refIdx];
};
export const chop5 = (int, arr) => {
  const [refInt, refIdx] = getRefInt(arr);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {}
};

chop5(1, [1]);
