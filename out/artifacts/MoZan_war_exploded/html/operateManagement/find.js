
$(function () {

    //page.common.js 分页
    page("#pager", 2, 10, 12);
    //添加Banner
    $('#banner li').unbind('click').bind('click', function () {
        clearBannerPanel();//清除添加banner面板
    });
    //点击添加分享资讯按钮
    $("#addInfoBTN").unbind('click').bind('click', function () {
        clearAddInfoPanel();//清除添加资讯分享面板
    });

});
/**
 * 清除添加banner面板
 */
function clearBannerPanel() {
    $("#bannerPanel input").val("");
    $("#bannerPanel").modal();
    $('#bannerPanel').on('shown.bs.modal', function (e) {
        /**
         * 上传图片并显示图片路径
         * @param dialog
         * @param uploadInput type=file
         * @param uploadName  type=text显示图片路径
         */
        uploadPicName("#bannerPanel", "#uploadInput", "#uploadPicName");
    });
}
/**
 * 清除添加分享资讯面板
 */
function clearAddInfoPanel() {
    $("#informationPanel input").val("");
    $("#informationPanel textarea").val("");
    $("#informationPanel").modal();
    /**
     * 上传图片并显示图片路径
     * @param dialog
     * @param uploadInput type=file
     * @param uploadName  type=text显示图片路径
     */
    uploadPicName("#informationPanel", "#infoUpload" , "#infoPicName");
}
