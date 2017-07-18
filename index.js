function ajaxFunc() {
	alert("HelloWorld");
	doGet("http://sync-scm.laobai.com/ping");
	// doPost("http://sync-scm.laobai.com/ping", JSON.stringify({'name':"name",'passwd':"passwd"}));
}

var xmlHttp;

function createxmlHttpRequst() {

	if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		xmlHttp = new XMLHttpRequest();
	}
}

function doGet(url) {
	createxmlHttpRequst();
	xmlHttp.open("GET", url);
	xmlHttp.send(null);
	xmlHttp.onreadystatechange = function() {
		if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) {
			alert('success' + xmlHttp.responseText);
		} else {
			alert('fail');
		}
	}
}

function doPost(url, data) {
	createxmlHttpRequst();
	xmlHttp.open("POST", url);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send(data);
	xmlHttp.onreadystatechange = function() {
		if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) {
			alert('success');
		} else {
			alert('fail');
		}
	}
}

function origin() {
	//获取按钮list
     var btnList = document.querySelectorAll('.starBtn');
         //循环绑定点击事件
     for (var i = 0; i < btnList.length; i++) {
         btnList[i].onclick = function(){
                         //新建异步处理对象
             var ajax = new XMLHttpRequest();
                         //设置请求类型为post,请求的页面为server1.php
             ajax.open('post','server1.php');
         //因为是post请求所以必须加上setRequestHeader(get请求可以忽略)
         ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                //请求所带的参数 name=this.value
         ajax.send('name='+this.value);
                //绑定onreadystatechange事件
         ajax.onreadystatechange=function(){
                //判断如果请求的状态是否成功
             if (ajax.readyState==4&&ajax.status==200) {
               //根据返回值ajax.responseText操作dom元素更改div的背景图片        
 				document.querySelector('.div1').style.background = 'url('+ajax.responseText+') no-repeat center/cover';
                document.querySelector('.div2').innerHTML = ajax.responseText
             };
         }
         }
     };
}