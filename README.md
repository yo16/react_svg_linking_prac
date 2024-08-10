# react_svg_linking_prac
SVGへのイベントと、他要素の連動

# 構造
```
<svg>
    <MyElm1 />  <!-- rect：メインスイッチ -->
    
    <MyElm2 />  <!-- rect：Elm1がクリックされたら、光る -->

    <MyElm3 />  <!-- rect：Elm1がクリックされたら、サイズがじわっと変わる -->

    <MyElm4><MyElm3 /></MyElm4>  <!-- rect：Elm1がクリックされたら、子要素のMyElm3に合わせるようにサイズが変わる -->

    <MyElm5 />  <!-- line：Elm1がクリックされたら、導火線のように光る -->
    <MyElm6 />  <!-- rect：MyElm5が最後まで光った後に、光る -->
</svg>
```
