$(function(){

    //初始化方法
    _init();
    dateSearch("#startDate", "#endDate", "#dateChosen");
    //点击新增、活跃在线用户的图标
    bindUserIcon();
});
/**
 * 初始化方法
 */
function _init(){
    //绘制图形
    var options = {
        title: {
            text: '不同城市的月平均气温',
            x: -20
        },
        subtitle: {
            text: '数据来源: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            title: {
                text: '温度 (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '东京',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: '纽约',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: '柏林',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '伦敦',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    };
    $("#userChart").highcharts(options);
}

/****
 *点击新增、活跃在线用户的图标
 */
function bindUserIcon(){
    $(".chart .chart-menus-box li").click(function(){
        $(this).toggleClass("on");
        var flag = $(this).hasClass("on");
        if(flag){
            var chart = $("#userChart").highcharts();
            //新增class on的时候执行的方法
            chart.addSeries({data: [216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]});
            chart.series[0].remove(false);
        }else{
            //去除class on的时候执行的方法

        }
    });

}