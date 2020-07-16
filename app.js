/* ================================Chapter#38 to 42=============================== */
/* ================================Task#1=============================== */
// function power(a,b){
//     return Math.pow(a,b)
// }

// alert(power(2,4));

/* ================================Task#2=============================== */
// function isLeap(year){
//     return !(year%4)
// }
// var yr = prompt("Enter a year")
// if(isLeap(yr))
//     alert(yr + " is a Leap year")
// else
//     alert(yr + " is not a Leap year")

/* ================================Task#3=============================== */
// function S(a,b,c){
//     return (a+b+c)/2
// }
// function area(a,b,c,s){
//     return (s*(s-a)*(s-b)*(s-c))
// }
// alert(area(2,4,4.6,S(2,4,4.6)))

/* ================================Task#4=============================== */
// function avg(a,b,c){
//     return (a+b+c)/3
// }
// function per(a,b,c,t){
//     return ((a+b+c)/t)*100
// }
// function mainFunction(){
//     document.write("<h1>Percentage is: " + per(59, 86, 98, 300) + "<br>Average is: " + avg(59, 86, 98) + "</h1>")
// }
// mainFunction();

/* ================================Task#5=============================== */
// function index(s, c){
//     for(var i=0;i<s.length;i++){
//         if(s[i] === c){
//             return i
//         }
//     }
// }
// alert(index("hello world", 'd'))

/* ================================Task#6=============================== */
// function removeVowels(s){
//     for(var i=0;i<25;i++){
//         if((s[i] === 'a') || (s[i] === 'e') || (s[i] === 'i') || (s[i] === 'o') || (s[i] === 'u'))
//             s = s.replace(s[i], '')
//     }
//     return s
// }
// var st = "a quick brown fox jumps"
// alert(removeVowels(st));

/* ================================Task#7=============================== */
// function countOccu(s){
//     var seenBefore = 0;
//     var count = 0;
//     for(var i=0; i<s.length; i++){
//         switch(s[i]) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 {
//                     if(seenBefore){
//                         count++
//                         seenBefore = 0;
//                     }
//                     else
//                         seenBefore = 1;
//                 }
//                 break;
//             default:
//                 seenBefore = 0;
//         }
//     }
//     return count;
// }
// var st = "Pleases read this application and give me gratuity"
// alert(countOccu(st))

/* ================================Task#8=============================== */
// var inKm = prompt("Enter distance in Km")
// function convertToMeters(km){
//     return km*1000
// }
// function convertToFeet(km){
//     return km*3280.84
// }
// function convertToInches(km){
//     return km*39370.1
// }
// function convertToCentimeters(km){
//     return km*100000
// }
// document.write("<h1>Distance in Km: " + inKm + "<br>Distance in Meters: " + convertToMeters(inKm) + "<br>Distance in Inches: " + convertToInches(inKm) + "<br>Distance in Feet: " + convertToFeet(inKm) + "<br>Distance in Centimeters: " + convertToCentimeters(inKm) + "</h1>")

/* ================================Task#9=============================== */
// var hrs = prompt("how much hours did you work for?")
// hrs -= 40
// if (hrs>=0)
//     document.write("<h1>Your overtime pay is: Rs." + hrs*12 + "</h1>")
// else
//     document.write("<h1>Your overtime pay is: Rs.0 Because you did'nt work for more than 40 hours</h1>")

/* ================================Task#10=============================== */
// var amount = prompt("Enter the amount to withdraw!!")

// function calcNotes(amount){
//     var hun = 0,fif = 0,ten = 0
//     if(amount/100 > 0){
//         hun = Math.floor(amount/100)
//         if(amount%100){
//             if((amount-(hun*100))/50 > 0){
//                 fif = Math.floor((amount-(hun*100))/50)
//                 if((amount-(hun*100))%50){
//                     ten = (amount-(hun*100)-(fif*50))/10
//                 }
//             }
//         }
//     }
//     document.write("<h1>You will have " + hun + " hundred notes " + fif + " fifty notes " + ten + " ten notes" + "</h1>")
// }
// calcNotes(amount)

