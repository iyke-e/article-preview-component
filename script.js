const shareIcon = document.getElementsByClassName("iconshare");
const shareContent = document.querySelector(".share");

for (i = 0; i < shareIcon.length; i++) {

    shareIcon[i].addEventListener("click", function() {


        shareContent.classList.toggle("active");
    })
}