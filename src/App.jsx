import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AchievSkins, Champions, Clicker, Items, NavbarComponent, Options } from './Pages';


const App = () => {
    return (
        <>
            <NavbarComponent />
            <Routes>
                <Route exact index element={<Clicker />} />
                <Route path='champions' element={<Champions />} />
                <Route path='items' element={<Items />} />
                <Route path='achievskins' element={<AchievSkins />} />
                <Route path='options' element={<Options />} />
            </Routes>
        </>
    );
}

export default App;
