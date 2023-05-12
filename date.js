
module.exports.date = date;

function date(){
    let date=new Date();
    let day="";
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    if(date.getDay()==6 || date.getDay()==0){
        day=date.toLocaleString("en-US",options);
    }else{
        day=date.toLocaleString("en-US",options);
    }
    return day;
}

module.exports.day = day;

function day(){
    let date=new Date();
    let day="";
    let options={
        weekday:"long",
        
    }

    if(date.getDay()==6 || date.getDay()==0){
        day=date.toLocaleString("en-US",options);
    }else{
        day=date.toLocaleString("en-US",options);
    }
    return day;
}