function dl(id) {
    var file = document.getElementById(id).getAttribute("file");
    document.getElementById('dlIframe').src = '/tools/dl/' + file;
}

function install(type) {
    window.location = '/guides#' + type
}