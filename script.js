$(document).ready(function () {

    // For some reason I thought everyone would understand to just click on my name. I don't think that's the case....but I do still like the pure amount of simplicity on it. 
    $('#myName').click(function () {
        // wipe page and redirect to about me page
        window.location.href = "./about.html";
        return false;
    })

    // This function waits 8 seconds and then will automatically redirect the user if they don't realize they have to click on my name.
    setTimeout(function () {
        window.location.href = './about.html';
    }, 8000);

});