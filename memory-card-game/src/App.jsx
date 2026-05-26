import { useState } from "react";
import styles from "./App.module.css";
import MemoryGame from "./pages/MemoryGame/MemoryGame.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import StartMenu from "./pages/StartMenu/StartMenu.jsx";

function App() {
    const [difficulty, setDifficulty] = useState("medium"); // debug only

    return (
        <div className={styles.appWrapper}>
            {!difficulty ? (
                <StartMenu setDifficulty={setDifficulty} />
            ) : (
                <>
                    <Header />
                    <main>
                        <MemoryGame difficulty={difficulty} />
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
