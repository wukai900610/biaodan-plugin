// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('收到来自content-script的消息：');
    // console.log(request.formData);
    // console.log(sender);
    // console.log(sendResponse);
    // console.log('wukai-end');
    //
    var formData = request.formData

    // return false;
    var newRequest = {
	    POPupilEntryJson:JSON.stringify({
	        "Province": "320000",
		    "NAME": formData.name,
		    "SEX": "0",
		    "AGE": "",
		    "BIRTHDAY": "",
		    "PHONE": formData.tel,
		    "CULTUREID": "003",//文化程度
		    "JOBSTATE": "08",//职业状态
		    "SIGNUP": "0",//首次咨询并报名
		    "CAPROVINCEID": "120000",//所在省
		    "CACITYID": "",//所在市
		    "CACOUNTYID": "",//所在县区
		    "CONTACTADDRESS": ""//地址
	    }),
	    POConsultationConsultEntityJson:JSON.stringify({
	        "CREATEDTIME": formData.addtime,//创建时间
	        "PLANREVISITTIME": formData.order_date,//计划回访时间
	        "PLANVISITTIME": "1900-01-01 00:00",//计划访问时间
	        "PLANENROLLTIME": "1900-01-01 00:00",//计划招收时间
	        "ISPREPAY": "0",//预付款
	        "ENROLLLEVEL": "3星级",//招收级别
	        "CONSULTANTITEMID": "839c2e8e-430d-46e6-b65c-74c2abad4267",//咨询方式
	        "CONSULTANTTYPEID": "bc136ba3-720c-4d32-91bf-459a39d9069d",//咨询类型
	        "CONSULTANTCONTENTTYPEID": "dc0ab0d1-def0-44a9-b667-8b4b23a4bdf9",//咨询项目
	        "CATEGORY": "未回访"
	    }),
	    ConsultRemark: formData.memo || '无',//备注
	    channelIntroducerName: '',
	    consultantItemName: '',
	    consultantTypeName: '',
	    consultantContentTypeName: ''
	}
	$.ajax({
        type:'post',
        url:'https://xhedu.xhe.cn/Recruit/Consultation/SubmitConsultationForm?KeyValue=&start=&category=%E6%9C%AA%E5%9B%9E%E8%AE%BF&isDepartment=',
        data:newRequest,
        success:function(callback){
            console.log(callback);
            if(callback.Code == '1'){
                formData.qq = callback.CID;
                formData.go = 'back';
                formData.op = 'edit';

                // 教育添加的id编辑保存到医疗对应数据中
                $.ajax({
                    type:'post',
                    url:'/m/patient/patient.php?op=edit&id'+formData.id+'=&go=back',
                    data:formData,
                    success:function(callback){
                    }
                });
            }
        }
    });

    // sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
});
