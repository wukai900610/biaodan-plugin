// 通过postMessage调用content-script
// function invokeContentScript(code)
// {
// 	window.postMessage({cmd: 'invoke', code: code}, '*');
// }
// 发送普通消息到content-script
// function sendMessageToContentScriptByPostMessage(data)
// {
// 	window.postMessage({cmd: 'message', data: data}, '*');
// }

// 通过DOM事件发送消息给content-script
// (function() {
// 	var customEvent = document.createEvent('Event');
// 	customEvent.initEvent('myCustomEvent', true, true);
// 	// 通过事件发送消息给content-script
// 	function sendMessageToContentScriptByEvent(data) {
// 		data = data || '你好，我是injected-script!';
// 		var hiddenDiv = document.getElementById('myCustomEventDiv');
// 		hiddenDiv.innerText = data
// 		hiddenDiv.dispatchEvent(customEvent);
// 	}
// 	window.sendMessageToContentScriptByEvent = sendMessageToContentScriptByEvent;
// })();

function doAjax () {
    var param = {
        name:'wukai2222',
        age:28
    }

    $.ajax({
        type:'post',
        url:'http://www.phpsite.com/ajax.html',
        data:param,
        success:function(callback){
            // console.log(callback);
        }
    });
    
    window.postMessage({'funName': param}, '*');
}

// function doCustomAjax () {
// 	$.ajax({
//         type:'post',
//         url:'http://www.zzcredit.gov.cn/api/content/list.jspx?channelIds=106&first=0&count=5',
//         data:param,
//         success:function(callback){
//             // console.log(callback);
//         }
//     });
// }
