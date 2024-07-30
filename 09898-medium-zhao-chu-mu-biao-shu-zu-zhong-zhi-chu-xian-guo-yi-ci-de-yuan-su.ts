// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>
]

// ============= Your Code Here =============
// type FindEles<T extends any[], count extends any[] = []> = T extends [infer L, ...infer R]
//   ? L extends R[number] | count[number]
//     ? FindEles<R, count>
//     : FindEles<R, [...count, L]>
//   : count

type FindEles<T extends any[], Seen extends any[] = [], Result extends any[] = []> = T extends [
  infer L,
  ...infer R
]
  ? L extends Seen[number]
    ? FindEles<R, Seen, Result>
    : L extends R[number]
    ? FindEles<R, [...Seen, L], Result>
    : FindEles<R, Seen, [...Result, L]>
  : Result
type test = FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>
