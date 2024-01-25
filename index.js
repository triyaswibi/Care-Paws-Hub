//test
const listAnjing=[
    {
        nama: "Pasien 1",
        imgUrl: "./img/download (1).jpg",
        deskripsi: "Mencret",
        isSick: true
    },
    {
        nama: "Pasien 2",
        imgUrl: "./img/images.jpg",
        deskripsi: "Mencret",
        isSick: true
    }
]

function openTab(evt, animalType) {

    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(animalType).style.display = "block";
    evt.currentTarget.className += " active";
  }

// modal function
function openPopup() {
  modal = document.getElementById("modals");
  modal.style.display = "block"
}
function closePopup() {
    modal.style.display = 'none'
}
window.onclick = function(event) {
    if (event.target==modal) {
        modal.style.display = 'none'
    }
}
