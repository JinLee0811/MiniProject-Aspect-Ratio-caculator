let ratioWidth = document.getElementById("ratio-width");
let ratioHeight = document.getElementById("ratio-height");
let width = document.getElementById("width");
let height = document.getElementById("height");


let caculateWidth = ()=>{
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    width.value = parseFloat((height.value * aspectRatio).toFixed(2));
}

let caculateHeigth = ()=>{
    let aspectRatio =  ratioWidth.value / ratioHeight.value;
    height.value = parseFloat((width.value * aspectRatio).toFixed(2));
}


height.addEventListener("input", caculateWidth)
width.addEventListener("input", caculateHeigth)
ratioHeight.addEventListener("input", caculateWidth)
ratioWidth.addEventListener("input", caculateHeigth)