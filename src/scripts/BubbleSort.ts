export default function BubbleSort(array: number[]): number[] {
  let arr: number[] = []
  array.forEach((a: number) => arr.push(a))
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
