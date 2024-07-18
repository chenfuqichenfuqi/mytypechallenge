// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
]

// ============= Your Code Here =============
type ToNumber<T> = T extends `${infer N extends number}` ? N : never
type ToString<T extends number> = `${T}`
type numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//反转
type reverse<T extends string> = T extends `${infer L}${infer R}` ? `${reverse<R>}${L}` : T

//前一个数字
type PreNum<T extends string, N = numbers, P = '9'> = N extends [infer L, ...infer R]
  ? T extends L
    ? P
    : PreNum<T, R, L>
  : never

//如果是100这种情况，进行处理
type subMany<T extends string, S extends string = ''> = ToNumber<omitZero<zeroToNine<T, S>>>

//先反转100 -> '001' 先遇到的0变成9 第一个遇到不是0的减一返回
type zeroToNine<T extends string, S extends string = '', RT = reverse<T>> = RT extends `${infer L}${infer R}`
  ? L extends '0'
    ? zeroToNine<reverse<R>, `${S}${9}`>
    : S extends ''
    ? never
    : `${S}${PreNum<L>}${R}`
  : never

//去掉前面的0 100->001->1
type omitZero<T extends string> = reverse<T> extends `0${infer R}` ? omitZero<reverse<R>> : T

//减一
type subOne<L extends string, R extends string> = ToNumber<reverse<`${PreNum<L>}${R}`>>

// 分支判断
type MinusOne<T extends number, RT = reverse<`${T}`>> = T extends 0
  ? -1
  : T extends 1
  ? 0
  : RT extends `${infer L}${infer R}`
  ? L extends '0'
    ? subMany<ToString<T>>
    : subOne<L, R>
  : never
