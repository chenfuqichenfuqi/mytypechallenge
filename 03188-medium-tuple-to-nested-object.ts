// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
]

// ============= Your Code Here =============
// 数组反转type
type reverse<T> = T extends [infer F, ...infer R] ? [...reverse<R>, F] : []
type TupleToNestedObject<T extends any[], U> = T extends []
  ? U
  : reverse<T> extends [infer F, ...infer R]
  ? TupleToNestedObject<reverse<R>, { [f in F & string]: U }>
  : U
type test = TupleToNestedObject<['a', 'b', 'c'], boolean>
