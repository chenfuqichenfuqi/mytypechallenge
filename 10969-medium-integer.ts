// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

let x = 1
let y = 1 as const

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.0>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
]

// ============= Your Code Here =============
// type IsZero<T> = T extends `0${infer R}` ? (R extends '' ? true : IsZero<R>) : false
// type Integer<T extends number> = `${T}` extends `${infer A}.${infer B}`
//   ? IsZero<B> extends true
//     ? A
//     : never
//   : T

type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never
type test = Integer<typeof x>
