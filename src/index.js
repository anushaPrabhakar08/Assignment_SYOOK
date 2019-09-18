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