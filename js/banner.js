//定义图片的路径，存放到数组
var url=['url(img/banner1.jpg)','url(img/banner2.jpg)','url(img/banner3.jpg)','url(img/banner4.jpg)'];
 //定义显示函数
function pic(index){
   //通过循环和判断语句，如果传过来的参数和i对应，那么久吧数组的第i个值赋值给banner的背景图片属性。
   for(var i=0;i<4;i++){
    if(i==index){
    document.getElementById('banner').style.backgroundImage=url[i];
    //  console.log("xxxxxxxxxxxxxxxxxx")
    }
   }
}
