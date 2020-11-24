//Parent Class
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(studentNumber){
    if (typeof studentNumber === 'number'){
      this._numberOfStudents = studentNumber;
    } 
    else {
      console.log("Invalid Input: numberOfStudents must be set to a number.")
    }
  }
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let rand = Math.floor(Math.random() * (substituteTeachers.length -1))
    return substituteTeachers[rand];
  }
}

//Child Class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy ) {
   super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//High School Class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams)
  }
}

//Creating Instances
let lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family memver over the age of 13." );

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

let alSmith = new HighSchool("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);









