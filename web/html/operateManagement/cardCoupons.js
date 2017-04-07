$(function () {
    checkAll("#all", "#tbody");
    //page.common.js 分页
    page("#pager", 2, 10, 12);
    //点击批量生产卡券
    $("#addBatchCardBTN").unbind('click').bind('click', function () {
        $("#cardPanel input").val("");
        $("#cardPanel").modal();
    });
});
