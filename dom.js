    import { complete, deleteUser, editUser, postUser } from "./api.js"

let box = document.querySelector(".box")
let modalEdit = document.querySelector(".modalEdit")
let form1 = document.querySelector(".form1")
let modalAdd = document.querySelector(".modalAdd")
let form2 = document.querySelector(".form2")
let plus = document.querySelector(".plus")
let div = document.querySelector(".div")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let container = document.querySelector(".container")
let qwert = document.querySelector(".qwert")
let idx = null
let cnt = 20
let cnt1 = 0 

let date = new Date()
let date1 = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`


plus.onclick = () => {
    modalAdd.showModal()

}
form2["img"].onchange = (event) => {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    console.log(reader);
    form2.onsubmit = (e) => {
        e.preventDefault()
        let user = {
            img: reader.result,
            name: form2["name"].value,
            email: form2["email"].value,
            category: form2["category"].value,
            level: form2["level"].value,
            rate: form2["level"].rate,
            date: date1,
            status: false
        }
        postUser(user)
        form2.reset()
    }
}


form1["img"].onchange = (ev) => {
    let file = ev.target.files[0];
    let read = new FileReader();
    read.readAsDataURL(file);
    form1.onsubmit = (e) => {
        e.preventDefault()
        let user = {

            name: form1["name"].value,
            email: form1["email"].value,
            category: form1["category"].value,
            level: form1["level"].value,
            rate: form1["rate"].value,
            status: false,
            date: date1,
            img: read.result
        }
        editUser(idx, user)
    }
}

btn4.onclick=()=>{
    cnt++
    qwert.style.zIndex=`${cnt}`;
}
btn3.onclick=()=>{
    qwert.style.zIndex=`${cnt-=19}`
}



export function get(data) {
    cnt1+=1
    box.innerHTML = ""
    data.forEach((el) => {
        let tr = document.createElement("tr")
        cnt1+=1
        let cont = document.createElement("div")
        cont.classList.add("cont")
        let cont1 = document.createElement("div")
        cont1.classList.add("cont1")
        let cont2 = document.createElement("td")
        cont2.classList.add("cont2")
        let tdName = document.createElement("td")
        tdName.innerHTML = el.name
        let tdImg = document.createElement("img")
        tdImg.classList.add("img")
        tdImg.src = el.img
        let tdStatus = document.createElement("td")
        tdStatus.innerHTML = el.status
        let tdEmail = document.createElement("td")
        tdEmail.innerHTML = el.email
        let tdCategory = document.createElement("td")
        tdCategory.innerHTML = el.category
        let tdLevel = document.createElement("td")
        tdLevel.innerHTML = el.level
        let tdDate = document.createElement("td")
        tdDate.innerHTML = el.date
        let btnEdit = document.createElement("img")
        btnEdit.classList.add("edit")
        btnEdit.src = "https://e7.pngegg.com/pngimages/64/766/png-clipart-notebook-computer-icons-paper-notebook-miscellaneous-blue.png"
        btnEdit.onclick = () => {
            modalEdit.showModal()
            idx = el.id

            form1["img"].src = el.img
            form1["name"].value = el.name
            form1["email"].value = el.email
            form1["category"].value = el.category
            form1["level"].value = el.level
            form1["rate"].value = el.rate

            let btnDELETE = document.createElement("button")
            btnDELETE.innerHTML = "DELETE"


            btnDELETE.onclick = () => {
                deleteUser(el.id)


            }
            let checck = document.createElement("input")
            checck.type = "checkbox"
            checck.checked = el.status

            checck.onclick = () => {
                el.status = !el.status
                complete(el, el.id)
            }
            div.append(btnDELETE, checck)

        }

      


       let f = document.createElement("div")
       f.classList.add("qwert")
        let btnn = document.createElement("button")
        btnn.innerHTML="+"
        btnn.classList.add("btn4")
        let btnn1 = document.createElement("button")
        btnn1.innerHTML="-"
        btnn1.classList.add("btn4")
        let a = document.createElement("p")
        a.classList.add("p1")
        a.innerHTML=el.rate
        let b = document.createElement("img")
        b.src=el.img
        let c = document.createElement("h3")
        c.innerHTML=el.name
        let d = document.createElement("h5")
        d.innerHTML=el.category

        f.append(a,b,c,d)
        container.appendChild(f)
        
     
            // btn4.onclick=()=> {
            //     btn4.style.bottom="-100px"
            //     btn3.style.top="460px"
            //     if (container.style.height == '60%' ) {
            //       container.style.height = '350px';
            //     } else {
            //       container.style.height = '750px';
            //     }
            //   };
            // btn3.onclick=()=> {
            //     btn4.style.bottom="270px"
            //     btn3.style.top="90px"
            //     if (container.style.height == '750px') {
            //       container.style.height = '350px';
            //     } else {
            //       container.style.height = '750px';
            //     }
            //   };
        






        cont.append(tdImg, cont1)
        cont1.append(tdName, tdEmail)
        cont2.append(tdCategory, tdLevel)

        tr.append(cont, cont2, tdStatus, tdDate, btnEdit)
        box.append(tr)
    });
}