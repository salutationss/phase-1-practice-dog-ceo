

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


let img = name.map((imgName) =>{
    return imgName
} )

fetch(imgUrl + img)
.then(response => response.json())
.then(img =>console.log(imgUrl + img))

console.log('%c HI', 'color: firebrick')
