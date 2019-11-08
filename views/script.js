function getAllItems() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            for(var i = 0; i < myArr.length; i++) {
                var element = document.createElement('li');
                element.innerHTML = '<p>Name: ' + myArr[i].name + '</p>' + '<p>Type: ' + myArr[i].type + '</p>' + '<p>Loan Period: ' + myArr[i].loanPeriod + '</p>' + '<p>Quantity: ' + myArr[i].quantity + '</p>';
                document.getElementById("list").appendChild(element);
            }
        }
    };
    xmlhttp.open("GET", "http://ec2-3-82-194-14.compute-1.amazonaws.com:1234/library/list", true);
    xmlhttp.send();
}

// Create new item
function post() {
    var url = 'http://localhost:1234/library/create';
    var data = {
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        loanPeriod: document.getElementById("period").value,
        quantity: document.getElementById("quantity").value
    };

    fetch(url, {
        method: 'POST', // or 'PUT'
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(data) // data can be `string` or {object}!

    }).then(res => res)
    .then(response => alert("Item Added!"))
    .catch(error => console.error('Error:', error));
}

// Search for item
function search() {
    var url = 'http://localhost:1234/library/' + document.getElementById('searchID').value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            var item = JSON.parse(this.responseText);
            var element = document.createElement('li');
            element.innerHTML = '<p>Name: ' + item.name + '</p></br>' + '<p>Type: ' + item.type + '</p></br>' + '<p>Loan Period: ' + item.period + '</p></br>' + '<p>Quantity' + item.quantity + '</p>';
            document.getElementById('list2').appendChild(element);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// Delete item
function deleteItem() {
    var url = "http://localhost:1234/library/delete/" + document.getElementById('itemID').value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            alert('Item ' + document.getElementById('itemID').value + ' has been deleted!');
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// Update item quantity
function updateQuantity() {
        var url = 'http://localhost:1234/library/updateQuantity/' + document.getElementById('updateID').value;
        var data = {
            quantity: document.getElementById("updateQuantityNum").value
        };
    
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                body: JSON.stringify(data) // data can be `string` or {object}!
    
        }).then(res => res)
        .then(response => alert("Item quantity updated!"))
        .catch(error => console.error('Error:', error));
}

// Update Loan Date
function updateLoanPeriod() {
    var url = 'http://localhost:1234/library/updateLoanPeriod/' + document.getElementById('loanID').value;
    var data = {
        loanPeriod: document.getElementById("loanVal").value
    };

    fetch(url, {
        method: 'POST', // or 'PUT'
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(data) // data can be `string` or {object}!

    }).then(res => res)
    .then(response => alert("Item loan period updated!"))
    .catch(error => console.error('Error:', error));
}
