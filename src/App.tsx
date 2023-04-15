import { Main } from "components/Main"
import { MediaBreakpointDriver } from "drivers";

function App() {
  return (
      <MediaBreakpointDriver>
          <Main />
      </MediaBreakpointDriver>
  );
}

export default App;
