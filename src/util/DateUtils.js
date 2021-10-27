function timeToHhIiDdMm(time) {
    let d = timeToDate(time);
    return `${d.getHours()}:${d.getMinutes()} - ${d.getDate()}/${d.getMonth() + 1}`;
}

function timeToDate(time) {
    return new Date(time);
}
export { timeToHhIiDdMm, timeToDate };