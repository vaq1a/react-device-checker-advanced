import { PropsWithChildren } from 'react'
import { MediaBreakpoint, MediaBreakpointProps } from "components/MediaBreakpoint"

interface MediaBreakpointDownProps extends Pick<MediaBreakpointProps, 'name'>{}

const MediaBreakpointDown = (props: PropsWithChildren<MediaBreakpointDownProps>) => (
    <MediaBreakpoint {...props} direction="down" />
)

export default MediaBreakpointDown
