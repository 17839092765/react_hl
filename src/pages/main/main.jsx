import { Route, Switch, Redirect } from "react-router-dom";
// import { Route, Switch, Redirect } from "react-keeper";
import Gnbj from "../gnbj";
import Hlsj from "../hlsj";
import Wlyj from "../wlyj";
import { Fdtz } from "../xzsj/fdtz/fdtz";
import { Xzsj } from "../xzsj/xzsj";
import Zsyz from "../zsyz";

export const Main = () => {
  return (
    <>
      <Switch>
        <Redirect from="/" exact to="/Home/hlsj" />
        <Route path="/Home/hlsj" exact component={Hlsj} />
        <Route path="/Home/gnbj" exact component={Gnbj} />
        <Route path="/Home/xzsj" exact component={Xzsj} />
        <Route path="/Home/xzsj/fdtz" exact component={Fdtz} />;
        <Route path="/Home/zsyz" exact component={Zsyz} />
        <Route path="/Home/wlyj" exact component={Wlyj} />
      </Switch>
    </>
  );
};
