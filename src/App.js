import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{
        display: "flex",
        flexDirection: "row",
        width:500,
        height:500,
        backgroundColor:'black',
        justifyContent: "center",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap:"wrap",
        gap: 12,
      }}>
        <div style={{ width: 100, height: 100, backgroundColor: 'orange', border: '1px solid white' }}>
          
        1</div> 
        <div style={{ width: 100, height: 100, backgroundColor: 'orange', border: '1px solid white' }}>
          
        2</div>
        <div style={{ width: 100, height: 100, backgroundColor: 'orange', border: '1px solid white' }}>
          
        3</div> 
        <div style={{ width: 100, height: 100, backgroundColor: 'orange', border: '1px solid white' }}>
          
        4</div> 
        <div style={{ width: 100, height: 100, backgroundColor: 'orange', border: '1px solid white' }}>
          
        5</div>
        <div style={{ width: 100, height: 100, backgroundColor: 'orange', border: '1px solid white' }}>
          
        6</div> 
        
      </div>
    </div>
  );
}

export default App;
