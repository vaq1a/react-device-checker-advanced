import { MobileView } from "components/MobileView"
import { DesktopView } from "components/DesktopView"
import { useMediaBreakpoint } from "hooks";

const Main = () => {
    const { isBreakpointDown } = useMediaBreakpoint()

    if (isBreakpointDown('md')) {
        return (
            <MobileView />
        )
    }

    return (
        <DesktopView />
    )
}

export default Main