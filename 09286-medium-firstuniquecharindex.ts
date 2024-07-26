// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>
]

// ============= Your Code Here =============
type RepeatCharCount<
  T extends string,
  U extends string,
  N extends any[] = []
> = U extends `${infer F}${infer E}`
  ? T extends F
    ? RepeatCharCount<T, E, [...N, '']>
    : RepeatCharCount<T, E, [...N]>
  : N['length']

type FirstUniqueCharIndex<
  T extends string,
  N extends string[] = [],
  O extends string = T
> = T extends `${infer F}${infer E}`
  ? RepeatCharCount<F, O> extends 1
    ? N['length']
    : FirstUniqueCharIndex<E, [...N, ''], T>
  : -1
