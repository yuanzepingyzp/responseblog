/**
 * Created by zeping on 2015/11/8.
 */
window.onload=function(){
        blogNumber("blogNumber","white","#928f8a",getBlogNumber());
        blogNumber("commentNumber","#39566a","white","1")
        triangle();
        commentLogo("#39566a");
        getData('server.php?data="html总结"');
        rotatetriangle();
        changecolor();
        changecontent();
    }
//改变内容
function changecontent(){
    var bloglist=document.querySelectorAll("#blogMenu ul li");
    for(var i=0;i<bloglist.length;i++){
        bloglist[i].addEventListener("click",function(){
            var selectblog=this.getAttribute("rel");
            getData('server.php?data='+selectblog);
        })
    }
}
//变换logo颜色
function changecolor(){
    var commentButton=document.getElementById("commentButton");
    commentButton.addEventListener("mouseover",function(){
        commentLogo("#1bbb4b");
    });
    commentButton.addEventListener("mouseleave",function(){
        commentLogo("#39566a");
    })
}
//三角旋转
function rotatetriangle(){
    var triangle=document.getElementById("triangle");
    var blogMenu=document.getElementById("blogMenu");
    blogMenu.addEventListener("click",function(){
        if(triangle.getAttribute("class")=="rotateUp"){
            triangle.setAttribute("class","rotateDown");
        }else
          triangle.setAttribute("class","rotateUp");
    });
}
//获取数据
function getData(url){
     ajax(url,function(data){
            var articleTitle=document.getElementById("articleTitle");
            articleTitle.innerHTML=data[0].articletitle;
           var articleContent=document.getElementById("articleContent");
            articleContent.innerHTML=data[0].articlecontent;
           var articleComment=document.getElementById("articleComment");
            articleComment.innerHTML=data[1].content;
    });
}
//ajax请求
function ajax(url,callback){
        var xhr=new XMLHttpRequest()||new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("GET",url,true);
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4&&xhr.status===200){
                var data=JSON.parse(xhr.responseText);
                     callback(data)();
            }
        }
}
//绘制博客数目
function blogNumber(id,color,textColor,text){
    var canvas=document.getElementById(id);
    var ctx=canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(20,20,14,0,2*Math.PI);
    ctx.fillStyle=color;
    ctx.fill();

    ctx.font="20px 'Microsoft YaHei'";
    ctx.fillStyle=textColor;
    ctx.fillText(text,13,28);
}
//绘制三角形
function triangle(){
    var canvas=document.getElementById("triangle");
    var ctx=canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(5,9);
    ctx.lineTo(20,31);
    ctx.lineTo(35,9);
    ctx.closePath();
    ctx.fillStyle="white";
    ctx.fill();
}
//绘制评论logo
function commentLogo(color){
    var canvas=document.getElementById("commentLogo");
    var context=canvas.getContext("2d");


    context.clearRect(0,0,40,40);
    var step = 1 / 50;
    context.beginPath();
    context.moveTo(20 + 15, 20);
    for (var i = 0; i < 2 * Math.PI; i += step)
    {
        context.lineTo(20 + 15 * Math.cos(i), 20 + 10 * Math.sin(i));
    }
    context.closePath();
    context.lineWidth=4;
    context.strokeStyle=color;
    context.stroke();


    context.beginPath();
    context.moveTo(16,30);
    context.quadraticCurveTo(20,30,19,40);
    context.quadraticCurveTo(30,25,24,30);
    context.fillStyle=color;
    context.fill();

    context.beginPath();
    context.arc(20,20,3,0,2*Math.PI);
    context.arc(12,20,3,0,2*Math.PI);
    context.arc(28,20,3,0,2*Math.PI);
    context.fillStyle=color;
    context.fill();
}
//获得博客数量
function getBlogNumber(){
    var number=document.getElementById("blogMenu").getElementsByTagName("li").length;
    return number;
};