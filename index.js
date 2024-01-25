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
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(animalType).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }