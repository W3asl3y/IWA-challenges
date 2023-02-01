let userDatabase = [ "John", "Matt", "Rick", "Dante", "Dean", "Hein", "Zander", "Paul", "Bill", "Will" ];

// Menu to choose the functionality
while (true) {
    let popupMenu = prompt("========== Menu ========== \n What would you like to do? \n\n 1) Add three Users \n 2) Remove User \n 3) Display all users \n 4) Sort users \n ");

    if (!isNaN(popupMenu)) {
        popupMenu = parseInt(popupMenu);

        // Function to add three new users to the database
        function addThreeUsers() {
//The code for (let i = 0; i < 3; i++) means that the loop will run 3 times. The variable i is declared as a counter and is initialized to 0. The loop continues as long as i is less than 3 and increments i by 1 on each iteration.
            for (let i = 0; i < 3; i++) {
                let newUser = prompt("Enter a new username: ");
                userDatabase.push(newUser);
            }
        }

        // Function to remove a user from the database by index
        function removeUser() {
            let index = parseInt(prompt("Enter the index of the user you want to remove: "));
            if (index >= 0 && index < userDatabase.length) {
                userDatabase.splice(index, 1);
            } else {
                console.log("Invalid index!");
            }
        }

        // Function to concatenate all usernames in the database
        function displayUsers() {
            let display = "";
            for (let i = 0; i < userDatabase.length; i++) {
                display += userDatabase[i] + " ";
            }
            console.log("All users: " + display);
        }

        // Function to sort the usernames in the database alphabetically
        function sortUsers() {
            userDatabase.sort();
            console.log("Sorted users: " + userDatabase);
        }

        switch (popupMenu) {
            case 1:
                addThreeUsers();
                break;
            case 2:
                removeUser();
                break;
            case 3:
                displayUsers();
                break;
            case 4:
                sortUsers();
                break;
            default:
                console.log("Invalid choice!");
        }
    } else {
        console.log("Invalid choice!");
    }
}






  

  





//let popupMenu = prompt(
    //"========== MENU ========== \n What would you like to do? \n \n 1) Add three users \n 2) Remove user \n 3) Display all users \n 4) Sort users", "");

//window.onload = function menu() {
    //document.getElementById("hid").value=popupMenu;
//}
    
//let numSelection = popupMenu.value;

//switch (numSelection) {
    //case "1":
     //   let user1 = prompt("Please enter the first user you want to add.");
    //    let user2 = prompt("Please enter the second user you want to add.");
    //    let user3 = prompt("Please enter the third user you want to add.");
   // break;
  //  case "2":
        
  //  break;
  //  case "3":
        
   // break;
   // case "4":
        
  //  break;
//}