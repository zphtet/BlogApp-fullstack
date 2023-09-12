import { themeContext } from "./Context/ThemeContext";
import Header from "./components/Header";
import { useContext } from "react";
import CardContainer from "./components/CardContainer";
function App() {
  const { state } = useContext(themeContext);
  return (
    <div className={` ${state} `}>
      <div className="min-h-screen dark:bg-dark">
        <Header />
        <div className="max-w-container mx-auto p-5">
          <CardContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
