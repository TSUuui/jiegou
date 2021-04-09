$(function () {
	//默认选中第一个tab
	$('.shopCar').show();
	$("#shopCar").addClass("tabActive")
});

/*
* 切换tab标签
* */
function clickTab(e) {
	let id = e.target.id;
	$('.right_content').hide();
	$(".tab").removeClass("tabActive");
	switch (id) {
		case 'shopCar':
			$('.shopCar').show();
			$('.totalPrice').show();
			$("#shopCar").addClass("tabActive")
			break;
		case 'myCollect':
			$('.myCollect').show();
			$("#myCollect").addClass("tabActive")
			break;
		case 'message':
			$('.message').show();
			$("#message").addClass("tabActive")
			break;
		case 'acountSetting':
			$('.acountSetting').show();
			$("#acountSetting").addClass("tabActive")
			break;
		case 'orderManage':
			$('.orderManage').show();
			$("#orderManage").addClass("tabActive")
			break;
	}
}

//选择框选择，计算总价格
function checkbox_choose(e, price) {
	let price_dom = $("#total_price")[0];
	let total_price = +(price_dom.innerText);
	let checkStatus = e.target.checked; //储存选择框状态
	//选中的状态
	if (checkStatus) {
		total_price += +price;
	} else {
		total_price -= +price;
	}
	price_dom.innerText = total_price;
}
