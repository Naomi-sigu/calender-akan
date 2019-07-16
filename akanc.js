function input() {
  var BirthYear=document.getElementById("birthyear").value;
  var BirthMonth=document.getElementById("birthmonth").value;
  var BirthDate=document.getElementById("birthdate").value;

  var gender0=document.getElementById("gender").value;
  var gender1=document.getElementById("gender").value;

  var Females=["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"];
  var Males=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var DD=["Sunday","Monday","Tuesday","wednesday","Thurday","Friday","Saturday"];

  var DayOfBirth=parseInt(((century/4)-2*century-1)+((5*birthYear/4))+((26*(birthmonth+1)/10))+birthdate)% 7;

  if (gender0.checked === "male") {
       var Mname = Males[DayOfBirth - 1];
       var day = DD[DayofBirth -1];

       document.getElementById('name').innerHTML= "You were born on" + day + "Your name is"+ Mname;

       }
       else if (gender1.checked === "female") {
           var Fname = Females[DayOfBirth -1];
           var day = DD[DayOfBirth - 1];
            document.getElementById('name').innerHTML= "You were born on" + day + "Your name is"+ Fname;
       }

}
input();
