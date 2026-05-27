import { useState } from "react";
import styles from "./App.module.css";
import MemoryGame from "./pages/MemoryGame/MemoryGame.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import StartMenu from "./pages/StartMenu/StartMenu.jsx";

function App() {
    const [difficulty, setDifficulty] = useState(""); // debug only
    const [score, setScore] = useState(0);
    const [highestScore, setHighestScore] = useState(0);

    if (score > highestScore) {
        setHighestScore((prev) => prev + 1);
    }

    return (
        <div className={styles.appWrapper}>
            {!difficulty ? (
                <StartMenu setDifficulty={setDifficulty} />
            ) : (
                <>
                    <Header
                        score={score}
                        highestScore={highestScore}
                        setDifficulty={setDifficulty}
                    />
                    <main>
                        <MemoryGame
                            difficulty={difficulty}
                            setScore={setScore}
                        />
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
