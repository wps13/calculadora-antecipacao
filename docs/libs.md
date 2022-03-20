# Libraries

This document intends to explain briefly about the main libraries used to build this application.

## Routing

The library choosed for routing was `react-router-dom`, the reason was that it most popular one for react and it easy to use.

## Testing

For testing, two libraries were chosen: `@testing-library/react` and `cypress`, the first one for unit tests and the last for e2e. Testing library provides many tools to tests components, beign complete and lightweight, and for cypress it's easy to configurated, run and comes with tons of examples.

## Type checking

For type checking, prop-types was the choice. It could also be used a language with type support instead, such as typescript, but I was not comfortable using it, even if I had previous experience working with it.

## Monetary input

For monetary input, `react-intl-currency-input` was chosen. Among the ones for this porpuse, this one had less opened issued and was updated not so long ago (1 year ago).

## Data fetching

For data fetching, `react-query` and `axios` were the choice. React query provided many tools to work with data, given the request status and keeping it updated, also it handles better errors and fetching process. Combining both libraries was the best option for me, also tried to use fetch instead of axios, but didn't like the results.
