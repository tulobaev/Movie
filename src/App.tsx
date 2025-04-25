import { Route, Routes } from "react-router-dom";
import { links } from "./constants/Links";
import ReduxProvider from "./providers/ReduxProvider";
import Header from "./components/layout/header/Header";

const App = () => {
  return (
    <ReduxProvider>
      <Header />
      <main>
        <Routes>
          {links.map((item, index) => (
            <Route path={item.link} element={item.element} key={index} />
          ))}
        </Routes>
      </main>
    </ReduxProvider>
  );
};

export default App;
