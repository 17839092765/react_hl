function showtuceng(data) {
  if (__g) {
    data.map((item) => {
      return __g.infoTree.show(item.layerid);
    });
  }
}
function hidetuceng(data) {
  if (__g) {
    data.map((item) => {
      return __g.infoTree.hide(item.layerid);
    });
  }
}
export { showtuceng, hidetuceng };
