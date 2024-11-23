$(document).ready(function () {
    $("#materialForm").on("submit", function (event) {
        event.preventDefault();

        const materialName = $("#materialName").val();
        const materialNumber = $("#materialNumber").val();
        const materialQuantity = $("#materialQuantity").val();


        $("#materialsTableBody").append(`
            <tr>
                <td>${materialName}</td>
                <td>${materialNumber}</td>
                <td>${materialQuantity}</td>
            </tr>
        `);
        $(this).trigger("reset");

    });
});


