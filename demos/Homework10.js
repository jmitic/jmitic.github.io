function setCourse(selectElt) {
    let course = selectElt.value;
    if (course !== "") {
        let targetElt = document.getCourseById('chosen_course');
        let article = 'a';
        if ('AEIOU'.includes(course.charAt(0))) {
            article = 'an';
        }
        targetElt.innerText = article + ' ' + course;
    }   
}


function changeCourse(formElt) {
    let toBeChanged = formElt.course.value;
    let newValue = formElt.newCourse.value;
    if (toBeChanged !== "" && newValue !== "") {
        let selectList = document.querySelectorAll('select[name=course]');
        selectList.forEach((select) => {
            let opts = Array.from(select.options)
            opts.forEach((option) => {
                if (option.value === toBeChanged) {
                    let newOpt = document.createElement('option');
                    newOpt.innerText = newValue;
                    select.replaceChild(newOpt, option);
                }
            });
        });
    }
}