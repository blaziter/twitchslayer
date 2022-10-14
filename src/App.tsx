import React from 'react';
import { store } from './Features/Store/store';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Achievements, Champions, Clicker, Items, NavbarComponent, Options, Skins } from './Pages';


const App = () => {
    return (
        <>
            <Provider store={store}>
                <NavbarComponent />
                <Routes>
                    <Route index element={<Clicker />} />
                    <Route path='champions' element={<Champions />} />
                    <Route path='items' element={<Items />} />
                    <Route path='achievements' element={<Achievements />} />
                    <Route path='skins' element={<Skins />} />
                    <Route path='options' element={<Options />} />
                </Routes>
            </Provider>
        </>
    );
}

export default App;
