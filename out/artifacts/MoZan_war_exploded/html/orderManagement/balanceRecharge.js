var token = sessionStorage.getItem("token");
    queryListUrl = 'http://192.168.0.204:8080/mozan/queryOrders.do';
$(function(){
    dateSearch("#startDate", "#endDate");
    var data = {token: token};
    POST(queryListUrl, data, function (result) {
        
    });
    // fillTableData("#tbody","","",checkAll("#all","#tbody"));
    //page.common.js 分页
    page("#pager", 2, 10, 12);
});