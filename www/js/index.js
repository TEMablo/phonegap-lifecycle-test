var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

// This is where the deviceready event listener is defined. 
document.addEventListener("deviceready", onDeviceReady, false);
		
// This will update the screen with the number of times each lifecycle event has occured. 
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    // When Cordova is ready, called by event listener deviceready.
    function onDeviceReady() {
	
    // The resume event listener is defined here. This will be triggered when application is retrieved from the background. This calls the onResume function. 
	document.addEventListener("resume", onResume, false);
        
    // The pause event listener is defined here. This is triggered when the application is pushed to the background. This calls the onPause function. 
	document.addEventListener("pause", onPause, false);
	
    // On app launch, increment the counter.
	launched_count++;
    // Update the display.
	updateDisplay();
	   
	alert("device ready");
    }

    // When the application is pushed to the background.
    function onPause() {
	
    // Increment the pause counter.
	paused_count++;
        
    // Update the display.
	updateDisplay();
	    
	alert("pause");
    }
	
    // When the application is resumed.
    function onResume() {
        
    // Increment the resumed counter.
	resumed_count++;
        
    // Update the display. 
	updateDisplay();
	    
	alert("resume");
    }
