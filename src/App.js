import logo from './logo.svg';
import './App.css';
import MainDiv from "./component.jsx";

function App() {
  const styles = {
    bodyDiv : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#7379EA"
    }
  };
  return (
    <div style={styles.bodyDiv}>
    
      <MainDiv/>
    </div>
  );
}

export default App;
