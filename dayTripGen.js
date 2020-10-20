"use Strict"

let destinations = ["London, England", "New York City, New York, USA", "Paris, France", "Tokyo, Japan", "Moscow, Russia", "Dubai, United Arab Emirates"];
let restaurant = ["Mcdonalds", "Burger King", "Qdoba", "Arby's", "Chili's", "Applebee's"];
let transportation = ["walk", "airplane", "bicycle", "car", "hitchhiking", "running"];
let activities = ["go for a walk", "visit a Museum", "go to a bar", "stay in and watch TV", "do a crossword puzzle"];


let userTrip = [ getRandomElement(destinations), getRandomElement(transportation), getRandomElement(restaurant), getRandomElement(activities) ];

console.log("Here is your trip: \nYou will go to: " + userTrip[0] + "\nYou you will travel by: " + userTrip[1] + "\nYou will eat at: " + userTrip[2] + "\nFor entertainment you will: " + userTrip[3])




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
        
        while (true){
        userInput = prompt("What would you like to change?: \n1) Destination \n2) Transportation \n3) Restaruant \n4) Entertainment")
        
        if(isNaN(userInput)){
            
        }
        else{
            userInput = parseInt(userInput);
            break;
        }
        }

        if(userInput === 1){
            userTrip[0] = getRandomElement(destinations);
        }
        else if(userInput === 2){
            userTrip[1] = getRandomElement(transportation);
        }
        else if(userInput === 3){
            userTrip[2] = getRandomElement(restaurant);
        }
        else if(userInput === 4){
            userTrip[3] = getRandomElement(activities);
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

    console.log("Here is your trip: \nYou will go to: " + userTrip[0] + "\nYou you will travel by: " + userTrip[1] + "\nYou will eat at: " + userTrip[2] + "\nFor entertainment you will: " + userTrip[3]);
} 

console.log("Here is your confirmed trip: \nYou will go to: " + userTrip[0] + "\nYou you will travel by: " + userTrip[1] + "\nYou will eat at: " + userTrip[2] + "\nFor entertainment you will: " + userTrip[3]);


function getRandomElement(arrayToGrab){
    let randomElement = arrayToGrab[Math.floor(Math.random() * arrayToGrab.length)];

    return randomElement;
}