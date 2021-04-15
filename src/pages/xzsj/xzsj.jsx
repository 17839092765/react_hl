import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { showtuceng, hidetuceng } from "../../util/showtuceng";
import treedata from "../../util/treedata.json";
export const Xzsj = () => {
  let History = useHistory();
  useEffect(() => {
    showtuceng(treedata.xzsjdata);
    console.log("现状数据进入");
  }, []);
  // useEffect(() => {
  //   if (History.location.pathname.indexOf("/Home/xzsj") === -1) {
  //     return () => {
  //       console.log(History.location.pathname);
  //       hidetuceng(treedata.xzsjdata);
  //       console.log("现状数据退出");
  //     };
  //   }
  // });
  return 1;
};
