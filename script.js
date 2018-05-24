document.addEventListener("DOMContentLoaded", function() {
  
  var c = document.querySelector("table");
  var t = "X";
  
  function restart() {
    setTimeout(function() {
      for (i = 0; i < 9; i++) c.rows[Math.floor(i / 3)].cells[Math.floor(i % 3)].textContent = "";
    }, 1000);
  }

  c.addEventListener("click", function(e) {
    
    if (e.target.textContent || e.target.tagName != "TD") return;
    e.target.textContent = t;

    for (i = 0; i < 3; i++) {
      if (c.rows[i].cells[0].textContent.includes(t) && c.rows[i].cells[1].textContent.includes(t) && c.rows[i].cells[2].textContent.includes(t)) restart();

      if (c.rows[0].cells[i].textContent.includes(t) && c.rows[1].cells[i].textContent.includes(t) && c.rows[2].cells[i].textContent.includes(t)) restart();
    }
    
    if (c.rows[0].cells[0].textContent.includes(t) && c.rows[1].cells[1].textContent.includes(t) && c.rows[2].cells[2].textContent.includes(t)) restart();
    
    if (c.rows[0].cells[2].textContent.includes(t) && c.rows[1].cells[1].textContent.includes(t) && c.rows[2].cells[0].textContent.includes(t)) restart();
        
    t = t == "X" ? "O" : "X";
    
  });
  
});
