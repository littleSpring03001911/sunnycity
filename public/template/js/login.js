class Login {
			constructor() {
				this.url="/api/login" ;
				this.init()
				
			}
			init(){
				var that = this;
				$("#sub").click(function(){
					that.load()
				})
			}
			load(){ 
				var that = this;
				$.ajax({
					type:"POST",
					url:this.url,
					data:{
						username:$("#txt").val(),
						password:$("#pass").val()
					},
					success:function(res){
						console.log(res.error)
						switch(res.error){
							case 1:
							alert("用户名与密码不符");
								break;
							case 0:	
							that.setCookie()
							alert("登陆成功，三秒后跳转到首页");
							setTimeout(()=>{
								location.href="index.html"
							},3000);
								break;
								default:
							alert("密码为空，请重新输入");
							break;
						}
					}
				});
				
			}
		setCookie(){
//			$.cookie("user","dd",{expires:7});
			$.cookie("dm",`[{"user":"${$("#txt").val()}"}]`)
			
		}
		
			
		}
		new Login()