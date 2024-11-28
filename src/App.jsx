import "./App.css";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangContext } from "./Contexts/LangContext";
import { useEffect, useState } from "react";

function App() {
    let [lang, setLang] = useState('en');

    useEffect(() => {
        const innerCursor = document.querySelector(".inner-cursor");
        const outerCursor = document.querySelector(".outer-cursor");

        const moveCursor = (e) => {
            innerCursor.style.left = outerCursor.style.left = `${e.clientX}px`;
            innerCursor.style.top = outerCursor.style.top = `${e.clientY}px`;
        };

        const handleHover = (e) => {
            if (e.target.classList.contains("hover-element")) {
                innerCursor.style.width = "20px";
                innerCursor.style.height = "20px";
                innerCursor.style.opacity = ".5";
            }
        };

        const resetHover = () => {
            innerCursor.style.width = "8px";
            innerCursor.style.height = "8px";
            innerCursor.style.opacity = "1";
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHover);
        window.addEventListener("mouseout", resetHover);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHover);
            window.removeEventListener("mouseout", resetHover);
        };
    }, []);

    return (
        <LangContext.Provider value={{ lang: lang, setLang: setLang }}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="academy" element={<h1>Academy</h1>} />
                        <Route path="agency" element={<h1>Agency</h1>} />
                    </Routes>
                </BrowserRouter>
                <div className="inner-cursor"></div>
                <div className="outer-cursor"></div>
            </div>
        </LangContext.Provider>
    );
}

export default App;
