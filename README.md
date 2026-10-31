# Fetch Loading

![npm Downloads Last Year](https://img.shields.io/npm/dy/fetch-loading)

React loading animation with three dots which can be displayed while data is being fetched from an API.

Supports React v18 and v19.

## Installation

```
npm i fetch-loading
```

## Usage

```
import { FetchLoading } from 'fetch-loading'

...

<FetchLoading />

### with no arguments being passed,
### the animation will fall back to its default color #52525c,
### and it will not contain any accessible attributes

...

```

![Default Fetch Loading Animation Preview](https://github.com/user-attachments/assets/b4ee8647-0b14-4af4-8f67-cba615b31031)

You can pass any valid CSS color (Hex, RGB(A), HSL, named colors, `var(--my-color)`, …) as an argument for the `theme` property:

```
...

<FetchLoading theme="#121" />

<FetchLoading theme="#608c" />

<FetchLoading theme="#ffe98c" />

<FetchLoading theme="#ff1e2cf0" />

<FetchLoading theme="rgb(178, 165, 253)" />

<FetchLoading theme="rgba(131, 240, 131, 0.8)" />

<FetchLoading theme="hsl(200 80% 50%)" />

<FetchLoading theme="var(--color-primary)" />

...
```

![Theme Fetch Loading Animation Preview](https://github.com/user-attachments/assets/e0179995-309a-46f0-988f-70bf3e2ce9d6)

By passing a descriptive value for `ariaLabel`, the following properties are added:

```
...

<FetchLoading ariaLabel="Loading" />

### role="status"
### aria-live="polite"
### aria-label="Loading"

...
```

This results in screen reader users hearing “Status - Loading” being read aloud.

Of course, `theme` and `ariaLabel` can also be used simultaneously:

```
...

<FetchLoading ariaLabel="Loading" theme="#ffe98c" />

...
```

## Size

The `size` property sets the size of a single dot. The gap, padding and bounce height scale with it. Numbers are treated as pixels, strings can be any CSS length. The default is `12px`.

```
<FetchLoading size={8} />

<FetchLoading />

<FetchLoading size="1.5rem" />
```

![Size Fetch Loading Animation Preview](https://raw.githubusercontent.com/StackOverflowIsBetterThanAnyAI/fetch-loading/main/assets/size.svg?sanitize=true)

## Centering

With `center`, the animation fills its parent and is centered horizontally and vertically. For vertical centering, the parent needs a defined height.

```
<div style={{ height: 200 }}>
    <FetchLoading center />
</div>
```

![Centered Fetch Loading Animation Preview](https://raw.githubusercontent.com/StackOverflowIsBetterThanAnyAI/fetch-loading/main/assets/center.svg?sanitize=true)

## Styling with CSS

`className`, `style` and all other `div` attributes (e.g. `data-testid`) are passed to the wrapper element. The built-in styles have zero specificity, so your own CSS always wins.

Color and size can also be set via CSS custom properties, e.g. for theming:

```
.my-loader {
    --fetch-loading-color: tomato;
    --fetch-loading-size: 16px;
}
```

```
<FetchLoading className="my-loader" />
```

## Reduced Motion

Users with `prefers-reduced-motion` enabled see a gentle fade instead of the bouncing animation. No configuration is needed, the operating system setting is respected automatically:

![Reduced Motion Fetch Loading Animation Preview](https://raw.githubusercontent.com/StackOverflowIsBetterThanAnyAI/fetch-loading/main/assets/reduced-motion.svg?sanitize=true)

## Props

| Prop        | Type               | Default   | Description                                   |
| ----------- | ------------------ | --------- | --------------------------------------------- |
| `ariaLabel` | `string`           | –         | Adds `role="status"`, `aria-live` and label   |
| `center`    | `boolean`          | `false`   | Centers the animation inside its parent       |
| `size`      | `number \| string` | `12px`    | Size of a single dot                          |
| `theme`     | `string`           | `#52525c` | Any valid CSS color                           |

## Development

```
npm run build        # bundle ESM, CJS and type declarations into dist/
npm test             # render tests for the ESM and CJS build
npm run test:types   # type check a consumer file against the declarations
npm run test:package # lint package.json exports and types (publint, attw)
```

All checks also run automatically before `npm publish`. The CI runs them against React 18 and 19 and additionally builds a Vite app with the packed package and checks it in a headless browser. Once a week, the same check runs against the version published on npm.
