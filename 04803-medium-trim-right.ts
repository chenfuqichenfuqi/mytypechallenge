// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>
]

// ============= Your Code Here =============
//反转
type reverse<T> = T extends `${infer F}${infer L}` ? `${reverse<L>}${F}` : T
type TrimRight<S extends string> = reverse<S> extends `${infer F}${infer L}`
  ? F extends ' ' | '\n' | '\t'
    ? TrimRight<reverse<L>>
    : S
  : S
type test = TrimRight<'str     '>
