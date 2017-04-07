$(function(){
    // fillTableData("#tbody","","",checkAll("#all","#tbody"));
    //page.common.js 分页
    page("#pager", 2, 10, 12);
    //添加用户
    $("#addUser").click(function(){
        clearUserPanel();
    });
});
/**
 * 清除面板
 */
function clearUserPanel() {
    $("#userPanel input").val("");
    $("#userPanel select[data-xtype]").data("chosen").selectedItem("");
    $("#userPanel").modal();
}

