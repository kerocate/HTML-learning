# HTML-learning
## 最新动态

## 学会了纯js写动画，以可以分步的形式展现。
<img src="./MoveAnimation.gif">

## Flex Box

Displaying items in a single dimension[维度]
as a row[水平] or as a column[竖直].

#### FlexContainer

* flex: property sets how a flex item will grow or
  shrink to fit the space. It is a shorthand for
  flex-grow, flex-shrink, and flex-basis.

* align-: along the cross-axis(y).  

* justify-: along the main-axis(x).

* align-items: alignment of items on the Cross Axis

* justify-content：distributes space between and
  around content items along the main-axis.

* align-content: distributes space between and
  around content items along the cross-axis.

  (flex中多子元素才生效)

叫cross和main（交叉和主轴）
是因为flex-direction可以指定主轴的走向（垂直或竖直）

#### FlexItems

* order: Sequential[先后顺序]

* flex-grow: 占比放大

* flex-shrink: 占比缩小

* flex-basis: 占固定空间

* flex: property[属性] sets how a flex item will grow or
  shrink to fit the space. It is a shorthand for
  flex-grow, flex-shrink, and flex-basis.(建议优先写这个)

* align-self: 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
  默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
  <img src='./FlexBox.png'>
