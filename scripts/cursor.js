import {detectAndroid as r} from "./utils.min.js";
let cursorElem = document.getElementById("cursor")
  , cursorCircle = document.getElementById("cursor_circle")
  , cursorHeight = cursorElem.getAttribute("height")
  , cursorWidth = cursorElem.getAttribute("width");
cursorElem.style.top = 0,
cursorElem.style.left = 0;
let mouseX, mouseY, cursorXSpeed, cursorYSpeed, cursorTotalSpeed = .6, cursorYGoal, cursorXGoal, cursorStatus = 1, cursorAnimWay = 1, cursorRGoal = 30;
function mousePos(r) {
    null != r.target.getAttribute("class") && r.target.getAttribute("class").includes("cursor_pointer") ? cursorIn() : cursorOut(),
    mouseX = r.x,
    mouseY = r.y
}
function cursorIn() {
    2 != cursorStatus && (cursorStatus = 2,
    cursorAnimWay = -1,
    cursorRGoal = 15,
    cursorCircle.setAttribute("fill", "rgba(128, 128, 128, 0.7)"),
    cursorCircle.setAttribute("stroke-width", "0"),
    cursorAnim())
}
function cursorOut() {
    1 != cursorStatus && (cursorStatus = 1,
    cursorAnimWay = 1,
    cursorRGoal = 30,
    cursorCircle.setAttribute("fill", "transparent"),
    cursorCircle.setAttribute("stroke-width", "3"),
    cursorAnim())
}
function cursorAnim() {
    parseInt(cursorCircle.getAttribute("r")) != cursorRGoal && (cursorCircle.setAttribute("r", parseInt(cursorCircle.getAttribute("r")) + cursorAnimWay),
    requestAnimationFrame(cursorAnim))
}
function animateCursor() {
    cursorXSpeed = (parseInt(cursorElem.style.left) - mouseX + cursorWidth / 2) * cursorTotalSpeed,
    cursorYSpeed = (parseInt(cursorElem.style.top) - mouseY + cursorHeight / 2 - window.pageYOffset) * cursorTotalSpeed,
    cursorYGoal = mouseY + window.pageYOffset - cursorHeight / 2,
    cursorXGoal = mouseX - cursorWidth / 2,
    parseInt(cursorElem.style.top) != cursorYGoal && (cursorElem.style.top = parseInt(cursorElem.style.top) - cursorYSpeed + "px",
    parseInt(cursorElem.style.top) > document.body.offsetHeight - cursorWidth ? cursorElem.style.top = document.body.offsetHeight - cursorWidth + "px" : 0 > parseInt(cursorElem.style.top) && (cursorElem.style.top = "0px")),
    parseInt(cursorElem.style.left) != cursorXGoal && (cursorElem.style.left = parseInt(cursorElem.style.left) - cursorXSpeed + "px",
    parseInt(cursorElem.style.left) > document.body.offsetWidth - cursorWidth ? cursorElem.style.left = document.body.offsetWidth - cursorWidth + "px" : 0 > parseInt(cursorElem.style.left) && (cursorElem.style.left = "0px")),
    requestAnimationFrame(animateCursor)
}
document.onmousemove = mousePos,
!1 == r() ? animateCursor() : cursorElem.style.display = "none";
