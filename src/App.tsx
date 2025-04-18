import { Route, Routes } from "react-router-dom";
import ReduxProvider from "./providers/ReduxProvider";
import { links } from "./constants/Links";

const App = () => {
  return (
    <ReduxProvider>
      <Routes>
        {links.map((item, index) => (
          <Route path={item.link} element={item.element} key={index} />
        ))}
      </Routes>
    </ReduxProvider>
  );
};

export default App;
