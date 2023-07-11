import { linear_search, binary_search, two_crystal_balls, bubblesort } from './scripts'

function test(name: string, callback: () => boolean) {
  const result = callback()
  console.log(name, ' ==> ' ,result ? '\x1b[32m Test passed \x1b[0m' : '\x1b[33m Test rejected') 
}

test('should linear search', () => { 
  const a = [1, 2, 3]
  const b = 2
  return linear_search(a, b) === true
})


test('should binary search', () => { 
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const b = 2
  return binary_search(a, 0, a.length, b) === true
})

test('should two ball', () => {
  const breaks = [false, false, false, false, false, false, false, true, true, true, true]

  return two_crystal_balls(breaks) === 7
})

test('shoul bubble sort', () => {
  const arr = [1, 3, 7, 4, 2]
  const response = bubblesort(arr)

  
})
