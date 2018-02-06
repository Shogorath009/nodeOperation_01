function showPic(whichPic){
    var source=whichPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    var text=whichPic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;

    return false;
}
var links = document.getElementsByTagName("a");
for(var i=0;i<links.length;i++){
    links[i].onclick = function () {
        showPic(this);
        return false;
    }
}
