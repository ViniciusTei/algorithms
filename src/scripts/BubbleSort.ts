export default function BubbleSort(array: number[]): number[] {
  const arr = []
  array.foreach => a => arr.push(a)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j ++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
