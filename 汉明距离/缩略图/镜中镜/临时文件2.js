str="悬浮文字"
path='/storage/emulated/0/QQ图中图/'+'原始截图.png'

var w = floaty.rawWindow(
  <frame background="#00FF00">
    <vertical  margin="3" weightSum="6">
      <text id="图中图"  layout_weight="1" text="图中图" gravity="center" color="#ffffff" size="34"/>

      <canvas id="board"/>
    </vertical>
  </frame>
);
w.setSize(1080, 1920)
setTimeout(()=>{
  w.close();
}, 3330);


{/* <vertical>
<canvas id="board"/>
</vertical> */}
