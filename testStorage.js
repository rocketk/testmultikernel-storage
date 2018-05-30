$("#currentUrl").html(window.location.href);
if(Storage && localStorage) {
	$("#supportsLocalStorage").html("yes");
} else {
	$("#supportsLocalStorage").html("no");
}
if(Storage && sessionStorage) {
	$("#supportsSessionStorage").html("yes");
} else {
	$("#supportsSessionStorage").html("no");
}

viewLocalStorage();
viewSessionStorage();

// local storage
$("#btLocalStorageSet").click(function(){
	var key = $("#keyOfLocalStorage").val();
	var value = $("#valueOfLocalStorage").val();
	setLocalStorage(key, value);
});
$("#btLocalStorageSetDefault").click(function(){
	var key = "_testkey";
	var value = "_testvalue";
	setLocalStorage(key, value);
});
$("#btLocalStorageClear").click(function(){
	localStorage.clear();
	viewLocalStorage();
});
$("#btLocalStorageView").click(function(){
	viewLocalStorage();
});


function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
    viewLocalStorage();
}

function viewLocalStorage() {
    $("#localStorageView").html("");
    var itemsText = "";
    if(!Storage || !localStorage) {
        $("#localStorageView").html("your browser doesn't support Local Storage");
        return;
    }
    for (var i=0 ; i  < localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        itemsText = itemsText + "key: '" + key + "', value: '" + value + "'<br/>";
    }
    $("#localStorageView").html(itemsText);
}


// session storage
$("#btSessionStorageSet").click(function(){
	var key = $("#keyOfSessionStorage").val();
	var value = $("#valueOfSessionStorage").val();
	setSessionStorage(key, value);
});
$("#btSessionStorageSetDefault").click(function(){
	var key = "_testkey";
	var value = "_testvalue";
	setSessionStorage(key, value);
});
$("#btSessionStorageClear").click(function(){
	sessionStorage.clear();
	viewSessionStorage();
});
$("#btSessionStorageView").click(function(){
	viewSessionStorage();
});

function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    viewSessionStorage();
}

function viewSessionStorage() {
    $("#sessionStorageView").html("");
    var itemsText = "";
    if(!Storage || !sessionStorage) {
        $("#sessionStorageView").html("your browser doesn't support Session Storage");
        return;
    }
    for (var i=0 ; i  < sessionStorage.length; i++){
        var key = sessionStorage.key(i);
        var value = sessionStorage.getItem(key);
        itemsText = itemsText + "key: '" + key + "', value: '" + value + "'<br/>";
    }
    $("#sessionStorageView").html(itemsText);
}