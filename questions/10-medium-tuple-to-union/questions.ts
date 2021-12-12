import { Equal, Expect } from '@type-challenges/utils'

const a = [123, '456', true]

type ValueType = typeof a[number]

type TupleToUnion<T extends readonly any[]> = {
  [K in T[number]]: K;
}

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
