

     f1 =()=>{
        console.log("10")
        f2=()=>{
            console.log("9")
            f3=()=>{
                console.log("8")
                f4=()=>{
                    console.log("7")
                    f5=()=>{
                        console.log("6")
                         f6=()=>{
                            console.log("5")
                                f7=()=>{
                                console.log("4")
                                 f8=()=>{
                                    console.log("3")
                                    f9=()=>{
                                        console.log("2")
                                          f10=()=>{
                                            console.log("1")
                                             f11=()=>{
                                                console.log("independent day")
                                            }
                                            f11();
                                        }
                                        f10();
                                    }
                                   f9();
                                }
                               f8();
                            }
                           f7(); 
                        }
                       f6(); 
                    }
                    f5();
                }
               f4(); 
            }
           f3(); 
        }
       
    }
    
    const independent= setTimeout(f1,1000);