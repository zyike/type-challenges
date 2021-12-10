import { Equal, Expect } from '@type-challenges/utils'

type Diff<O, O1> = any

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar,Foo>, { gender: number }>>
]
