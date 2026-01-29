import ThemeContext from "./context/ThemeContext";
import ChangeTheme from './components/ChangeTheme';
function App() {
  return (
    <div>
      <ThemeContext.Provider value="light">
          <ChangeTheme/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
