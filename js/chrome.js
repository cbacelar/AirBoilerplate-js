$(function() {
	
	var trayIcon = air.NativeApplication.nativeApplication.icon,
	trayMenu = new air.NativeMenu(),
	exit = trayMenu.addItem(new air.NativeMenuItem("Exit"));
	
	exit.addEventListener(air.Event.SELECT, function(event) {
		trayIcon.bitmaps = [];
		air.NativeApplication.nativeApplication.exit();
	});

var bindTrayEvents = function() {
	trayIcon.addEventListener(air.MouseEvent.CLICK, function(event) {
		trayIcon.bitmaps = [];
		window.nativeWindow.restore();
	})
}, 
	iconLoadComplete = function(event) {
		trayIcon.bitmaps = [event.target.content.bitmapData];
		trayIcon.tooltip = "AirBoilerplate.js";
		bindTrayEvents();
	};
	

    $('#chrome').mousedown(function(e) {
        window.nativeWindow.startMove();
    });

$('#min_systray').click(function(e) {
if(air.NativeApplication.supportsSystemTrayIcon) {
	
	window.nativeWindow.visible = false;
	
	var iconLoad = new air.Loader();
	iconLoad.contentLoaderInfo.addEventListener(air.Event.COMPLETE,iconLoadComplete);
iconLoad.load(new air.URLRequest("images/icons/16.png"));

	trayIcon.menu = trayMenu;
	
} else if(air.NativeApplication.supportsDockIcon) {
	
}
});
	
	$('#min_taskbar').click(function(e) {
        
    });

$('#close').click(function(e) {
	air.NativeApplication.nativeApplication.exit();
});

    $('#grip').mousedown(function(e) {
        window.nativeWindow.startResize(air.NativeWindowResize.BOTTOM_RIGHT);
    });

    window.nativeWindow.x = (air.Capabilities.screenResolutionX - window.nativeWindow.width) / 2;
    window.nativeWindow.y = (air.Capabilities.screenResolutionY - window.nativeWindow.height) / 2;
    window.nativeWindow.visible = true;

});