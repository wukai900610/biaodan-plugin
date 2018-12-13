// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('收到来自content-script的消息：');
    console.log(request);
    console.log(sender);
    console.log(sendResponse);
    console.log('wukai-end');
	$.ajax({
        type:'post',
        url:'http://www.zzcredit.gov.cn/api/content/list.jspx?channelIds=106&first=0&count=5',
        data:request,
        success:function(callback){
            console.log(callback);
        }
    });

    sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
});