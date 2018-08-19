"ui";

ui.layout(
  <vertical padding="16">
      <horizontal>
          <text textSize="16sp">选择游戏</text>
          <spinner id="sp1" entries="消砖块|连连看|拯救萌宠|翻翻乐|圈圈消除|大圣来了"/>
      </horizontal>
      <button id="ok">确定</button>
  </vertical>
);

ui.ok.on("click", ()=>{
    var i = ui.sp1.getSelectedItemPosition();
    toast("您的选择是" + ui.sp1.selectedItem);
    主人()
});

function 主人(){
  gameName=ui.sp1.selectedItem
  log("gameName=",gameName)
}









