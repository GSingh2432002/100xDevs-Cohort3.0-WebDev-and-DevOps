// Create a function component named App that will be rendered in the root element.
function App() {

  return (
    // Applying inline styles to the div element
    <div style={{ backgroundColor: "rgba(120, 156, 207, 1)", height: "100vh"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>

          <div>
            {/* Call PostComponent here to render it in the App Component */}
            <PostComponent />
          </div>
          
          <div>
            {/* Call PostComponent here to render it in the App Component */}
            <PostComponent />
          </div>

          <div>
            {/* Call PostComponent here to render it in the App Component */}
            <PostComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

// Create a style object named style that will be applied to the div element in the PostComponent.
const style = {
  width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10
};

// Create a function component named PostComponent that will be rendered in the App component.
function PostComponent(){
  // Return JSX element that will be rendered in the PostComponent
  return(
    // Applying style object to the div element
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <div style={{ fontSize: "14px", marginLeft: "10px" }}>
          <b>100xDevs</b>
          <div>23,888 followers</div>
          <div>12m</div>
        </div>
      </div>

      <div style={{ fontSize: 14 }}>
          What to know how to win big? Check out how these folks won $6000 in bounties.
      </div>
    </div>
  );
}

export default App