/* ================================Chapter#43 to 48=============================== */
/* ================================Task#1=============================== */
// document.write("<a href='#' onclick='showAlert()'>click here</a>")
// function showAlert(){
//     alert("hello")
// }

/* ================================Task#2=============================== */
// document.write("<h1>Mobile Phone lookup</h1><br>")
// document.write("<img style='width: 200px; margin: 5px 10px; border: 1px solid black;' onclick='alert(`Thanks for purchasing from us`)' src='Images/MOB1.jpg'><img style='width: 100px; height: 200px margin: 5px 10px; border: 1px solid black' onclick='alert(`Thanks for purchasing from us`)' src='Images/MOB2.jpg'><img onclick='alert(`Thanks for purchasing from us`)' style='width: 150px; height: 200px; margin: 5px 10px; border: 1px solid black' src='Images/MOB5.jpg'><img style='width: 100px; height: 200px; margin: 5px 10px; border: 1px solid black' onclick='alert(`Thanks for purchasing from us`)' src='Images/MOB4.jpg'>")

/* ================================Task#3=============================== */
// var names = ["Jon","Doe","Mark","James","Albert", "Einstein", "Dorothy", "Hodgkin","Edmond", "Halley"]
// var classes = [10,9,6,7,5,9,8,10,7,5]
// var tab = "<table class='table' ><thead><tr><th>Index</th><th>Name</th><th>Class</th></tr></thead>"
// tab += "<tbody>"
// for(var i=0; i<10; i++){
//         tab += "<tr id='" + i + "'><td>" + i + "</td><td>" + names[i] + "</td><td>" + classes[i] + "</td><td><button onclick='deleteRec(" + i + ")'>Delete</button></td></tr>"  
// }
// tab += "</tbody></table>"
// document.write(tab)
// function deleteRec(id){
//     document.getElementById(id).remove();
// }

/* ================================Task#4=============================== */
// document.write("<img id='image1' style='width: 200px; margin: 5px 10px; border: 1px solid black;' onmouseover='changeImg()' onmouseout='changeBckImg()' src='Images/MOB1.jpg'>")
// function changeImg(){
//     var image = document.getElementById("image1")
//     image.setAttribute('src','Images/MOB2.jpg')
// }
// function changeBckImg(){
//     var image = document.getElementById("image1")
//     image.setAttribute('src','Images/MOB1.jpg')
// }

/* ================================Task#5=============================== */
// document.write("<h1 id='num'>0</h1>")
// document.write("<button onclick='document.getElementById(`num`).innerHTML++'>Increase</button>")
// document.write("<button onclick='document.getElementById(`num`).innerHTML--'>Decrease</button>")

/* ================================Chapter#49 to 52=============================== */
/* ================================Task#1=============================== */
// var form = document.getElementById("signForm")
// form.setAttribute('class','')
// function submitData(){
//     var sName = document.getElementById("signName").value
//     var sEmail = document.getElementById("signEmail").value
//     var sPhone = document.getElementById("signPhone").value
//     var sPswd = document.getElementById("signPswd").value

