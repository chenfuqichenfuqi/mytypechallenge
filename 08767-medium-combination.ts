// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<
    Equal<
      Combination<['foo', 'bar', 'baz']>,
      | 'foo'
      | 'bar'
      | 'baz'
      | 'foo bar'
      | 'foo bar baz'
      | 'foo baz'
      | 'foo baz bar'
      | 'bar foo'
      | 'bar foo baz'
      | 'bar baz'
      | 'bar baz foo'
      | 'baz foo'
      | 'baz foo bar'
      | 'baz bar'
      | 'baz bar foo'
    >
  >
]

// ============= Your Code Here =============
//TODO
// type Combination<T extends string[], A = T[number], U = A> = U extends infer I extends string
//   ? I | `${I} ${Combination<[], Exclude<A, I>>}`
//   : never

type Combination<T extends string[], I = T[number]> = I extends string
  ? I | `${I} ${Combination<[Exclude<T[number], I>]>}`
  : never
