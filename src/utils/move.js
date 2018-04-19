// export default function move(event, self = null) {
//     var newleft, newtop;
//     init: function() {
//             this.bindevent();
//         },
//         bindevent: function() {
//             this.odiv.onmousedown = this.ondemodown.bind(this);
//         },
//         ondemodown: function() {
//             this.disx = event.clientX - parseInt(self.position.left);
//             this.disy = event.clientY - parseInt(self.position.top);
//             document.onmousemove = this.ondemomove.bind(this);
//             document.onmouseup = this.ondemoup.bind(this);
//         },
//         ondemomove: function() {
//             newleft = event.clientX - this.disx;
//             newtop = event.clientY - this.disy;
//             this.positionstr = newleft + '&' + newtop;
//             self.nycmovedate({
//                 left: parseInt(newleft),
//                 top: parseInt(newtop),
//             })
//         },
//         ondemoup: function() {
//             document.onmousemove = null;
//             document.onmouseup = null;
//         }
//     p1.addEventListener('mousedown', function(e) {
//         function move(e) {
//             e.stopPropagation();
//             var p1y = e.pageY - p1ydisy;
//             var p1x = e.pageX - p1xdisx;
//             if (p1ydisw - p1y + p1ypoi < 20 || p1xdisw - p1x + p1xpoi < 20) {
//                 return
//             }
//             self.nycmovedate({
//                 left: parseInt(p1x),
//                 top: parseInt(p1y),
//                 height: p1ydisw - p1y + p1ypoi,
//                 width: p1xdisw - p1x + p1xpoi
//             })
//         }
//         e.stopPropagation();
//         var p1ydisw = dom.offsetHeight; //初始元素高
//         var p1ypoi = parseInt(self.position.top);
//         var p1ydisy = e.pageY - parseInt(self.position.top);
//         var p1xdisw = dom.offsetWidth; //初始元素高
//         var p1xpoi = parseInt(self.position.left); //初始left
//         var p1xdisx = e.pageX - parseInt(self.position.left);
//         document.addEventListener('mousemove', move, false)
//         document.addEventListener('mouseup', function p1up() {
//             document.removeEventListener('mousemove', move);
//         }, false)
//     }, false)
//     p2.addEventListener('mousedown', function(e) {
//         function move(e) {
//             e.stopPropagation();
//             var p2y = e.pageY - p2ydisy;
//             var p2x = e.pageX - p2xdisx;
//             if (p2ydisw - p2y + p2ypoi < 20 || p2xdisw - p2x + p2xpoi < 20) {
//                 return
//             }
//             self.nycmovedate({
//                 top: parseInt(p2y),
//                 height: p2ydisw - p2y + p2ypoi,
//                 width: p2xdisw + p2x - p2xpoi
//             })
//         }
//         e.stopPropagation();
//         var p2xdisw = dom.offsetWidth; //初始元素高
//         var p2xpoi = parseInt(self.position.left); //初始left
//         var p2xdisx = e.pageX - parseInt(self.position.left);
//         var p2ydisw = dom.offsetHeight; //初始元素高
//         var p2ypoi = parseInt(self.position.top); //初始top
//         var p2ydisy = e.pageY - parseInt(self.position.top);
//         document.addEventListener('mousemove', move, false)
//         document.addEventListener('mouseup', function p2up() {
//             document.removeEventListener('mousemove', move);
//             document.removeEventListener('mouseup', p2up)
//         }, false)
//     }, false)
//     p3.addEventListener('mousedown', function(e) {
//         function move(e) {
//             e.stopPropagation();
//             var p3x = e.pageX - p3xdisx;
//             var p3y = e.pageY - p3ydisy;
//             if (p3xdisw + p3x - p3xpoi < 20 || p3ydisw + p3y - p3ypoi < 20) {
//                 return
//             }
//             self.nycmovedate({
//                 height: p3ydisw + p3y - p3ypoi,
//                 width: p3xdisw + p3x - p3xpoi
//             })
//         }
//         e.stopPropagation();
//         var p3xdisw = dom.offsetWidth; //初始元素高
//         var p3xpoi = parseInt(self.position.left); //初始left
//         var p3xdisx = e.pageX - parseInt(self.position.left);
//         var p3ydisw = dom.offsetHeight; //初始元素高
//         var p3ypoi = parseInt(self.position.top); //初始top
//         var p3ydisy = e.pageY - parseInt(self.position.top);
//         document.addEventListener('mousemove', move, false)
//         document.addEventListener('mouseup', function p3up() {
//             document.removeEventListener('mousemove', move);
//             document.removeEventListener('mouseup', p3up)

