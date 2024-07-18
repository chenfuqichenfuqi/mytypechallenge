// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
  Expect<Equal<EndsWith<'abc', 'ac'>, false>>,
  Expect<Equal<EndsWith<'abc', ''>, true>>,
  Expect<Equal<EndsWith<'abc', ' '>, false>>
]

// ============= Your Code Here =============
type reverse<T extends string> = T extends `${infer F}${infer R}` ? `${reverse<R>}${F}` : T
type EndsWith<T extends string, U extends string> = reverse<T> extends `${reverse<U>}${infer R}`
  ? true
  : false
