
var hostname = 'wj_endpoint01.mqtt.iot.gz.baidubce.com',
    port = 8884,
    clientId = 'DeviceId-22dx960d07',
    timeout = 3,
    keepAlive = 60,
    cleanSession = true,
    ssl = true,
    userName = 'wj_endpoint01/wj_thing01',
    password = 'Ffbhk/uuvg2a72n8NJtl5MKsmhOs37i0J5aZfpgcZeQ=',
    topic = 'wj_topic/demo';
client = new Paho.MQTT.Client(hostname, port, clientId);
//建立客户端实例
var options = {
    invocationContext: {
        host : hostname,
        port: port,
        path: client.path,
        clientId: clientId
    },
    timeout: timeout,
    keepAliveInterval: keepAlive,
    cleanSession: cleanSession,
    useSSL: ssl,
    userName: userName,
    password: password,
    onSuccess: onConnect,
    onFailure: function(){
        console.log(12112);
    }
};
client.connect(options);
//连接服务器并注册连接成功处理事件
function onConnect() {
    console.log("onConnected");
    client.subscribe(topic);
    //订阅主题
    //发送消息
    message = new Paho.MQTT.Message("");
    message.destinationName = topic;
    // client.send(message);
}
client.onConnectionLost = onConnectionLost;
//注册连接断开处理事件
client.onMessageArrived = onMessageArrived;
//注册消息接收处理事件
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:"+responseObject.errorMessage);
        console.log("连接已断开");
    }
}
function onMessageArrived(message) {
    console.log("收到消息:"+message.payloadString);
}

