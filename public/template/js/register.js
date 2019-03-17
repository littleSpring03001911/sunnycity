class Register {
				constructor() {
					this.url = "/api/reg";
					this.init();
				
				}
				
				init(){
					var that = this;
					
					$("#sub").click(function(){
//						that.load()
						if($("#test").val()==$("#test2").val()){
							that.load()
						}else{
							alert("重新输入验证码")
						}
					})
				}
				load(){
					console.log(3)
					$.ajax({
						type:"POST",
						url:this.url,
						data:{
							username:$("#txt").val(),
							password:$("#pass").val()
						},
						// error:function(res){
						// 	// console.log(2)
						// },
						success:function(res){
							console.log(res)
							console.log(1)
							switch(res.error){
                        case "1":
                           alert("重名")
                            break;
                        case "0":
                            alert("成功，三秒后跳转")
                            setTimeout(() => {
                                location.href = "login.html";
                            }, 3000);
                            break;
                        case "2":
                          alert("不允许为空")
                            break;
                    }
						}
					})
				}
				
			}
			new Register()
	   function	refresh(){
						 var msg = "";
		 for(var i=0;i<8;i++){
		 	var a = String.fromCharCode(random(48,57));
		 	var b = String.fromCharCode(random(65,90));
		 	var c = String.fromCharCode(random(97,122));
		 	msg =msg + a + b + c;}
		 console.log(msg);
		 	var str ="";
		 	for(var j=0;j<4;j++){
		 		str = str+msg[random(0,msg.length-1)];
		 		
		 	}
		 	console.log(str);
		 	
//		 	otxt2.value=str;
			$("#test2").val(str);
			
				}
		 refresh();
		 function random(a,b){
		 	return Math.round(Math.random()*(a-b)+b)
		 }