
//Creates a Hero with the current time formatted and setInterval

let heroTimer = setInterval(() => {
    $("#hero-header").text(dayjs().format("MMM DD, YYYY, @ hh:mm:ssa"));
}, 1000);
