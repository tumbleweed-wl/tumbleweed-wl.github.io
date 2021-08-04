body

{

  background: lightgray url(../img/test.jpg) no-repeat fixed top;

}

/* background-color 背景色

background-image 背景图

background-repeat 背景平铺方式

background-attachment 背景图滚动方式

background-position 对齐方式

*/

/* 如果要在一行代码中实现背景多种的效果，只需要在bacakground标签后按照上述顺序添加样式即可 */

/* 一个./属于绝对路径，两个../属于相对路径 */





h4

{

  letter-spacing: 15px;

  font-size: medium;



}



\#app

{

  text-align: center;

  

} 



/* ID属性不要以数字开头，数字开头的ID在 Mozilla/Firefox 浏览器中不起作用。

class类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。 

总结起来就是选择器都不要使用数字开头，部分浏览器无法生效*/





/* CSS有三种选择器：标签选择器（无任何前缀），ID选择器（需要在html标签开头处创建ID名），类选择器（需要在html标签开头处创建class名） */





/* 样式表有三种连接方式：

1.外部样式：新建一个CSS文件夹，存储所有页面的样式，在html头部中meat标签内使用link标签连接样式表，通过这个表格可以设置整个页面的外观，

每个页面都可以分别使用不通的样式表连接，实用性最佳。

2.内部样式：在头部中使用style标签编写需要的样式，选择器与外部样式一样可以用三种选择器选择，一般是单个文档需要使用额外的样式时可以使用，

但是认为实用性不佳，而且使得代码页面看起来不够简单整洁。

3.内联样式：直接在标签的开始处添加style样式，一般是样式只在一个样式上应用一次的时候，可以使用。最不推荐。 */



/* 如果在同一个页面内某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来，

一般情况下，优先级如下：

（内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式 

注意：如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式。*/



\#app

{

  /* font-family: '黑体','宋体', Courier, monospace;

  font-size: 15px; */

}



/* font-family 属性设置文本的字体系列。

font-family 属性应该设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体。

注意: 如果字体系列的名称超过一个字，它必须用引号，如Font Family："宋体"。

多个字体系列是用一个逗号分隔指明 */



/* font-size用来设置文本的尺寸

1.绝对大小：

设置一个指定大小的文本

不允许用户在所有浏览器中改变文本大小

确定了输出的物理尺寸时绝对大小很有用

2.相对大小：

相对于周围的元素来设置大小

允许用户在浏览器中改变文字大小

如果你不指定一个字体的大小，默认大小和普通文本段落一样，是16像素（16px=1em） */



a:link{color: black;}

/* 未访问过的链接 */

a:visited{color:chocolate;}

/* 用户已访问过的链接 */

a:hover{color: chocolate;}

/* 当用户鼠标放在链接上时 */

a:active{color: crimson;}

/* 链接被点击的那一刻 */

/* 当设置为若干链路状态的样式，也有一些顺序规则：

a:hover 必须跟在 a:link 和 a:visited后面

a:active 必须跟在 a:hover后面 */



a{

  font-weight: bolder;

  text-decoration: none;

}

/* 修改字体粗细 */



/* 可以使用ol有序列表和ul无序列表设计整体的框架 ，下面这是个多重选择器，在标签后面添加类选择器*/

ul.a{

  /* list-style-type:none属性可以用于移除列表前端的小标记。默认情况下列表 <ul> 或 <ol> 还设置了内边距和外边距，可使用 margin:0 和 padding:0 来移除

  这个属性只对列表产生作用 */

  list-style-type: none;

}

/* 列表属性也可以和background一样，按照顺序简写属性，顺序如下：

list-style-type

list-style-position

list-style-image

如果上述值丢失其中一个，其余仍在指定的顺序，也没关系。 */



/* * {}这个*可以定义整个页面所有的元素 */

/* 用某个标签，比如p标签，后面*5可以直接生成5个p标签 */