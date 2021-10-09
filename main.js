fetch("profile.json")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    buildPage(data);
  });
function buildPage(data) {
  var br = document.createElement("br");
  var body = document.getElementsByTagName("body")[0];
  var backgroundOfMainContainer = document.createElement("div");
  backgroundOfMainContainer.setAttribute("id", "backgroundOfMainContainer");
  var mainContainer = document.createElement("div");
  mainContainer.setAttribute("id", "mainContainer");
  var divMainContainer = document.createElement("div");
  divMainContainer.setAttribute("id", "divMainContainer");
  var hdrOfResume = document.createElement("header");
  hdrOfResume.setAttribute("id", "hdrOfResume");
  var h1 = document.createElement("h1");
  h1.innerText = "CURRICULUM VITAE";
  hdrOfResume.append(h1);
  divMainContainer.append(hdrOfResume);

  var personInformation = getPersonalInformation(data.basics); //first div
  divMainContainer.append(personInformation);
  divMainContainer.append(br.cloneNode(true));

  var secWorkExperience = getSecWorkExperience(data.work); //second section
  divMainContainer.append(secWorkExperience);
  divMainContainer.append(br.cloneNode(true));

  var secAwards = getSecAwards(data.awards); //award section
  divMainContainer.append(secAwards);
  divMainContainer.append(br.cloneNode(true));

  divMainContainer.append(getSecVol(data.volunteer)); //html element
  divMainContainer.append(br.cloneNode(true));

  divMainContainer.append(getSecEducation(data.education)); //education
  divMainContainer.append(br.cloneNode(true));

  divMainContainer.append(
    getTabelarSec(
      data.publications,
      "secPublication",
      "PUBLICATIONS",
      "tblPublication"
    )
  );
  divMainContainer.append(br.cloneNode(true));

  divMainContainer.append(
    getTabelarSec(data.skills, "secSkill", "SKILLS", "tblSkill")
  );
  divMainContainer.append(br.cloneNode(true));

  divMainContainer.append(
    getTabelarSec(data.languages, "secSkill", "LANGUAGES", "")
  );
  divMainContainer.append(br.cloneNode(true));

  divMainContainer.append(
    getTabelarSec(data.interests, "secSkill", "INTRESTS", "")
  );
  divMainContainer.append(br.cloneNode(true));

  divMainContainer.append(
    getTabelarSec(data.references, "secSkill", "REFERENCES", "")
  );
  divMainContainer.append(br.cloneNode(true));

  divMainContainer.append(getSecProjects(data.projects));
  divMainContainer.append(br.cloneNode(true));

  mainContainer.append(divMainContainer);
  var button = document.createElement("button");
  button.setAttribute("id", "finalSubmitButton");
  button.innerText = "SUBMIT";
  button.style.width = "100%";
  button.style.padding = "10px";
  button.style.backgroundColor = "goldenrod";
  button.style.marginBottom = "40px";
  button.style.border = "none";
  button.style.border = "2px solid purple";
  button.style.fontSize = "20px";
  button.style.fontWeight = "bold";
  button.style.fontFamily =
    "-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif";

  button.addEventListener("click", captureCompleteData);

  mainContainer.append(button);
  backgroundOfMainContainer.append(mainContainer);

  body.append(backgroundOfMainContainer);
  document
    .getElementById("secAwards")
    .children[0].childNodes[1].addEventListener("click", function () {
      addAward();
    });
  document
    .getElementById("secPublication")
    .children[0].childNodes[1].addEventListener("click", function () {
      addPublication();
    });
  document
    .getElementById("secSkill")
    .children[0].childNodes[1].addEventListener("click", function () {
      addSkill();
    });
  document
    .getElementsByClassName("secSkill")[1]
    .children[0].childNodes[1].addEventListener("click", function () {
      addLanguage();
    });
  document
    .getElementsByClassName("secSkill")[2]
    .children[0].childNodes[1].addEventListener("click", function () {
      addIntrest();
    });
  document
    .getElementsByClassName("secSkill")[3]
    .children[0].childNodes[1].addEventListener("click", function () {
      addReference();
    });
}

