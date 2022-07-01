let h1=document.createElement("h1")
h1.textContent="Test 02"
h1.setAttribute('class', 'header')
console.log(h1)
document.body.append(h1)

let p=document.createElement("p")
p.innerText="Hello, this is Riley"
p.setAttribute("class", "para")
document.body.append(p)

p=document.createElement("p")
p.innerText="I'm practicing adding elements to the DOM"
p.setAttribute("class", "para")
document.body.append(p)

let h2=document.createElement("h2")
h2.setAttribute("id", "secondheading")
h2.innerText="Another heading. This one has an ID attribute"
document.body.append(h2)

let list1=document.getElementById('list-1')

let li=document.createElement('li')
li.textContent=('coconut')
list1.append(li)

li=document.createElement('li')
li.textContent=('berry')
list1.append(li)

li=document.createElement('li')
li.textContent=('lemon')
list1.append(li)

li=document.createElement('li')
li.textContent=('tree')
list1.append(li)