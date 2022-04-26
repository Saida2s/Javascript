try {
    let a = '3';
    console.log("%s treated as string", a);
}

catch (e){
    
 Errors('let перед использованием нужно объявить');
}



try{
    let b=1/0;
    console.log(Error,b);

}catch (e) {

throw ( new Error('на ноль делить нельзя'));
}
