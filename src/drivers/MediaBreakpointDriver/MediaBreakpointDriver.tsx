import { PropsWithChildren, useLayoutEffect, useRef } from 'react'
import { BREAKPOINTS, currentBreakpointIndex } from "constants/breakpointsInfo"
import { TIME_DELAY_ON_BREAKPOINT_CHECK } from 'constants/breakpoints'

const MediaBreakpointDriver = ({ children }: PropsWithChildren) => {
    const ref = useRef(null)

    useLayoutEffect(() => {
        const breakpointHandler = () => {
            const newBreakpointIndex = (
                BREAKPOINTS
                    .findIndex(([, width]: number[]) => window.innerWidth >= width)
            )

            if (newBreakpointIndex !== currentBreakpointIndex()) {
                currentBreakpointIndex(newBreakpointIndex)
            }
        }

        breakpointHandler()

        const handler = () => {
            // @ts-ignore
            clearTimeout(ref.current)

            // @ts-ignore
            ref.current = setTimeout(breakpointHandler, TIME_DELAY_ON_BREAKPOINT_CHECK)
        }
        window.addEventListener('resize', handler)

        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default MediaBreakpointDriver
