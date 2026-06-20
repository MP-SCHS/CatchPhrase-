const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const actionBtn = document.getElementById('action-btn');

// Word Bank
const words = [// --- Dad, Tools & Gadgets ---
  "Barbecue", "Coffee Mug", "Dad Joke", "Lawn Mower", "Remote Control", 
  "Slippers", "Fishing Rod", "Golf Club", "Football", "Hammock", 
  "Toolbox", "Necktie", "Sneakers", "Tape Measure", "Duct Tape", 
  "Grill Master", "Fanny Pack", "Cargo Shorts", "Thermostat", "Garage", 
  "Pocket Knife", "Flashlight", "WD-40", "Car Wash", "Leaf Blower",
  "Leather Wallet", "Flannel Shirt", "Recliner", "Work Bench", "Oldies Radio",

  // --- Pop Culture & Media ---
  "Star Wars", "Super Mario", "Pac Man", "Batman", "Spider Man", 
  "Harry Potter", "Jurassic Park", "Avengers", "Minecraft", "Sherlock Holmes", 
  "James Bond", "The Matrix", "Indiana Jones", "Ghostbusters", "Back To The Future",
  "Lord of the Rings", "Luke Skywalker", "Darth Vader", "Iron Man", "Doctor Who",

  // --- Food, Drink & Grilling ---
  "Apple Pie", "Hot Dog", "Hamburger", "Taco Tuesday", "Pizza Party", 
  "Pancakes", "Ice Cream", "Bacon", "Donut Hole", "French Fries", 
  "Popcorn", "Smoothie", "Buffalo Wings", "Beef Jerky", "Maple Syrup",
  "Barbecue Sauce", "Steak Knife", "Fried Chicken", "Watermelon", "Apple Cider",

  // --- Nature, Travel & Places ---
  "Campfire", "Skyscraper", "Submarine", "Helicopter", "Astronaut", 
  "Mount Everest", "Grand Canyon", "Eiffel Tower", "Yellowstone", "Amusement Park",
  "Sandy Beach", "Treehouse", "Hiking Trail", "Waterfall", "Coral Reef",
  "Space Shuttle", "Cruise Ship", "Hot Air Balloon", "Railway Station", "Cabin In The Woods",

  // --- Fun Idioms, Actions & Catchphrases ---
  "High Five", "Couch Potato", "Brainstorm", "Roller Coaster", "Treasure Hunt", 
  "Spaghetti", "Woodpecker", "Boomerang", "Snowman", "Lightning Bolt", 
  "Time Machine", "Piece Of Cake", "Break A Leg", "Under The Weather", "Spill The Beans",
  "Wild Goose Chase", "Blessing In Disguise", "Cry Over Spilt Milk", "Bite The Bullet", "Hit The Sack",
  
  // --- Games, Sports & Hobbies ---
  "Checkers", "Chess Match", "Ping Pong", "Billiards", "Bowling Alley",
  "Baseball Diamond", "Basketball Hoop", "Soccer Ball", "Skateboarding", "Surfing",
  "Comic Books", "Board Game", "Card Shark", "Jigsaw Puzzle", "Crossword",
  
  // --- Animals & Creatures ---
  "Bald Eagle", "Grizzly Bear", "Golden Retriever", "Tyrannosaurus Rex", "Great White Shark",
  "Chameleon", "Kangaroo", "Bumblebee", "Sea Turtle", "Albatross"
];

let gameActive = false;
let gameStartTime = 0;
let lastWordIndex = -1;
const totalGameTime = 60000; // 60 seconds
let timerLoop = null;

// Sound Synthesizer Engine (Emulates the Piezo Buzzer)
let audioCtx = null;

function playBeep(frequency, duration) {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    
    osc.type = 'square'; // Gives it that arcade/piezo chip sound
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime); // Volume
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function startGame() {
    gameActive = true;
    gameStartTime = Date.now();
    actionBtn.innerText = "NEXT";
    actionBtn.style.backgroundColor = "#2ecc71"; // Turn button green during play
    
    displayNewWord();
    runTimer();
}

function displayNewWord() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * words.length);
    } while (randomIndex === lastWordIndex);
    
    lastWordIndex = randomIndex;
    line1.innerText = "Word:";
    line2.innerText = words[randomIndex];
    playBeep(1200, 0.05); // Snap sound on skip
}

function runTimer() {
    if (!gameActive) return;

    let timeElapsed = Date.now() - gameStartTime;
    let timeRemaining = totalGameTime - timeElapsed;

    if (timeRemaining <= 0) {
        gameOver();
        return;
    }

    // Map time remaining to beep rate (Dynamic speeding up)
    // Starts slow, speeds up down to 100ms intervals
    let beepInterval = (timeRemaining / totalGameTime) * 900 + 100;

    playBeep(1000, 0.05);

    timerLoop = setTimeout(runTimer, beepInterval);
}

function gameOver() {
    gameActive = false;
    clearTimeout(timerLoop);
    
    line1.innerText = "TIME'S UP!";
    line2.innerText = "Click Restart";
    actionBtn.innerText = "RESTART";
    actionBtn.style.backgroundColor = "#e74c3c"; // Turn back to red
    
    // Play sad loser buzzer sound sequence
    playBeep(300, 0.4);
    setTimeout(() => playBeep(150, 0.6), 450);
}

// Button click logic
actionBtn.addEventListener('click', () => {
    // Web audio requires user interaction to initialize context safety rules
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    if (!gameActive) {
        startGame();
    } else {
        displayNewWord();
    }
});

// Spacebar or Enter button compatibility
window.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        actionBtn.click();
    }
});