//     document.write("<h3>Name: " + sName + "</h3>")
//     document.write("<h3>Email: " + sEmail + "</h3>")
//     document.write("<h3>Phone: " + sPhone + "</h3>")
//     document.write("<h3>Password: " + sPswd + "</h3>")
// }
/* ================================Task#2=============================== */
// document.write("<h1 style='margin-bottom: 20px'>The Iphone X</h1>")
// var prevP = "<p id='p1'style='width: 200px'>The iPhone X has to be one of the most-talked about tech products of 2017,\
//              and introduces a brand new paradigm for interaction, with gestures replacing buttons and a larger screen than\
//               on any previous iPhone.<a href='#' onclick='readMore()'>Read More</a></p>"
// document.write(prevP)
// function readMore(){
//     document.getElementById('p1').innerHTML = "The iPhone X has to be one of the most-talked about tech products of 2017,\
//                                                and introduces a brand new paradigm for interaction, with gestures replacing \
//                                                buttons and a larger screen than on any previous iPhone. It shares most of its \
//                                                internals with the iPhone 8 and iPhone 8 Plus, including Apple’s own A11 Bionic \
//                                                chip and support for wireless charging. However, the 5.8-inch AMOLED panel is a\
//                                                first for any iPhone. Overall, the iPhone X display is great. The notch at the\
//                                                top contains the front camera and 3D sensors that make Face ID recognition possible. \
//                                                It works seamlessly and reliably on most occasions. Attention detection ensures that no\
//                                                one can unlock your iPhone X by simply pointing the device at your face when you are not \
//                                                looking. Animoji is a cool new feature that lets you pick an emoji and animate it using your \
//                                                own facial movements. You get optical image stabilisation on both rear cameras, and the iPhone\
//                                                X takes great pictures in nearly all scenarios."
// }

/* ================================Task#3=============================== */
// var form = document.getElementById("studentForm")
// var tableDiv = document.getElementById("tableDiv")
// var tableS = document.getElementById("tableS")
// var numRow = 1;
// var id = numRow;
// form.setAttribute('class','')
// tableDiv.setAttribute('class','')

// function submitData(){
//     var sName = document.getElementById("sName").value
//     var sClass = document.getElementById("sClass").value
//     var sGrade = document.getElementById("sGrade").value

//     var row = tableS.insertRow(numRow)
//     row.setAttribute('id', numRow)
//     var cell = row.insertCell(0)
//     cell.innerHTML = id
//     cell = row.insertCell(1)
//     cell.innerHTML = sName
//     cell.setAttribute('id', 'name' + numRow)
//     cell = row.insertCell(2)
//     cell.innerHTML = sClass
//     cell.setAttribute('id', 'class' + numRow)
//     cell = row.insertCell(3)
//     cell.innerHTML = sGrade
//     cell.setAttribute('id', 'grade' + numRow)
//     cell = row.insertCell(4)
//     cell.innerHTML = "<button onclick='editRec(" + numRow + ")'>edit</button><button onclick='deleteRec(" + numRow + ")'>Delete</button>"
//     numRow++
//     id++
// }

// function deleteRec(id){
//     document.getElementById(id).remove();
//     numRow--
// }

// function editRec(id){
    
//     var editForm = document.getElementById("editForm")
//     editForm.setAttribute('class','')

//     var name = document.getElementById('name' + id).innerHTML;
//     var clas = document.getElementById('class' + id).innerHTML;
//     var grade = document.getElementById('grade' + id).innerHTML;
//     var name = document.getElementById('name' + id).innerHTML;

//     document.getElementById('eName').value = name
//     document.getElementById('eClass').value = clas
//     document.getElementById('eGrade').value = grade
//     document.getElementById('updBtn').setAttribute('onclick', 'updateData(' + id + ')')
// }

// function updateData(id){
//     document.getElementById('name' + id).innerHTML = document.getElementById('eName').value
//     document.getElementById('class' + id).innerHTML = document.getElementById('eClass').value
//     document.getElementById('grade' + id).innerHTML = document.getElementById('eGrade').value   
// }

/* ================================Chapter#53 to 58=============================== */
/* ================================Task#1=============================== */
// var pics = document.getElementById('pics')
// pics.setAttribute('class', '')
// for(var i=4; i<8; i++)
//     pics.innerHTML += "<img id='img" + i + "' onclick='modalOpenFtn(" + i + ")' src='Images/" + i + ".jpg'>"

// function modalOpenFtn(id){
//     var modal = document.getElementById('modal')
//     var modalImg = document.getElementById('modal-img')
//     modal.classList.remove('modal-close')
//     modal.classList.add('modal-open')
//     modal.style.display = 'block'
//     modalImg.setAttribute('src','Images/' + id + '.jpg')
// }
// function onClosedImagModal(){
//     var modal = document.getElementById('modal')
//     modal.classList.add('modal-close')
//     modal.classList.remove('modal-open')
//     setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }
// var imgW = 700;
// function zIn(){
//     var modalImg = document.getElementById('modal-img')
//     if(imgW<700)
//         modalImg.style.width = (imgW+=10) + "px"
// }
// function zOut(){
//     var modalImg = document.getElementById('modal-img')
//     if(imgW>150)
//         modalImg.style.width = (imgW-=10) + "px"
// }

