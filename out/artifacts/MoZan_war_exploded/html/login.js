var url = "http://192.168.0.204:8080/mozan/userLoginManage.do";
$(function () {
    var userName,
        password;
    //点击登录
    $("#loginBTN").unbind('click').bind('click', function () {
        userName = $("#userName").val();
        password = $("#password").val();
        var data = {
            userName: userName,
            password: password
        };
        POST(url, data, function (result) {
            var token = result['data']['token'];
            sessionStorage.setItem("token", token);
            window.location.href='index.html';
        });
    });
});