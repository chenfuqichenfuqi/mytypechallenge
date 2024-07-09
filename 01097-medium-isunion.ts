// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>
]

// ============= Your Code Here =============
// type IsUnion<T, B = T> = [T] extends [never] ? false : T extends T ? ([B] extends [T] ? false : true) : never
type IsUnion<U, U1 = U> = [U] extends [never]
  ? false
  : U extends any
  ? [U1] extends [U]
    ? false
    : true
  : never
type Distributive<T> = T extends any ? T[] : never
type UnDistributive<T> = [T] extends [any] ? [T] : never
type test = Distributive<'a'>
type test1 = UnDistributive<'a'>
type aaaa = test1 extends test ? true : false
