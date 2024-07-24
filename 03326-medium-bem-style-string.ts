// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success'>>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large'>>
]

// ============= Your Code Here =============
type IsNever<T> = [T] extends [never] ? true : false
type IsUnion<U> = IsNever<U> extends true ? '' : U
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${IsUnion<`__${E[number]}`>}${IsUnion<`--${M[number]}`>}`
