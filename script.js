
let likesbtn = document.querySelector("#likes-button");
let likescount = document.querySelector("#likes-count");
likesbtn.addEventListener("click" , () => {
    likesbtn.style.backgroundColor="#1877f2";
    likesbtn.style.borderRadius="8px";
    likescount.innerText = parseInt(likescount.innerText) +1
    console.log("running")
    likesbtn.disabled=true;
})
let comment =document.querySelector("#comment");
let send =document.querySelector("#send");
let share =document.querySelector("#share");
let commentCount = document.querySelector("#comment-count");
comment.addEventListener("click",() =>{
    comment.style.backgroundColor="#1877f2";
    comment.style.borderRadius="8px";
    comment = prompt();
    commentCount.innerText = parseInt(commentCount.innerText) +1;
})
let login = document.querySelector("#login");
login.addEventListener("click",() => {
    
})