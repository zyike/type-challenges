import { Equal, Expect } from '@type-challenges/utils'

type If<C, T, F> = any

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]


type error = If<null, 'a', 'b'>
