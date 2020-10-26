function addDataRows() {

  const addData = new DataService();
  const data = addData.getData();
  data.forEach(rowData => createRow(rowData));

}

createRow = (rowData) => {

  const table = document.getElementById('rows');

  //this is for the whole row
  const row = table.insertRow(0);

  //this is for the cells in the row
  const cell0 = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);
  const cell4 = row.insertCell(4);

  //and then input each element into cells
  cell0.innerHTML = rowData.name;
  cell1.innerHTML = rowData.gender;
  cell2.innerHTML = rowData.address;
  cell3.innerHTML = rowData.age;
  cell4.innerHTML = rowData.phoneNumber;
}