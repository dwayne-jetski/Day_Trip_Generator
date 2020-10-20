"use Strict"

let destinations = ["London, England", "New York City, New York, USA", "Paris, France", "Tokyo, Japan", "Moscow, Russia", "Dubai, United Arab Emirates"];
let restaurant = ["Mcdonalds", "Burger King", "Qdoba", "Arby's", "Chili's", "Applebee's"];
let transportation = ["walk", "airplane", "bicycle", "car", "hitchhiking", "running"];
let activities = ["go for a walk", "visit a Museum", "go to a bar", "stay in and watch TV", "do a crossword puzzle"];


let userTrip = [ destinations[Math.floor(Math.random() * destinations.length)], transportation[Math.floor(Math.random() * transportation.length)], restaurant[Math.floor(Math.random() * restaurant.length)], activities[Math.floor(Math.random() * activities.length)] ];

alert("Here is your trip: \nYou will go to: " + userTrip[0] + "\nYou you will travel by: " + userTrip[1] + "\nYou will eat at: " + userTrip[2] + "\nFor entertainment you will: " + userTrip[3])

let userInput = "";

 while(true){

    while(true){
        userInput = prompt("Would you like to change anything about your trip? yes/no:");
         userInput = userInput.toLowerCase();
        if(userInput.charAt(0) === "y"){
            break
        }
        else if(userInput.charAt(0) === "n"){
            break
        }
        else{

        }
    }

    if(userInput.charAt(0) === "y"){
        userInput = prompt("What would you like to change?: \n1) Destination \n2) Transportation \n3) Restaruant \n4) Entertainment")
        userInput = parseInt(userInput);
        if(userInput === 1){
            userTrip[0] = destinations[Math.floor(Math.random() * destinations.length)];
        }
        else if(userInput === 2){
            userTrip[1] = transportation[Math.floor(Math.random() * transportation.length)];
        }
        else if(userInput === 3){
            userTrip[2] = restaurant[Math.floor(Math.random() * restaurant.length)];
        }
        else if(userInput === 4){
            userTrip[3] = activities[Math.floor(Math.random() * activities.length)];
        }
    }
    else{
        userInput = prompt("Does your trip look good then? yes/no: ");
        if(userInput.charAt(0) === "y"){
            break;
        }
        else{
            
        }
    }
} 