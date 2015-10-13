function render(url) {
    url = url || "models.json";
    $("#loading").show();

    var e, html, json, template;
    try {

        $.ajax({
            type: 'GET',
            url: 'template.html',
            dataType: 'html',
        success: function(data) {
            template = data
        },
        error:function() {
            alert('問題がありました。');
        }
        });

        jQuery.ajax({
            url: url,
            dataType: 'json',
            success: function(data, status, xhr) {

                html = Mustache.to_html(template, data);
                $('#main').html(html);
                $("#loading").hide();

            },
            complete: function(jqXHR, textStatus) {
                if (responseData.msg)  {
//                    alert(responseData.msg);
                } else {
//                    alert(jqXHR.statusText);
                }
            }
        });




        $('#headerpanel').hide()

    } catch (_error) {
        e = _error;
        html = e.toString();
    }
}