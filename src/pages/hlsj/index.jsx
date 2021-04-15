import { useEffect } from "react";
import { showtuceng, hidetuceng } from "../../util/showtuceng";
import treedata from "../../util/treedata.json";
const Hlsj = () => {
  useEffect(() => {
    showtuceng(treedata.hlsjdata);
  }, []);
  useEffect(() => {
    return () => {
      hidetuceng(treedata.hlsjdata);
    };
  });
  return "";
};

export default Hlsj;
