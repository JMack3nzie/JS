async function main() {
    output("Relational Operators:");
    output(5 < 4); //less than
    output(5 > 4);//more than
    output(2 >= 2); //more than or equal to
    output(2 <= 2); //less than or equal to
    output("2" == 2);// equality (checks if the values are the same)
    output("2" === 2);//identity (checks tif the values are the same in type as well)

    //BEDMAS (brackets, exponents, division, multiplication, addition, subtraction)
    output((2 + 2) / (2 - 1));
    output(3 ** 2); //exponents = ** 

    output("Logical Operators");
    output(true && false);//false and true - Need both conditions(true || true) to make it (true or false)
    output(false || true);//false or true - Need at least one or both conditions(true || true) to make it (true or false)
    output(!true);// !=Not 
    output(!false)//Not false = True

    //Decisions
    output("Grade Translator");

    let grade = 59;
    if (grade > 90) {
        output("A");
    }
    else if (grade > 80) {
        output("B");
    }
    else if (grade > 70) {
        output("C");
    }
    else if (grade < 60) {
        output("F");
    }
    else {
        output("Invalid grade")
    }

    //Ternary Operator
    //condition ? <expression if true> : <expression if false>
    let myTernary = (5 < 5) ? output(true) : output(false);
    myTernary;


    //switch

    output("please enter 1 for records, 2 fto quit the program");
    let myChoice = await input("please enter a choice ");
    switch (myChoice) {
        case "1":
            output("loading records....");
            break;
        case "2":
            output("quitting the program, good bye");
            break;
        default:
            output("invalid choice, try again");
    }
    let myBool = await input("Enter true or false: ");
    if (myBool == "true") {
        output("1");
    }
    else if (myBool == "false") {
        output("0");
    }
    else {
        output("Invalid choice, try entering true or false: ");
    }


    //debugging strategies

    //referenceError 
    



}


