function openFormul(evt, yasaName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(yasaName).style.display = "block";
  evt.currentTarget.className += " active";

}


let btnhesabla = document.getElementById("ornek-sonuc");
btnhesabla.onclick = function () {
  let f = Number(document.getElementById("ornek-f").value);
  let m = Number(document.getElementById("ornek-m").value);
  let a = Number(document.getElementById("ornek-a").value);

  if (f == '') {
    let hesabla = m * a;
    document.getElementById("netice").innerHTML = hesabla;
  } else if (m == '') {
    let hesabla = f / a;
    document.getElementById("netice").innerHTML = hesabla;
  } else {
    let hesabla = f / m;
    document.getElementById("netice").innerHTML = hesabla;
  }
}

// ..........::::::::::  Aziz Amiraslanov  ::::::::::..........

// Navbar menu code area start in the here

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

