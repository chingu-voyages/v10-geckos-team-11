# React PaperCSS

A React implementation of the CSS library [PaperCSS](https://www.getpapercss.com/)

## Instalation

First install the PaperCSS library:

```bash
npm i -S papercss
```

or

```bash
yarn papercss
```

And include the css file in your project:

```js
import 'papercss/dist/paper.min.css'

...
```

Then in your project directory run the command:

```bash
npm i -S papercss-react
```

or

```bash
yarn papercss-react
```

And finally in your file import the component/s you want to use:

```js
import { Button } from 'papercss-react'

const Component = () => (
  <div>
    ...
    <Button>Click Me!</Button>
  </div>
)
```

## Examples

To view examples of the components in practice, checkout these [stories](https://chingu-voyages.github.io/v10-geckos-team-11/?path=/story/alert-dismissable--default)

## Development

First clone or [download](https://github.com/chingu-voyages/v10-geckos-team-11/archive/development.zip) the repo:

```bash
git clone https://github.com/chingu-voyages/v10-geckos-team-11.git
```

Then install dependencies with `npm i` or `yarn`.

To see the components, run `npm run storybook` or `yarn storybook` and then go to `http://localhost:9001`.

## Contributing

1. Form the repo
2. Create a feature branch `git checkout -b feature/foo`
3. Commit your changes `git add .` and `git commit -m "add some feature to foo"`
4. Push the branch `git push origin feature/foo`
5. Create a new pull request

## Meta

Edward Hong - [edward-hong](https://github.com/edward-hong)
Matthew K - [matthewminwookkim](https://github.com/matthewminwookkim)
