let btnAboutEl = document.getElementById("btnAbout");
let btnTimeEl = document.getElementById("btnTime");
let btnAttractionsEl = document.getElementById("btnAttractions");
let paraDetailsEl = document.getElementById("paraDetails");

function onClickChangeAbout(){
    paraDetailsEl.textContent = "Varanasi is one of the oldest continuously inhabited cities in the world. It was one of the first major urban settlements in the middle Ganges valley. By the 2nd millennium bce Varanasi was a seat of Vedic religion and philosophy and was also a commercial and industrial centre famous for its muslin and silk fabrics, perfumes, ivory works, and sculpture. It was the capital of the kingdom of Kashi during the time of the Buddha (6th century bce), who gave his first sermon nearby at Sarnath."
    btnAboutEl.style.backgroundColor ="white";
    btnTimeEl.style.backgroundColor = "#e0e0e0";
    btnAttractionsEl.style.backgroundColor = "#e0e0e0";

}
function onClickChangeTime(){
    paraDetailsEl.textContent ="Varanasi has the finest river frontage in India, with miles of ghats, or steps, for religious bathing; an array of shrines, temples, and palaces rises tier on tier from the water’s edge. The inner streets of the city are narrow, winding, and impassable for motor traffic; the newer outer suburbs are more spacious and are laid out more systematically. "
    btnAboutEl.style.backgroundColor = "#e0e0e0";
    btnTimeEl.style.backgroundColor = "white";
    btnAttractionsEl.style.backgroundColor = "#e0e0e0";

}
function onClickChangeAttractions(){
    paraDetailsEl.textContent ="Varanasi, a most famous and oldest inhabited city of the world, originally known as the Kashi (Kashi word was derived from the ‘Kasha’ which means the brightness). Varanasi is renowned by many names, some of are Brahma Vardha, Anandakanana, Avimuktaka, Mahasmasana, Kasi, Sudarsana, Surandhana and Ramya. Currently Kashi is known by the name Varanasi which was derived from the two tributaries of the holy River Gange named Varuna and Assi. Kashi is situated at the banks of the Holy River Ganges in the Uttar Pradesh state of India."
    btnAttractionsEl.style.backgroundColor = "#e0e0e0";
    btnTimeEl.style.backgroundColor = "#e0e0e0";
    btnAttractionsEl.style.backgroundColor = "white";
}