/* ================================Task#2=============================== */
// var paraDiv = document.getElementById('paraDiv')
// var para = document.getElementById('para')
// paraDiv.setAttribute('class', '')

// var txtW = 20;
// function zIn(){
//     if(txtW<100)
//         para.style.fontSize = (txtW+=10) + "px"
// }
// function zOut(){
//     if(txtW>20)
//         para.style.fontSize = (txtW-=10) + "px"
// }
/* ================================Chapter#58 to 67=============================== */
/* ================================Task#1=============================== */
//     var DOM1 = document.getElementById("DOM1")
//     DOM1.setAttribute('class','')
// ///////(i)
//     var mainContent = document.getElementById("main-content")
// ///////(ii)
//     var j=1
//     document.write("<h4>Child elements of 'main-content'</h4><br>") 
//     for(var i=0; i<mainContent.childNodes.length; i++){
//         if(mainContent.childNodes[i].nodeName != "#text")
//             document.write(mainContent.childNodes[i].nodeName + "<br>")
//     }
// ///////(iii)
    // var render = document.getElementsByClassName("render")
    // document.write("<h4>innerHTML of class 'render'</h4><br>") 
    // for(var i=0; i<render.length; i++){
    //     if(render[i].innerHTML != "#text")
    //         document.write(render[i].innerHTML + "<br>")
    // }
// ///////(iv)
//     var inFirstName = document.getElementById("first-name")
//     inFirstName.value = "Alex"
// ///////(v)
// var inLasttName = document.getElementById("last-name")
// var email = document.getElementById("email")
// inLasttName.value = "Bank"
// email.value = "alexbank@example.com"

/* ================================Task#2=============================== */

// var DOM1 = document.getElementById("DOM1")
// DOM1.setAttribute('class','')

// ///////(i)
// var formContent = document.getElementById("form-content")
// document.write("<h4>Node type of element having id 'form-content'</h4><br>") 
// for(var i=0; i<formContent.childNodes.length; i++){
//     if(formContent.childNodes[i].nodeName != "#text")
//         document.write(formContent.childNodes[i].nodeType + "<br>")
// }
// ///////(ii)
// var lastName = document.getElementById("lastName")
// document.write("<h4>Node type of element having id 'lastName' and its child node</h4><br>") 
// document.write("Element's nodeType: " + lastName.nodeType + "<br>") 
// document.write("Child Node's nodeType: " + lastName.childNodes[0].nodeType + "<br>")
// // ///////(iii)
// // var lastName = document.getElementById("lastName")
// // // lastName.childNodes[0].innerHTML = "hello world"
// // document.write("<h4>Update child node of element having id 'lastName'.</h4><br>")
// // document.write("Child Node's nodeType: " + lastName.innerHTML.nodeType + "<br>")
// ///////(iv)
// var mainContent = document.getElementById("main-content")
// document.write("<h4>First and last child of id 'main-content'</h4><br>")
// document.write("First Child: " + mainContent.firstChild.nodeName + "<br>Last Child: " + mainContent.lastChild.nodeName)
// /////(v)
// var lastName = document.getElementById("lastName")
// document.write("<h4>Next and previous siblings of id 'main-content'</h4><br>")
// document.write("Next sibling: " + lastName.nextSibling.nodeName + "<br>Previous sibling: " + lastName.previousSibling.nodeName)
///////(vi)
// var email = document.getElementById("email")
// document.write("<h4>Parent node and node type of element having id 'email'</h4><br>")
// document.write("Parent Node: " + email.parentNode.nodeName + "<br>") 
// document.write("nodeType: " + email.nodeType + "<br>")
