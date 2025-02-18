document.addEventListener("DOMContentLoaded", function () {
    let wrapper = document.getElementsByClassName("wrapper")[0];
    let template = document.getElementsByClassName("template")[0];
  
    if (!template) {
      console.error("Template not found! Make sure the <template> element is in the HTML.");
      return;
    }
  
    let names = ["Shubham", "Smita", "Arti"];
  
    let colors = [
      "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF",
      "#FF00FF", "#800000", "#8B0000", "#FFA500", "#FFD700",
      "#6B8E23", "#7CFC00", "#000080", "#8B008B", "#FF00FF",
      "#FA9460", "#FF3855", "#FD3A4A", "#FA5B3D", "#FFAA1D",
      "#FB4D46", "#FFF700", "#299617", "#A7F432", "#2243B6",
      "#5DADEC", "#9C51B6"
    ];
  
    let sticker = function (name) {
      let clone = document.importNode(template.content, true);
      let div = clone.querySelector("div");
      let nameOfStick = div.querySelector(".name");
  
      nameOfStick.innerHTML = name;
        
        
      div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      div.style.transform = "rotate(" + (Math.random() * 50 -25) + "deg)";

      wrapper.appendChild(div);
    };
  setTimeout(refershPage,500);
  function refershPage(){
    location.reload();
    
  }
    names.forEach(sticker);
  });
  