//单体模式，之允许实例化一次的对象类，有时我们也用一个对象类规划一个命名空间，井井有条地管理对象上的属性和方法。
function g(id){
    return document.getElementById(id);
}
function css(id,key,value){
    //简单样式属性设置
    g(id).style[key] = value;
}
function attr(id,key,value){
    g(id)[key] = value;
}
function html(id,value){
    g(id).innerHTML = value;
}
function on(id,type,fn){
    g(id)['on'+type] = fn;
}

//这样添加了太多的全局变量  ，  加命名空间


let huan = {
    g:function(id){
        return document.getElementById(id);
    },
    css:function(id,key,value){
        //简单样式属性设置
        this.g(id).style[key] = value;
    }
}