function getPersonalInformation(basics) {
  var personalInformation = document.createElement("div");
  personalInformation.setAttribute("id", "personInformation");
  // divMainContainer.append(personalInformation);
  var secdetailsOfPerson = document.createElement("section");
  secdetailsOfPerson.setAttribute("id", "secdetailsOfPerson");
  personalInformation.append(secdetailsOfPerson);
  var img = document.createElement("img");
  img.src =
    "passport-document-id-photo-business-man-portrait-concept-young-handsome-stylish-guy-formal-wear-white-background-119717703.jpg";
  secdetailsOfPerson.append(img);
  var h1 = document.createElement("h1");
  h1.innerText = "John Doe";
  secdetailsOfPerson.append(h1);
  var span = document.createElement("span");
  span.innerText = "Programmer";
  secdetailsOfPerson.append(span);
  var adrsOfPerson = document.createElement("address");
  adrsOfPerson.setAttribute("id", "adrsOfPerson");
  secdetailsOfPerson.append(adrsOfPerson);

  var br = document.createElement("br");

  adrsOfPerson.append("address:" + basics.location.address);

  adrsOfPerson.append(basics.location.postalCode);
  adrsOfPerson.append(br.cloneNode(true));

  adrsOfPerson.append(basics.location.city);
  adrsOfPerson.append(br.cloneNode(true));

  adrsOfPerson.append(basics.location.countryCode);
  adrsOfPerson.append(br.cloneNode(true));

  adrsOfPerson.append(basics.location.region);
  adrsOfPerson.append(br.cloneNode(true));

  var secSocialLinks = document.createElement("section");
  secSocialLinks.setAttribute("id", "secSocialLinks");
  personalInformation.append(secSocialLinks);
  var adrs = document.createElement("address");
  secSocialLinks.append(basics.email);

  return personalInformation;
}
//

function getSecWorkExperience(work) {
  var secWorkExperience = document.createElement("section");
  secWorkExperience.setAttribute("id", "secWorkExperience");
  var h2 = document.createElement("h2");
  h2.innerText = "WORK EXPERIENCE";

  secWorkExperience.append(h2);
  var span = document.createElement("span");
  span.setAttribute("class", "spnBtnAdd");
  span.innerText = "+";
  h2.append(span);

  //attaching event
  //1. span.addEventListener("click", openWorkExperienceForm); //  openWorkExperienceForm is a function without round bracket
  span.addEventListener("click", () => {
    openWorkExperienceForm();
  });
  // Arrow function(calling and defination)
  // () = function input  ,  {...} = function defination method 2

  // span.addEventListener("click", function()  { //method 3
  //   openWorkExperienceForm();
  // }); // Arrow function(calling and defination)

  var ul = document.createElement("ul");

  for (let index = 0; index < work.length; index++) {
    //li
    ul.append(getWorkExperienceUlLi(work[index])); //li function call
  }
  secWorkExperience.append(ul);

  return secWorkExperience;
}

function getWorkExperienceUlLi(work) {
  // function define
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.innerText = work.name;
  li.append(span);

  var ul = document.createElement("ul");
  const keys = Object.keys(work);
  keys.forEach((key, index) => {
    let li = document.createElement("li");
    li.innerText = `${key}: ${work[key]}`;
    ul.append(li); //
  });
  li.append(ul);
  return li;
}

function getSecAwards(awards) {
  var secAwards = document.createElement("section");
  secAwards.setAttribute("id", "secAwards");
  var h2 = document.createElement("h2");
  h2.innerText = "AWARDS";
  secAwards.append(h2);
  var span = document.createElement("span");
  span.setAttribute("class", "spnBtnAdd");
  span.innerText = "+";
  h2.append(span);

  var tblAwards = document.createElement("table");
  tblAwards.setAttribute("id", "tblAwards");
  secAwards.append(tblAwards);
  var tbody = document.createElement("tbody");
  tblAwards.append(tbody);

  var bigArray = getSecAwardsArray(awards);
  for (let i = 0; i < bigArray.length; i++) {
    var tr = document.createElement("tr");
    for (let j = 0; j < bigArray[i].length; j++) {
      var td = document.createElement("td");
      td.innerText = bigArray[i][j];
      tr.append(td);
    }

    tbody.append(tr);
  }
  return secAwards;
}

function getSecAwardsArray(awards) {
  var arr = [];
  const keyslist = Object.keys(awards[0]); //title,date,awarder,summry
  arr.push(keyslist);
  //[title]
  for (let index = 0; index < awards.length; index++) {
    var valueList = Object.values(awards[index]);
    arr.push(valueList);
  }
  return arr;
}

