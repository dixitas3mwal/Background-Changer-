function changeColor(color){

```
document.body.style.backgroundColor = color;
```

}

function randomColor(){

    let colors = [
        "red",
        "blue",
        "green",
        "purple",
        "orange",
        "pink"
    ];

    let random =
    Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor =
    colors[random];
}
