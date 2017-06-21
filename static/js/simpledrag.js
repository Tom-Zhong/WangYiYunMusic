/*
* @Author: Zhongguiyong
* @Date:   2017-03-13 11:25:36
* @Last Modified by:   Zhongguiyong
* @Last Modified time: 2017-03-13 11:40:13
*/

'use strict';
 	  dragInit("j-progressbtn");//调用
      //拖拽初始化
      function dragInit(id){
        var $div = document.getElementById(id);
        var style = {
          position: "absolute",
          left: "0",
          top: "-6px"
        }
        for(var k in style){
          $div.style[k] = style[k];//设置关键css
        }
        $div.onmousedown = function(e){//鼠标按键按下
          e = e || window.event;
          var x = e.clientX - $div.offsetLeft;//鼠标到左上角的距离信息, 固定不变
          var y = e.clientY - $div.offsetTop;
          document.onmousemove = function(e){//鼠标移动
            e = e || window.event;
            var L = e.clientX - x;
            var T = e.clientY - y;
            var pW = document.documentElement.clientWidth;//页面宽度
            var pH = document.documentElement.clientHeight;
            var divW = $div.offsetWidth;//Dom宽度
            var divH = $div.offsetHeight;
            // 范围限定
            if(L < 0){
              L = 0;
            }
            if(T < 0){
              T = 0;
            }
            if(L > pW - divW){
              L = pW - divW;
            }
            if(T > pH - divH){
              T = pH - divH;
            }
            // 范围限定 end
            $div.style.left = L + "px";
            $div.style.top = -6 + "px";
          };
          document.onmouseup = function(e){//鼠标按键松开
            document.onmousemove = null;
          };
        };
      }