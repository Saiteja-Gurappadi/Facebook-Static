
let likescount = document.getElementById("likes-count");
function like(){
    document.getElementById("likes-button").style.background="#1877f2";
    document.getElementById("likes-button").style.borderRadius="8px";
    let updatedlikes=likescount.textContent;
    newlikes =parseInt(updatedlikes) + 1
    likescount.textContent=newlikes;
}
