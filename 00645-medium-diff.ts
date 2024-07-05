// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
]

// ============= Your Code Here =============
//https://github.com/type-challenges/type-challenges/issues/3014
type Diff<O extends Record<string, any>, O1 extends Record<string, any>> = {
  [K in keyof (O & O1) as K extends keyof (O | O1) ? never : K]: (O & O1)[K]
}
