// Compiled with `npm run test:types`, never executed.
// Checks that the published type declarations work for a consumer.
import { FetchLoading, FetchLoadingProps } from 'fetch-loading'

const props: FetchLoadingProps = { size: '1rem', center: true }

export const Valid = () => (
    <>
        <FetchLoading />
        <FetchLoading {...props} />
        <FetchLoading ariaLabel="Lädt" theme="var(--primary)" size={24} />
        <FetchLoading className="mine" style={{ margin: 4 }} data-testid="x" />
    </>
)

export const Invalid = () => (
    <>
        {/* @ts-expect-error size must be a number or a string */}
        <FetchLoading size={true} />
        {/* @ts-expect-error center must be a boolean */}
        <FetchLoading center="yes" />
        {/* @ts-expect-error the component renders its own dots */}
        <FetchLoading>child</FetchLoading>
    </>
)
