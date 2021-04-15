import "./router.css";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
export const Routerlink = () => {
  const link = [
    {
      path: "/Home/hlsj",
      name: "红岭实景",
    },
    {
      path: "/Home/gnbj",
      name: "功能布局",
    },
    {
      path: "/Home/xzsj",
      name: "现状数据",
      chilren: [
        {
          path: "/Home/xzsj/fdtz",
          name: "法定图则",
        },
        {
          path: "/Home/xzsj/xzqs",
          name: "现状权属",
        },
        {
          path: "/Home/xzsj/tdly",
          name: "土地利用",
        },
        {
          path: "/Home/xzsj/csgx",
          name: "城市更新",
        },
      ],
    },
    {
      path: "/Home/zsyz",
      name: "招商引资",
    },
    {
      path: "/Home/wlyj",
      name: "未来愿景",
    },
  ];
  let History = useHistory();
  const linkTo = (val, e) => {
    // 阻止合成事件间的冒泡
    e.stopPropagation();
    History.push(val.path);
  };
  return (
    <div className="linkbox">
      {link.map((item) => {
        return (
          <div
            key={item.path}
            className={
              History.location.pathname.indexOf(item.path) !== -1
                ? "islink linkcase"
                : "linkcase"
            }
            onClick={(e) => linkTo(item, e)}
          >
            {item.name}
            {item.chilren &&
              History.location.pathname.indexOf(item.path) !== -1 && (
                <div>
                  {item.chilren.map((mon, index) => {
                    return (
                      <div
                        key={index}
                        onClick={(e) => linkTo(mon, e)}
                        className={
                          History.location.pathname === mon.path
                            ? "islink linkcase1"
                            : "linkcase1"
                        }
                      >
                        {mon.name}
                      </div>
                    );
                  })}
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
};
