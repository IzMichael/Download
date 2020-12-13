function menuVis() {
    var page = document.body.getAttribute("page");
    document.getElementById(page + "Menu").classList.remove('bg-gray-400');
    document.getElementById(page + "Menu").classList.add('bg-gray-200');
}