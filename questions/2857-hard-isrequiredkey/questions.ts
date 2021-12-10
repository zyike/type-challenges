import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type IsRequiredKey<T, K extends keyof T> = any

type cases = [
    Expect<Equal<IsRequiredKey<{ a: number, b?: string },'a'>, true>>,
    Expect<Equal<IsRequiredKey<{ a: number, b?: string },'b'>, false>>,
    Expect<Equal<IsRequiredKey<{ a: number, b?: string },'b' | 'a'>, false>>,
]
