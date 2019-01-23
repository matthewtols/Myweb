

// bookmark
document.getElementById("BTN1").addEventListener("click", setbtn1)
document.getElementById("BTN2").addEventListener("click", setbtn2)
document.getElementById("BTN3").addEventListener("click", setbtn3)
document.querySelector("body").addEventListener("mouseover", testing)
document.querySelector("body").addEventListener("mouseover", testing2)
document.querySelector("body").addEventListener("mouseover", testing3)

function setbtn1() {
    document.getElementById("BTN1").classList.add('current')
    document.getElementById("BTN2").classList.remove('current')
    document.getElementById("BTN3").classList.remove('current')
}

function setbtn2() {
    document.getElementById("BTN1").classList.remove('current')
    document.getElementById("BTN2").classList.add('current')
    document.getElementById("BTN3").classList.remove('current')
}

function setbtn3() {
    document.getElementById("BTN1").classList.remove('current')
    document.getElementById("BTN2").classList.remove('current')
    document.getElementById("BTN3").classList.add('current')
}

window.onscroll = function() {testing()};

function testing() {
  if (document.body.scrollTop > 1125 || document.documentElement.scrollTop > 1125) {
    document.getElementById("BTN1").className = "";
  } else {
    document.getElementById("BTN1").className = "current";
  }
}

window.onscroll = function() {testing2()};

function testing2() {
  if (document.body.scrollTop > 1125 || document.documentElement.scrollTop > 1125) {
    document.getElementById("BTN2").className = "current";
  } else {
    document.getElementById("BTN2").className = "";
  }
}

window.onscroll = function() {testing3()};

function testing3() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    document.getElementById("BTN3").className = "current";
  } else {
    document.getElementById("BTN3").className = "";
  }
}

// crazy buttons

document.getElementById("i").addEventListener("click", Season);

function Season() {
    document.getElementById("i").addEventListener("mouseover", season2);
    document.getElementById("dd").addEventListener("mouseover", season2);
    document.getElementById("i").classList.add('dropdown');
    document.getElementById("i").addEventListener("mouseout", season);
}

function season2() {
    document.getElementById("i").classList.add('dropdown')
}

function season() {
    document.getElementById("i").classList.remove('dropdown');
    document.getElementById("i").removeEventListener("mouseover", season2);
}

// next 


document.getElementById("o").addEventListener("click", League);

function League() {
    document.getElementById("o").addEventListener("mouseover", league2);
    document.getElementById("dd2").addEventListener("mouseover", league2);
    document.getElementById("dd2b").addEventListener("mouseover", league2);
    document.getElementById("o").classList.add('dropdown2');
    document.getElementById("o").addEventListener("mouseout", league);
}

function league2() {
    document.getElementById("o").classList.add('dropdown2')
}

function league() {
    document.getElementById("o").classList.remove('dropdown2');
    document.getElementById("o").removeEventListener("mouseover", league2);
}

// WHL/NHL

document.getElementById("WHL").addEventListener("click", showWHLstats);
document.getElementById("NHL").addEventListener("click", showNHLstats)

function showWHLstats() {
    document.getElementById("WHLstats").classList.remove('hide')
    document.getElementById("NHLstats").classList.add('hide');
    document.getElementById("changeleague").innerHTML = ("WHL")
    document.getElementById("dd2").classList.remove('dropdown-content2')
    document.getElementById("dd2").classList.add('hide')
    document.getElementById("dd2b").classList.remove('hide')
    document.getElementById("dd2b").classList.add('dropdown-content2')
    document.getElementById("NHLpostats").classList.add('hide')
    document.getElementById("WHLpostats").classList.add('hide')
    document.getElementById("RG/PO").innerHTML = ("Regular Season")

}

function showNHLstats() {
    document.getElementById("WHLstats").classList.add('hide');
    document.getElementById("NHLstats").classList.remove('hide');
    document.getElementById("changeleague").innerHTML = ("NHL")
    document.getElementById("dd2").classList.add('dropdown-content2')
    document.getElementById("dd2").classList.remove('hide')
    document.getElementById("dd2b").classList.add('hide')
    document.getElementById("dd2b").classList.remove('dropdown-content2')
    document.getElementById("NHLpostats").classList.add('hide')
    document.getElementById("WHLpostats").classList.add('hide')
    document.getElementById("RG/PO").innerHTML = ("Regular Season")
}

// Reg. Season/Play-Offs

document.getElementById("NHLshowpo").addEventListener("click", showNHLpostats)
document.getElementById("WHLshowpo").addEventListener("click", showWHLpostats)
document.getElementById("NHLshowrs").addEventListener("click", showNHLrsstats)
document.getElementById("WHLshowrs").addEventListener("click", showWHLrsstats)

function showNHLpostats() {
    document.getElementById("WHLstats").classList.add('hide');
    document.getElementById("NHLstats").classList.add('hide');
    document.getElementById("changeleague").innerHTML = ("NHL")
    document.getElementById("dd2").classList.add('dropdown-content2')
    document.getElementById("dd2").classList.remove('hide')
    document.getElementById("dd2b").classList.add('hide')
    document.getElementById("dd2b").classList.remove('dropdown-content2')
    document.getElementById("NHLpostats").classList.remove('hide')
    document.getElementById("WHLpostats").classList.add('hide')
    document.getElementById("RG/PO").innerHTML = ("Play-Offs")
}

function showWHLpostats() {
    document.getElementById("WHLstats").classList.add('hide');
    document.getElementById("NHLstats").classList.add('hide');
    document.getElementById("changeleague").innerHTML = ("WHL")
    document.getElementById("dd2").classList.remove('dropdown-content2')
    document.getElementById("dd2").classList.add('hide')
    document.getElementById("dd2b").classList.remove('hide')
    document.getElementById("dd2b").classList.add('dropdown-content2')
    document.getElementById("NHLpostats").classList.add('hide')
    document.getElementById("WHLpostats").classList.remove('hide')
    document.getElementById("RG/PO").innerHTML = ("Play-Offs")
}

function showNHLrsstats() {
    document.getElementById("WHLstats").classList.add('hide');
    document.getElementById("NHLstats").classList.remove('hide');
    document.getElementById("changeleague").innerHTML = ("NHL")
    document.getElementById("dd2").classList.add('dropdown-content2')
    document.getElementById("dd2").classList.remove('hide')
    document.getElementById("dd2b").classList.add('hide')
    document.getElementById("dd2b").classList.remove('dropdown-content2')
    document.getElementById("NHLpostats").classList.add('hide')
    document.getElementById("WHLpostats").classList.add('hide')
    document.getElementById("RG/PO").innerHTML = ("Regular Season")
}

function showWHLrsstats() {
    document.getElementById("WHLstats").classList.remove('hide');
    document.getElementById("NHLstats").classList.add('hide');
    document.getElementById("changeleague").innerHTML = ("WHL")
    document.getElementById("dd2").classList.remove('dropdown-content2')
    document.getElementById("dd2").classList.add('hide')
    document.getElementById("dd2b").classList.remove('hide')
    document.getElementById("dd2b").classList.add('dropdown-content2')
    document.getElementById("NHLpostats").classList.add('hide')
    document.getElementById("WHLpostats").classList.add('hide')
    document.getElementById("RG/PO").innerHTML = ("Regular Season")
}