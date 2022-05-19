// Query elements
const date = document.getElementById('date')
const topImg = document.getElementById('topImg')
const bottomImg = document.getElementById('bottomImg')
const shoesImg = document.getElementById('shoesImg')
const button = document.getElementById('button')


// Show day of the week
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const d = new Date()
let day = weekday[d.getDay()]
const dateDiv = document.createElement('div')
dateDiv.id = "dateText"
const dateText = document.createTextNode(day)
date.appendChild(dateText)

// Switch statement
const getDressCode = day => {
    switch (day) {
        case 'Saturday':
            return 'casual'
        case 'Sunday':
            return 'sport'
        default:
            return 'formal'
    }
}

// functions for items
const filteredTypeClothes = clothing.filter(e => {
    if(e.dressCode.toLowerCase() === getDressCode(d.getDay())) {
        return e
    }
})

const filterdTops = filteredTypeClothes.filter(e => {
    if (e.type.toLowerCase() === "top") {
        return e
    }
})
const filterdBottoms = filteredTypeClothes.filter(e => {
    if(e.type.toLowerCase() === "bottom") {
        return e
    }
})
const filterdShoes = filteredTypeClothes.filter(e => {
    if(e.type.toLowerCase() === "shoes") {
        return e
    }
})

const randomIndex = arr => {
    return Math.floor(Math.random() * arr.length)
}

topImg.src = filterdTops[randomIndex(filterdTops)].imageUrl
bottomImg.src = filterdBottoms[randomIndex(filterdBottoms)].imageUrl
shoesImg.src = filterdShoes[randomIndex(filterdShoes)].imageUrl

button.onclick = () => {
    topImg.src = filterdTops[randomIndex(filterdTops)].imageUrl
    bottomImg.src = filterdBottoms[randomIndex(filterdBottoms)].imageUrl
    shoesImg.src = filterdShoes[randomIndex(filterdShoes)].imageUrl
}