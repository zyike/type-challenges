import { Equal, Expect } from '@type-challenges/utils'

declare function defineStore(store: unknown): unknown

const store = defineStore({
  id: '',
  state: () => ({
    num: 0,
    str: '',
  }),
  getters: {
    stringifiedNum() {
      
      this.num += 1

      return this.num.toString()
    },
    parsedNum() {
      return parseInt(this.stringifiedNum)
    },
  },
  actions: {
    init() {
      this.reset()
      this.increment()
    },
    increment(step = 1) {
      this.num += step
    },
    reset() {
      this.num = 0

      
      this.parsedNum = 0

      return true
    },
    setNum(value: number) {
      this.num = value
    },
  },
})


store.nopeStateProp

store.nopeGetter

store.stringifiedNum()
store.init()

store.init(0)
store.increment()
store.increment(2)

store.setNum()

store.setNum('3')
store.setNum(3)
const r = store.reset()

type _tests = [
  Expect<Equal<typeof store.num, number>>,
  Expect<Equal<typeof store.str, string>>,
  Expect<Equal<typeof store.stringifiedNum, string>>,
  Expect<Equal<typeof store.parsedNum, number>>,
  Expect<Equal<typeof r, true>>
]
