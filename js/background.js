// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('收到来自content-script的消息：');
    console.log(request);
    console.log(sender);
    console.log(sendResponse);
    console.log('wukai-end');

    request = {
	    POPupilEntryJson:JSON.stringify({
	        "Province": "320000",
	        "NAME": "测试2",
	        "SIGNUP": "0",
	        "CAPROVINCEID": "320000"
	    }),
	    POConsultationConsultEntityJson:JSON.stringify({
	        "CREATEDTIME": "2018-12-13 16:28",//创建时间
	        "PLANREVISITTIME": "2018-12-14 16:28",//计划回访时间
	        "PLANVISITTIME": "1900-01-01 00:00",//计划访问时间
	        "PLANENROLLTIME": "1900-01-01 00:00",//计划招收时间
	        "ISPREPAY": "0",//预付款
	        "ENROLLLEVEL": "3星级",//招收级别
	        "CONSULTANTITEMID": "839c2e8e-430d-46e6-b65c-74c2abad4267",//顾问项目ID
	        "CONSULTANTTYPEID": "bc136ba3-720c-4d32-91bf-459a39d9069d",//顾问类型ID
	        "CONSULTANTCONTENTTYPEID": "dc0ab0d1-def0-44a9-b667-8b4b23a4bdf9",//内容类型id
	        "CATEGORY": "未回访"
	    }),
	    ConsultRemark: '%3Cp%3E%u8FD9%u91CC%u5907%u6CE8%3C/p%3E%0A',//备注
	    channelIntroducerName: '',
	    consultantItemName: '',
	    consultantTypeName: '',
	    consultantContentTypeName: ''
	}
	$.ajax({
        type:'post',
        url:'https://xhedu.xhe.cn/Recruit/Consultation/SubmitConsultationForm?KeyValue=&start=&category=%E6%9C%AA%E5%9B%9E%E8%AE%BF&isDepartment=',
        data:request,
        success:function(callback){
            console.log(callback);
        }
    });

    sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
});