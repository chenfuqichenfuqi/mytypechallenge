// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

type cases = [Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>, Expect<Equal<Mutable<Readonly<List>>, List>>]

type errors = [Mutable<'string'>, Mutable<0>]

// ============= Your Code Here =============
type Mutable<T> = { -readonly [K in keyof T]: T[K] }
type test = Readonly<Todo1>
