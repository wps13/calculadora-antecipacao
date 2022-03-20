# UI Components

## What are the UI Components and why were they created?

UI components are all components created inside `src/ui` folder, that are basic components for an application and that are going to be reused many times. They were created to be similar to a design system, providing some components, colors and sizes.

## Components

### InputUI

Component that will should an input with a label, also has a helper text to be displayed under input if the text is provided. It can also use a different input if desired to substitute the existing one.

### LoadingUI

Component while some data is loading, it will display only a blue spinner, but can also have a message (if provided).

### MainTitleUI

Component for a page title(h1).

### SectionTitleUI

Component for a section title(h2).

### RequestErrorUI

Component to display a error message, can be improved to also display an icon in the future.

### TextBlockUI

Component to display a monetary block, has a label and a text starting with "R$" to monetary value.

## Usage

Import the desired component in your file:

```js
import { InputUI } from "./ui";
```

## Creating a new component

1. Create a new folder with the component name, for instance `offline-screen`
2. Create new file with the same name as the folder for the component followed by .jsx: `offline-screen.jsx`
3. Create a new file for style using the same name followed by .styles.scss: `offline-screen.styles.scss`
4. Create the component inside the .jsx file (in this case `offline-screen.jsx`), using export default
5. Import the new component inside `/ui/index.jsx`:

```js
import * as OfflineScreen from "./offline-screen/offline-screen";

const OfflineScreenUI = OfflineScreen.default;
```

6. Add the component to the exported object by the final of the file
7. Create a new storybook story inside `src/stories` using the component followed by .stories.jsx: `offline-screen.stories.jsx`
