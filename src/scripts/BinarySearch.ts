export default function binary_search(arr: number[], lo: number, hi: number, find: number) {
  const middle = Math.floor((lo + (hi - lo) / 2))
  const currentValue = arr[middle]

  if (lo > hi) {
    return false
  }

  if (currentValue === find) {
    return true;
  } else if (currentValue > middle) {
    hi = middle
  } else {
    lo = middle + 1
  }

  return binary_search(arr, lo, hi, find)

}