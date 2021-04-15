import { useEffect, useState } from "react";
import { showtuceng, hidetuceng } from "../../util/showtuceng";
import treedata from "../../util/treedata.json";
import store from "../../store";
const Gnbj = () => {
  const [num, setNum] = useState(store.getState());
  useEffect(() => {
    // showtuceng(treedata.gnbjdata);
    console.log(num);
  }, [num]);
  useEffect(() => {
    return () => {
      hidetuceng(treedata.gnbjdata);
    };
  });
  const listen = () => {
    setNum(store.getState());
    // console.log(store.getState(), 8888);
  };
  store.subscribe(listen);
  const add = () => {
    store.dispatch({
      type: "加加加",
      state: "sadasdasd",
    });
  };
  const jian = () => {
    store.dispatch({
      type: "减减减",
      state: [{ a: 2, c: 4 }],
    });
  };
  return (
    <>
      <button onClick={add}>加</button>
      <button onClick={jian}>减</button>
      {/* <p>{num.title}</p> */}
    </>
  );
};

export default Gnbj;
