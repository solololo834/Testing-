let character = "";

function roll() {
  let r = Math.random();

  if (r < 0.2) {
    character = "JUNKFTRON";
  } else if (r < 0.4) {
    character = "TURIRI";
  } else if (r < 0.6) {
    character = "mangoriila";
  } else if (r < 0.8) {
    character = "dascob";
  } else {
    character = "leafina";
  }

  alert(character);

  // ganti gambar
  document.getElementById("charImg").src = character + ".jpg";
}

function XS(){
    document.getElementById("X").hidden = true;
document.getElementById("rollton").hidden = true;
document.getElementById("inv").hidden = false;
  }


  
  function Shopgui() {
  
  document.getElementById("TURIRI").hidden = true;
  document.getElementById("TURIRIBON").hidden = true;
  document.getElementById("JUNKFBON").hidden = true;
  
  document.getElementById("inv").hidden = true;
  document.getElementById("JUNKFTRON").hidden = true;
  document.getElementById("rollton").hidden = false;
  document.getElementById("X").hidden = false;
  
}

function Invgui(){
  document.getElementById("JUNKFTRON").hidden = true;
  document.getElementById("leafin").hidden = true;
  document.getElementById("mangoriila").hidden = true;
  document.getElementById("dascob").hidden = true;
  document.getElementById("TURIRI").hidden = true;
  document.getElementById("Shop").hidden = true;
  document.getElementById("charImg").hidden = true;
  document.getElementById("ROLLTON").hidden = true;
  document.getElementById("box").hidden = false;
    }

