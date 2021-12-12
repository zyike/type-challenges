import { Equal, Expect } from '@type-challenges/utils'

type MyAwaited<T = Promise<any>> = T extends Promise<infer V> ? V extends Promise<any> ? MyAwaited<V> : V :never

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

type error = MyAwaited<number>
