---
id: lei2
title: CSS
---

## CSS笔记

### 背景（background）
---
```css
body {
  background: lightgray url(../img/test.jpg) no-repeat fixed top;
}
```

>  background-color 背景色
>
> background-image 背景图
>
> background-repeat 背景平铺方式
>
> background-attachment 背景图滚动方式
>
> background-position 对齐方式
>

- 如果要在一行代码中实现背景多种的效果，只需要在`bacakground`标签后按照上述顺序添加样式即可 
  一个`./`属于绝对路径，两个`../`属于相对路径 


```css
h4 {
  letter-spacing: 15px;
  font-size: medium;
}

#app {
  text-align: center;
} 
```
### 样式表链接方式
---
样式表有三种连接方式：
>
1.外部样式：新建一个CSS文件夹，存储所有页面的样式，在html头部中meat标签内使用link标签连接样式表，通过这个表格可以设置整个页面的外观，
每个页面都可以分别使用不通的样式表连接，实用性最佳。
>
2.内部样式：在头部中使用style标签编写需要的样式，选择器与外部样式一样可以用三种选择器选择，一般是单个文档需要使用额外的样式时可以使用，
但是认为实用性不佳，而且使得代码页面看起来不够简单整洁。
>
3.内联样式：直接在标签的开始处添加style样式，一般是样式只在一个样式上应用一次的时候，可以使用。最不推荐。


:::important
如果在同一个页面内某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来，

一般情况下，优先级如下：
（内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式 
:::

:::tip
注意：如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式。
:::


### 字体样式（font）
---
```css
#app{
  font-family: '黑体','宋体', Courier, monospace;
  font-size: 15px;
}
```
>
font-family 属性设置文本的字体系列。
font-size用来设置文本的尺寸
>
font-family 属性应该设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体。
:::tip
注意: 如果字体系列的名称超过一个字，它必须用引号，如

Font Family："宋体"

多个字体系列是用一个逗号分隔指明 ,如
Font Family："宋体”，“黑体"
:::

>
1.绝对大小：
设置一个指定大小的文本
不允许用户在所有浏览器中改变文本大小
确定了输出的物理尺寸时绝对大小很有用
>
2.相对大小：
相对于周围的元素来设置大小
允许用户在浏览器中改变文字大小
如果你不指定一个字体的大小，默认大小和普通文本段落一样，是16像素（16px=1em） */


### 鼠标与链接交互的元素
---
```css
a:link{color: black;}
/* 未访问过的链接 */

a:visited{color:chocolate;}
/* 用户已访问过的链接 */

a:hover{color: chocolate;}
/* 当用户鼠标放在链接上时 */

a:active{color: crimson;}
/* 链接被点击的那一刻 */
```
:::tip
当设置为若干链路状态的样式，也有一些顺序规则：
a:hover 必须跟在 a:link 和 a:visited后面
a:active 必须跟在 a:hover后面.
:::




```css
a {

  font-weight: bolder;这里是设置字体加粗的效果
  /* 修改字体粗细 */

  text-decoration: none;这里是说明去除链接默认的下划线
/*属性规定添加到文本的修饰，下划线、上划线、删除线等。*/

}
```



### 使用列表制作框架
---
> 可以使用ol有序列表和ul无序列表设计整体的框架 ，下面这是个多重选择器，在标签后面添加类选择器


```css
ul.a{

    list-style-type:none
    /*属性可以用于移除列表前端的小标记。默认情况下列表 <ul> 或 <ol> 还设置了内边距和外边距，可使用 margin:0 和 padding:0 来移除

    这个属性只对列表产生作用 */

}
```
>
列表属性也可以和background一样，按照顺序简写属性，顺序如下：
>
list-style-type
>
list-style-position
>
list-style-image
>
如果上述值丢失其中一个，其余仍在指定的顺序，也没关系。

### 元素尺寸
---
可以使用选择器+像素和百分比来设置元素的宽高和行间距，所有可设置尺寸的属性放在了CSS标签速查表内了。
示例：
```html
<head>
<style>
html {height:100%;}
body {height:100%;}
img.normal {height:auto;}
img.big {height:50%;}
img.small {height:10%;}
</style>
</head>

<body>
<img class="normal" src="logocss.gif" width="95" height="84" /><br>
<img class="big" src="logocss.gif" width="95" height="84" /><br>
<img class="small" src="logocss.gif" width="95" height="84" />
</body>
```

## 选择器
### id和class选择器
---
> ID属性不要以数字开头，数字开头的ID在 Mozilla/Firefox 浏览器中不起作用。
> 
> class类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。 
> 
> 总结起来就是选择器都`不要使用数字开头，部分浏览器无法生效。`
:::tip 
CSS有三种选择器：标签选择器（无任何前缀），ID选择器（需要在html标签开头处创建ID名），类选择器（需要在html标签开头处创建class名）
:::
:::note
`* {}`这个*选择器可以定义整个页面所有的元素 。

用某个标签，比如p标签，后面*5可以直接生成5个p标签 。
:::

