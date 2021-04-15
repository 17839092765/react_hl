import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { showtuceng, hidetuceng } from "../../../util/showtuceng";
import treedata from "../../../util/treedata.json";
export const Fdtz = () => {
  let History = useHistory();
  useEffect(() => {
    showtuceng(treedata.xzsjdata);
    console.log("法定图则进入");
  }, []);
  useEffect(() => {
    // // hidetuceng(treedata.xzsjdata);
    // console.log(History.location.pathname.indexOf("/Home/xzsj"));
    return () => {
      console.log("法定图则退出");
      if (History.location.pathname.indexOf("/Home/xzsj") === -1) {
        console.log(History.location.pathname);
        hidetuceng(treedata.xzsjdata);
        console.log("法定图则退出22222222222");
      }
    };
  });
  return <>222</>;
};
