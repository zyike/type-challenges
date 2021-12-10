import { Equal, Expect } from '@type-challenges/utils'

type Fibonacci<T extends number> = any

type cases = [
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]