//create section then append to divmaincontainer
//2.create h2 tag then append to section
//3.text write in h2
//4.span create and append h2
//5.create ul and append to section
//6. create 8 li using  loops and then append on ul with innertext = key : value format

function getSecVol(volunteer) {
  var secVol = document.createElement("section");
  secVol.setAttribute("class", "secVol");

  var h2 = document.createElement("h2");
  h2.innerText = "VOLUNTEER";
  secVol.append(h2);

  var span = document.createElement("span");
  span.setAttribute("class", "spnBtnAdd");
  span.innerText = "+";
  h2.append(span);

  span.addEventListener("click", () => {
    window.open(
      "/volunteerform.html",
      "newwindow",
      (config =
        "height=670,width=1400,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no")
    );
  });

  var ul = document.createElement("ul");
  secVol.append(ul);

  for (let i = 0; i < Object.keys(volunteer[0]).length; i++) {
    var li = document.createElement("li");
    li.innerText =
      Object.keys(volunteer[0])[i] + ":" + Object.values(volunteer[0])[i];
    ul.append(li);
  }
  return secVol;
}
//['orga','',]
//object.value(volunteer[0])
// ['organisation','volunteer','https','date']

//create education section and append on the divMaincontainer
//create h2 tage , write inner text  and append on section
//create a span tag and than put + as innertext on the span tag and finally append on the above tag
//create a 2 ul tag using loop and than append the created ul in education section
//create hr tag and append on section eduction
//create 8 li in each ul tag then append all li in ul

function getSecEducation(education) {
  var secVol = document.createElement("section");
  secVol.setAttribute("class", "secVol"); //appended in line 44
  var h2 = document.createElement("h2");
  h2.innerText = "EDUCATION";
  secVol.append(h2);
  var span = document.createElement("span");
  span.setAttribute("class", "spnBtnAdd");
  span.innerText = "+";
  h2.append(span);
  span.addEventListener("click", () => {
    openEducationForm();
  });
  for (let i = 0; i < education.length; i++) {
    var ul = document.createElement("ul");
    var hr = document.createElement("hr");
    for (let j = 0; j < Object.keys(education[i]).length; j++) {
      var li = document.createElement("li");
      if (j == 0) {
        li.innerHTML = `<h3>${Object.keys(education[i])[j]} : ${
          Object.values(education[i])[j]
        }</h3>`;
      } else {
        li.innerText =
          Object.keys(education[i])[j] + ":" + Object.values(education[i])[j];
      }
      ul.append(li);
    }
    secVol.append(ul);
    if (i != education.length - 1) {
      secVol.append(hr.cloneNode(true));
    }
  }
  return secVol;
}

function getSecProjects(projects) {
  var secVol = document.createElement("section");
  secVol.setAttribute("class", "secVol");
  var h2 = document.createElement("h2");
  h2.innerText = "PROJECTS";
  secVol.append(h2);
  var span = document.createElement("span");
  span.setAttribute("class", "spnBtnAdd");
  span.innerText = "+";
  h2.append(span);
  span.addEventListener("click", () => {
    openProjectForm();
  });
  for (let i = 0; i < projects.length; i++) {
    var ul = document.createElement("ul");
    var hr = document.createElement("hr");
    for (let j = 0; j < Object.keys(projects[i]).length; j++) {
      var li = document.createElement("li");
      if (j == 0) {
        li.innerHTML = `<h3>${Object.keys(projects[i])[j]} : ${
          Object.values(projects[i])[j]
        }</h3>`;
      } else {
        li.innerText =
          Object.keys(projects[i])[j] + ":" + Object.values(projects[i])[j];
      }
      ul.append(li);
    }
    secVol.append(ul);
    if (i != projects.length - 1) {
      secVol.append(hr.cloneNode(true));
    }
  }
  return secVol;
}

