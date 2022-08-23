This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features Implemented
- [x] Render countries from REST Countries API
- [x] Search for country using input field
- [x] Click on a country to see more detailed information on a separate page
- [x] Filter countries by region
- [x] Click through to the border countries on the detail page
- [x] Toggle the color scheme between light and dark mode (preference stored on local machine)
- [x] Organize countries alphabetically (Not requested)

## Non Functional Requirement Implemented
- [x] Add unit tests (Jest)
- [x] Add Component behaviour tests (RTL)
- [x] Add E2E tests (Cypress)
- [x] Optimize for performance
- [x] Deployed to Vercel public web address
- [x] Import and publish code on github public repo
- [x] Back Button functionality
- [] 100% correct with designs (complicate to follow and low priority due lack of time)
- [] Add lint and/or prettier to project


## Tests

We've setup up unit tests, components tests and e2e tests.

### Unit tests & Component Tests

These tests can be run by executing `yarn test`

#### Unit tests 
These tests are written using jest and they test simple but important util functions like: buildRegions(), isMatchCountryAndRegion(), formatPopulation(), among other. 
For practical examples see: 
- `utils/CountriesUtils.spec.tsx`
- `utils/CountriesRegionsUtils.spec.tsx`
- `utils/isMatchCountryAndSearchTerm.spec.tsx`

#### Component tests
These tests are written using React Testing Library and they test the components behaviour.
For practical examples see:
- `tests/components/CountryList.spec.tsx`

### e2e Tests

These tests are written using Cypress. To run these tests run locally execute:
- `yarn dev`
- `yarn run cypress`
For practical examples see:
- `cypress/e2e/countryList.cy.tsx`

