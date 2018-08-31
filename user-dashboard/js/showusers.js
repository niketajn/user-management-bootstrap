
 $(document).ready(function(){
 	function refreshList(usersList){
			$('#table-content').empty();
			 

			 $.each(usersList,function(index,value){
			 	var tr = $("<tr></tr>");

			 	var tdzero = $("<td></td>");
			 	tdzero.addClass('userId');
			 	tdzero.css('display','none');
			 	tdzero.html(value.id);
			 	tr.append(tdzero);

			 	var td1 = $("<td></td>");
			 	td1.html(value.name);
			 	tr.append(td1);

			 	var td2 = $("<td></td>");
			 	td2.html(value.dob);
			 	tr.append(td2);

			 	
			 	var td3 = $("<td></td>");
			 	td3.html(value.address);
			 	tr.append(td3);

			 	
			 	var td4 = $("<td></td>");
			 	td4.html(value.email);
			 	tr.append(td4);

			 
			 	var td5 = $("<td></td>");
			 	td5.html(value.phoneNumber);
			 	tr.append(td5);

			 	var td6 = $("<td></td>");
			 	var edit = $('<span class="fa fa-pencil fa-lg fa-fw" title="Edit"></span>');
			 	edit.click(editUserEvent);
			 	td6.append(edit);

			 	var deleteU = $('<span class="fa fa-trash-o fa-lg fa-fw" title="Delete"></span>');
			 	deleteU.click(deleteUserEvent);
			 	td6.append(deleteU);

			 	tr.append(td6);

			 	

			 	$("#table-content").append(tr);

			 });
		}



		function deleteUser(randomID){
		$.ajax({
			url:"http://localhost:3000/users/"+randomID,
			type:"DELETE",
			dataType:'json',
			success:function(result){
				$.ajax({
					url:"http://localhost:3000/users",
					type:"GET",
					success:function(result){
						refreshList(result);
					}
				});
				
			}
		});	
	}

	function deleteUserEvent(event){
			if (confirm("Are you sure?")) {     	
				var button = $(event.target);  //which button is clicked
		    	var tr = button.parent().parent()
		    	var randomID = tr.find('.userId').html(); //find inside tr children
		    	deleteUser(randomID);
		    }
    }

     function editUserEvent(event){
    			var button = $(event.target);//which button is clicked
		    	var tr = button.parent().parent()
		    	var randomID = tr.find('.userId').html();
		    	localStorage.editObjId = randomID;
		    	window.location = 'edit-user.html';
    }

	$.ajax({
			url:"http://localhost:3000/users",
			type:"GET",
			success:function(result){
					refreshList(result);
				}
			});

});




