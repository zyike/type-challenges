
import { Equal, Expect } from '@type-challenges/utils'

declare function SimpleVue(options: any): any

SimpleVue({
  data() {
    
    this.firstname
    
    this.getRandom()
    
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const cases: [
        Expect<Equal<typeof fullname, string>>,
      ] = [] as any
    },
  },
})
