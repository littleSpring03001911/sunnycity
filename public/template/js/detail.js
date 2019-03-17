class Find{
			constructor(options) {
				this.box=options.box;
				this.url=options.url;
				this.id=options.id;
				this.load()
				this.add()
			}
		load(){
			var that = this;
			var b = location.search.slice(1);
			console.log(b);
			ajaxGet(this.url,{_id:b}).then(function(res){
				
				res = "["+ res+"]";
				that.res=JSON.parse(res)
				that.display()
				console.log(res)
			})
		}
		display(){
			var address = location.search;
			var str="";
			console.log(address);
			// for(var i=0;i<this.res.length;i++){
			
			// 	if("?"+this.res[i].goodsID==address){
				   str += `<div class="list-img"><img src="${this.res[0].page_data.auth_icon}"/></div>
				<div class="mation">
					<p class="title">${this.res[0].page_data.name}</p>
					<div class="price">
						<h2>京东价<em>￥</em>${this.res[0].page_data.price}</h2>
						<h2>优惠券<i class="youhui iconfont iconcouponicon"></i></h2>
						<h2>促销<a href="#">活动预告</a></h2>
					</div>
					<div class="shopChoice">
						<div class="chosecolor">
							<h3>颜色</h3>
							<a>冰丝蓝</a>
							<a>舍友红</a>
							<a>情人红</a>
							<a>非常黑</a>
						</div>
						<div class="chosesize">
							<h3>尺码</h3>
							<a>S号</a>
							<a>M号</a>
							<a>L号</a>
						</div>
					</div>
					<div class="mation-footer clear">
						<div class="num">
							<input type="text" id="txt1" value="1"/>
							<p><a class="add">+</a><a class="reduce">-</a></p>
							
						</div>
						<div class="buy">
							<input type="button" id="btn" value="添加购物车" />
						</div>
					</div>
				</div>`
				$(".main-center").html(str)
				
				}
		// 	}
		// }
		add(){var that =this;
//			this.num = 0
			$(".main-center").on("click",".add",function(){
//				that.num++;
				$("#txt1").val(parseInt($("#txt1").val())+1)
					console.log($("#txt"))
			})
			$(".main-center").on("click",".reduce",function(){
				if($("#txt1").val()>1){
					$("#txt1").val(parseInt($("#txt1").val()-1))
					
				}else{
					$("#txt1").val(1)}
			
				
			})
			
			$(".main-center").on("click","#btn",function(){
//				console.log(that.id)
			
				var obj=JSON.parse($.cookie("dm"))[0];
				console.log($.cookie("dm"))
				obj[that.id]=$("#txt1").val();
				setCookie("dm",JSON.stringify([obj]))				
				console.log($.cookie("dm"))
				
				location.href="shopcar.html"
			 
			})
			
		}
	
		
			
		}
			
		
		new Find({
			box:document.querySelector(".main-center"),
			url:"/api/detail",
			id:location.search.split("?")[1]
			
		})   
		//添加至购物车事件
		