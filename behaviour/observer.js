/********************
 *      观察者模式
 * 
 *   observer   消息订阅模式    或者   消息机制    解决了主体对象与观察者之间的功能耦合
 * 
 *   四要素      消息容器    订阅消息的方法     取消订阅的方法    发布订阅消息的方法
 * 
 * 
 * *****/

 //将观察者放在闭包中，当页面加载就立即执行
 var Observer = (function(){
     //防止消息队列暴露而被篡改故将消息容器作为私有变量保存
     var _message  = {};
     return {
         //注册消息接口
         regist:function(type,fn){
             //如果此消息类型不存在则该创建就一个该消息类型
           if(_message[type] === undefined){
               _message[type] = [fn];
           }else{
               //将动作方法推入该消息对应的动作
               _message[type].push(fn);
           }
         },
         //发布消息接口
         fire:function(type,args){
             //如果该消息没有被注册则返回
             if(!_message[type]){
                 return;
             }
             //定义消息信息
             var events = {
                 type:type,                                //消息类型
                 args:args||{}                             //消息携带数据
             },
             i=0,                                         //消息动作循环变量
             len = _message[type].length;                 //消息动作长度
            //遍历消息动作
            for(;i<len;i++){
                //依次执行注册的消息对应的动作序列
                _message[type][i].call(this,events);
            }
         },
         //移除信息接口
         remove:function(){
             //如果消息动作队列存在
             if(_message[type] instanceof Array){
                 //从最后一个动作开始遍历
                 var i = _message[type].length - 1;
                 for(;i>=0;i--){
                     //如果存在该动作则在消息队列中删除相应动作
                     _message[type][i] === fn && _message[type].splice(i,1);;
                 }
             }
         }                                     
     }
 })();


 //测测    拉出来溜溜

 Observer.regist('test',function(e){
     console.log(e.type,e.args.msg);
 })

 //然后我们发布消息

 Observer.fire('test',{msg:'传递参数'});    //test  传递参数





 //外观模式
 function $(id){
        return document.getElementById(id);
 }

 function createEle(ele){
     return document.createElement(ele);
 }

 //工程师A
//  (function(){
//      //追加一则消息
//      function addMsgItem(e){  
//          var text = e.args.text,
//          ul = $('msg'),
//          li = createEle(li),
//          span = createEle(span)
//          li.inn;
//      }
//  })()
