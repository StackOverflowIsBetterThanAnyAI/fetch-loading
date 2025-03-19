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

You can also pass any Hex-value as an argument for the ```theme``` property:

```
...

<FetchLoading theme="#a2d1aa" />

<FetchLoading theme="#fafafa" />

<FetchLoading theme="#000000" />

...
```
