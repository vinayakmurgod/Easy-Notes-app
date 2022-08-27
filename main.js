console.log("connected");
let id = "no";
// localStorage.clear()
selectData();

// Manage crud data 
function manageData() {
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("msg").innerHTML = "Please enter note";
  } else {
    console.log(id)
    if (id == "no") {
      let arr = getCrudData();
      if (arr == null) {
        let data = [name];
        setCrudData(data);
      } else {
        arr.push(name);
        setCrudData(arr);
      }
      document.getElementById("msg").innerHTML = "Note added";
    } else {
      let arr = getCrudData();
      arr[id] = name;
      setCrudData(arr);
      document.getElementById("msg").innerHTML = "Note edited";
    }
    document.getElementById("name").value = "";
    selectData();
  }
}

// Display crud data into table body
function selectData() {
  let arr = getCrudData();
  if (arr != null) {
    let html = "";
    let sno = 1;
    for (let k in arr) {
      html =
        html +
        `<tr> <th scope="row">${sno}</th> <td colspan="3">${arr[k]}</td> <td> <a href="javascript:void(0)" onclick='editData(${k})' > <button class="btn btn-primary">Edit</button> </a> <a href="javascript:void(0)" onclick='deleteData(${k})' > <button class="btn btn-danger">Delete</button> </a> </td> </tr>`;
      sno++;
    }
    document.getElementById("root").innerHTML = html;
  }
}

// Delete note function
function deleteData(rid) {
  let arr = getCrudData();
  arr.splice(rid, 1);
  setCrudData(arr);
  console.log("deleted");
  selectData();
}

// Edit note function
function editData(rid) {
  id=rid;
  let arr = getCrudData();
  document.getElementById("name").value = arr[rid];
}

// Get local storage data
function getCrudData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  return arr;
}

// Set local storage data
function setCrudData(arr) {
  localStorage.setItem("crud", JSON.stringify(arr));
}
