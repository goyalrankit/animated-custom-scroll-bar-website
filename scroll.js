var progress = document.getElementById("progressBar");
var totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function()
{
    var proHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = proHeight + "%";
}