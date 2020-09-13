/* eslint-disable */
import { useQuery } from "@apollo/client"
import { Currency, RatesDocument } from "./graphql-documents"

// We now have types support and auto complete for the
// result type, just by passing `RatesDocument` as `query` to apollo client.
const result = useQuery(RatesDocument, {
  variables: {
    currency: Currency.Dollars,
  },
})

const rates = result.data.rates
const currency = rates[0].name
