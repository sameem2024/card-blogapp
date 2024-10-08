import Navbar from "./components/Navbar";
import Write from "./components/Write";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SettingsPage from "./pages/SettingsPage";
import SinglePage from "./pages/SinglePage";
import Music from "./components/Music";


import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { context } from "./context/Global";


function App() {
  const {currentUser,lifeData,moviesData,musicData,sportsData,styleData,techData} = useContext(context);
  
  return (
    <>

    <Navbar /> 
    
      <Routes>
        
        <Route path='/'  element={<HomePage />} />

        <Route path='/posts' element={<HomePage />} />

        <Route path='/register' element={<RegisterPage />} />

        <Route path='/login' element= {<LoginPage />} />

        <Route path='/post/:id' element={<SinglePage />} />

        <Route path='/write' element={currentUser ? <Write /> : <LoginPage />} />

        <Route path='/settings' element= {currentUser ? <SettingsPage /> : <LoginPage />}/>

        <Route path='/life' element={<Music category="life" imageList={lifeData}/>} /> 
        <Route path='/music' element={<Music category="music" imageList={musicData}/>} />
        <Route path='/movies' element={<Music category="movies" imageList={moviesData} />} />
        <Route path='/sports' element={<Music category="sports" imageList={sportsData}/>} />
        <Route path='/style' element={<Music category="style" imageList={styleData}/>} />
        <Route path='/tech' element={<Music category="technology" imageList={techData} />} />

      </Routes>



    </>
  );
}

export default App;





