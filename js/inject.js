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

var loopCheck = setInterval(function() {
    // console.log(main.window.check_data)
    if(main.window.check_data){
        main.window.$ = $;
        main.window.check_data = function () {
            var oForm = main.document.mainform;
            // if (oForm.name.value == "") {
            //     alert("请输入学生姓名！"); oForm.name.focus(); return false;
            // }
            // if (oForm.tel.value != "" && main.window.get_num(oForm.tel.value) == '') {
            //     alert("请正确输入学生的联系电话！"); oForm.tel.focus(); return false;
            // }
            //
            // if (oForm.order_date.value.length < 12) {
            //     alert("请正确填写“预约时间”！"); oForm.order_date.focus(); return false;
            // }
            //     if (oForm.addtime.value == '') {
            //     alert("管理员账号必须选择登记时间！"); oForm.addtime.focus(); return false;
            // }

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
            var id = oForm.id.value;
            // console.log(id);

            if(id != ''){//编辑
                url = '/m/patient/patient.php?op=edit&id'+id+'=&go=back';
            }else{//新增
                url = '/m/patient/patient.php?op=add';
            }
            $.ajax({
                type:'post',
                url:url,
                data:params,
                success:function(callback){
                    var otherId = callback.match(/#(\S*)'/)[1];
                    params.id = otherId;
                    window.postMessage(params, '*');
                    // eval(callback());

                    // if (window.parent && window.parent.msg_box) {
                    //     window.parent.msg_box("资料提交成功",0);
                    // } else {
                    //     alert("资料提交成功");
                    // }
                    // location='/m/patient/patient.php#'+id;
                }
            });
            return false;
            // return true;
        }

        // clearInterval(loopCheck);
    }
},4000)
