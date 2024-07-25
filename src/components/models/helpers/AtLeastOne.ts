// Works as an OR gate; Needing at least one of the props to be present.
// For a XOR at least one but not all see the ts-essentials package.
// propA | propB | propC
//   X   |   X   |   X    =   X
//   √   |   X   |   X    =   √
//   X   |   √   |   X    =   √
//   X   |   X   |   √    =   √
//   √   |   √   |   X    =   √
//   √   |   X   |   √    =   √
//   X   |   √   |   √    =   √
//   √   |   √   |   √    =   √

export type AtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> &
    Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];
