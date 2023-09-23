var courseName;

function readFom() {
courseName = document.getElementById("courseName").value;
  
}

document.getElementById("insertCourse").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("course/" + courseName)
      .set({
        cid: courseName,
        courseName: courseName,
      });
    alert("Data Inserted");
    document.getElementById("courseName").value = "";
    
  };