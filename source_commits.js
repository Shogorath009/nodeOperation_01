function showPic(whichPic) {
    var source=whichPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    var text=whichPic.getAttribute("title");
    var description = document.getElementById("description");
    if(text!=null) {                                                //对于没有title的图片进行判断
        description.firstChild.nodeValue = text;
    }else{
        var ll="";
        description.firstChild.nodeValue = ll;
    }
}
function nodeChoose() {
    var parentN=document.getElementById("toChoose");
    var toChoose_as=document.getElementsByTagName("a");     /*这里toChoosse_as是一个节点列表，故不能使用toChoose_as.parentNode*/

    for (var i = 0; i < toChoose_as.length; i++) {
        if (toChoose_as[i].parentNode==parentN) {           /*这里通过判断父节点来限定适用范围*/
            toChoose_as[i].onclick = function () {
                showPic(this);
                return false;
            }
        }
    }
}
window.onload=function () {
    nodeChoose();
}
