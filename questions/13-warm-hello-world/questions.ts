import { Equal, Expect, NotAny } from '@type-challenges/utils'

type HelloWorld = any // expected to be a string

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]
