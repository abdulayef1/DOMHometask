var row=1;

var btn_add=document.querySelector("#btn_add");
btn_add.addEventListener("click",addTable);

function addTable(){
    var name=document.getElementById("name").value;
    var lastName=document.getElementById("lastName").value;
    var age=document.getElementById("age").value;
if (!name||!lastName||!age) {
    alert("EMPTY LINE!");
    return;
}
    var table=document.getElementById("table");
    var newTable=table.insertRow(row);

    var cell1=newTable.insertCell(0);
    var cell2=newTable.insertCell(1);
    var cell3=newTable.insertCell(2);

    cell1.innerHTML=name;
    cell2.innerHTML=lastName;
    cell3.innerHTML=age;
    row++;
}