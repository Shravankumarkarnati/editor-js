import "./styles.css";
import Editor from "./Editor";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ width: "400px", minHeight: "400px" }}>
        <Editor />
      </div>
    </div>
  );
}
