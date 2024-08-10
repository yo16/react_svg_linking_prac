# react_svg_linking_prac
SVGへのイベントと、他要素の連動

# 構造
```
<svg>
    <MyElm1 />  <!-- rect：メインスイッチ -->
    
    <MyElm2 />  <!-- rect：Elm1がクリックされたら、光る -->

    <MyElm3 />  <!-- rect：Elm1がクリックされたら、サイズがじわっと変わる -->

    <MyElm4 />  <!-- line：Elm1がクリックされたら、導火線のように光る -->
    <MyElm5 />  <!-- rect：MyElm4が最後まで光った後に、光る -->
</svg>
```


# 参考
- [ReactでFramer Motionを使ってアニメーション | アールエフェクト](https://reffect.co.jp/react/framer-motion)
- [A Trick That Makes Drawing SVG Lines Way Easier | CSS-Tricks](https://css-tricks.com/a-trick-that-makes-drawing-svg-lines-way-easier/)
