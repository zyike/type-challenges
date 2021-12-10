import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type IsTuple<T> = any

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1}>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
]
