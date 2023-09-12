import { themeContext } from "./Context/ThemeContext";
import Header from "./components/Header";
import { useContext } from "react";
function App() {
  const { state } = useContext(themeContext);
  return (
    <div className={` ${state} `}>
      <div className="min-h-screen dark:bg-dark">
        <Header />
      </div>
    </div>
  );
}

export default App;
