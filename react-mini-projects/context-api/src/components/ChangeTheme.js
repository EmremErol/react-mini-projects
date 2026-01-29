import React, {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';


function ChangeTheme() {

    const data = useContext(ThemeContext);

    console.log(data);



  return (
    <div>
    <button>Change Theme</button>
    </div>
  )
}

export default ChangeTheme
