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
		var devicePlatform = device.platform;
		if(devicePlatform.toLocaleLowerCase() === 'android')
			ref = cordova.InAppBrowser.open('http://apache.org', '_self', 'location=no,hardwareback=no');
		else if(devicePlatform.toLocaleLowerCase() === 'ios')
			ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=no');
		else
			ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=no');
		ref.addEventListener('exit', function(event) { navigator.app.exitApp(); });
    }
};

app.initialize();