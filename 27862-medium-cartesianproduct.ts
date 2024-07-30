// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<CartesianProduct<1 | 2, 'a' | 'b'>, [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']>>,
  Expect<
    Equal<
      CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c'>,
      [2, 'a'] | [1, 'a'] | [3, 'a'] | [2, 'b'] | [1, 'b'] | [3, 'b'] | [2, 'c'] | [1, 'c'] | [3, 'c']
    >
  >,
  Expect<Equal<CartesianProduct<1 | 2, 'a' | never>, [2, 'a'] | [1, 'a']>>,
  Expect<Equal<CartesianProduct<'a', Function | string>, ['a', Function] | ['a', string]>>
]

// ============= Your Code Here =============
// Union<2 | 3> -> [2] | [3]
type Union<T> = T extends T ? [T] : never

// [1, ...Union<2 | 3>] -> [1, 2] | [1, 3]
type CartesianProduct<T, U> = T extends T ? [T, ...Union<U>] : never
