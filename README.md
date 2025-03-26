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

<FetchLoading theme="#000" />

<FetchLoading theme="#adae" />

<FetchLoading theme="#fafafafa" />

<FetchLoading theme="rgb(0, 0, 0)" />

<FetchLoading theme="rgb(170, 221, 170)" />

<FetchLoading theme="rgb(250, 250, 250)" />

<FetchLoading theme="rgba(0, 0, 0, 0.75)" />

<FetchLoading theme="rgba(170, 221, 170, 0.85)" />

<FetchLoading theme="rgba(250, 250, 250, 0.25)" />

...
```
