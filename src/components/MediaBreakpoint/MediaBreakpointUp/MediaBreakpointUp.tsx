import { PropsWithChildren } from 'react'
import {MediaBreakpoint, MediaBreakpointProps} from "components/MediaBreakpoint"

interface MediaBreakpointUpProps extends Pick<MediaBreakpointProps, 'name'>{}

const MediaBreakpointUp = (props: PropsWithChildren<MediaBreakpointUpProps>) => (
    <MediaBreakpoint {...props} direction="up" />
)

export default MediaBreakpointUp
