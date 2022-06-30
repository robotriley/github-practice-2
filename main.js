const header1 = document.createElement("h1")
header1.innerText = "Test 02"
header1.setAttribute('class', 'header')
console.log(header1)
document.body.append(header1)

const para = document.createElement("p")
para.innerText = "Hello, this is Riley"
para.setAttribute("class", "para")
document.body.append(para)

const paraTwo = document.createElement("p")
paraTwo.innerText = "I'm practicing adding elements to the DOM"
paraTwo.setAttribute("class", "para")
document.body.append(paraTwo)

const header2 = document.createElement("h2")
header2.setAttribute("id", "secondheading")
header2.innerText = "Another heading. This one has an ID attribute"
document.body.append(header2)