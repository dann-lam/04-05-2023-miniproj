
//Creates a Hero with the current time formatted and setInterval
var projectFormEl = $('')
var projectFormDropDown = $('')


let heroTimer = setInterval(() => {
    $("#hero-header").text(dayjs().format("MMM DD, YYYY, @ hh:mm:ssa"));
}, 1000);


var formEl = $("");
// textProjectName
// select dropdown type
// select date
function formSubmission(event){
    event.preventDefault();
    //Get project name
    let projectName = $('input[name="id-of-project-input"').val();
    if(!projectName) {
        console.log("PLease put in a name next time :^)");
        return;
    }
    //Get project Type
    let projectType = $('input[name="id-of-project-type"]').val();
    //Get project date
    if(!projectType) {
        console.log("PLease put in a type next time :^)");
        return;
    }
    let projectDate = $('input[name="dueDate"]').val();
    if(!projectDate) {
        console.log("PLease put in a date next time :^)");
        return;
    }
    // .appendChild(projectName)
    // .appendChild(projectType)
    // .appendChild(projectDate)
    // .appendChild()
}
formEl.on('cancel', clearSubmission);
formEl.on('submit', formSubmission);
//Need way of clearing local storage
//Need way of saving it to local storage
