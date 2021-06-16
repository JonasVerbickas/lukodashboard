import ROI from "./ROI.jpg";
import "./App.css";

function SCO() {
  return (
    <div className="SCO">
      <div className="SCO-cell-row">
        <h2>Kasa 4</h2>
        <h4>1/1</h4>
      </div>
      <div className="SCO-cell-row disappearing-shit">
        <h4>2014-04-28 13:29:31</h4>
        <h4>RO123123</h4>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="dashboard">
      <div className="left-dashboard">
        <div className="headers disappear-while-big">
          <h1>Kasa</h1>
          <h3>RO123123</h3>
        </div>
        <div className="image-row">
          <div className="image-col">
            <img src={ROI}></img>
            <h2>Received</h2>
          </div>
          <div className="image-col">
            <img src={ROI}></img>
            <h2>Expected</h2>
          </div>
        </div>
        <div className="description">
          <div
            className="headers disappearing-shit"
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <h1>Kasa</h1>
            <h2>69:69:69</h2>
            <h3>RO123123</h3>
          </div>
          <div className="item-table">
            <div className="table-item">2014-04-28 13:29:31</div>
            <div className="table-item">Oranges</div>
            <div className="table-item">5112</div>
            <div className="table-item">2014-04-28 13:29:31</div>
            <div className="table-item">Oranges</div>
            <div className="table-item">5112</div>
            <div className="table-item">2014-04-28 13:29:31</div>
            <div className="table-item">Oranges</div>
            <div className="table-item">5112</div>
          </div>
        </div>
        <div className="button-row">
          <button style={{ marginRight: "auto", background: "#C00200" }}>
            Suspend SCO
          </button>
          <div className="button-subrow">
            <button style={{ marginRight: "10px", background: "#0070C0" }}>
              False alarm
            </button>
            <button style={{ background: "#00B050" }}>Solved</button>
          </div>
        </div>
      </div>
      <div className="right-dashboard">
        <div class="right-dashboard-header">
          <h1
            style={{
              color: "#C00200",
              textDecoration: "underline",
              display: "inline",
            }}
          >
            ALARMS
          </h1>
          <button
            style={{
              borderRadius: "100%",
              background: "#C00200",
            }}
          >
            8
          </button>
        </div>

        {SCO()}
        {SCO()}
        {SCO()}
        {SCO()}
        {SCO()}
      </div>
    </div>
  );
}

export default App;
