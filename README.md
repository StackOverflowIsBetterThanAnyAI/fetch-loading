# Fetch Loading

![npm Downloads Last Year](https://img.shields.io/npm/dy/fetch-loading)

Loading animation which can be displayed while data is fetched from an API.

## Installation

```
npm i -D fetch-loading
```

## Usage

```
import { FetchLoading } from 'fetch-loading'

...

<FetchLoading />

### with no arguments being passed,
### the animation will fall back to its default color #52525c

...

```

![Default Fetch Loading Animation Preview](https://github.com/user-attachments/assets/b4ee8647-0b14-4af4-8f67-cba615b31031)

You can also pass any Hex- / RGB- or RGBA-value as an argument for the `theme` property:

```
...

<FetchLoading theme="#121" />

<FetchLoading theme="#608c" />

<FetchLoading theme="#ffe98c" />

<FetchLoading theme="#ff1e2cf0" />

<FetchLoading theme="rgb(178, 165, 253)" />

<FetchLoading theme="rgba(131, 240, 131, 0.8)" />

...
```

![Theme Fetch Loading Animation Preview](https://github.com/user-attachments/assets/e0179995-309a-46f0-988f-70bf3e2ce9d6)
