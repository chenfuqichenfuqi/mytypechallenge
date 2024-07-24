// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>
]

// ============= Your Code Here =============
type Seq<T extends number, U extends any[] = []> = U['length'] extends T ? U : Seq<T, [...U, any]>

// DigitFrom<'123'> -> [1, 2, 3]
type DigitFrom<
  T extends string,
  U extends number[] = []
> = `${T}` extends `${infer F extends number}${infer R}` ? DigitFrom<R, [...U, F]> : U

type DigitGreaterThan<T extends number[], U extends number[]> = T extends [
  infer F1 extends number,
  ...infer R1 extends number[]
] // 从高位开始比较
  ? U extends [infer F2 extends number, ...infer R2 extends number[]]
    ? Seq<F1> extends [...Seq<F2>, ...infer R] // F1 是否大于等于 F2
      ? R['length'] extends 0 // 如果F1 等于 F2，继续比较下一位
        ? DigitGreaterThan<R1, R2>
        : true
      : false
    : never
  : false

type GreaterThan<
  T extends number,
  U extends number,
  TD extends number[] = DigitFrom<`${T}`>,
  UD extends number[] = DigitFrom<`${U}`>
> = TD['length'] extends UD['length'] // 位数是否相同
  ? DigitGreaterThan<TD, UD> // 相同则比较每一位之间的大小
  : GreaterThan<TD['length'], UD['length']> // 否则比较位数之间的大小
