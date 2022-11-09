$(document).ready(function () {
    $("#modal-window").hide()
    $("#add-item-btn").on('click', function () {
        $("#modal-window").show()
        setTimeout(function () { $("#modal-window").hide(); }, 5000);
    })

    $("#close-btn").on('click', function () {
        $("#modal-window").hide()
    })

})