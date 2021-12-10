import { Equal, Expect } from '@type-challenges/utils'

type Last<T extends any[]> = any

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]
