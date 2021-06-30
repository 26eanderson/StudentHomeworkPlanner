var subject = [""]
var title = [""]
var time = [""]
var type = [""]
var dueDate = [""]
var dueDay = [""]
var day = [""]
var month = [""]
var counter = 0
$("#submit").on("click",function(){
    dueDay = ($("#dueDay").val());
    dueDate = ($("#dueDate").val());
    type = ($("#type").val());
    time = ($("#time").val());
    title = ($("#name").val());
    subject = ($("#subject").val()); 
    day = ($("#day").val());
    month = ($("#month").val());  
    var newDiv = document.createElement("div");
    newDiv.textContent =  (subject + " " + title+ ". " + type + " that will take " + time + " minutes to finish. Due "  + dueDay + "  " + month + " the " + day);
    //document.getElementById("newDiv").innerHTML //= "<div>" + " "+ $("#subject").val() + " " + $("#name").val() + " " + $("#type").val() + " " + $("#time").val() + " minutes to finish. Due "  + $("#dueDay").val() + " "+ "</div>"
        emptyDiv.append(newDiv)
      counter ++
      console.log(subject[counter])
      console.log(time[counter])
      console.log(type[counter])
      console.log(title[counter])
      console.log(dueDate[counter])
      console.log(dueDay[counter])
});