// ============= Test Cases =============
import type { Equal, Expect, UnionToIntersection } from './test-utils'
type cases = [
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5]>,
      {
        1: 1
        2: 1
        3: 1
        4: 1
        5: 1
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>,
      {
        1: 2
        2: 2
        3: 2
        4: 1
        5: 1
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>,
      {
        1: 3
        2: 3
        3: 2
        4: 3
        5: 1
      }
    >
  >,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<
    Equal<
      CountElementNumberToObject<['1', '2', '0']>,
      {
        0: 1
        1: 1
        2: 1
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<['a', 'b', ['c', ['d']]]>,
      {
        a: 1
        b: 1
        c: 1
        d: 1
      }
    >
  >
]

// ============= Your Code Here =============
type Flat<T extends any[]> = T extends [infer A, ...infer B]
  ? A extends any[]
    ? [...Flat<A>, ...Flat<B>]
    : [A, ...Flat<B>]
  : T
type Count<T, O, U extends any[] = []> = T extends [infer L, ...infer R]
  ? L extends O
    ? Count<R, O, [...U, O]>
    : Count<R, O, [...U]>
  : U['length']

type CountElementNumberToObject<T extends any[]> = {
  [K in Flat<T>[number]]: Count<Flat<T>, K>
}
