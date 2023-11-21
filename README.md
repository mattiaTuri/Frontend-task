# Frontend-task

A front-end service that allows a user to display product widgets.
As u user i can customize my widgets:

- change the colors
- active state (only one widget can have the active state at a time)
- if is linked to my public profile or not

##### Live project

```
https://frontend-task-test.vercel.app/
```

## API Reference

#### Get all product

```
https://api.mocki.io/v2/016d11e8/product-widgets
```

Product description:

|   Property    |                      Type                      | Description                                             |
| :-----------: | :--------------------------------------------: | :------------------------------------------------------ |
|      id       |                     number                     | The id of the product widget,incremental integer        |
|     type      |     “carbon” - “plastic bottles” - "trees"     | The type of the impact                                  |
|    amount     |                number (integer)                | The amount of the impact                                |
|    action     |       “collects” - “plants” - “offsets”        | The action which corresponds to an impact type          |
|    active     |                    boolean                     | Describes if the widget (badge) is active               |
|    linked     |                    boolean                     | Describes if the widget is linked to the public profile |
| selectedColor | “white” - “black” - “blue” - “green” - “beige” | Describes the current color of the widget               |

## Installation and Setup Instructions

#### Install all dependencies

```
npm install
```

> This will install the following dependences `react with typescript`, `tailwindcss`, `redux`, `axios.js`, `cypress`

#### Start Server:

```
npm start
```

#### Visit App:

```
localhost:3000
```

#### Open Cypress for run test

```
npx cypress open
```

## Folder structure

```
frontend-task/
  cypress
  node_modules
  public/
    fonts/
    favicon.ico
    index.html
  src/
    components/
    controller/
    models/
    pages/
    store/
    style/
    utils/
  cypress.config.ts
  package-lock.json
  package.json
  README.md
  tailwind.config.js
  tsconfig.json
```

#### `Components`

The components folder contain every single component of the entire application. This folder is divided into components used per page and the shared components in all the application.

```
components/
  products/
  shared/
```

#### `Controller`

Api folder that contains all the logics

#### `Models`

Keeps all the interface files

#### `Pages`

Contains the pages of the web app. In this application the `Products` page

#### `Store`

Global states that are stored and can be easily used throughout the application.

#### `Style`

This folder contains the css files where is present the global.css

#### `Utils`

Contain of some repeatedly used functions that are commonly used in the project.