function getTabelarSec(collectionData, sectionId, h2InnerText, tableId) {
  //line 48
  var collectionSection = document.createElement("section");

  collectionSection.setAttribute("id", sectionId);
  collectionSection.setAttribute("class", sectionId);

  var h2 = document.createElement("h2");
  h2.innerText = h2InnerText;
  collectionSection.append(h2);
  var span = document.createElement("span");
  span.setAttribute("class", "spnBtnAdd");
  span.innerText = "+";
  h2.append(span);
  var table = document.createElement("table");
  table.setAttribute("id", tableId);
  collectionSection.append(table);
  var thead = document.createElement("thead");
  var tr = document.createElement("tr");
  for (let i = 0; i < Object.keys(collectionData[0]).length; i++) {
    var th = document.createElement("th");
    th.innerText = Object.keys(collectionData[0])[i];
    tr.append(th);
  }
  thead.append(tr);
  var tbody = document.createElement("tbody");
  for (let j = 0; j < collectionData.length; j++) {
    var tr = document.createElement("tr");
    for (let i = 0; i < Object.values(collectionData[j]).length; i++) {
      //publication[j] = object
      var td = document.createElement("td");
      td.innerText = Object.values(collectionData[j])[i];
      tr.append(td);
    }
    tbody.append(tr);
  }
  table.append(thead);
  table.append(tbody);
  return collectionSection;
}

function openWorkExperienceForm() {
  // // window.alert("hi");
  // var iframe = document.createElement('iframe');
  // iframe.setAttribute("src", "http://127.0.0.1:5500/workexperienceform.html");
  // document.getElementsByTagName('body')[0].append(iframe);
  window.open(
    "/workexperienceform.html",
    "newwindow",
    (config =
      "height=670,width=1400,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no")
  );
}

function addWorkExprience(workexprience) {
  console.log(workexprience);
  var li = getWorkExperienceUlLi(workexprience);
  document.getElementById("secWorkExperience").children[1].append(li);
}
function addVolunteer(volunteer) {
  console.log(volunteer);
  var li = getWorkExperienceUlLi(volunteer);
  var hr = document.createElement("hr");
  document.getElementsByClassName("secVol")[0].append(hr);
  document.getElementsByClassName("secVol")[0].append(li.children[1]);
}

function addAward() {
  var condition = validateBlankRow(
    document.getElementById("secAwards").children[1].children[0]
  );
  if (!condition) {
    return;
  }
  var tr = document.createElement("tr");
  for (let i = 0; i < 4; i++) {
    var td = document.createElement("td");
    var inputTag = document.createElement("input");
    inputTag.addEventListener("keypress", function (event) {
      // console.log(event);
      if (event.charCode == 13) {
        var row = event.target.parentElement.parentElement;
        for (let j = 0; j < row.children.length; j++) {
          row.children[j].innerText = row.children[j].children[0].value;
        }
      }
    });
    inputTag.setAttribute("type", "text");
    inputTag.style.width = "94%";
    td.append(inputTag);
    tr.append(td);
  }
  document.getElementById("secAwards").children[1].children[0].append(tr);
}

function openEducationForm() {
  try {
    window.open(
      "/educationForm.html",
      "newwindow",
      (config =
        "height=670,width=1400,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no")
    );
  } catch (error) {
    window.alert("error");
    console.log(error);
  }
}

function addEducation(education) {
  document.getElementsByClassName("secVol")[1];
  var hr = document.createElement("hr");
  document.getElementsByClassName("secVol")[1].append(hr);
  var ul = document.createElement("ul");
  document.getElementsByClassName("secVol")[1].append(ul);
  //cube = method --> bracket ,  cuboid = property --> =
  const keysArrayOfString = Object.keys(education);
  keysArrayOfString.forEach((key, index) => {
    let li = document.createElement("li");
    if (index == 0) {
      li.style.fontWeight = "bold";
    }
    li.innerText = `${key}: ${education[key]}`; //education[property ka name in string format]  education.institution
    // while using . we have to alway use the exect name
    ul.append(li); //
  });
}
//['inst','']

function openProjectForm() {
  window.open(
    "/project.html",
    "newwindow",
    (config =
      "height=670,width=1400,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no")
  );
}
function addProjectForm(project) {
  document.getElementsByClassName("secVol")[2];
  var hr = document.createElement("hr");
  document.getElementsByClassName("secVol")[2].append(hr);
  var ul = document.createElement("ul");
  document.getElementsByClassName("secVol")[2].append(ul);
  //cube = method --> bracket ,  cuboid = property --> =
  const keysArrayOfString = Object.keys(project);
  keysArrayOfString.forEach((key, index) => {
    let li = document.createElement("li");
    if (index == 0) {
      li.style.fontWeight = "bold";
    }
    li.innerText = `${key}: ${project[key]}`; //education[property ka name in string format]  education.institution
    // while using . we have to alway use the exect name
    ul.append(li); //
  });
}

