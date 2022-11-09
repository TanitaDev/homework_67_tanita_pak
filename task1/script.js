$(document).ready(function () {
    $("#modal-window").hide()
    $("#add-item-btn").on('click', function () {
        $("#modal-window").show()
    })

    $("#close-btn").on('click', function () {
        $("#modal-window").hide()
    })
})