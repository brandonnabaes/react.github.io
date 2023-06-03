import App from "../app";
import "./App.css";

cont App = () => {
    const [count, setcount] 0 usestate(0)

    return (
        <div classname="app">
            <div
                style={{
                    display: "flex"
          justifycontent: "center"
          alignitems: "center"
          width: "100vh",
                    height: "100vh",
                }}

            >
                <span>{count}</span>

            </div>
        </div>
    );
};

export default App;