//         }, false)
//     }, false);
//     p4.addEventListener('mousedown', function(e) {
//             function move(e) {
//                 e.stopPropagation();
//                 var p4y = e.pageY - p4ydisy;
//                 var p4x = e.pageX - p4xdisx;
//                 if (p4ydisw - p4y + p4ypoi < 20 || p4xdisw - p4x + p4xpoi < 20) {
//                     return
//                 }
//                 self.nycmovedate({
//                     left: parseInt(p4x),
//                     height: p4ydisw + p4y - p4ypoi,
//                     width: p4xdisw - p4x + p4xpoi
//                 })
//             }
//             e.stopPropagation();
//             var p4ydisw = dom.offsetHeight; //初始元素高
//             var p4ypoi = parseInt(self.position.top); //初始top
//             var p4ydisy = e.pageY - parseInt(self.position.top);
//             var p4xdisw = dom.offsetWidth; //初始元素高
//             var p4xpoi = parseInt(self.position.left); //初始left
//             var p4xdisx = e.pageX - parseInt(self.position.left);
//             document.addEventListener('mousemove', move, false)
//             document.addEventListener('mouseup', function p5up() {
//                 document.removeEventListener('mousemove', move);
//                 document.removeEventListener('mouseup', p5up)
//             }, false)
//         }, false)
//         //上中心点
//     p5.addEventListener('mousedown', function(e) {
//         function move(e) {
//             e.stopPropagation();
//             var p5y = e.pageY - disy;
//             if (disw - p5y + poi < 20) {
//                 return
//             }
//             self.nycmovedate({
//                 top: parseInt(p5y),
//                 height: disw - p5y + poi,
//                 width: dom.offsetWidth
//             })
//         }
//         e.stopPropagation();
//         var disw = dom.offsetHeight; //初始元素高
//         var poi = parseInt(self.position.top); //初始top
//         var disy = e.pageY - parseInt(self.position.top);
//         document.addEventListener('mousemove', move, false)
//         document.addEventListener('mouseup', function p5up() {
//             document.removeEventListener('mousemove', move);
//             document.removeEventListener('mouseup', p5up)
//         }, false)
//     }, false)
//     p6.addEventListener('mousedown', function(e) {
//         function move(e) {
//             e.stopPropagation();
//             var p6y = e.pageX - disx;
//             if (disw + p6y - poi < 20) {
//                 return
//             }
//             self.nycmovedate({
//                 height: dom.offsetHeight,
//                 width: disw + p6y - poi
//             })
//         }
//         e.stopPropagation();
//         var disw = dom.offsetWidth; //初始元素高
//         var poi = parseInt(self.position.left); //初始left
//         var disx = e.pageX - parseInt(self.position.left);
//         document.addEventListener('mousemove', move, false)
//         document.addEventListener('mouseup', function p5up() {
//             document.removeEventListener('mousemove', move);
//             document.removeEventListener('mouseup', p5up)
//         }, false)
//     }, false)
//     p7.addEventListener('mousedown', function(e) {
//         function move(e) {
//             e.stopPropagation();
//             var p7y = e.pageY - disy;
//             if (disw + p7y - poi < 20) {
//                 return
//             }
//             self.nycmovedate({
//                 height: disw + p7y - poi,
//                 width: dom.offsetWidth
//             })
//         }
//         e.stopPropagation();
//         var disw = dom.offsetHeight; //初始元素高
//         var poi = parseInt(self.position.top); //初始top
//         var disy = e.pageY - parseInt(self.position.top);
//         document.addEventListener('mousemove', move, false)
//         document.addEventListener('mouseup', function p5up() {
//             document.removeEventListener('mousemove', move);
//             document.removeEventListener('mouseup', p5up)
//         }, false)
//     }, false)
//     p8.addEventListener('mousedown', function(e) {
//             function move(e) {
//                 e.stopPropagation();
//                 var p8y = e.pageX - disx;
//                 if (disw - p8y + poi < 20) {
//                     return
//                 }
//                 self.nycmovedate({
//                     left: parseInt(p8y),
//                     height: dom.offsetHeight,
//                     width: disw - p8y + poi
//                 })
//             }
//             e.stopPropagation();
//             var disw = dom.offsetWidth; //初始元素高
//             var poi = parseInt(self.position.left); //初始left
//             var disx = e.pageX - parseInt(self.position.left);
//             document.addEventListener('mousemove', move, false)
//             document.addEventListener('mouseup', function p5up() {
//                 document.removeEventListener('mousemove', move);
//                 document.removeEventListener('mouseup', p5up)
//             }, false)
//         }, false)
//         //左中点

