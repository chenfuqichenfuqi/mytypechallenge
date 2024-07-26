// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual, UnionToIntersection } from './test-utils'

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>
]

// ============= Your Code Here =============
type StrToUnion<T> = T extends `${infer U}${infer rest}` ? U | StrToUnion<rest> : never

type CheckRepeatedChars<T extends string, U = T> = T extends ''
  ? false
  : T extends `${infer L}${infer R}`
  ? L extends StrToUnion<R>
    ? true
    : CheckRepeatedChars<R, U>
  : false

type LastOf<T> = UnionToIntersection<T extends any ? (x: T) => void : never> extends (x: infer R) => void
  ? R
  : never

type UnionToTuple<T, L = LastOf<T>> = [T] extends [never] ? [] : [...UnionToTuple<Exclude<T, L>>, L]

type JoinWithComma<T extends any[]> = T extends [infer F, ...infer R]
  ? R extends []
    ? `${F & string}`
    : `${F & string}${JoinWithComma<R>}`
  : ''

type UnionToCommaSeparatedString<T> = JoinWithComma<UnionToTuple<T>>

// 测试
type Test = UnionToCommaSeparatedString<'a' | 'b' | 'c'> // "a,b,c"
