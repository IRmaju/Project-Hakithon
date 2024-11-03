var formSection = document.getElementById("form-section");
var resume = document.getElementById("staic-resume-div");
var generateResume = document.getElementById("generate-resume-button");
generateResume.addEventListener("click", function () {
    formSection.style.display = "block";
    resume.style.display = "none";
});
var submitbtn = document.getElementById("form-submit-button");
submitbtn.addEventListener("click", function () {
    resume.style.display = "block";
    formSection.style.display = "none";
});
document
    .getElementById("form-submit-button")
    .addEventListener("click", function (event) {
    event.preventDefault();
    var userName = document.getElementById("username").value;
    var fName = document.getElementById("Father'sname").value;
    var nationality = document.getElementById("nationality").value;
    var occuoation = document.getElementById("occupation").value;
    var address = document.getElementById("adress").value;
    var aboutMe = document.getElementById("AboutMe").value;
    var workExperience = document.getElementById("workexperienceses").value;
    var phoneNumber = document.getElementById("user-number").value;
    var email = document.getElementById("user-email").value;
    var linkedIn = document.getElementById("linkedIn").value;
    var gitHub = document.getElementById("gitHub").value;
    var hobbies = document.getElementById("Hobbies").value;
    var skills = document.getElementById("skill").value;
    var project = document.getElementById("project").value;
    var education = document.getElementById("educatio-data").value;
    document.getElementById("put-name").textContent = userName;
    document.getElementById("user-name").textContent = userName;
    document.getElementById("put-f/name").textContent = fName;
    document.getElementById("put-nationality").textContent = nationality;
    document.getElementById("put-occupation").textContent = occuoation;
    document.getElementById("put-adress").textContent = address;
    document.getElementById("put-about").textContent = aboutMe;
    document.getElementById("put-experience").textContent = workExperience;
    document.getElementById("put-usernumber").textContent = phoneNumber;
    document.getElementById("put-github").href = gitHub;
    document.getElementById("put-useremail").textContent = email;
    document.getElementById("put-LinkedIn").href = linkedIn;
    // for hobbies
    var hobbiesAray = hobbies.split(",").map(function (hobby) { return hobby.trim(); });
    var hobbyUI = document.getElementById("hobbyUI");
    hobbyUI.innerHTML = "";
    hobbiesAray.forEach(function (element) {
        var li = document.createElement("li");
        li.textContent = element;
        hobbyUI.appendChild(li);
    });
    //
    // for skills
    var skillArray = skills.split(",").map(function (item) { return item.trim(); });
    var skillUI = document.getElementById("skillsUI");
    skillUI.innerHTML = "";
    skillArray.forEach(function (element) {
        var li = document.createElement("li");
        li.textContent = element;
        skillUI.appendChild(li);
    });
    //
    // for projects
    var projectArray = project.split(",").map(function (item) { return item.trim(); });
    var projectIUI = document.getElementById("project-UI");
    projectIUI.innerHTML = "";
    projectArray.forEach(function (elements) {
        var li = document.createElement("li");
        li.textContent = elements;
        projectIUI.appendChild(li);
    });
    //
    // for education
    var educationArray = education.split(",").map(function (item) { return item.trimm(); });
    var EduUI = document.getElementById("educationUI");
    EduUI.innerHTML = "";
    educationArray.forEach(function (element) {
        var li = document.createElement("li");
        li.textContent = element;
        EduUI.appendChild(li);
    });
    //
});
