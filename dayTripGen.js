"use Strict"

let destinations = ["London, England", "New York City, New York, USA", "Paris, France", "Tokyo, Japan", "Moscow, Russia", "Dubai, United Arab Emirates"];
let restaurant = ["Mcdonalds", "Burger King", "Qdoba", "Arby's", "Chili's", "Applebee's"];
let transportation = ["walk", "fly in an airplane", "ride a bicycle", "drive a car", "hitchhike", "runing"];
let activities = ["go for a walk", "visit a Museum", "go to a bar", "stay in and watch TV", "do a crossword puzzle"];


let userTrip = [ destinations[Math.floor(Math.random() * destinations.length)], transportation[Math.floor(Math.random() * transportation.length)], restaurant[Math.floor(Math.random() * restaurant.length)], activities[Math.floor(Math.random() * activities.length)] ];

alert("Here is your trip: \nYou will go to: " + userTrip[0] + "\nYou you will travel by: " + userTrip[1] + "\nYou will eat at: " + userTrip[2] + "\nFor entertainment you will: " + userTrip[3])

let userInput = "";

 while(true){

    while(true){
        userInput = prompt("Would you like to change anything about your trip? yes/no:");
        userInput.toLowerCase();
        if(userInput.charAt(0) !== "y" || userInput.charAt(0) !== "n"){

        }
        else{
            break
        }
    }

    if(userInput.charAt(0) === "y"){
        
    }
    else{
        userInput = prompt("Does your trip look good then? yes/no: ");
        if(userInput.charAt(0) !== "y" || userInput.charAt(0) !== "n"){

        }
        else{
            break;
        }
    }
} 