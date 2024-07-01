// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [Expect<Equal<LookUp<Animal, 'dog'>, Dog>>, Expect<Equal<LookUp<Animal, 'cat'>, Cat>>]

// ============= Your Code Here =============
// type LookUp<U extends Animal, T extends Animal['type']> = U extends { type: T } ? U : never
// type LookUp<T extends { type: string }, U extends string> = T extends T
//   ? T['type'] extends U
//     ? T
//     : never
//   : never

type LookUp<T extends { type: string }, U extends string> = T extends unknown
  ? T['type'] extends U
    ? T
    : never
  : never
