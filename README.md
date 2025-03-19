# Fetch Loading

Loading animation which can be displayed while data is fetched from an API.

## Installation

```
https://www.npmjs.com/package/fetch-loading
```

```
npm i -D fetch-loading
```

## Usage

```
import { FetchLoading } from 'fetch-loading'

...

<FetchLoading />

### with no arguments being passed, the animation will fall back to its default color #52525c

<FetchLoading theme="#a2d1aa" />

<FetchLoading theme="#fafafa" />

<FetchLoading theme="#000000" />

...

```

Pass any Hex-value as an argument for the ```theme``` property.
