var vid = document.getElementById("videoel"),
    overlay = document.getElementById("overlay"),
    overlayCC = overlay.getContext("2d");

function enablestart() {
    var t = document.getElementById("startbutton");
    t.value = "start", t.disabled = null
}
if (navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL, navigator.getUserMedia) {
    var videoSelector = {
        video: !0
    };
    if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
        var chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
        chromeVersion < 20 && (videoSelector = "video")
    }
    navigator.getUserMedia(videoSelector, function(t) {
        vid.mozCaptureStream ? vid.mozSrcObject = t : vid.src = window.URL && window.URL.createObjectURL(t) || t, vid.play()
    }, function() {
        alert("There was some problem trying to fetch video from your webcam. If you have a webcam, please make sure to accept when the browser asks for access to your webcam.")
    })
} else alert("This demo depends on getUserMedia, which your browser does not seem to support. :(");
vid.addEventListener("canplay", enablestart, !1);
var ctrack = new clm.tracker({
    useWebGL: !0
});

function startVideo() {
    vid.play(), ctrack.start(vid), drawLoop()
}

function stopVideo() {
    vid.pause(), new Audio("resource/thankyou.wav").play()
}

function drawLoop() {
    requestAnimFrame(drawLoop), overlayCC.clearRect(0, 0, 400, 300), ctrack.getCurrentPosition() && ctrack.draw(overlay);
    var t = ctrack.getCurrentParameters(),
        e = ec.meanPredict(t);
    if (e) {
        updateData(e);
        for (var a = 0; a < e.length; a++) e[a].value > .4 ? document.getElementById("icon" + (a + 1)).style.visibility = "visible" : document.getElementById("icon" + (a + 1)).style.visibility = "hidden"
    }
}
ctrack.init(pModel);
var ec = new emotionClassifier;
ec.init(emotionModel);
console.log(screen.width)
var emotionData = ec.getBlank(),
    margin = {
        top: 20,
        right: 20,
        bottom: 10,
        left: 40
    },
    width = (screen.width > 500 ? 400 : screen.width - 50) - margin.left - margin.right,
    height = 100 - margin.top - margin.bottom,
    barWidth = 30,
    formatPercent = d3.format(".0%"),
    x = d3.scale.linear().domain([0, ec.getEmotions().length]).range([margin.left, width + margin.left]),
    y = d3.scale.linear().domain([0, 1]).range([0, height]),
    svg = d3.select("#emotion_chart").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);

function updateData(t) {
    var e = svg.selectAll("rect").data(t).attr("y", function(t) {
            return height - y(t.value)
        }).attr("height", function(t) {
            return y(t.value)
        }),
        a = svg.selectAll("text.labels").data(t).attr("y", function(t) {
            return height - y(t.value)
        }).text(function(t) {
            return t.value.toFixed(1)
        });
    e.enter().append("svg:rect"), a.enter().append("svg:text"), e.exit().remove(), a.exit().remove()
}
svg.selectAll("rect").data(emotionData).enter().append("svg:rect").attr("x", function(t, e) {
    return x(e)
}).attr("y", function(t) {
    return height - y(t.value)
}).attr("height", function(t) {
    return y(t.value)
}).attr("width", barWidth).attr("fill", "#2d578b"), svg.selectAll("text.labels").data(emotionData).enter().append("svg:text").attr("x", function(t, e) {
    return x(e) + barWidth
}).attr("y", function(t) {
    return height - y(t.value)
}).attr("dx", -barWidth / 2).attr("dy", "1.2em").attr("text-anchor", "middle").text(function(t) {
    return t.value
}).attr("fill", "white").attr("class", "labels"), svg.selectAll("text.yAxis").data(emotionData).enter().append("svg:text").attr("x", function(t, e) {
    return x(e) + barWidth
}).attr("y", height).attr("dx", -barWidth / 2).attr("text-anchor", "middle").attr("style", "font-size: 12").text(function(t) {
    return t.emotion
}).attr("transform", "translate(0, 18)").attr("class", "yAxis"), stats = new Stats, stats.domElement.style.position = "absolute", stats.domElement.style.top = "0px", document.getElementById("container").appendChild(stats.domElement), document.addEventListener("clmtrackrIteration", function(t) {
    stats.update()
}, !1);