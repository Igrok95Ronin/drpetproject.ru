import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

import todolistImage from "./assets/img/todolist.png";
import todolistjwtImage from "./assets/img/todolistjwt.png";
import coffeshopImage from "./assets/img/coffeshop.png";

import "./App.scss";

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
                      name: "To-do list",
                      link: "https://todolist.drpetproject.ru/",
                      img: todolistImage,
                      stacks: {
                        Frontend: "React",
                        Backend: "Golang",
                        Architecture: "Microservice",
                        Container: "Docker, Compose",
                        CORS: "Go CORS",
                        Router: "Httprouter",
                        DB: "PostgreSQL, Gorm",
                        Config: "Cleanenv",
                        Logger: "Logrus",
                        GIT: "",
                      },
                      gitLink: "https://github.com/Igrok95Ronin/todolist.drpetproject.ru-api.git",
                    },
                    {
                      name: "To-do list JWT",
                      link: "https://todolistjwt.drpetproject.ru/",
                      img: todolistjwtImage,
                      stacks: {
                        Frontend: "React",
                        Backend: "Golang",
                        Architecture: "Microservice",
                        Container: "Docker, Compose",
                        CORS: "Go CORS",
                        Router: "Httprouter",
                        DB: "PostgreSQL, Gorm",
                        Config: "Cleanenv",
                        Logger: "Logrus",
                        Authentication: "JWT",
                        GIT: "",
                      },
                      gitLink: "https://github.com/Igrok95Ronin/todolistjwt.drpetproject.ru-api",
                    },
                    {
                      name: "Coffe shop",
                      link: "https://coffeshop.drpetproject.ru/",
                      img: coffeshopImage,
                      stacks: {
                        Frontend: "React",
                        Backend: "Golang",
                        Architecture: "Microservice",
                        Container: "Docker, Compose",
                        CORS: "Go CORS",
                        Router: "Httprouter",
                        DB: "PostgreSQL, Gorm",
                        Config: "Cleanenv",
                        Logger: "Logrus",
                        Authentication: "JWT",
                        Cash: "Redis",
                        GIT: "",
                      },
                      gitLink: "https://github.com/Igrok95Ronin/coffee-shop-drpetproject.ru-api",
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
