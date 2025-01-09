document.querySelector("#calculate-btn").addEventListener("click",()=>{
    let classes_attended=0;
    let total_classes=0;
    let attendance_marks=0;
    let sessional_marks=0;
    let attendance_percentage=0;
    let ass1 = Number(document.querySelector("#ass1_input").value);
    let ass2 = Number(document.querySelector("#ass2_input").value);
    let quiz1 = Number(document.querySelector("#quiz1_input").value);
    let quiz2 = Number(document.querySelector("#quiz2_input").value);
    let ses1 = Number(document.querySelector("#ses1_input").value);
    let ses2 = Number(document.querySelector("#ses2_input").value);
    classes_attended = Number(document.querySelector("#classes-attended-input").value);
    total_classes = Number(document.querySelector("#total-classes-input").value);

    if(total_classes!=0){
        attendance_percentage = (classes_attended/total_classes)*100;
    }

    if(attendance_percentage>=90){
        attendance_marks = 5;
    }
    else if(attendance_percentage>=85){
        attendance_marks = 4;
    }
    else if(attendance_percentage>=80){
        attendance_marks = 3;
    }
    else if(attendance_percentage>=75){
        attendance_marks = 2;
    }
    else{
        attendance_marks = 0;
    }

    if(ses1>=ses2){
        sessional_marks = ses1*0.80+ses2*0.20;
    }else{
        sessional_marks = ses2*0.80+ses1*0.20;
    }

    let marks_7 = (ass1+ass2+quiz1+quiz2)*0.14583;

    let total_marks = marks_7+attendance_marks+sessional_marks;

    if((total_marks>=24.99)&&(total_marks<=25)){
        total_marks=25;
    }else if((total_marks>=29.99)&&total_marks<=30){
        total_marks=30;
    }

    total_marks = Number(total_marks.toFixed(2));

    if(total_classes==0){
        alert("You got "+total_marks+" out of 25 in internals");
    }
    else{
        alert("You got "+total_marks+" out of 30 in internals");
    }
})

