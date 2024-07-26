// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>
]

// ============= Your Code Here =============
type ConstructTuple<
  L extends number,
  O extends string = `${L}`,
  Count extends unknown[] = []
> = O extends `${infer F}${infer R}` ? ConstructTuple<L, R, N<Count>[keyof N & F]> : Count

type N<T extends unknown[] = []> = {
  '0': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]
  '1': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown]
  '2': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown]
  '3': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown]
  '4': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown]
  '5': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ]
  '6': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ]
  '7': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ]
  '8': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ]
  '9': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ]
}
