const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const actionBtn = document.getElementById('action-btn');

// Word Bank
// Master Word Bank (380+ Words!)
const words = [
  // --- People, Silly Words & Dad Jokes ---
  "Goober", "Dad Joke", "Couch Potato", "High Five", "Roller Coaster", "Treasure Hunt",
  "Roller Skates", "T-Rex", "Rubber Duck", "Grizzly Bear", "Popcorn", "Smoothie",
  "Fanny Pack", "Cargo Shorts", "Necktie", "Brainstorm", "Duct Tape", "Grill Master",
  "Sneakers", "Wrench", "Power Drill", "Tape Measure", "Slippers", "Hammock",
  "Grumpy Bear", "Clown Fish", "Koala Bear", "Boomerang", "Snowman", "Wild Goose Chase",
  "Blessing In Disguise", "Cry Over Spilt Milk", "Bite The Bullet", "Hit The Sack",
  "Barbecue", "Golf Club", "Football", "Bowling Alley", "Checkers", "Card Shark",
  // New Additions:
  "Goosebumps", "Bamboozled", "Skedaddle", "Shenanigans", "Whippersnapper", 
  "Malarkey", "Flabbergasted", "Giggle", "Gnome", "Sock Puppet", 
  "Rubber Band", "Bubble Wrap", "Slinky", "Bumper Car", "Pogo Stick", 
  "Lawn Dart", "Water Balloon", "Marshmallow", "Piggy Bank", "Teddy Bear", 
  "Yard Sale", "Toolbox", "Junk Drawer", "Newspaper", "Coupon Clipper", 
  "Nap Time", "Rocking Chair", "Old Timer", "Geezer", "Balding", 
  "Comb Over", "Mustache Wax", "Bow Tie", "Suspenders", "Dad Shoes",
  
  // --- Space & Sci-Fi (Themed Additions!) ---
  "Astronaut", "Time Machine", "Spaceship", "Flying Saucer", "Alien", "Cosmonaut",
  "Galaxy", "Comet", "Meteor", "Black Hole", "Star Wars", "Super Mario",
  "Darth Vader", "Luke Skywalker", "Princess Leia", "Lightsaber", "Teleporter",
  "Space Station", "Gravity", "Light Speed", "Wormhole", "Mars Rover",
  "Rocket Ship", "Planet", "Cosmos", "UFO", "Extraterrestrial", "Asteroid Belt",
  "Nasa", "Shuttle Launch", "Robot", "Laser Gun", "Jetpack", "Zero Gravity",
  // New Additions:
  "Supernova", "Nebula", "Milky Way", "Solar Flare", "Lunar Eclipse", 
  "Sputnik", "Apollo Eleven", "Cosmic Dust", "Constellation", "Orion", 
  "Big Dipper", "Stargazing", "Telescope", "Satellite", "Orbit", 
  "Deep Space", "Interstellar", "Andromeda", "Event Horizon", "Spacewalk", 
  "Rocket Fuel", "Launchpad", "Gravity Boots", "Space Helmet", "Moon Dust", 
  "Quasar", "Exoplanet", "Red Giant", "White Dwarf", "Cyberspace", 
  "Android", "Cyborg", "Mech Suit", "Starship", "Hyperdrive", 
  "Phaser", "Force Field", "Tractor Beam", "Mother Ship", "Alien Abduction",
  
  // --- Pop Culture, Gaming & Technology ---
  "Super Mario", "Pac Man", "Batman", "Spider Man", "Harry Potter",
  "Sherlock Holmes", "Jurassic Park", "Avengers", "Minecraft", "James Bond",
  "The Matrix", "Star Trek", "Pokemon", "Fortnite", "Ghostbusters",
  "Back To The Future", "Lord of the Rings", "Indiana Jones", "Terminator",
  "E.T.", "Smartphone", "Virtual Reality", "Laptop", "Video Game", "Drone",
  "Selfie Stick", "Hashtag", "App Store", "Streaming Service", "Podcast",
  // New Additions:
  "Cyberpunk", "Steampunk", "Retro Gaming", "Arcade Cabinet", "Joystick", 
  "Easter Egg", "Speedrun", "High Score", "Game Over", "Pixel Art", 
  "Loading Screen", "Glitch", "Artificial Intelligence", "Hologram", "Microchip", 
  "Supercomputer", "Wi-Fi Router", "Bluetooth", "Smart Watch", " Headphones", 
  "Viral Video", "Clickbait", "Emoji", "Meme", "Avatar", 
  "Yoda", "Baby Yoda", "Chewbacca", "Hogwarts", "Gryffindor", 
  "Gotham City", "Batcave", "Daily Bugle", "Wakanda", "Infinity Gauntlet", 
  "Transformers", "Optimis Prime", "Megatron", "Zelda", "Pikachu",
  
  // --- Places, Activities & Nature ---
  "Barbecue", "Coffee Mug", "Lawn Mower", "Remote Control", "Fishing Rod",
  "Toolbox", "Thermostat", "Garage", "Pocket Knife", "Flashlight", "WD-40",
  "Car Wash", "Leaf Blower", "Leather Wallet", "Flannel Shirt", "Recliner",
  "Work Bench", "Oldies Radio", "Grand Canyon", "Mount Everest", "Eiffel Tower",
  "Yellowstone", "Amusement Park", "Sandy Beach", "Treehouse", "Hiking Trail",
  "Waterfall", "Coral Reef", "Campfire", "Skyscraper", "Time Machine",
  // New Additions:
  "North Pole", "South Pole", "Sahara Desert", "Amazon Rainforest", "Bermuda Triangle", 
  "Volcano", "Glacier", "Geyser", "Canyon", "Island Resort", 
  "Cruise Ship", "Water Park", "Mini Golf", "Bowling Alley", "Batting Cage", 
  "Tailgating", "Road Trip", "Caravan", "Campground", "Sleeping Bag", 
  "Backpacking", "Rock Climbing", "Scuba Diving", "White Water Rafting", "Zip Lining", 
  "Skydiving", "Bungee Jumping", "Ski Resort", "Snowboarding", "Ice Skating", 
  "Hardware Store", "Lumberyard", "Junkyard", "Flea Market", "Thrift Shop", 
  "Antiques", "Drive In Movie", "Concert Hall", "Museum", "Planetarium",
  
  // --- Animals, Food & Other Fun Things ---
  "Taco Tuesday", "Pizza Party", "Pancakes", "Ice Cream", "Bacon", "Donut Hole",
  "Apple Pie", "French Fries", "Maple Syrup", "Barbecue Sauce", "Steak Knife",
  "Fried Chicken", "Watermelon", "Apple Cider", "High Five", "Brainstorm",
  "Roller Coaster", "Campfire", "Skyscraper", "Time Machine", "Woodpecker",
  "Boomerang", "Snowman", "Lightning Bolt", "Piece Of Cake", "Break A Leg",
  "Under The Weather", "Spill The Beans", "Bald Eagle", "Tyrannosaurus Rex",
  "Great White Shark", "Kangaroo", "Bumblebee", "Sea Turtle", "Chameleon",
  // New Additions:
  "Spicy Nachos", "Chili Dog", "Cheese Curds", "Mozzarella Sticks", "Onion Rings", 
  "Potato Chips", "Pretzel Twist", "Beef Sliders", "Pulled Pork", "Smoked Ribs", 
  "Corn On The Cob", "Baked Beans", "Potato Salad", "Apple Fritter", "Cinnamon Roll", 
  "Milkshake", "Root Beer Float", "Lemonade", "Iced Tea", "Hot Chocolate", 
  "Platypus", "Narwhal", "Sloth", "Meerkats", "Flamingo", 
  "Hammerhead Shark", "Electric Eel", "Octopus", "Giant Squid", "Sea Horse", 
  "Honey Badger", "Wolverine", "Tasmanian Devil", "Hedgehog", "Porcupine", 
  "Barking Up The Wrong Tree", "Curiosity Killed The Cat", "Burn The Midnight Oil", "An Arm And A Leg", "Don't Count Your Chickens"
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
