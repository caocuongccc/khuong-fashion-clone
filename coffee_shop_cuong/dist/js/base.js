$( document ).ready(function() {
    $('.btn-login-facebook').on('click', function (evt) {
    	/*evt.preventDefault();
    	var herf = '';
    	setTimeout (
    		function () {
    			setTimeout(function(){ 
		    		window.location.href = 'https://www.facebook.com/';
		    	}, 200);
    			window.location.href='http://192.168.88.1/login?dst=&username=';
    		}, 100
    	);*/
    	//window.location.href='http://192.168.88.1/login?dst=http%3A%2F%2F24h.com.vn%2F&username=';
    	/*setTimeout(function(){ 
    		window.location.href = 'https://www.facebook.com/';
    	}, 200);*/
    });
    $('.btn-login-gmail').on('click', function (evt) {
    	setTimeout(function(){ 
    		window.location.href = 'https://plus.google.com/';
    	}, 200);
    });
});