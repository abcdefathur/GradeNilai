import readlineSync from 'readline-sync';
import chalk from 'chalk';


var tmp = readlineSync.question (chalk.overline("Masukan Nilai Anda : "));

function nilai() {

    var grade = [
        {min: 80, max: 100, grade: 'A'},
        {min: 70, max: 79, grade: 'B'},
        {min: 60, max: 69, grade: 'C'},
        {min: 50, max: 59, grade: 'D'},
        {min: 0, max: 49, grade: 'E'},
    ];
    console.log(chalk.cyan(`
    Nilai yang anda masukkan adalah : ${tmp} 
    =================================
    `));
    console.log(chalk.cyanBright(`
    Keterangan Grade : 

    Grade berwarna Hijau adalah Grade yang anda dapatkan.

    Grade A = 80    -   100
    Grade B = 70    -   79
    Grade C = 60    -   69
    Grade D = 50    -   59
    Grade E = 0     -   49
    =================================
    `));

    for (var i = 0; i < grade.length; i++) {

        if (tmp >= grade[i].min && tmp <= grade[i].max) {
            console.log(chalk.green(`
    Grade yang didapat : ${grade[i].grade}
            ` ))

        } else {
            console.log(chalk.red(`
    Grade : ${grade[i].grade}`))
        }

    }
}

nilai()