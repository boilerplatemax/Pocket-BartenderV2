import './App.css';
import React, {useState} from 'react';
import Feed from './Components/Feed'

const themes = {
  light: {
    color: 'red',
    backgroundColor: 'white',
  },
  dark: {
    color: 'white',
    backgroundColor: 'red',
  },
};
export const ThemeContext =React.createContext(
  themes.dark
);

function App() {

  const [theme,setTheme]=useState(themes.dark);

  return (
    <ThemeContext.Provider value={{theme}}>

        <Feed/>
        <button onClick={()=>setTheme((prev)=>prev===themes.light?themes.dark:themes.light)}>
          toggle
        </button>

    </ThemeContext.Provider>
  );
}

export default App;
