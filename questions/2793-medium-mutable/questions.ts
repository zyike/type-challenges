import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Mutable<T> = any

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
]
