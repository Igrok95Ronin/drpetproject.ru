import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';

import todolistImage from './assets/img/todolist.png';
import ticTacToeImage from './assets/img/tic-tac-toe-icon-1024x1024-bmwf454z.png';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  items={[
                    {
                      name: 'To-do list',
                      link: 'https://todolist.drpetproject.ru/',
                      img: todolistImage,
                      stacks: {
                        Frontend: 'React',
                        Backend: 'Golang',
                        Architecture: 'Monolithic',
                        DB: 'SQLite, Gorm',
                        Router: 'Httprouter',
                        Config: 'Cleanenv',
                        Logger: 'Logrus',
                        Testing: 'Goconvey',
                        Registration: 'JWT',
                      },
                    },
                    {
                      name: 'Tic-Tac-Toe',
                      link: '/2',
                      img: ticTacToeImage,
                      stacks: {
                        Frontend: 'React',
                        Backend: 'Golang',
                        Architecture: 'Monolithic',
                        DB: 'SQLite, Gorm',
                        Router: 'Httprouter',
                        Config: 'Cleanenv',
                        Logger: 'Logrus',
                        Testing: 'Goconvey',
                        Registration: 'JWT',
                        Protocol: 'WebSocket',
                      },
                    },
                  ]}
                />
              }
            ></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="*" element={<Resume />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
