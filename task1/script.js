$(document).ready(function () {
    $("#modal-window").hide()
    $("#add-item-btn").on('click', function () {
        $("#modal-window").show()
        setTimeout(function () { })
    })

    $("#close-btn").on('click', function () {
        $("#modal-window").hide()
    })
    setTimeout(function () { $("#modal-window").hide(); }, 2000);
})