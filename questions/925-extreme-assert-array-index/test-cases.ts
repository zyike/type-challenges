const matrix = [
  [3, 4],
  [5, 6],
  [7, 8],
]

assertArrayIndex(matrix, 'rows')

let sum = 0

for (let i = 0 as Index<typeof matrix>; i < matrix.length; i += 1) {
  const columns: number[] = matrix[i]

  : number | undefined in not assignable to number
  const x: number[] = matrix[0]

  assertArrayIndex(columns, 'columns')

  for (let j = 0 as Index<typeof columns>; j < columns.length; j += 1) {
    sum += columns[j]

    : number | undefined in not assignable to number
    const y: number = columns[i]

    : number | undefined in not assignable to number
    const z: number = columns[0]

    : number[] | undefined in not assignable to number[]
    const u: number[] = matrix[j]
  }
}

const a: string[] = []

assertArrayIndex(a, 'a')

for (let p = 0 as Index<typeof a>; p < a.length; p += 1) {
  const value: string = a[p]

  : string | undefined is not assignable to string
  const z: string = a[2]
}

a.push('qux')
: number is not assignable to string
a.push(3)

for (const value of a) {
  const other: string = value
}

const b: number[] = []

assertArrayIndex(b, 'b')

for (let p = 0 as Index<typeof a>; p < b.length; p += 1) {
  : number | undefined is not assignable to string
  const value: string = b[p]
}

const c: string[] = []

assertArrayIndex(c, 'c')

for (let p = 0; p < c.length; p += 1) {
  : string | undefined is not assignable to string
  let value: string = c[p]

  : string | undefined is not assignable to string
  value = c[0 as Index<typeof a>]
}

const d: readonly number[] = []

assertArrayIndex(d, 'd')

for (let p = 0 as Index<typeof d>; p < d.length; p += 1) {
  const value: number = d[p]

  : only permits reading
  d[2] = 3
}

: push does not exist on readonly
d.push(3)

const e: [number] = [0]

: [number] is not assignable to never
assertArrayIndex(e, 'e')

const f: readonly [boolean] = [false]

: [boolean] is not assignable to never
assertArrayIndex(f, 'f')

const tuple = [5, 7] as const

: readonly [5, 7] is not assignable to never
assertArrayIndex(tuple, 'tuple')
