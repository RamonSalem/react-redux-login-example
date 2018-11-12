export const isValidEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const isValidPass = (pass = '')=>{
    return pass.length > 0; 
}

export const isValidName = (name = '')=>{
    return name.length > 0 && name.length<=60; 
}

export const isValidRepeatPass = (pass, repeatPass)=>{
    return (pass.length>0 && repeatPass.length>0) &&
           (pass!=='' && repeatPass !== '') &&
           (pass === repeatPass);
}