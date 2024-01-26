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
const listKucing=[
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
const listBerang=[
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
const listKelinci=[
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
  let listHewan;
  if(animalType==="Dog"){
    listHewan=listAnjing;
  }else if(animalType==="Cat"){
    listHewan=listKucing;
  }else if(animalType==="Otter"){
    listHewan=listBerang;
  }else if(animalType==="Rabbit"){
    listHewan=listKelinci;
  }
  getList(animalType,listHewan);
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function getList(id,list) {
  for (let i = 0; i < list.length; i++) {
    const parent = document.querySelector(`#${id}`)
    const card= document.createElement('div')
    card.classList.add('card')
    const container = document.createElement('div')
    const namaPasien = document.createElement('h1')
    namaPasien.innerText = list[i].nama
    const preview = document.createElement('img')
    preview.src = list[i].imgUrl
    container.appendChild(preview)
    container.appendChild(namaPasien)
    const btnUpdate = document.createElement('button')
    const btnDelete = document.createElement('button')
    btnUpdate.innerText='Update'
    btnDelete.innerText='Delete'
    container.appendChild(btnUpdate)
    container.appendChild(btnDelete)
    card.appendChild(container)
    parent.appendChild(card)
  
  }
}
// getList()