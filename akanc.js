function input() {
  var century = document.getElementById("century").value;
  var birthYear=document.getElementById("birthyear").value;
  var birthmonth=document.getElementById("birthmonth").value;
  var birthdate=document.getElementById("birthdate").value;

  var gender0=document.getElementById("gender0").value;
  var gender1=document.getElementById("gender1").value;

  var females=["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"];
  var males=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var DD=["Sunday","Monday","Tuesday","wednesday","Thurday","Friday","Saturday"];

  var dayOfBirth=parseInt(((century/4)-2*century-1)+((5*birthYear/4))+((26*(birthmonth+1)/10))+birthdate)% 7;

  if (gender0.checked === "male") {
       var Mname = males[dayOfBirth - 1];
       var day = DD[dayofBirth -1];

       document.getElementById('name').innerHTML= "You were born on" + day + "Your name is"+ Mname;

       }
       else if (gender1.checked === "female") {
           var Fname = females[dayOfBirth -1];
           var day = DD[dayOfBirth - 1];
            document.getElementById('name').innerHTML= "You were born on" + day + "Your name is"+ Fname;
       }

}
input();
