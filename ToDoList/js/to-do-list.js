let list = document.getElementById("list")

function newElement () {
    var li = document.createElement("li");
    var entered = document.getElementById("task").value;
    if (entered === "") {
        $(".error").toast("show");
    } else {
        li.textContent = entered;
        document.getElementById("list").appendChild(li);
        $(".success").toast("show");
        document.getElementById("task").value = "";
        span = document.createElement("span");
        span.textContent = "X";
        span.className = "close";
        li.appendChild(span);
    }
    
}

 document.querySelector("#list").addEventListener("click",removeElement);
 function removeElement(e) {
     var tagname = e.target.tagName;
     console.log("e", e)
     if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove();      
     }
}

document.querySelector("#list").addEventListener("click", toggleDone);

function toggleDone(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
}