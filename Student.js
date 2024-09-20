class Student{

    constructor(lastName, firstName){

        this.lastName = lastName;
        this.firstName = firstName;
        this.matricule = Math.floor(Math.random() * 1000);
        this.scores = [];
        this.admissionStatus = false;
    }

    addNote(score){
        this.scores.push(score);
    }

    calculateAverageScores(){

        let sum = this.scores.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
          
        let averageScores = sum / this.scores.length;

        console.log(averageScores);

        return averageScores;
    }

    sortScoresAscending(){

        this.scores.sort((a, b) => a - b);
        return this.scores ;
    }


    calculateScoresMediane(){

        let mediane ; 
        this.sortScoresAscending();

        if (this.scores.length % 2 != 0 ){
            mediane = this.scores[Math.floor(this.scores.length / 2)];
        }else{
            mediane = (this.scores[this.scores.length / 2] + this.scores[(this.scores.length / 2) - 1]) / 2;
        }

        console.log(mediane);

        return mediane;
    }

    getHightestScore(){

        let hightestScore = Math.max(...this.scores);

        console.log(hightestScore);

        return hightestScore;
    }

    getLowestScore(){
        let lowestScore = Math.min(...this.scores);

        console.log(lowestScore);

        return lowestScore;
    }

    isAdmitted(){

        this.admissionStatus = this.calculateAverageScores() > 11.5;
        return this.admissionStatus; 
    }

}

module.exports = Student;