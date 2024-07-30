// ============= Test Cases =============
import type { Equal, Expect, ExpectFalse } from './test-utils'

type cases = [
  Expect<Equal<PermutationsOfTuple<[]>, []>>,
  Expect<Equal<PermutationsOfTuple<[any]>, [any]>>,
  Expect<Equal<PermutationsOfTuple<[any, unknown]>, [any, unknown] | [unknown, any]>>,
  Expect<
    Equal<
      PermutationsOfTuple<[any, unknown, never]>,
      | [any, unknown, never]
      | [unknown, any, never]
      | [unknown, never, any]
      | [any, never, unknown]
      | [never, any, unknown]
      | [never, unknown, any]
    >
  >,
  Expect<
    Equal<
      PermutationsOfTuple<[1, number, unknown]>,
      | [1, number, unknown]
      | [1, unknown, number]
      | [number, 1, unknown]
      | [unknown, 1, number]
      | [number, unknown, 1]
      | [unknown, number, 1]
    >
  >,
  ExpectFalse<Equal<PermutationsOfTuple<[1, number, unknown]>, [unknown]>>
]

// ============= Your Code Here =============
type WrapArray<T extends any[]> = T extends [infer S, ...infer O] ? [[S], ...WrapArray<O>] : []
type MyExclued<T extends any[], U> = T extends [infer S, ...infer O]
  ? Equal<S, U> extends true
    ? MyExclued<O, U>
    : [S, ...MyExclued<O, U>]
  : []
type MyPermutationsOfTuple<T extends any[], U = T[number]> = [U] extends [never]
  ? []
  : U extends U
  ? [U extends any[] ? U[0] : never, ...MyPermutationsOfTuple<MyExclued<T, U>>]
  : []
type PermutationsOfTuple<T extends unknown[]> = MyPermutationsOfTuple<WrapArray<T>>