//     p9.addEventListener('mousedown', (e) => {
//             const showScreenX = e.pageX - parseInt(self.position.left);
//             const showScreenY = e.pageY - parseInt(self.position.top);
//             console.log(showScreenX)
//             e.stopPropagation();
//             const originx = parseInt(self.position.left) + dom.offsetWidth / 2;
//             const originy = parseInt(self.position.top) + dom.offsetHeight / 2;

//             function parseJiao(x) { //输入值返回余弦值的角度比如1/2==60
//                 return Math.round(Math.acos(x) * 180 / Math.PI);
//             }

//             function rotate(e) {
//                 function getAngle(px, py, mx, my) {
//                     console.log(px, py, mx, my)
//                     var x = Math.abs(px - mx);
//                     var y = Math.abs(py - my);
//                     var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
//                     var cos = y / z;
//                     var radina = Math.acos(cos); //用反三角函数求弧度
//                     var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度

//                     if (mx > px && my > py) { //`鼠标在第四象限`
//                         angle = 180 - angle;
//                     }

//                     if (mx == px && my > py) { //鼠标在y轴负方向上
//                         angle = 180;
//                     }

//                     if (mx > px && my == py) { //鼠标在x轴正方向上
//                         angle = 90;
//                     }

//                     if (mx < px && my > py) { //鼠标在第三象限
//                         angle = 180 + angle;
//                     }

//                     if (mx < px && my == py) { //鼠标在x轴负方向
//                         angle = 270;
//                     }

//                     if (mx < px && my < py) { //鼠标在第二象限
//                         angle = 360 - angle;
//                     }
//                     // angle = -angle + 360;
//                     console.log(angle)
//                     self.nycmovedate({
//                         'rotate': angle
//                     })
//                     return
//                 }
//                 getAngle(originx, originy, e.pageX - showScreenX, e.pageY - showScreenY);
//             }
//             document.addEventListener('mousemove', rotate, false);
//             document.addEventListener('mouseup', () => {
//                 document.removeEventListener('mousemove', rotate);
//             }, false)
//         }, false)
//         // document.addEventListener('dbclick', (e) => {
//         //     console.log(dom.offsetLeft)
//         //     self.nycmovedate({
//         //         left: dom.offsetLeft,
//         //         top: dom.offsetTop,
//         //         height: dom.offsetHeight,
//         //         width: dom.offsetWidth
//         //     })
//         //     e.stopPropagation();
//         // }, false)
// }