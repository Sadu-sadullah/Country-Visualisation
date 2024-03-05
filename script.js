const d = document
const body = document.body
const cntNum = d.querySelector('#countries') 
const arrayDiv = d.querySelector('#array_div')
const input = d.querySelector('#input')
let filteredData = []
const strtBtn = d.querySelector('#start')
const sort = d.querySelector('#sort')
const results = d.querySelector('#search')
const header = d.querySelector('#header_div')
const main_header = d.querySelector('#main_header')
const background = d.querySelector('#background_div')
const buttons = d.querySelector('#buttons')

body.setAttribute('style', 'text-align: center; font-family: "Roboto", sans-serif; margin: 0; color: white;')
background.setAttribute('style', 'background-image: url(./images/globe-2.jpeg); background-size: 100% auto; background-position: center;')
header.setAttribute('style', 'height: 60vh;  display: flex; flex-direction: column; justify-content: center; align-items: center; background-image: linear-gradient(to top, rgba(116,145,175,0.2), rgba(45, 119, 159,0.8)); backdrop-filter: blur(1px);')
main_header.setAttribute('style', 'margin: 0; letter-spacing: 10px; font-size: 40px;')
cntNum.setAttribute('style', 'font-size: 20px; margin: 0;')
results.setAttribute('style', 'margin: 0; margin-bottom: 10px;')
strtBtn.setAttribute('style', 'border-radius: 5px; width: 150px; height: 50px; color: white;')
sort.setAttribute('style', 'border-radius: 5px; width: 150px; height: 50px; color: white;')
buttons.setAttribute('style', 'margin-bottom: 20px')
input.setAttribute('style', 'width: 400px; height: 30px; border: none; border-radius: 20px; text-align: center')
input.setAttribute('placeholder', 'Search country...')

cntNum.textContent = `Total number of countries: ${countries.length}`

arrayDiv.setAttribute('style', 'display: grid; gap: 20px; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); grid-template-rows: 1fr; width: 100%; margin: 50px 0; place-items: center;')

function createDiv (element) {
    const div_bg = d.createElement('div')
    const div = d.createElement('div')
    const p = d.createElement('p')

    p.setAttribute('style', 'padding: 50% 0; margin: 0; color: white')

    div_bg.setAttribute('style', 'background-image: url(./images/map_image.jpeg); background-size: cover;')
    div.setAttribute('style', 'background-image: linear-gradient(to top, rgba(45, 119, 159,0.5), rgba(17, 45, 60,0.3)); height: 150px; width: 150px; text-align: center;')
    p.textContent = element

    div.appendChild(p)
    div_bg.appendChild(div)
    arrayDiv.appendChild(div_bg)
}

function search(searchTerm, searchType) {
    filteredData = countries.map((country) => country.toLowerCase())
    if (searchType === 'includes') {
        filteredData = filteredData.filter((country) => country.includes(searchTerm))
        results.innerHTML = ''
        results.textContent = `Number of countries that include ${searchTerm} are ${filteredData.length}`
    } else if (searchType === 'startsWith'){
        filteredData = filteredData.filter((country) => country.startsWith(searchTerm))
        results.innerHTML = ''
        results.textContent = `Number of countries that starts with ${searchTerm} are ${filteredData.length}`
    } else if (searchType === 'sortInc') {
        filteredData = filteredData.filter((country) => country.includes(searchTerm)).reverse()
        results.innerHTML = ''
        results.textContent = `Number of countries that include ${searchTerm} are ${filteredData.length}`
    }
    else if (searchType === 'sortInc2') {
        filteredData = filteredData.filter((country) => country.includes(searchTerm)).reverse()
        results.innerHTML = ''
    }
    else if (searchType === 'sortInc1') {
        filteredData = filteredData.filter((country) => country.includes(searchTerm))
        results.innerHTML = ''
    }
     else if (searchType === 'sortStarts') {
        filteredData = filteredData.filter((country) => country.startsWith(searchTerm)).reverse()
        results.innerHTML = ''
        results.textContent = `Number of countries that starts with ${searchTerm} are ${filteredData.length}`
    }
    filteredData = filteredData.map((country) => country.toUpperCase())
}

function clear() {
    arrayDiv.innerHTML = ''
    filteredData.forEach(element => createDiv(element))
}

countries.forEach((element) => createDiv(element.toUpperCase()))

input.addEventListener('keyup', () => {
    const searchTerm = input.value.toLowerCase()
    if (searchTerm) {
        if(strtBtn.classList.value === 'not-clicked' && sort.classList.value === 'not-clicked') {
            search(searchTerm, 'includes')
        }
        else if (strtBtn.classList.value === 'not-clicked clicked' && sort.classList.value === 'not-clicked') {
            search(searchTerm, 'startsWith')
        }
        else if (strtBtn.classList.value === 'not-clicked' && sort.classList.value === 'not-clicked clicked') {
            search(searchTerm, 'sortInc')
        }
        else if (strtBtn.classList.value === 'not-clicked clicked' && sort.classList.value === 'not-clicked clicked') {
            search(searchTerm, 'sortStarts')
        }
    }
    else {
        filteredData = countries.map((country) => country.toUpperCase())
        console.log(1)
    }
    clear()
    if(!(searchTerm)){
        results.innerHTML = ''
    }
})

strtBtn.addEventListener('click', () => {
    strtBtn.classList.toggle('clicked')
    const searchTerm = input.value.toLowerCase()
    if (searchTerm) {
        if (strtBtn.classList.value === 'not-clicked clicked' && sort.classList.value === 'not-clicked') {
            search(searchTerm, 'startsWith')
            console.log(1)
        }
        else if (strtBtn.classList.value === 'not-clicked clicked' && sort.classList.value === 'not-clicked clicked'){
            search(searchTerm, 'sortStarts')
            console.log(1)
        }
        else if (strtBtn.classList.value === 'not-clicked' && sort.classList.value === 'not-clicked clicked') {
            search(searchTerm, 'sortInc')
        }
    }
    else if (strtBtn.classList.value === 'not-clicked' && sort.classList.value === 'not-clicked clicked') {
        search(searchTerm, 'includes')
    }
    else {
        filteredData = countries.map((country) => country.toUpperCase())
        console.log(1)}
    clear()
})

sort.addEventListener('click', () => {
    sort.classList.toggle('clicked')
    const searchTerm = input.value.toLowerCase()
    if (searchTerm) {
        if (sort.classList.value === 'not-clicked clicked' && strtBtn.classList.value === 'not-clicked') {
            search(searchTerm, 'sortInc')
        } 
        else if (sort.classList.value === 'not-clicked' && strtBtn.classList.value === 'not-clicked'){
            search(searchTerm, 'includes')
        }
        else if (sort.classList.value === 'not-clicked clicked' && strtBtn.classList.value === 'not-clicked clicked') {
            search(searchTerm, 'sortStarts')
        } 
        else if (sort.classList.value === 'not-clicked' && strtBtn.classList.value === 'not-clicked clicked'){
            search(searchTerm, 'startsWith')
        }
    }
    else if (!(searchTerm)) {
        if (sort.classList.value === 'not-clicked clicked' && strtBtn.classList.value === 'not-clicked') {
            search(searchTerm, 'sortInc2')
        } 
        else if (sort.classList.value === 'not-clicked' && strtBtn.classList.value === 'not-clicked') {
            search(searchTerm, 'sortInc1')
            console.log(1)
        }
    }
    else {
        search(searchTerm, 'SortInc1')
    }
    clear()
})
