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

![Preview Default Fetch Loading Animation](https://github.com/StackOverflowIsBetterThanAnyAI/fetch-loading/blob/main/preview.gif)

You can also pass any Hex-value as an argument for the ```theme``` property:

```
...

<FetchLoading theme="#a2d1aa" />

<FetchLoading theme="#fafafa" />

<FetchLoading theme="#000000" />

...
```
