// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
]

// ============= Your Code Here =============
//https://github.com/type-challenges/type-challenges/issues/16479
type Chunk<T extends any[], U extends number = 1, S extends any[] = []> = T extends [infer F, ...infer R]
  ? S['length'] extends U
    ? [S, ...Chunk<T, U>]
    : Chunk<R, U, [...S, F]>
  : S['length'] extends 0
  ? S
  : [S]
