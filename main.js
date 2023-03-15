const justFood =(pocetLidi)=>{
    console.log(`catering od Just Food pro ${pocetLidi}lidí za 20000 Kč`)
}
const yourMama =(pocetLidi)=>{
    console.log(`catering od Your Mama pro ${pocetLidi} lidí za 300000 Kč`) //vypise pouze v konzole, na obraz. nebude
}
const flavourHaven =(pocetLidi)=>{
    return `catering od Flavour Haven pro ${pocetLidi} lidí za 1350000 Kč`
}
const createEvent = (nazevUdalosti, pocetLidi, NovaFunkceCatering) => {
	return `Událost ${nazevUdalosti} s ${NovaFunkceCatering(pocetLidi)}`
}

document.body.innerHTML += createEvent(
	'Pizza Regina',
	20,
	flavourHaven
)
