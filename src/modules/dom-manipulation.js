const background = document.querySelector("#background")

function removeCard() {
  while (background.firstChild) {
    background.firstChild.remove()
}
}

function createCard(city, temperature, humidity, description) {
  // const cover = document.createElement("div")
  // cover.classList.add("uk-background-cover")
  // cover.classList.add("uk-flex")
  // cover.classList.add("uk-flex-center")
  // cover.setAttribute("uk-height-viewport", "offset-top: true")
  
  const section = document.createElement("div")
  section.classList.add("uk-section")

  const div = document.createElement("div")

  const cardParent = document.createElement("div")
  cardParent.classList.add("uk-card")
  cardParent.classList.add("uk-card-default")

  const cardHeader = document.createElement("div")
  cardHeader.classList.add("uk-card-header")

  const cityHeading = document.createElement("div")
  cityHeading.classList.add("uk-card-title")
  cityHeading.setAttribute("id", "city")
  cityHeading.innerHTML = city

  const cardBody = document.createElement("div")
  cardBody.classList.add("uk-card-body")

  const tempParagraph = document.createElement("p")
  tempParagraph.setAttribute("id", "temp")
  tempParagraph.innerHTML = "Temperature: " + temperature + "°C"

  const humidityParagraph = document.createElement("p")
  humidityParagraph.setAttribute("id", "humid")
  humidityParagraph.innerHTML = "Humidity: " + humidity + "%"

  const descriptionParagraph = document.createElement("p")
  descriptionParagraph.setAttribute("id", "description")
  descriptionParagraph.innerHTML = description

  const cardFooter = document.createElement("div")
  cardFooter.classList.add("uk-card-footer")

  const unitSwitch = document.createElement("p")
  unitSwitch.innerHTML = "Change F to C"

  // body.appendChild(cover)
  background.appendChild(section)
  section.appendChild(div)
  div.appendChild(cardParent)
  
  cardParent.appendChild(cardHeader)
  cardHeader.appendChild(cityHeading)

  cardParent.appendChild(cardBody)
  cardBody.appendChild(tempParagraph)
  cardBody.appendChild(descriptionParagraph)
  cardBody.appendChild(humidityParagraph)

  cardParent.appendChild(cardFooter)
  cardFooter.appendChild(unitSwitch)
}





export { createCard, removeCard };