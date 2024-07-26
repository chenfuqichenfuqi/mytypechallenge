// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]>>
]

// ============= Your Code Here =============
//array combine
// copilot
// type Subsequence<T> = T extends [infer One, ...infer Rest]
//   ? [One, ...Subsequence<Rest>] | [...Subsequence<Rest>]
//   : []教我一下T是[1,2]的推演过程
type Subsequence<T> = T extends [infer One, ...infer Rest]
  ? [One, ...Subsequence<Rest>] | [...Subsequence<Rest>]
  : []
type test = Subsequence<[1, 2]>
type test2 = [1, ...([2] | [])] | [...([2] | [])]
//Subsequence<[2]> = [2, ...[]] | [...[]] = [2] | []
