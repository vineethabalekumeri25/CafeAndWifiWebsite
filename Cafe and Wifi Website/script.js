// JavaScript to toggle the visibility of the cafe details
function toggleDetails(cafeId) {
    var details = document.getElementById(cafeId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}