$(document).ready(function () {
    $(".gamesToCheck").change(function () {
        var link = '?search=';
        var label = '';
        $(".gamesToCheck:checked").each(function () {
            label = $("label[for='" + $(this).attr('id') + "']").text();
            link += 'games.name:' + label + ';and|';
        });
        window.location = link;
    });

    var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
        $checkboxes = $(".gamesToCheck");

    $checkboxes.on("change", function () {
        $checkboxes.each(function () {
            checkboxValues[this.id] = this.checked;
        });

        localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
    });

    // On page load
    $.each(checkboxValues, function (key, value) {
        $("#" + key).prop('checked', value);
    });

    var i = $('input[type="checkbox"]:checked').length;
    $(".counter").find("span").text(i);

    $(".alert").delay(7000).slideUp(200, function () {
        $(this).alert('close');
    });

    $('input[type=file]').change(function (e) {
        $(this).parents('.upload').find('span').text('');
    });

    $.uploadPreview({
        input_field: "#imageUpload",
        preview_box: ".upload"
    });

    $('#filters .link').on('click', function () {
        $(this).parents('#filters').toggleClass('open');
    });
});

