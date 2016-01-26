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
		var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=no');
		ref.addEventListener('exit', function(event) { navigator.app.exitApp(); });
    }
};

app.initialize();