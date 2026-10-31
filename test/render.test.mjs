import { strict as assert } from 'node:assert'
import { createRequire } from 'node:module'
import { describe, test } from 'node:test'
import { createElement as h, version } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import * as esm from 'fetch-loading'

// Resolved through the package's own "exports" field, exactly like a consumer would
const cjs = createRequire(import.meta.url)('fetch-loading')

const builds = { esm, cjs }

console.log(`Testing against React ${version}`)

for (const [name, { FetchLoading }] of Object.entries(builds)) {
    const render = (props) => renderToStaticMarkup(h(FetchLoading, props))

    describe(`${name} build`, () => {
        test('exports the component', () => {
            assert.equal(typeof FetchLoading, 'function')
        })

        test('renders three dots and the keyframes', () => {
            const html = render()
            assert.equal(html.match(/class="fetch-loading__dot"/g)?.length, 3)
            assert.match(html, /@keyframes fetch-loading\b/)
            assert.match(html, /prefers-reduced-motion/)
        })

        test('adds no accessibility attributes without ariaLabel', () => {
            const html = render()
            assert.doesNotMatch(html, /role=/)
            assert.doesNotMatch(html, /aria-/)
        })

        test('adds role, aria-live and aria-label with ariaLabel', () => {
            const html = render({ ariaLabel: 'Lädt' })
            assert.match(html, /role="status"/)
            assert.match(html, /aria-live="polite"/)
            assert.match(html, /aria-label="Lädt"/)
        })

        test('sets the color via theme', () => {
            assert.match(
                render({ theme: 'hsl(200 80% 50%)' }),
                /--fetch-loading-color:hsl\(200 80% 50%\)/
            )
        })

        test('treats numeric sizes as pixels and passes strings through', () => {
            assert.match(render({ size: 24 }), /--fetch-loading-size:24px/)
            assert.match(render({ size: '1.5rem' }), /--fetch-loading-size:1.5rem/)
        })

        test('adds the center modifier only when requested', () => {
            assert.match(render(), /class="fetch-loading"/)
            assert.match(render({ center: true }), /class="fetch-loading fetch-loading--center"/)
        })

        test('passes className, style and other attributes through', () => {
            const html = render({
                className: 'mine',
                style: { margin: 4 },
                'data-testid': 'loader',
                theme: 'red',
            })
            assert.match(html, /class="fetch-loading mine"/)
            assert.match(html, /style="--fetch-loading-color:red;margin:4px"/)
            assert.match(html, /data-testid="loader"/)
        })
    })
}
