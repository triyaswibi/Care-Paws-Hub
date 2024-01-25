//test
const listAnjing=[
    //status(sembuh,perawatan,darurat)
    {
        nama: "Pasien 1",
        imgUrl: "./img/download (1).jpg",
        deskripsi: "Mencret",
        age:1,
        gender:"male",
        roomNumber:1,
        status:"sembuh",
        type:"anjing"
        
        
    },
    {
        nama: "Pasien 2",
        imgUrl: "./img/images.jpg",
        deskripsi: "Mencret",
        age:1,
        gender:"male",
        roomNumber:1,
        status:"sembuh",
        type:"anjing"
        
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

  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

