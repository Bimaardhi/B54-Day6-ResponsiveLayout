var dataProject = [];

function addProject(event) {
    event.preventDefault();

    let nama = document.getElementById("name").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let message = document.getElementById("description").value;
    let upload = document.getElementById("upload").files[0];
    let uploadURL = URL.createObjectURL(upload);
    let cexbox = document.getElementById(".technologi");


    if (nama === "") {
        return alert("Please entered your project name!")
    } else if (start === "") {
        return alert("Please entered your start date!")
    } else if (end === "") {
        return alert("Please entered your end date!")
    } else if (message === "") {
        return alert("Please entered description!")
    } else if (uploadURL === "") {
        return alert("Please upload your image!")
    } else if (cexbox === "") {
        return alert("Please enterd")
    }


    if (start > end) {
        return alert("404 errorrrrrrrrrrrr start date tidak boleh lebih besar dari end date !!")
    }

    let startDatePart = start.split("/")
    let endDatePart = end.split("/")

    let formatStartDate = startDatePart[2] + "-" + startDatePart[1] + "-" + startDatePart[0]
    let formatEndtDate = endDatePart[2] + "-" + endDatePart[1] + "-" + endDatePart[0]

    let newStartDate = new Date(formatStartDate)
    let newEndtDate = new Date(formatEndtDate)

    let timeDifference = newEndtDate - newStartDate

    let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    let differenceInMonths = Math.floor(differenceInDays / 30.44)
   
    let differenceInYears = Math.floor(differenceInMonths / 12)

    let duration;

    if (differenceInYears > 0) {
        duration = `${differenceInYears} years`
    } else if (differenceInMonths > 0) {
        duration = `${differenceInMonths} month`
    } else {
        duration = `${differenceInDays} days`
    }


    dataProject.push({
        nama: nama,
        start: start,
        end: end,
        message: message,
        upload: uploadURL,
        cexbox: cexbox,
        duration: duration
    })

    console.log(dataProject);

    newData()
}

function newData() {
    document.getElementById("last").innerHTML = ""

    for (let i = 0; i < dataProject.length; i++) {
        const project = dataProject[i]


        document.getElementById("last").innerHTML += `
    <div class="mobile" id="last">
     <div id="card">
        <a href="./project.html"><img class="logo" src="${project.upload}" alt="dumbways"></a>
            <h2>${project.nama}</h2>
            <p>${project.start} - ${project.end}</p>
            <p class="duration">durasi : ${project.duration}</p>
            <p>${project.message}</p>
            <div>
                <img class="image" src="./asset/image/playstore.png" alt="playstore">
                <img class="image" src="./asset/image/android.png" alt="android">
                <img class="image" src="./asset/image/java.png" alt="java">
            </div>
            <div>
                <button class="edit" id="satu">edit</button>
                <button class="edit">delete</button>
            </div>
     </div>
     </div
    
    `
    }

}