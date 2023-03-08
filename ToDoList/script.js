let ekle = document.getElementById('ekle');
let todolist = document.getElementById('todolist');
let giris = document.getElementById('giris');
let sil = document.getElementById('sil');

// Alta Yazdırma

ekle.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    todolist.appendChild(paragraph);
    paragraph.innerHTML = giris.value;
    giris.value = "";

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    });

    sil.addEventListener('click', function () {
        paragraph.remove();
    })

})

// Buton

var downloadBtn = document.getElementById("download-btn");

downloadBtn.addEventListener("click", function () {


    var todolist = document.getElementById("todolist").innerText;

    var today = new Date().toISOString().slice(0, 10);

    var blob = new Blob([todolist + "\n\n" + "Tarih: " + today], { type: "text/plain;charset=utf-8" });

    saveAs(blob, "todolist.txt");
});


//---------------------------------------------------------------------- Gözüken Saat

function updateTime() {
    let today = new Date();
    let date = today.toLocaleDateString();
    let time = today.toLocaleTimeString();
    document.getElementById("saat").innerHTML = date + " " + time;
}
setInterval(updateTime, 1000);
