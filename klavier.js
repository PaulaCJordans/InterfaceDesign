var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", addClickListenerDrumpad);
    function play(soundQuelle) {
        var sound = new Audio(soundQuelle);
        sound.play();
    }
    function addClickListenerDrumpad() {
        document.querySelector("#button1").addEventListener("click", function () { playSample("./assets/DrumPad/A.mp3"); });
        document.querySelector("#button2").addEventListener("click", function () { playSample("./assets/DrumPad/C.mp3"); });
        document.querySelector("#button3").addEventListener("click", function () { playSample("./assets/DrumPad/F.mp3"); });
        document.querySelector("#button4").addEventListener("click", function () { playSample("./assets/DrumPad/G.mp3"); });
        document.querySelector("#button5").addEventListener("click", function () { playSample("./assets/DrumPad/hihat.mp3"); });
        document.querySelector("#button6").addEventListener("click", function () { playSample("./assets/DrumPad/kick.mp3"); });
        document.querySelector("#button7").addEventListener("click", function () { playSample("./assets/DrumPad/laugh-1.mp3"); });
        document.querySelector("#button8").addEventListener("click", function () { playSample("./assets/DrumPad/laugh-2.mp3"); });
        document.querySelector("#button9").addEventListener("click", function () { playSample("./assets/DrumPad/snare.mp3"); });
        document.querySelector(".play").addEventListener("click", function () { playBeat(); });
        document.querySelector(".shuffle").addEventListener("click", function () { remix(); });
    }
    var beat = [
        "./assets/DrumPad/kick.mp3",
        "./assets/DrumPad/snare.mp3",
        "./assets/DrumPad/hihat.mp3"
    ];
    var gesamtToene = [
        "./assets/DrumPad/A.mp3",
        "./assets/DrumPad/C.mp3",
        "./assets/DrumPad/F.mp3",
        "./assets/DrumPad/G.mp3",
        "./assets/DrumPad/hihat.mp3",
        "./assets/DrumPad/kick.mp3",
        "./assets/DrumPad/laugh-1.mp3",
        "./assets/DrumPad/laugh-2.mp3",
        "./assets/DrumPad/snare.mp3"
    ];
    var playing = false;
    var intervalId;
    function playSample(soundQuelle) {
        play(soundQuelle);
    }
    function playBeat() {
        if (playing == false) {
            startBeat();
        }
        else {
            stopBeat();
        }
    }
    function startBeat() {
        playing = true;
        var zaehler = 0;
        intervalId = setInterval(function () {
            play(beat[zaehler]);
            zaehler = zaehler + 1;
            if (zaehler == beat.length) {
                zaehler = 0;
            }
        }, 500);
    }
    function stopBeat() {
        if (document.querySelector(".play i").classList.contains("fa-play")) {
            document.querySelector(".play i").classList.add("fa-stop");
            document.querySelector(".play i").classList.remove("fa-play");
        }
        else {
            document.querySelector(".play i").classList.remove("fa-stop");
            document.querySelector(".play i").classList.add("fa-play");
        }
        clearInterval(intervalId);
        playing = false;
    }
    let lA = [];
    function remix() {
        playing = true;
        var zaehler = 0;
        var toeneTotal = 3;
        intervalId = setInterval(function () {
            var item = gesamtToene[Math.floor(Math.random() * gesamtToene.length)];
            lA.push(item);
            if (beat.length == 3) {
                play(lA[zaehler]);
                zaehler = zaehler + 1;
                if (zaehler == 3) {
                    zaehler = 0;
                }
            }
        }, 500);
    }
})(Aufgabe9 || (Aufgabe9 = {}));