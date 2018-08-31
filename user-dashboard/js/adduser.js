$(document).ready(function(){
    var obj;
    $('#myForm').submit(function(e){
        e.preventDefault();
        		var dateTime = new Date();
		        obj = {
		          id: guidGenerator(),
		          name: $("input[name=user-name]").val(),
		          address: $("textarea[name=address]").val(),
		          phoneNumber: $("input[name=phnum]").val(),
		          email: $("input[name=email]").val(),
		          sex: $("input[name=sex]:checked").val(),
		          ismarried: $("input[name=married]:checked").val(),
		          currentDateTime: dateTime,
		          dob: $('input[name="date"]').val(),
		        	}
			        

			        $.ajax({
			        	url:"http://localhost:3000/users",
			        	type:"POST",
			        	data:obj,
			        	dataType:'json',
			        	success:function(data){
				            window.location='show-user.html'
			        	}
			        });
    });

    function guidGenerator() {
	    var S4 = function() {
	       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	    };
	    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}
			
	var date_input=$('input[name="date"]');
	date_input.datepicker({
			format: 'dd-M-yyyy',
			todayHighlight: true,
			autoclose: true,
			startDate: new Date()
	});

//document ready    
});
