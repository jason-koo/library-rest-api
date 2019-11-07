function getAllItems() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            for(var i = 0; i < myArr.length; i++) {
                var element = document.createElement('li');
                element.innerHTML = '<p>Name: ' + myArr[i].name + '</p>' + '<p>Type: ' + myArr[i].type + '</p>' + '<p>Load Period: ' + myArr[i].period + '</p>' + '<p>Quantity: ' + myArr[i].quantity + '</p>';
                document.getElementById("list").appendChild(element);
            }
        }
    };
    xmlhttp.open("GET", "http://localhost:1234/library/list", true);
    xmlhttp.send();
}