addDataRows = async () => {

  const addData = new DataService();
  await addData.fetchData();
  const data = addData.getData();
  // console.log(data);
  data.forEach(rowData => createRow(rowData));

}

createRow = (rowData) => {

  const table = document.getElementById('rows');

  //gets image
  const myImageURL = rowData.picture.medium;

  //this is for the whole row
  const row = table.insertRow(0);

  //this is for the cells in the row
  const cell0 = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);
  const cell4 = row.insertCell(4);
  const cell5 = row.insertCell(5);

  //and then input each element into cells
  cell0.innerHTML = `${rowData.name.title}​. ${rowData.name.first}​ ${rowData.name.last}​`;
  cell1.innerHTML = rowData.gender;
  cell2.innerHTML = `${rowData.location.street.number}​. ${rowData.location.street.name}​`;
  cell3.innerHTML = `${rowData.dob.age}​`;
  cell4.innerHTML = `${rowData.phone}​`;
  cell5.innerHTML = "<img src=" + myImageURL + " />";
}