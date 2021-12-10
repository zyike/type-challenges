import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Reverse<T> = any

type cases = [
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
]