function captureCompleteData() {
  alert("hello");
}

function addPublication() {
  var condition = validateBlankRow(
    document.getElementById("secPublication").children[1].children[1]
  );
  if (!condition) {
    return;
  }
  // alert('hie');
  var tr = document.createElement("tr");
  for (let i = 0; i < 5; i++) {
    var td = document.createElement("td");
    var inputTag = document.createElement("input");
    inputTag.addEventListener("keypress", function (event) {
      // console.log(event);
      if (event.charCode == 13) {
        var r = event.target.parentElement.parentElement;
        for (let j = 0; j < r.children.length; j++) {
          r.children[j].innerText = r.children[j].children[0].value;
        }
      }
    });
    inputTag.setAttribute("type", "text");
    inputTag.style.width = "94%";
    td.append(inputTag);
    tr.append(td);
  }
  document.getElementById("secPublication").children[1].children[1].append(tr);
}
function addSkill() {
  var condition = validateBlankRow(
    document.getElementsByClassName("secSkill")[0].children[1].children[1]
  );
  if (!condition) {
    return;
  }
  // alert('hie');
  var tr = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    var td = document.createElement("td");
    var inputTag = document.createElement("input");
    inputTag.addEventListener("keypress", function (event) {
      // console.log(event);
      if (event.charCode == 13) {
        var r = event.target.parentElement.parentElement;
        for (let j = 0; j < r.children.length; j++) {
          r.children[j].innerText = r.children[j].children[0].value;
        }
      }
    });
    inputTag.setAttribute("type", "text");
    inputTag.style.width = "94%";
    td.append(inputTag);
    tr.append(td);
  }
  document.getElementById("secSkill").children[1].children[1].append(tr);
}
function addLanguage() {
  var condition = validateBlankRow(
    document.getElementsByClassName("secSkill")[1].children[1].children[1]
  );
  if (!condition) {
    return;
  }
  // alert('hie');
  var tr = document.createElement("tr");
  for (let i = 0; i < 2; i++) {
    var td = document.createElement("td");
    var inputTag = document.createElement("input");
    inputTag.addEventListener("keypress", function (event) {
      // console.log(event);
      if (event.charCode == 13) {
        var r = event.target.parentElement.parentElement;
        for (let j = 0; j < r.children.length; j++) {
          r.children[j].innerText = r.children[j].children[0].value;
        }
      }
    });
    inputTag.setAttribute("type", "text");
    inputTag.style.width = "100%";
    inputTag.style.height = "21px";
    inputTag.style.border = "none";

    td.append(inputTag);
    tr.append(td);
  }
  document
    .getElementsByClassName("secSkill")[1]
    .children[1].children[1].append(tr);
}
function addIntrest() {
  var condition = validateBlankRow(
    document.getElementsByClassName("secSkill")[2].children[1].children[1]
  );
  if (!condition) {
    return;
  }
  // alert('hie');
  var tr = document.createElement("tr");
  for (let i = 0; i < 2; i++) {
    var td = document.createElement("td");
    var inputTag = document.createElement("input");
    inputTag.addEventListener("keypress", function (event) {
      // console.log(event);
      if (event.charCode == 13) {
        var r = event.target.parentElement.parentElement;
        for (let j = 0; j < r.children.length; j++) {
          r.children[j].innerText = r.children[j].children[0].value;
        }
      }
    });
    inputTag.setAttribute("type", "text");
    inputTag.style.width = "100%";
    inputTag.style.height = "21px";
    inputTag.style.border = "none";

    td.append(inputTag);
    tr.append(td);
  }
  document
    .getElementsByClassName("secSkill")[2]
    .children[1].children[1].append(tr);
}
function addReference() {
  var condition = validateBlankRow(
    document.getElementsByClassName("secSkill")[3].children[1].children[1]
  );
  if (!condition) {
    return;
  }
  // alert('hie');
  var tr = document.createElement("tr");
  for (let i = 0; i < 2; i++) {
    var td = document.createElement("td");
    var inputTag = document.createElement("input");
    inputTag.addEventListener("keypress", function (event) {
      // console.log(event);
      if (event.charCode == 13) {
        var r = event.target.parentElement.parentElement;
        for (let j = 0; j < r.children.length; j++) {
          r.children[j].innerText = r.children[j].children[0].value;
        }
      }
    });
    inputTag.setAttribute("type", "text");
    inputTag.style.width = "100%";
    inputTag.style.height = "21px";
    inputTag.style.border = "none";

    td.append(inputTag);
    tr.append(td);
  }
  document
    .getElementsByClassName("secSkill")[3]
    .children[1].children[1].append(tr);
}

