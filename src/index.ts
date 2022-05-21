type YReadonly<P> = { readonly [T in keyof P]: P[T] };

type YPartial<T> = { [P in keyof T]?: T[P] | undefined };

type YRequired<T> = { [P in keyof T]-?: T[P] };

type YOmit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type YRecord<K extends string | number | symbol, T> = { [P in K]: T };

type YPick<T, K extends keyof T> = { [P in K]: T[P] };

type YExtract<T, U> = T extends U ? T : never;

type YExclude<T, U> = T extends U ? never : T;

type YNonNullable<T> = T extends null | undefined ? never : T;

// 関数型 T の引数の型をタプルとして抽出する。
type YParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type YConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;

type YReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

type YInstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any;

function foo(arg1: string, arg2: number): void {}
function bar(): void {}

type Foo = Parameters<typeof foo>;
type Bar = Parameters<typeof bar>;
