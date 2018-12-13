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

// function doAjax () {
//     var param = {
//         name:'wukai2222',
//         age:28
//     }

//     $.ajax({
//         type:'post',
//         url:'http://www.phpsite.com/ajax.html',
//         data:param,
//         success:function(callback){
//             // console.log(callback);
//         }
//     });
    
//     window.postMessage({'funName': param}, '*');
// }
// 
var loopCheck = setInterval(function() {
    // console.log(main.window.check_data)  
    if(main.window.check_data){
        main.window.check_data = function () {
            var oForm = main.document.mainform;
            if (oForm.name.value == "") {
                alert("请输入学生姓名！"); oForm.name.focus(); return false;
            }
            if (oForm.tel.value != "" && main.window.get_num(oForm.tel.value) == '') {
                alert("请正确输入学生的联系电话！"); oForm.tel.focus(); return false;
            }
            /*if (oForm.sex.value == '') {
                alert("请输入“性别”！"); oForm.sex.focus(); return false;
            }*/
            /*if (oForm.media_from.value == '') {
                alert("请选择“媒体来源”！"); oForm.media_from.focus(); return false;
            }*/
            if (oForm.order_date.value.length < 12) {
                alert("请正确填写“预约时间”！"); oForm.order_date.focus(); return false;
            }
                if (oForm.addtime.value == '') {
                alert("管理员账号必须选择登记时间！"); oForm.addtime.focus(); return false;
            }

            var params={
                name:oForm.name.value,
                tel:oForm.tel.value,
                qq:oForm.qq.value,
                content:oForm.content.value,
                depart:oForm.depart.value,
                media_from:oForm.media_from.value,
                engine:oForm.engine.value,
                engine_key:oForm.engine_key.value,
                engine_key_url:oForm.engine_key_url.value,
                from_site:oForm.from_site.value,
                is_local:oForm.is_local.value,
                area:oForm.area.value,
                hj_loc:oForm.hj_loc.value,
                order_date:oForm.order_date.value,
                memo:oForm.memo.value,
                addtime:oForm.addtime.value,
                status:oForm.status.value,
                is_first_ask:oForm.is_first_ask.value,
                doctor:oForm.doctor.value,
                id:oForm.id.value,
                op:oForm.op.value,
                go:oForm.go.value,
            }

            window.postMessage(params, '*');
            return true;
        }

        clearInterval(loopCheck);
    }
},1000)
// function check_data() {
//     console.log('截取')
//     return false;
//     var oForm = document.mainform;
//     if (oForm.name.value == "") {
//         alert("请输入学生姓名！"); oForm.name.focus(); return false;
//     }
//     if (oForm.tel.value != "" && get_num(oForm.tel.value) == '') {
//         alert("请正确输入学生的联系电话！"); oForm.tel.focus(); return false;
//     }
//     if (oForm.sex.value == '') {
//         alert("请输入“性别”！"); oForm.sex.focus(); return false;
//     }
//     /*if (oForm.media_from.value == '') {
//         alert("请选择“媒体来源”！"); oForm.media_from.focus(); return false;
//     }*/
//     if (oForm.order_date.value.length < 12) {
//         alert("请正确填写“预约时间”！"); oForm.order_date.focus(); return false;
//     }
//         if (oForm.addtime.value == '') {
//         alert("管理员账号必须选择登记时间！"); oForm.addtime.focus(); return false;
//     }

    
//     // window.postMessage({'funName': param}, '*');
//     return false;
// }

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
