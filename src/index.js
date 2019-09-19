function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("list-note-title")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var title = document.getElementById("titlerow" + no);
    var description = document.getElementById("descriptionrow" + no);

    var title_data = title.innerHTML;
    var description_data = description.innerHTML;

    title.innerHTML = "<input type='text' id='title_text" + no + "' value='" + title_data + "'>";
    description.innerHTML = "<input type='text' id='description_text" + no + "' value='" + description_data + "'>";
}

function save_row(no) {
    var title_val = document.getElementById("title_text" + no).value;
    var description_val = document.getElementById("description_text" + no).value;

    document.getElementById("titlerow" + no).innerHTML = title_val;
    document.getElementById("descriptionrow" + no).innerHTML = description_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newTitle").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }
}

function addnewNote() {
    var newTitle = document.getElementById("newTitle").value;
    var newDescription = document.getElementById("newDescription").value;

    var table = document.getElementById("list");
    //.log(table)//length
    var table_len = table.getElementsByTagName("li").length + 1;
   // console.log(table_len)

    var row = document.createElement('list');

    if(newTitle === '' || newDescription === ''){
        alert("invalid input")
    }
    else{
        row.innerHTML = "<li class='list-note' id='row" + table_len + "'>"
        + "<div class='list-note-left-box'>"
        + "<img id='imgrow1' src='./Assets/images/messageicon.png' class='list-note-icon' alt='icon' />"
        + "</div>"
        + "<div class='list-note-right-box' id='row" + table_len + "'>"
        + "<div class='list-note-title' id='titlerow" + table_len + "'>" + newTitle + "</div>"
        + "<div class='list-note-description 'id='descriptionrow" + table_len + "'>" + newDescription + "</div>"
        + "<div class='list-note-button'>"
        + "<input type='button' id='edit_button" + table_len + "' value='Edit' class='list-note-app-button' onclick='edit_row(" + table_len + ")'>"
        + "<input type='button' id='save_button" + table_len + "' value='Save' class='list-note-app-button' onclick='save_row(" + table_len + ")'>"
        + "<input type='button' value='Delete' class='list-note-app-button' onclick='delete_row(" + table_len + ")'></div></div></li>";

    table.appendChild(row);

    }


    document.getElementById("newTitle").value = "";
    document.getElementById("newDescription").value = "";

}
