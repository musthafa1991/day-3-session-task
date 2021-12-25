const Resume={
    contact:{
        Name:"Mohamed Musthafa A",
        Email:"musthafam39@gmail.com",
        Mobile:"+91-9655885264",
        Adress:"Perambalur,Tamilnadu-621119"
    },
    Personnal_Details:{
        Father_Name:"Abdul Hameed",
        Mother_Name:"Sajitha",
        Age:30,
        Date_of_Birth:"10-May-1991",
        Nationality:"Indian",
        Marrital_status:"Unmarried"
    },
    Eduacation:{
        Degree:"BE-Mechanical Engineering",
        college:"Ksr Institute For Engineering and Technology",
        Batch:2015
    },  
    Experience:{
        1:{
            company_name:"Aradhana Enterprises",
            Position:"Production Incharge",
            Duration:"May/2015-July/2016",
        },
        2:{
            company_name:"Hinduja Global Solution",
            Position:"Customer Relation Agent",
            Duration:"Sep/2016-Sep/2017",

        },
        3:{
            company_name:"VFS Global Solution",
            Position:"Operation Officer",
            Duration:"Mar/2019-Dec/2020",

        }
    },
    Language:{
        Tamil:"Read,Write,Speak",
        English:"Read,Write,Speak",
        Malayalam:"Read,Write,Speak"
        }

}  
console.log(Resume);



const Personnal={
    Father_Name:"Abdul Hameed",
    Mother_Name:"Sajitha",
    Age:30,
    Date_of_Birth:"10-May-1991",
    Nationality:"Indian",
    Marrital_status:"Unmarried"
}

// (Object.values(Personnal)).forEach((value)=>console.log(value));
//for in loop
for(let key in Personnal){
    console.log(Personnal[key]);
}

// for of loop
for(let list of Object.keys(Personnal)){
    console.log(Personnal[list]);
}

//for loop
for(i=0;i<Object.values(Personnal).length;i++){
    console.log((Object.values(Personnal))[i]);
}

// for each loop
Object.values(Personnal).forEach((value)=>console.log(value));