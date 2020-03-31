import { dataCourses } from './dataCourses.js';
import { dataStudents } from './dataStudents.js';
var coursesTbody = document.getElementById('courses');
var studentTbody = document.getElementById('student');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByCredits = document.getElementById("button-filterByCredits");
var inputSearchBox = document.getElementById("search-box");
var inputSearchBox2 = document.getElementById("search-box2");
var inputSearchBox3 = document.getElementById("search-box3");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
renderCoursesInTable(dataCourses);
renderStudentInTable(dataStudents);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentInTable(dato) {
    console.log('Desplegando datos');
    dato.forEach(function (dato) {
        var trElement2 = document.createElement("tr");
        var trElement3 = document.createElement("tr");
        var trElement4 = document.createElement("tr");
        var trElement5 = document.createElement("tr");
        var trElement6 = document.createElement("tr");
        trElement2.innerHTML = "<td>C\u00E9dula </td><td>" + dato.id + "</td>";
        trElement3.innerHTML = "<td>C\u00F3digo </td><td>" + dato.student_id + "</td>";
        trElement4.innerHTML = "<td>Edad </td><td>" + dato.age + "</td>";
        trElement5.innerHTML = "<td>Direcci\u00F3n </td><td>" + dato.address + "</td>";
        trElement6.innerHTML = "<td>Telefono</td><td>" + dato.phone + "</td>";
        studentTbody.appendChild(trElement2);
        studentTbody.appendChild(trElement3);
        studentTbody.appendChild(trElement4);
        studentTbody.appendChild(trElement5);
        studentTbody.appendChild(trElement6);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function applyFilterByCredits() {
    var text1 = inputSearchBox2.value;
    var text2 = inputSearchBox3.value;
    text1 = (text1 == null) ? '' : text1;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(text1, text2, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function searchCourseByCredits(minKey, maxKey, courses) {
    return minKey === '' || maxKey === '' ? dataCourses : courses.filter(function (c) {
        return (c.credits >= parseInt(minKey) && c.credits <= parseInt(maxKey));
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
