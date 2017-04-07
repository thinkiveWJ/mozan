$(function(){
    // fillTableData("#tbody","","",checkAll("#all","#tbody"));
    //page.common.js 分页
    page("#pager", 2, 10, 12);
    //添加角色
    $("#addRole").click(function(){
        $("#rolePanel .modal-title").html("添加角色");
        clearRolePanel();//清空角色面板
    });


});
function clearRolePanel() {
    $("#rolePanel input").val("");
    $("#rolePanel textarea").val("");
    $("#rolePanel input[type='checkbox']").prop("checked", false);
    $("#rolePanel").modal();
    //全選或者全部取消page.common.js
    checkLabelAll("#module", "#moduleSub");
    checkLabelAll("#module2", "#module2Sub");
}

