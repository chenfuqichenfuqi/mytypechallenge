// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tuple = [1] as const

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>
]

type error = Concat<null, undefined>

// ============= Your Code Here =============
type Concat<T, U> = T extends readonly [...infer t]
  ? U extends readonly [...infer u]
    ? [...t, ...u]
    : never
  : never
