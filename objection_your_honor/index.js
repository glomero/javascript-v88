class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
}
class Prosecutor extends Person{
    constructor(name, age){
        super(name, age);
    }
    prosecute(defendant, _case){
        defendant.case = _case;
        console.log('Name: ' + defendant.name);
        console.log('Age: ' + defendant.age);
        console.log('Title Case: ' + defendant.case.title);
    }
}
class Defendant extends Person{
    constructor(name, age){
        super(name, age);
        this.case = '';
    }
}
class Case{
    constructor(title, years, months, days, minAge, maxAge){
        this.title = title;
        this.years = years;
        this.months = months;
        this.days = days;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.releaseDate = this.computeReleaseDate(years, months, days);
    }
    computeReleaseDate(years, months, days){
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear() + years;
        let currenMonth = currentDate.getMonth() + months;
        let currenDay = currentDate.getDate() + days;
        let listMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let choosenMonths = listMonths[currenMonth];
        return choosenMonths + ' ' + currenDay + ', ' + currentYear;
    }
}
class TrialCourt{
    initiateTrial(defendant, prosecutor){
        console.log('Filed by: ' + prosecutor.name);
        this.gerVerdict(defendant.case.minAge, defendant.case.maxAge, defendant.age, defendant);
    }
    gerVerdict(minAge, maxAge, age, defendant){
        if(minAge > age || maxAge < age){
            console.log('Verdict: NOT GUILTY');
            console.log(' ');
        }else{
            console.log('Verdict: GUILTY');
            console.log('Release date: ' + defendant.case.releaseDate)
        }
    }
}
// When defendant is younger than 18 yrs old.
// let’s say imprisonment term for this case is 3 years, 3 months, 3 days
// and the age of someone that can be convicted is within 18 to 75 years old.
let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor = new Prosecutor ("John", 30);
let defendant1 = new Defendant ("Girlie", 5);
let trial = new TrialCourt();
prosecutor.prosecute(defendant1, case1);
trial.initiateTrial(defendant1, prosecutor);
/*
    Name: Girlie
    Age: 5 years old
    Case Title: Malicious Mischief
    Filed by: John
    Verdict: NOT GUILTY
*/   
// When defendant's age is within 18 to 75 years old.
// let’s say imprisonment term for this case is 3 years, 3 months, 3 days
// and the age of someone that can be convicted is within 18 to 75 years old.
let defendant2 = new Defendant ("Onel", 25);
let trial2 = new TrialCourt();
prosecutor.prosecute(defendant2, case1);
// let’s say today is December 17, 2020
trial2.initiateTrial(defendant2, prosecutor); 
//    Name: Onel
//    Age: 25 years old
//    Case Title: Malicious Mischief
//    Filed by: John
//    Verdict: GUILTY
//    Release date:  21 March 2024  