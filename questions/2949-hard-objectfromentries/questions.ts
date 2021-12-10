import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type ObjectFromEntries<T> = any

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];


type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>,Model>>,
]
