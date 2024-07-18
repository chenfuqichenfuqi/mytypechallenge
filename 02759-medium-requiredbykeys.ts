// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>
]

// ============= Your Code Here =============
type omitUndefined<T> = T extends T ? (T extends undefined ? never : T) : never
type IntersectionObj<T> = {
  [P in keyof T]: T[P]
}
type RequiredByKeys<T, K extends keyof T = keyof T> = IntersectionObj<
  {
    [P in Exclude<keyof T, K>]?: T[P]
  } & {
    [P in K]-?: omitUndefined<T[P]>
  }
>
