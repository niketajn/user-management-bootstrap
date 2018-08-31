 $(document).ready(function(){
 	var randomID = localStorage.editObjId;
 	$.ajax({
		  		url:"http://localhost:3000/users/"+randomID,
		  		type:"GET",
		  		success:function(value){
									$("input[name=randomId]").val(randomID);
									$("input[name=user-name]").val(value.name);
					          		$("textarea[name=address]").val(value.address);
					           		$("input[name=phnum]").val(value.phoneNumber);
					           		$("input[name=email]").val(value.email);
					           		$("input[name=sex]:checked").val(value.sex);
					           		$("input[name=married]:checked").val(value.ismarried);
					           		$('input[name="date"]').val(value.dob);	
								 	         		
						}
		  			});

 function saveUser(){
 			obj = {
		          id: randomID,
		          name: $("input[name=user-name]").val(),
		          address: $("textarea[name=address]").val(),
		          phoneNumber: $("input[name=phnum]").val(),
		          email: $("input[name=email]").val(),
		          sex: $("input[name=sex]:checked").val(),
		          ismarried: $("input[name=married]:checked").val(),
		          currentDateTime: new Date(),
		          dob: $('input[name="date"]').val(),
		        }

				$.ajax({
					url:"http://localhost:3000/users/"+randomID,
					type:"PUT",
					contentType:"application/json",
       				data:JSON.stringify(obj),
       				success:function(userList){
       					window.location='show-user.html'
       				}
				});
			}

		$('#myForm').submit(function(e){
		        e.preventDefault();

		        saveUser();
		});



});
