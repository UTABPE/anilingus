import "antd/dist/antd.css";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const { width } = useWindowDimensions();
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
