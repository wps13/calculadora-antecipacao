# Antecipation Calculator

This project is about calculation antecipation given the sales amount, installment and mdr percentage.

## Requirements

- Node.js: 16.4

## Documentation

- [Folder structure](./docs/folder-structure.md)
- [Naming Convetion](./docs/naming.md)
- [UI Components](./docs/ui-components.md)
- [Libraries Used and why them](./docs/libs.md)

## Commands

### **Installing dependencies**

```
yarn install
```

### **Starting application**

```
yarn start
```

it will run on http://localhost:8080/

### **Running unit test**

It will run all components tests, made with react testing library.

```
yarn test
```

### **Running e2e test**

All tests were written using cypress, storing them inside the `cypress/integration` folder.

```
yarn cypress:open
```

### **Generating production build**

```
yarn build
```

### **Checking linting**

```
yarn lint
```

### **Fixing linting errors**

```
yarn lint:fix
```

### **Running storybook**

This command will start storybook that was used to build ui components.

```
yarn storybook
```
