var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
		var ref;
		var urlFlor = 'http://docenteslalibertad.net/flor';
		var devicePlatform = device.platform;
		if(devicePlatform.toLocaleLowerCase() === 'android')
			ref = cordova.InAppBrowser.open(urlFlor, '_blank', 'location=no,hardwareback=no,clearcache=yes');
		else if(devicePlatform.toLocaleLowerCase() === 'ios')
			ref = cordova.InAppBrowser.open(urlFlor, '_blank', 'location=no,clearcache=yes');
		else
			ref = cordova.InAppBrowser.open(urlFlor, '_blank', 'location=no');
		
		ref.addEventListener('exit', function(event) {
			navigator.app.exitApp(); 
		});
    }
};

app.initialize();