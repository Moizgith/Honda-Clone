var data = [
    {
        "title": "First title",
        "description": `Driven by our relentless determination to keep improving, we not only created the most powerful Civic ever, but also the most agile.
    And with its 4-mode drive system-including
    +R, Individual, Sport, and Comfort modes-you can instantly tune it for the track or the street.`,
        "image": "images content/Performance-Overview.jpg"
    },
    {
        "title": "Second title",
        "description": `With a turbocharged and intercooled 2.0-liter VTEC® engine that delivers 315 horsepower* and 310 pound-feet of torque, * the Civic Type R is not only highly responsive, but also boasts an impressive power-weight ratio.`,
        "image": "images content/powertrain.jpg"

    },
    {
        "title": "Third title",
        "description": `This is the description of third tab`,
        "image": "images content/suspension.jpg"
    },
    {
        "title": "Fourth title",
        "description": `This is the description of forth tab`,
        "image": "images content/Performance-Overview.jpg"
    },
]

var overview = document.querySelector(".overview")
var powertrain = document.querySelector(".powertrain")
var suspension = document.querySelector(".suspension")
var handling = document.querySelector(".handling")
var xyz=document.querySelector(".pimage")

overview.addEventListener("click", () => {
    document.querySelector(".title").innerText = data[0].title
    document.querySelector(".description").innerText = data[0].description
    xyz.src=data[0].image
})

powertrain.addEventListener("click", () => {
    document.querySelector(".title").innerText = data[1].title
    document.querySelector(".description").innerText = data[1].description
    xyz.src=data[1].image
})

suspension.addEventListener("click", () => {
    document.querySelector(".title").innerText = data[2].title
    document.querySelector(".description").innerText = data[2].description
    xyz.src=data[2].image
})
handling.addEventListener("click", () => {
    document.querySelector(".title").innerText = data[3].title
    document.querySelector(".description").innerText = data[3].description
    xyz.src=data[3].image
})
