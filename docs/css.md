```css
		<style type="text/css"></style>
			/*基本选择器（权重:标签1 类10 id:100）*/
			/*标签选择器：所有的当前标签使用*/
			p {
				color: green;
			}

			/*id选择器：只允许一个元素使用*/
			#span {
				font-size: 30px;
			}

			/*类选择器：所有赋予该类选择器的标签使用*/
			.span {
				background-color: blue;
			}

			h1 {
				color: red;
			}

			.h1 {
				color: blue;
			}

			#h1 {
				color: green;
			}

			/*派生选择器：三大基本选择器组合*/
			/*选择器分组*/
			body,
			p,
			h1,
			span,
			#p,
			.p {
				padding: 0;
				margin: 0;
			}

			/*后代选择器*/
			div h1 {
				color: yellow;
			}

			/*子元素选择器*/
			label>h1>a {
				color: #c9c9c9;
			}

			/*相邻兄弟选择器*/
			#div1+.div2+.div3 {
				font-size: 36px;
			}

			/*伪类元素*/
			/*在前面添加元素（隐秘性）*/
			.div4:before {
				content: "?";
				font-size: 36px;
			}

			/*在后面添加元素（隐秘性）*/
			.div4::after {
				content: "!";
			}

			/*鼠标点击变色*/
			.a:focus {
				color: red;
			}

			/*鼠标移入变色*/
			.a:hover {
				color: green;
			}

			tbody tr:nth-child(2) {
				background: red;
			}

			#li1+li {
				font-size: 36px;
			}

			p,
			a,
			div,
			span,
			label {
				margin: 0;
				padding: 0;
				color: #C9C9C9;
				font-size: 14px;
			}

			.aa::before {
				content: "";
				background: url(../img/5aa68632Nd7790d0c.png);
				center: no-repeat;
				background-size: 100% 100%;
				width: 150px;
				height: 150px;
				display: inline-block;
			}
		</style>

		<!-- 外部式，内部式，内联式，importents（永远优先使用）
	</head>
	优先级从右到左 -->
	<body>
		<p>111</p>
		<p>222</p>
		<span id="span">222</span>
		<span class="span">333</span>
		<p class="span">333</p>
		<h1 class="h1" id="h1">444</h1>
		<div>
			<h1>555</h1>
		</div>
		<label>
			<h1>666
				<a>
					777
				</a>
			</h1>
		</label>
		<div id="div1">888</div>
		<div class="div2">999</div>
		<div class="div3">000</div>
		<div class="div4">001</div>
		<a class="a" href="#">002</a>

		<!-- 
		1.使用后代+伪类：生成生成一个三行三列不需要表头的表格，要求表格第二行变色
		2.使用兄弟选择器：让无序列表中第二行字体大小为36px
		3.使用选择器分组：将p,a,div,span,label中的外边距内边距去掉，默认为#c9c9c9颜色14px大小字体
		4.使用伪类元素：在label标签的内容前面添加一个背景图片，要求宽为50px高为50px，居中，不平铺 
		-->
		<table border="1">
			<tbody>
				<tr>
					<td>1</td>
					<td>1</td>
					<td>1</td>
				</tr>
				<tr>
					<td>2</td>
					<td>2</td>
					<td>2</td>
				</tr>
				<tr>
					<td>3</td>
					<td>3</td>
					<td>3</td>
				</tr>
			</tbody>
		</table>
		<table>
			<ul>
				<li id="li1">123</li>
				<li>123</li>
			</ul>
		</table>

		<label class="aa">123</label>

	</body>
</html>
```