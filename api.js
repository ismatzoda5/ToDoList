let api = "http://localhost:3000/data"
import { get } from "./dom.js";
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let search = document.querySelector(".search")
let select = document.querySelector(".select")

export async function getData() {
    try {
        let { data } = await axios.get(api)
        get(data)
    } catch (error) {
        console.error(error);
    }
}
getData()


btn1.onclick = async () => {
    try {
        let { data } = await axios.get(`${api}?_sort=name`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

search.oninput = async () => {
    try {
        let { data } = await axios.get(`${api}?q=${search.value}`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}

btn2.onclick = async () => {
    try {
        let { data } = await axios.get(`${api}?_sort=category`)
        get(data)
    } catch (error) {
        console.error(error);
    }
}


export async function editUser(idx, user) {
    try {
        let { data } = await axios.put(`${api}/${idx}`, user)
    } catch (error) {
        console.error(error);
    }
}

export async function complete(user, id) {
    try {
        let { data } = await axios.put(`${api}/${id}`, user)
    } catch (error) {
        console.error(error);
    }
}

export async function postUser(user) {
    try {
        let { data } = await axios.post(api, user)
        getData()
    } catch (error) {
        console.error(error);
    }
}
export async function deleteUser(id) {
    try {
        let { data } = await axios.delete(`${api}/${id}`)
        getData()
    } catch (error) {
        console.error(error);
    }
}

select.onclick = async () => {
    try {
        if (select.value == "all") {
            let { data } = await axios.get(api)
            get(data)
        }
        else {
            let { data } = await axios.get(`${api}?status=${select.value}`)
            get(data)
        }

    } catch (error) {
        console.error(error);
    }
}
