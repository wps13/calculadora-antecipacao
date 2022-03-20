# Folder Structure

## Root Folder

```
project
|_ __mocks__/
|   mocks used in the application, included ones for testing.
|
|_ .storybook/
|   storybook configuration files
|
|_ config/
|  webpack configuration files, for both development and production
|
|_ cypress/
|  integration test files
|
|_ docs/
|  project documentation
|
|_ public/
|  production related files, such as the index.html, favicon
|
|_ src/
| README.md
| routes.js
```

## src

```
src/
|_ ui/
|  basic ui components (See more on UI Components doc)
|
|_ __tests__/
|  tests for ui components and screens components
|
|_ stories/
| storybook stories for ui
|
|_ screens/
|  |_ home/
|     home.jsx
|     home.styles.scss
|     |_ components/
|        index.js
|        |_ card
|           card.jsx
|           card.styles.scss
```
