// 1. The Magical Sorting Hat:
// Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
// solution :
/**
 houses = {
     Gryffindor (length less than 6)
     Hufflepuff(length less than 8)
     Ravenclaw(length less than 12)
     Slytherin(length greater than or equal to 12)
    }
    */
   // solution1();
   function solution1() {
       let studentsNanme = ["Harry", "Hermione", "Ron", "Draco", "Luna", "Neville", "Ginny", " Bellatrix", "Sirius", " Peter", "vikash sharma"]
   
       let house = {
           Gryffindor: [],
           Hufflepuff: [],
           Ravenclaw: [],
           Slytherin: []
       };
   
       studentsNanme.forEach(student => {
           if (student.length < 6) {
               house.Gryffindor.push(student);
           }
           else if (student.length >= 6 && student.length < 8) {
               house.Hufflepuff.push(student);
           }
           else if (student.length < 12) {
               house.Ravenclaw.push(student)
           }
           else if (student.length >= 12) {
               house.Slytherin.push(student)
           }
       });
   
       for (const student in house) {
           console.log(student, " ", house[student])
        }
    }

    // 2. The Double Trouble:
    // You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
    
    solution2();
    function solution2() {
    let arr = [1, 2, 2, 3, 3, 4, 5, 5];

    function ispresent(index, a) {
        for (let i = index + 1; i < arr.length; i++) {
            if (arr[i] === a) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (!ispresent(i, arr[i])) {
            console.log(arr[i] * arr[i])
        }
        else {
            console.log("present twice")
        }
    }

}


























