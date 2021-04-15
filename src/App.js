import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
function App() {
  const [api, setapi] = useState();

  useEffect(() => {
    const Wsurl = "127.0.0.1:4322";
    // setapi(new AirCityAPI(Wsurl, onReady, log));
  }, []);

  const log = () => {};
  const onReady = () => {};
  const onEvent = (e) => {
    console.log(e);
  };
  if (api) {
    console.log(api);
    api.setEventCallback(onEvent);
  }
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* <Route path="/login" component={}></Route> */}
            <Route path="/" component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </div>
      <div id="player"></div>,
    </>
  );
}

export default App;