function validateBlankRow(tbody) {
  var inputArea = tbody.getElementsByTagName("input").length;
  if (inputArea > 0) {
    alert("Please save the data");
    return false;
  }
  return true;
}
function captureCompleteData() {
  var personalDetails = capturePersonalDetails();
  var worksData = captureWorkExprience();
  var awardsData = captureAwards();
  var volunteerData = captureVolunteer();
  var educationData = captureEducation();
  var publicationData = capturePublication();
  var skillData = captureSkill();
  var languagesData = captureLanguage();
  var interestData = captureInterest();
  var referencesData = captureReferences();
  var projectData = captureProject();

  var profile = {};
  profile["basics"] = personalDetails;
  profile["work"] = worksData; // both work are not same (733 and 736)
  profile["awards"] = awardsData;
  profile["volunteer"] = volunteerData;
  profile["education"] = educationData;
  profile["publications"] = publicationData;
  profile["skills"] = skillData;
  profile["languages"] = languagesData;
  profile["interests"] = interestData;
  profile["references"] = referencesData;
  profile["projects"] = projectData;

  console.log(profile);
  // download(JSON.stringify(profile), "profileData.json", "text/plain");
}

function download(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

function capturePersonalDetails() {
  var obj = {};
  var allDetails = document.getElementById("secdetailsOfPerson").children;
  obj["label"] = allDetails[2].innerText;
  obj["name"] = allDetails[1].innerText;
  obj["image"] = allDetails[0].src;
  obj["email"] = document.getElementById("secSocialLinks").innerText;
  obj["location"] = {
    address: allDetails[3].childNodes[0].data,
    postalCode: allDetails[3].childNodes[1].data,
    city: allDetails[3].childNodes[3].data,
    countryCode: allDetails[3].childNodes[5].data,
    region: allDetails[3].childNodes[7].data,
  };
  return obj;
}

function captureWorkExprience() {
  var work = [];
  var bigLis =
    document.getElementById("secWorkExperience").children[1].children; //array of big li
  for (let i = 0; i < bigLis.length; i++) {
    var innerLis = bigLis[i].children[1].children; //collection(array) of 7 lis
    var obj = {};
    for (let j = 0; j < innerLis.length; j++) {
      var keyValue = innerLis[j].innerText.split(": "); //["name","company"]
      obj[keyValue[0]] = keyValue[1]; //obj.name obj["name"]
    }
    work.push(obj);
  }
  return work;
}

function captureAwards() {
  var a = [];
  var bigTr =
    document.getElementById("secAwards").children[1].children[0].children; //[tr,tr,tr,tr]
  var propertyNamesTr = bigTr[0]; // for first tr

  for (let i = 1; i < bigTr.length; i++) {
    var allTd = bigTr[i].children; //[td,td,td,td] --tr[1]
    var obj = {};
    for (let j = 0; j < allTd.length; j++) {
      var value = allTd[j].innerText; //  tr[1] td[0] = award1
      var key = propertyNamesTr.children[j].innerText; //tr[0] td,td,td,td  td[0]--innertext - title
      obj[key] = value; //i=1,j=0
    }
    a.push(obj);
  }
  return a;
}
function captureVolunteer() {
  var v = [];
  var bigLi = document.getElementsByClassName("secVol")[0].children[1].children;

  var obj = {};
  for (let i = 0; i < bigLi.length; i++) {
    var keyVlaue = bigLi[i].innerText.split(":");
    obj[keyVlaue[0]] = keyVlaue[1];
  }
  v.push(obj);
  return v;
}

function captureEducation() {
  var e = [];
  var collectionOfAllUl = document
    .getElementsByClassName("secVol")[1]
    .getElementsByTagName("ul");
  for (let i = 0; i < collectionOfAllUl.length; i++) {
    var ul = collectionOfAllUl[i];
    var obj = {};
    for (let j = 0; j < ul.children.length; j++) {
      var keyValue = ul.children[j].innerText.split(":");
      obj[keyValue[0].trim()] = keyValue[1].trim();
    }
    e.push(obj);
  }
  return e;
}

function capturePublication() {
  var p = [];
  var bigTr =
    document.getElementById("secPublication").children[1].children[1].children;
  var bigTheadTitle =
    document.getElementById("secPublication").children[1].children[0].children;
  for (let m = 0; m < bigTr.length; m++) {
    var obj = {};
    var r = bigTheadTitle[0].children;
    for (let o = 0; o < bigTheadTitle[0].children.length; o++) {
      var property = r[o].innerText;
      var propertyValue = bigTr[m].children[o].innerText;
      obj[property] = propertyValue;
    }
    p.push(obj);
  }
  return p;
}

function captureSkill() {
  var s = [];
  var bigTr =
    document.getElementsByClassName("secSkill")[0].children[1].children[1]
      .children;
  var bigTheadTitle =
    document.getElementsByClassName("secSkill")[0].children[1].children[0]
      .children;
  for (let m = 0; m < bigTr.length; m++) {
    var obj = {};
    var r = bigTheadTitle[0].children;
    for (let o = 0; o < bigTheadTitle[0].children.length; o++) {
      var property = r[o].innerText;
      var propertyValue = bigTr[m].children[o].innerText;
      obj[property] = propertyValue;
    }
    s.push(obj);
  }
  return s;
}

function captureLanguage() {
  var l = [];
  var bigTr =
    document.getElementsByClassName("secSkill")[1].children[1].children[1]
      .children;
  var bigTheadTitle =
    document.getElementsByClassName("secSkill")[1].children[1].children[0]
      .children;
  for (let m = 0; m < bigTr.length; m++) {
    var obj = {};
    var r = bigTheadTitle[0].children;
    for (let o = 0; o < bigTheadTitle[0].children.length; o++) {
      var property = r[o].innerText;
      var propertyValue = bigTr[m].children[o].innerText;
      obj[property] = propertyValue;
    }
    l.push(obj);
  }
  return l;
}

function captureInterest() {
  var I = [];
  var collectionOfTh =
    document.getElementsByClassName("secSkill")[2].children[1].children[0]
      .children[0].children;
  var collectionOfTr =
    document.getElementsByClassName("secSkill")[2].children[1].children[1]
      .children;
  for (let i = 0; i < collectionOfTr.length; i++) {
    var tr = collectionOfTr[i];

    I.push(makingObjectOfInterest(tr, collectionOfTh));
  }
  return I;
}

function captureReferences() {
  var l = [];
  var bigTr =
    document.getElementsByClassName("secSkill")[3].children[1].children[1]
      .children;
  var bigTheadTitle =
    document.getElementsByClassName("secSkill")[1].children[1].children[0]
      .children;
  for (let m = 0; m < bigTr.length; m++) {
    var obj = {};
    var r = bigTheadTitle[0].children;
    for (let o = 0; o < bigTheadTitle[0].children.length; o++) {
      var property = r[o].innerText;
      var propertyValue = bigTr[m].children[o].innerText;
      obj[property] = propertyValue;
    }
    l.push(obj);
  }
  return l;
}

function captureProject() {
  var p = [];
  var collectionOfAllUl = document
    .getElementsByClassName("secVol")[2]
    .getElementsByTagName("ul");
  for (let i = 0; i < collectionOfAllUl.length; i++) {
    var ul = collectionOfAllUl[i];
    var obj = {};
    for (let j = 0; j < ul.children.length; j++) {
      var keyValue = ul.children[j].innerText.split(":");
      obj[keyValue[0].trim()] = keyValue[1].trim();
    }
    p.push(obj);
  }
  return p;
}

function makingObjectOfInterest() {
  var obj = {};
  for (let j = 0; j < arguments[1].length; j++) {
    var td_value = arguments[0].children[j].innerText;
    var th_property = arguments[1][j].innerText;
    obj[th_property] = td_value;
  }
  return obj;
}
