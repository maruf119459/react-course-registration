function totalCredit(selectedCourse){
    let total = 0;
    for(let i = 0; i < selectedCourse.length; i++){
        total = total +  selectedCourse[i].credit;
    }
    return(total);
}

function remainigCredit(total){
    return 20-total;
}

function totalPrice(selectedCourse){
    let total = 0;
    for(let i = 0; i < selectedCourse.length; i++){
        total = total +  selectedCourse[i].price;
    }
    return(total);
}



export  {totalCredit,remainigCredit,totalPrice};