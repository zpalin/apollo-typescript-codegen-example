import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Currency {
  Dollars = 'Dollars',
  Pounds = 'Pounds',
  Euros = 'Euros'
}

export type ExchangeRate = {
  __typename: 'ExchangeRate';
  currency: Currency;
  rate?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type MyInputType = {
  name: Scalars['String'];
};

export type MutationResponse = {
  __typename: 'MutationResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Query = {
  __typename: 'Query';
  rates: Array<ExchangeRate>;
};


export type QueryRatesArgs = {
  currency: Currency;
};

export type ExchangeRateFragment = (
  { __typename: 'ExchangeRate' }
  & Pick<ExchangeRate, 'currency' | 'name' | 'rate'>
);

export type RatesQueryVariables = Exact<{
  currency: Currency;
}>;


export type RatesQuery = (
  { __typename: 'Query' }
  & { rates: Array<(
    { __typename: 'ExchangeRate' }
    & ExchangeRateFragment
  )> }
);

export const ExchangeRateFragmentDoc: DocumentNode<ExchangeRateFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExchangeRate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExchangeRate"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rate"},"arguments":[],"directives":[]}]}}]};
export const RatesDocument: DocumentNode<RatesQuery, RatesQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"rates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Currency"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExchangeRate"},"directives":[]}]}}]}},...ExchangeRateFragmentDoc.definitions]};