### 分组和嵌套选择器
---
>分组选择器：同一个样式表中可能会有多种样式使用相同的元素，为了尽量减少代码，可以使用分组选择器。
每个选择器用`逗号`分隔。示例：
```html
<head>
<style>
h1,h2,p{
	color:green;
}
</style>
</head>
<body>
<h1>Hello World!</h1>
<h2>Smaller heading!</h2>
<p>This is a paragraph.</p>
</body>
```

>嵌套选择器：适用于选择器内部的选择器.
>
以下面四个条件作为示例：
:::note

p{ }: 为所有 p 元素指定一个样式。(这里先设置了第一个p段落为蓝色居中对齐。)

.marked{ }: 为所有 class="marked" 的元素指定一个样式。(第二个p段落使用了一个div包裹起来，并添加了一个类选择器，然后设置了背景为红色，同时使用了.marked p的选择器将字体设置成白色)

.marked p{ }: 为所有 class="marked" 元素内的 p 元素指定一个样式。(这个p段落继承了第一个p段落的的字体颜色为蓝色并居中对齐)

p.marked{ }: 为所有 class="marked" 的 p 元素指定一个样式。(最后一个p段落添加了一个类选择器，使用了p.marked的选择器添加了一个下划线)
:::
>
```html
<head>
<style>
p{
	color:blue;
	text-align:center;
}
.marked{
	background-color:red;
}
.marked p{
	color:white;
}
p.marked{
    text-decoration:underline;
}
</style>
</head>
<body>
<p>这个段落是蓝色文本，居中对齐。</p>
<div class="marked">
<p>这个段落不是蓝色文本。</p>
</div>
<p>所有 class="marked"元素内的 p 元素指定一个样式，但有不同的文本颜色。</p>
<p class="marked">带下划线的 p 段落。</p>
</body>
```

---

## 盒子
---
CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。，当需要`指定一个 CSS 元素的宽度width和高度height属性时`，你`只是设置内容区域的宽度和高度`。完整大小的元素，还必须添加内边距，边框和外边距。

整个盒子的分布示意图：

![img](img/margin.png)

>
Margin(外边距) - 清除边框外的区域，外边距是透明的。
>
Border(边框) - 围绕在内边距和内容外的边框。
>
Padding(内边距) - 清除内容周围的区域，内边距是透明的。
>
Content(内容) - 盒子的内容，显示文本和图像。

:::note
最终元素的总宽度计算公式是这样的：

总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距
例如宽度为100px，内容设置为80，那么它的左右边距+边框+填充一边则各为10px

元素的总高度最终计算公式是这样的：

总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距
高度设置范例与宽度同理
:::

### 边框(border)
---
>
border-style属性用来定义边框的样式
>
设置border-width和border-color之前必须要先设置边框的样式，否则会不起作用
可以设置边框的颜色为`transparent透明`

solid

:::note
无边框 {border-style:none;}

方虚线边框 {border-style:dotted;}

长虚线边框 {border-style:dashed;}

实线边框{border-style:solid;}

双实线边框{border-style:double;}

凹槽边框{border-style:groove;}

垄状边框{border-style:ridge;}

嵌入边框{border-style:inset;}

外凸边框{border-style:outset;}

隐藏边框{border-style:hidden;}
:::

边框效果展示

![img](img/border.png)

>
边框可以每个方向设置不同的样式，下方举例，左右实现，上下虚线。
>
也可以使用简写方式，border-style:上下样式 左右样式；
```css
    border-top-style:dotted;
	border-right-style:solid;
	border-bottom-style:dotted;
	border-left-style:solid;
```

### 边框外的轮廓(outline)
---
>
outline轮廓是在边框外再绘制一条线，可用于突出元素。
同边框一样，也可以指定它的样式、颜色以及宽度，但是这个属性运用很少。
>
PS:轮廓不占用盒子的整体空间，所以计算边框宽度的时候可不计算轮廓的宽度。

:::note
轮廓的元素英文同边框是一样的
点线轮廓 {outline-style:dotted;}

虚线轮廓 {outline-style:dashed;}

实现轮廓 {outline-style:solid;}

双实线轮廓 {outline-style:double;}

凹槽轮廓 {outline-style:groove;}

垄状轮廓 {outline-style:ridge;}

嵌入轮廓 {outline-style:inset;}

外凸轮廓 {outline-style:outset;}
:::

### 外边距(margin)
---
外边距定义了盒子外围的空间,是完全透明的。

外边距最大可设置四个值，依次分别为上、右、下、左，如果只有三个值，依次为上、左右、下，如果只有两个值，依次为上下、左右。
支持使用负值或重叠的内容。

下面是可以使用的几个值
>
auto:适应浏览器的边距，比较依赖于浏览器。
>
length:设置一个固定的外边距值，可以使用px\pt\em等。
>
%：直接设置为百分比的边距。

### 内边距填充(padding)
---
内边距填充定义了边框与内容之间的空间，也是透明的，当内边距被去除时，该区域会受到背景色的填充。

外边距最大可设置四个值，依次分别为上、右、下、左，如果只有三个值，依次为上、左右、下，如果只有两个值，依次为上下、左右。

它可以使用的值：
>
length:设置一个固定的内边距值，可以使用px\pt\em等。
>
%：直接设置百分比的填充
