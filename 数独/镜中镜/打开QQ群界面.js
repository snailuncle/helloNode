var qq群号="88888888";
app.startActivity({
    action: "android.intent.action.VIEW",
    data:"mqqapi://card/show_pslcard?card_type=group&uin="+qq群号,
    packageName: "com.tencent.mobileqq",
});//打开qq群名片
