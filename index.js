#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.yellowBright.bold("\n\n\t============ Welcome to Ameer Saria's Oop_Object_Oriented_Programming =============\n\n\t"));
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "To whom do you like to talk",
            choices: ["Self", "Student"]
        });
        if (ans.select == "Self") {
            console.log("Hello I am talking to myself");
            console.log("I am enjoying sound health");
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "To whom would you like to talk"
            });
            const student = persons.students.find(val => val.name = ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name} and I am fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello I am ${student.name} and I am fine.....`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
