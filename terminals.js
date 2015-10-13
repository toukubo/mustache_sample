/**
 * Created by toukubo on 11/28/14.
 */
function linking(id,childNode){
    var e, html, json, template;

    try {

        TOKEN="3717c1f33d70b5d05e6212afe0c404d7b39f9edb";
        url = "http://zxc.cz:8081/GetItems?token="+TOKEN;
//        projectid = getProjectID("project");
        projectid = getProjectID("project");




        $.ajax({
            type: 'GET',
            url: 'linking.html',
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


//                alert(data)
                data["childNode"]=childNode;


                html = Mustache.to_html(template, data);
//                html = Mustache.to_html(html, '{childNode:"foobar"}');
//                alert(html)

                $('#linking_'+id).html(html);
//                $('#linking_'+id).toggle();
//                $("#loading").hide();

            },
            complete: function(jqXHR, textStatus) {
                if (responseData.msg)  {
                    alert(responseData.msg);
                } else {
                    alert(jqXHR.statusText);
                }
            }
        });


    } catch (_error) {
        e = _error;
        html = e.toString();
        alert(e)
        alert(html)
    }
}

function getProjectID(s) {
    return ""

}
