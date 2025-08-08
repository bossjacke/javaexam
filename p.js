function saveName() {
   let myname = document.getElementById("nameInput").value
   localStorage.setItem("name",myname );
}
function getName() {
   let getname = localStorage.getItem("name");
   document.getElementById("output")
   .innerHTML = getname
}
function clearStorage() {
   localStorage.clear();
   document.getElementById("output")
   .innerHTML = "All are clear"
}
