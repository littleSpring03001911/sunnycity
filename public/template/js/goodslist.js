class Goods {
	constructor(options) {
		this.list = options.list;
		this.url = options.url;
//		this.index = options.index;
		this.load()
		console.log($("body"))
	}
//	请求数据
	load(){
		var that = this;
		$.ajax({
			type:"POST",
			url:this.url,
			success:function(res){
				that.res=res;
				console.log(that.res)
				that.display();
			}
		})
	}
	display(){
		
		var str = "";
		for(var i=0;i<this.res.result.length;i++){
			str += `<a href="" num="${this.res.result[i].goodsID}">
							<div class="list-img"><img src="${this.res.result[i].auth_icon}"/></div>
							<div class="list-title">
								<h2>${this.res.result[i].name}</h2>
								<p><em>￥</em>${this.res.result[i].price}</p>							
							</div>
						</a>`
//			console.log(this.res)
//			console.log(this.res[i].img)
				

		}
		this.list.html(str)
//		$(".login").html(`${JSON.parse($.cookie("dm"))[0].user}`)
//		console.log(str)
//		console.log(this.list)
	}
	
}
new Goods({
	list:$(".wdqc-bottom"),
	url:"/api/product"
	
})
