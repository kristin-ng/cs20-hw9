document.addEventListener("DOMContentLoaded", () => {
  //1. JSON SongList
  let songlist = [
    {
      title: "Warrior",
      artist: "Mirror",
      genre: "Cantopop",
      year: 2019,
    },
    {
      title: "¿醒未?",
      artist: "Rubberband",
      genre: "Cantopop",
      year: 2019,
    },
    {
      title: "雞蛋與羔羊",
      artist: "Kay Tse",
      genre: "Cantopop",
      year: 2014,
    },
    {
      title: "Spirit of the Sea",
      artist: "Kenshi Yonezu",
      genre: "Jpop",
      year: 2019,
    },
    {
      title: "Racing into the Night",
      artist: "YOASOBI",
      genre: "Jpop",
      year: 2020,
    },
    {
      title: "As You Like It",
      artist: "Eve",
      genre: "Jpop",
      year: 2018,
    },
    {
      title: "Shinigami",
      artist: "Kenshi Yonezu",
      genre: "Jpop",
      year: 2021,
    },
    {
      title: "Butter",
      artist: "BTS",
      genre: "Kpop",
      year: 2021,
    },
    {
      title: "Not Alone",
      artist: "Seventeen",
      genre: "Kpop",
      year: 2021,
    },
    {
      title: "NO",
      artist: "BTS",
      genre: "Kpop",
      year: 2013,
    },
  ];

  // serialize and display data
  for (i = 0; i < songlist.length; i++) {
    serialized = JSON.stringify(songlist[i]);
    document.getElementById("rawData").innerHTML += serialized + "<br>";
  }
  var str_songlist = JSON.stringify(songlist);
  var songlistJSON = JSON.parse(str_songlist);

  // PART 3: USER FRIENDLY DISPLAY
  function displayTitles() {
    s = "<table class='table'>";
    s += "<tr class='hrow'>";
    s += "<th><b>TITLE</b></th>";
    s += "<th><b>ARTIST</b></th>";
    s += "<th><b>GENRE</b></th>";
    s += "<th><b>YEAR</b></th>";
    s += "</tr>";
    return s;
  }

  function displaySong(x) {
    s = "";
    s += "<tr>";
    s += "<th>" + songlistJSON[x].title + "</th>";
    s += "<th>" + songlistJSON[x].artist + "</th>";
    s += "<th>" + songlistJSON[x].genre + "</th>";
    s += "<th>" + songlistJSON[x].year + "</th>";
    s += "</tr>";
    return s;
  }

  function displayAll() {
    songs = displayTitles();
    for (x in songlistJSON) songs += displaySong(x);
    document.getElementById("aestheticData").innerHTML = songs;
  }
  displayAll();

  // PART 4: FILTER BY GENRE
  document.querySelector("#filter").addEventListener("click", function () {
    var selection = document.querySelector("#selection").value;
    songs = displayTitles();
    if (selection == "all") {
      for (x in songlistJSON) songs += displaySong(x);
    } else {
      for (x in songlistJSON) {
        if (selection == songlistJSON[x].genre) {
          songs += displaySong(x);
        }
      }
    }
    document.getElementById("aestheticData").innerHTML = songs;
  });

  // DISPLAY ALL SONGS (RESET)
  document.querySelector("#showAll").addEventListener("click", function () {
    displayAll();
  });
});
