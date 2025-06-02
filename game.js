// F1 Manager Pro - Main Game Logic

class F1ManagerGame {
    constructor() {
        this.gameData = {
            season: 2024,
            currentRace: 1,
            totalRaces: 24,
            budget: 50000000,
            team: {
                name: "Red Bull Racing",
                founded: 2005,
                base: "Milton Keynes, UK",
                staff: 450,
                points: 0,
                wins: 0,
                position: 1,
                facilities: {
                    windTunnel: 3,
                    simulator: 2,
                    factory: 4
                }
            },
            drivers: [
                {
                    id: 1,
                    name: "Max Verstappen",
                    age: 26,
                    nationality: "Dutch",
                    speed: 95,
                    racecraft: 92,
                    experience: 88,
                    salary: 15000000,
                    contract: 2,
                    points: 0,
                    wins: 0
                },
                {
                    id: 2,
                    name: "Sergio Perez",
                    age: 34,
                    nationality: "Mexican",
                    speed: 85,
                    racecraft: 88,
                    experience: 95,
                    salary: 8000000,
                    contract: 1,
                    points: 0,
                    wins: 0
                }
            ],
            car: {
                aerodynamics: 75,
                engine: 80,
                chassis: 72,
                reliability: 85
            },
            developmentProjects: [],
            races: [
                { name: "Bahrain International Circuit", country: "Bahrain", date: "March 5, 2024", length: "5.412", turns: 15, weather: "Hot & Dry", temperature: 32 },
                { name: "Saudi Arabian Grand Prix", country: "Saudi Arabia", date: "March 19, 2024", length: "6.174", turns: 27, weather: "Warm & Clear", temperature: 28 },
                { name: "Australian Grand Prix", country: "Australia", date: "April 2, 2024", length: "5.278", turns: 14, weather: "Mild & Sunny", temperature: 24 },
                { name: "Japanese Grand Prix", country: "Japan", date: "April 16, 2024", length: "5.807", turns: 18, weather: "Cool & Overcast", temperature: 18 },
                { name: "Chinese Grand Prix", country: "China", date: "April 30, 2024", length: "5.451", turns: 16, weather: "Mild & Humid", temperature: 22 },
                { name: "Miami Grand Prix", country: "USA", date: "May 14, 2024", length: "5.412", turns: 19, weather: "Hot & Humid", temperature: 30 },
                { name: "Emilia Romagna Grand Prix", country: "Italy", date: "May 28, 2024", length: "4.909", turns: 15, weather: "Warm & Dry", temperature: 26 },
                { name: "Monaco Grand Prix", country: "Monaco", date: "June 11, 2024", length: "3.337", turns: 19, weather: "Warm & Clear", temperature: 25 },
                { name: "Canadian Grand Prix", country: "Canada", date: "June 25, 2024", length: "4.361", turns: 14, weather: "Cool & Variable", temperature: 20 },
                { name: "Spanish Grand Prix", country: "Spain", date: "July 9, 2024", length: "4.655", turns: 16, weather: "Hot & Dry", temperature: 32 },
                { name: "Austrian Grand Prix", country: "Austria", date: "July 23, 2024", length: "4.318", turns: 10, weather: "Warm & Clear", temperature: 27 },
                { name: "British Grand Prix", country: "United Kingdom", date: "August 6, 2024", length: "5.891", turns: 18, weather: "Cool & Rainy", temperature: 19 },
                { name: "Hungarian Grand Prix", country: "Hungary", date: "August 20, 2024", length: "4.381", turns: 14, weather: "Hot & Dry", temperature: 31 },
                { name: "Belgian Grand Prix", country: "Belgium", date: "September 3, 2024", length: "7.004", turns: 19, weather: "Cool & Wet", temperature: 17 },
                { name: "Dutch Grand Prix", country: "Netherlands", date: "September 17, 2024", length: "4.259", turns: 14, weather: "Mild & Windy", temperature: 21 },
                { name: "Italian Grand Prix", country: "Italy", date: "October 1, 2024", length: "5.793", turns: 11, weather: "Warm & Sunny", temperature: 28 },
                { name: "Singapore Grand Prix", country: "Singapore", date: "October 15, 2024", length: "5.063", turns: 23, weather: "Hot & Humid", temperature: 33 },
                { name: "United States Grand Prix", country: "USA", date: "October 29, 2024", length: "5.513", turns: 20, weather: "Warm & Clear", temperature: 26 },
                { name: "Mexican Grand Prix", country: "Mexico", date: "November 12, 2024", length: "4.304", turns: 17, weather: "Warm & Dry", temperature: 25 },
                { name: "Brazilian Grand Prix", country: "Brazil", date: "November 26, 2024", length: "4.309", turns: 15, weather: "Hot & Humid", temperature: 29 },
                { name: "Las Vegas Grand Prix", country: "USA", date: "December 10, 2024", length: "6.201", turns: 17, weather: "Cool & Clear", temperature: 15 },
                { name: "Qatar Grand Prix", country: "Qatar", date: "December 17, 2024", length: "5.380", turns: 16, weather: "Hot & Dry", temperature: 35 },
                { name: "Saudi Arabian Grand Prix", country: "Saudi Arabia", date: "December 24, 2024", length: "6.174", turns: 27, weather: "Warm & Clear", temperature: 28 },
                { name: "Abu Dhabi Grand Prix", country: "UAE", date: "December 31, 2024", length: "5.554", turns: 21, weather: "Hot & Clear", temperature: 31 }
            ],
            allTeams: [
                { name: "Red Bull Racing", points: 0, wins: 0 },
                { name: "Mercedes", points: 0, wins: 0 },
                { name: "Ferrari", points: 0, wins: 0 },
                { name: "McLaren", points: 0, wins: 0 },
                { name: "Alpine", points: 0, wins: 0 },
                { name: "Aston Martin", points: 0, wins: 0 },
                { name: "AlphaTauri", points: 0, wins: 0 },
                { name: "Alfa Romeo", points: 0, wins: 0 },
                { name: "Haas", points: 0, wins: 0 },
                { name: "Williams", points: 0, wins: 0 }
            ],
            allDrivers: [
                { name: "Max Verstappen", team: "Red Bull Racing", points: 0, wins: 0 },
                { name: "Sergio Perez", team: "Red Bull Racing", points: 0, wins: 0 },
                { name: "Lewis Hamilton", team: "Mercedes", points: 0, wins: 0 },
                { name: "George Russell", team: "Mercedes", points: 0, wins: 0 },
                { name: "Charles Leclerc", team: "Ferrari", points: 0, wins: 0 },
                { name: "Carlos Sainz", team: "Ferrari", points: 0, wins: 0 },
                { name: "Lando Norris", team: "McLaren", points: 0, wins: 0 },
                { name: "Oscar Piastri", team: "McLaren", points: 0, wins: 0 },
                { name: "Fernando Alonso", team: "Aston Martin", points: 0, wins: 0 },
                { name: "Lance Stroll", team: "Aston Martin", points: 0, wins: 0 },
                { name: "Pierre Gasly", team: "Alpine", points: 0, wins: 0 },
                { name: "Esteban Ocon", team: "Alpine", points: 0, wins: 0 },
                { name: "Yuki Tsunoda", team: "AlphaTauri", points: 0, wins: 0 },
                { name: "Daniel Ricciardo", team: "AlphaTauri", points: 0, wins: 0 },
                { name: "Valtteri Bottas", team: "Alfa Romeo", points: 0, wins: 0 },
                { name: "Zhou Guanyu", team: "Alfa Romeo", points: 0, wins: 0 },
                { name: "Kevin Magnussen", team: "Haas", points: 0, wins: 0 },
                { name: "Nico Hulkenberg", team: "Haas", points: 0, wins: 0 },
                { name: "Alex Albon", team: "Williams", points: 0, wins: 0 },
                { name: "Logan Sargeant", team: "Williams", points: 0, wins: 0 }
            ],
            qualifyingResults: [],
            raceResults: [],
            newsItems: []
        };

        this.pointsSystem = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateUI();
        this.autoSave();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Race Weekend
        document.getElementById('start-qualifying').addEventListener('click', () => {
            this.startQualifying();
        });

        document.getElementById('start-race-btn').addEventListener('click', () => {
            this.startRace();
        });

        document.getElementById('start-race-weekend').addEventListener('click', () => {
            this.switchTab('race');
        });

        // Settings
        document.getElementById('auto-save').addEventListener('change', (e) => {
            if (e.target.checked) {
                this.autoSave();
            }
        });
    }

    switchTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Remove active class from all nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected tab
        document.getElementById(tabName).classList.add('active');
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab-specific content
        this.updateTabContent(tabName);
    }

    updateTabContent(tabName) {
        switch (tabName) {
            case 'standings':
                this.updateStandings();
                break;
            case 'drivers':
                this.updateDriversTab();
                break;
            case 'car-development':
                this.updateCarDevelopmentTab();
                break;
            case 'race':
                this.updateRaceTab();
                break;
        }
    }

    updateUI() {
        // Update header info
        document.getElementById('current-season').textContent = `Season: ${this.gameData.season}`;
        document.getElementById('current-race').textContent = `Race: ${this.gameData.currentRace}/${this.gameData.totalRaces}`;
        document.getElementById('team-budget').textContent = `Budget: $${(this.gameData.budget / 1000000).toFixed(1)}M`;

        // Update dashboard
        document.getElementById('team-name').textContent = this.gameData.team.name;
        document.getElementById('team-position').textContent = `${this.gameData.team.position}${this.getOrdinalSuffix(this.gameData.team.position)}`;
        document.getElementById('team-points').textContent = this.gameData.team.points;
        document.getElementById('team-wins').textContent = this.gameData.team.wins;

        // Update driver info
        document.getElementById('driver1-name').textContent = this.gameData.drivers[0].name;
        document.getElementById('driver1-points').textContent = this.gameData.drivers[0].points;
        document.getElementById('driver2-name').textContent = this.gameData.drivers[1].name;
        document.getElementById('driver2-points').textContent = this.gameData.drivers[1].points;

        // Update next race info
        const nextRace = this.gameData.races[this.gameData.currentRace - 1];
        document.getElementById('next-circuit').textContent = nextRace.name;
        document.getElementById('next-date').textContent = nextRace.date;
        document.getElementById('weather').textContent = nextRace.weather;

        // Update team details
        document.getElementById('team-name-display').textContent = this.gameData.team.name;
        document.getElementById('team-founded').textContent = this.gameData.team.founded;
        document.getElementById('team-base').textContent = this.gameData.team.base;
        document.getElementById('team-budget-display').textContent = this.gameData.budget.toLocaleString();
        document.getElementById('team-staff').textContent = this.gameData.team.staff;

        // Update facilities
        document.getElementById('wind-tunnel-level').textContent = this.gameData.team.facilities.windTunnel;
        document.getElementById('simulator-level').textContent = this.gameData.team.facilities.simulator;
        document.getElementById('factory-level').textContent = this.gameData.team.facilities.factory;

        // Update car stats
        this.updateCarStats();
    }

    updateCarStats() {
        const car = this.gameData.car;
        document.getElementById('aero-value').textContent = car.aerodynamics;
        document.getElementById('engine-value').textContent = car.engine;
        document.getElementById('chassis-value').textContent = car.chassis;
        document.getElementById('reliability-value').textContent = car.reliability;

        // Update progress bars
        document.querySelector('#aero-value').parentElement.nextElementSibling.firstElementChild.style.width = `${car.aerodynamics}%`;
        document.querySelector('#engine-value').parentElement.nextElementSibling.firstElementChild.style.width = `${car.engine}%`;
        document.querySelector('#chassis-value').parentElement.nextElementSibling.firstElementChild.style.width = `${car.chassis}%`;
        document.querySelector('#reliability-value').parentElement.nextElementSibling.firstElementChild.style.width = `${car.reliability}%`;
    }

    updateDriversTab() {
        const driver1 = this.gameData.drivers[0];
        const driver2 = this.gameData.drivers[1];

        // Update driver 1 details
        document.getElementById('driver1-name-detail').textContent = driver1.name;
        document.getElementById('driver1-age').textContent = driver1.age;
        document.getElementById('driver1-nationality').textContent = driver1.nationality;
        document.getElementById('driver1-speed').textContent = driver1.speed;
        document.getElementById('driver1-racecraft').textContent = driver1.racecraft;
        document.getElementById('driver1-experience').textContent = driver1.experience;
        document.getElementById('driver1-salary').textContent = driver1.salary.toLocaleString();
        document.getElementById('driver1-contract').textContent = `${driver1.contract} years`;

        // Update driver 2 details
        document.getElementById('driver2-name-detail').textContent = driver2.name;
        document.getElementById('driver2-age').textContent = driver2.age;
        document.getElementById('driver2-nationality').textContent = driver2.nationality;
        document.getElementById('driver2-speed').textContent = driver2.speed;
        document.getElementById('driver2-racecraft').textContent = driver2.racecraft;
        document.getElementById('driver2-experience').textContent = driver2.experience;
        document.getElementById('driver2-salary').textContent = driver2.salary.toLocaleString();
        document.getElementById('driver2-contract').textContent = `${driver2.contract} years`;
    }

    updateCarDevelopmentTab() {
        const activeProjectsDiv = document.getElementById('active-projects');
        if (this.gameData.developmentProjects.length === 0) {
            activeProjectsDiv.innerHTML = '<p>No active development projects.</p>';
        } else {
            activeProjectsDiv.innerHTML = this.gameData.developmentProjects.map(project => 
                `<div class="project">
                    <h4>${project.name}</h4>
                    <p>Progress: ${project.progress}/${project.duration} races</p>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${(project.progress / project.duration) * 100}%"></div>
                    </div>
                </div>`
            ).join('');
        }
    }

    updateRaceTab() {
        const currentRace = this.gameData.races[this.gameData.currentRace - 1];
        document.getElementById('race-circuit').textContent = currentRace.name;
        document.getElementById('circuit-length').textContent = `${currentRace.length} km`;
        document.getElementById('circuit-turns').textContent = currentRace.turns;
        document.getElementById('race-weather').textContent = currentRace.weather;
        document.getElementById('race-temperature').textContent = `${currentRace.temperature}°C`;
    }

    updateStandings() {
        // Sort drivers by points
        const sortedDrivers = [...this.gameData.allDrivers].sort((a, b) => b.points - a.points);
        const driversTableBody = document.getElementById('drivers-standings-body');
        driversTableBody.innerHTML = sortedDrivers.map((driver, index) => 
            `<tr ${driver.team === this.gameData.team.name ? 'style="background: rgba(229, 62, 62, 0.2);"' : ''}>
                <td>${index + 1}</td>
                <td>${driver.name}</td>
                <td>${driver.team}</td>
                <td>${driver.points}</td>
                <td>${driver.wins}</td>
            </tr>`
        ).join('');

        // Sort teams by points
        const sortedTeams = [...this.gameData.allTeams].sort((a, b) => b.points - a.points);
        const constructorsTableBody = document.getElementById('constructors-standings-body');
        constructorsTableBody.innerHTML = sortedTeams.map((team, index) => 
            `<tr ${team.name === this.gameData.team.name ? 'style="background: rgba(229, 62, 62, 0.2);"' : ''}>
                <td>${index + 1}</td>
                <td>${team.name}</td>
                <td>${team.points}</td>
                <td>${team.wins}</td>
            </tr>`
        ).join('');
    }

    startQualifying() {
        const liveUpdates = document.getElementById('live-updates');
        liveUpdates.innerHTML = '<p>🏁 Qualifying session starting...</p>';
        
        // Simulate qualifying
        setTimeout(() => {
            this.simulateQualifying();
            document.getElementById('start-race-btn').disabled = false;
        }, 2000);
    }

    simulateQualifying() {
        const results = [];
        const basePerformance = this.calculateCarPerformance();
        
        // Add all drivers to qualifying
        this.gameData.allDrivers.forEach((driver, index) => {
            let performance = basePerformance;
            
            // Adjust performance for our drivers
            if (driver.team === this.gameData.team.name) {
                const ourDriver = this.gameData.drivers.find(d => d.name === driver.name);
                performance += (ourDriver.speed + ourDriver.racecraft) / 2 * 0.3;
            } else {
                // Random performance for other drivers
                performance += Math.random() * 40 + 40;
            }
            
            // Add some randomness
            performance += (Math.random() - 0.5) * 20;
            
            results.push({
                driver: driver.name,
                team: driver.team,
                time: this.generateLapTime(performance),
                performance: performance
            });
        });
        
        // Sort by performance (higher is better, but lap time is lower)
        results.sort((a, b) => b.performance - a.performance);
        
        this.gameData.qualifyingResults = results;
        
        const liveUpdates = document.getElementById('live-updates');
        liveUpdates.innerHTML = '<h4>🏁 Qualifying Results:</h4>' +
            results.slice(0, 10).map((result, index) => 
                `<p>${index + 1}. ${result.driver} (${result.team}) - ${result.time}</p>`
            ).join('');
    }

    startRace() {
        const liveUpdates = document.getElementById('live-updates');
        liveUpdates.innerHTML = '<p>🏁 Race is starting! Lights out and away we go!</p>';
        
        // Simulate race
        setTimeout(() => {
            this.simulateRace();
        }, 3000);
    }

    simulateRace() {
        const results = [];
        const qualifyingOrder = [...this.gameData.qualifyingResults];
        
        // Apply race strategy and performance
        qualifyingOrder.forEach((qResult, index) => {
            let racePerformance = qResult.performance;
            
            // Apply strategy effects for our drivers
            if (qResult.team === this.gameData.team.name) {
                const driver = this.gameData.drivers.find(d => d.name === qResult.driver);
                const strategy = document.getElementById(`driver${driver.id}-strategy`).value;
                const pitStrategy = document.getElementById('pit-strategy').value;
                
                // Strategy effects
                switch (strategy) {
                    case 'aggressive':
                        racePerformance += 10;
                        break;
                    case 'conservative':
                        racePerformance += 5;
                        break;
                    case 'balanced':
                        racePerformance += 7;
                        break;
                }
                
                // Pit strategy effects
                switch (pitStrategy) {
                    case 'one-stop':
                        racePerformance += 3;
                        break;
                    case 'two-stop':
                        racePerformance += 5;
                        break;
                    case 'three-stop':
                        racePerformance -= 2;
                        break;
                }
            }
            
            // Add race randomness (reliability, incidents, etc.)
            const reliability = qResult.team === this.gameData.team.name ? this.gameData.car.reliability : 80;
            const reliabilityFactor = Math.random() * 100;
            
            if (reliabilityFactor > reliability) {
                racePerformance -= 30; // DNF or major issue
            } else {
                racePerformance += (Math.random() - 0.5) * 15; // Normal race variance
            }
            
            results.push({
                driver: qResult.driver,
                team: qResult.team,
                startPosition: index + 1,
                racePerformance: racePerformance,
                finished: reliabilityFactor <= reliability
            });
        });
        
        // Sort by race performance
        results.sort((a, b) => b.racePerformance - a.racePerformance);
        
        // Assign finishing positions
        let position = 1;
        results.forEach(result => {
            if (result.finished) {
                result.finishPosition = position++;
            } else {
                result.finishPosition = 'DNF';
            }
        });
        
        this.gameData.raceResults = results;
        this.updatePointsAndStandings(results);
        this.displayRaceResults(results);
        
        // Move to next race
        this.gameData.currentRace++;
        if (this.gameData.currentRace > this.gameData.totalRaces) {
            this.endSeason();
        } else {
            this.updateUI();
        }
    }

    updatePointsAndStandings(results) {
        const finishedResults = results.filter(r => r.finished).slice(0, 10);
        
        finishedResults.forEach((result, index) => {
            const points = this.pointsSystem[index] || 0;
            
            // Update driver points
            const driver = this.gameData.allDrivers.find(d => d.name === result.driver);
            if (driver) {
                driver.points += points;
                if (index === 0) driver.wins++;
            }
            
            // Update team points
            const team = this.gameData.allTeams.find(t => t.name === result.team);
            if (team) {
                team.points += points;
                if (index === 0) team.wins++;
            }
            
            // Update our drivers
            if (result.team === this.gameData.team.name) {
                const ourDriver = this.gameData.drivers.find(d => d.name === result.driver);
                if (ourDriver) {
                    ourDriver.points += points;
                    if (index === 0) ourDriver.wins++;
                }
            }
        });
        
        // Update our team stats
        const ourTeam = this.gameData.allTeams.find(t => t.name === this.gameData.team.name);
        this.gameData.team.points = ourTeam.points;
        this.gameData.team.wins = ourTeam.wins;
        
        // Update team position
        const sortedTeams = [...this.gameData.allTeams].sort((a, b) => b.points - a.points);
        this.gameData.team.position = sortedTeams.findIndex(t => t.name === this.gameData.team.name) + 1;
    }

    displayRaceResults(results) {
        const resultsDiv = document.getElementById('results-display');
        const finishedResults = results.filter(r => r.finished);
        
        resultsDiv.innerHTML = '<h4>🏆 Race Results:</h4>' +
            finishedResults.map((result, index) => {
                const points = this.pointsSystem[index] || 0;
                const isOurDriver = result.team === this.gameData.team.name;
                return `<p ${isOurDriver ? 'style="color: #ffd700; font-weight: bold;"' : ''}>
                    ${result.finishPosition}. ${result.driver} (${result.team}) - ${points} pts
                </p>`;
            }).join('') +
            (results.filter(r => !r.finished).length > 0 ? 
                '<h5>DNF:</h5>' + results.filter(r => !r.finished).map(result => 
                    `<p>${result.driver} (${result.team})</p>`
                ).join('') : '');
        
        document.getElementById('race-results').style.display = 'block';
        
        // Update live updates
        const liveUpdates = document.getElementById('live-updates');
        liveUpdates.innerHTML = resultsDiv.innerHTML;
        
        // Reset qualifying button for next race
        document.getElementById('start-qualifying').disabled = false;
        document.getElementById('start-race-btn').disabled = true;
    }

    calculateCarPerformance() {
        const car = this.gameData.car;
        return (car.aerodynamics + car.engine + car.chassis + car.reliability) / 4;
    }

    generateLapTime(performance) {
        // Base lap time around 1:30.000, adjusted by performance
        const baseTime = 90.0; // seconds
        const adjustment = (100 - performance) * 0.5; // Up to 50 seconds difference
        const totalTime = baseTime + adjustment + (Math.random() - 0.5) * 2;
        
        const minutes = Math.floor(totalTime / 60);
        const seconds = (totalTime % 60).toFixed(3);
        return `${minutes}:${seconds.padStart(6, '0')}`;
    }

    getOrdinalSuffix(num) {
        const j = num % 10;
        const k = num % 100;
        if (j === 1 && k !== 11) return 'st';
        if (j === 2 && k !== 12) return 'nd';
        if (j === 3 && k !== 13) return 'rd';
        return 'th';
    }

    endSeason() {
        alert(`Season ${this.gameData.season} completed! Final position: ${this.gameData.team.position}${this.getOrdinalSuffix(this.gameData.team.position)}`);
        
        // Start new season
        this.gameData.season++;
        this.gameData.currentRace = 1;
        
        // Reset points
        this.gameData.allDrivers.forEach(driver => {
            driver.points = 0;
            driver.wins = 0;
        });
        
        this.gameData.allTeams.forEach(team => {
            team.points = 0;
            team.wins = 0;
        });
        
        this.gameData.drivers.forEach(driver => {
            driver.points = 0;
            driver.wins = 0;
        });
        
        this.gameData.team.points = 0;
        this.gameData.team.wins = 0;
        this.gameData.team.position = 1;
        
        // Increase budget for new season
        this.gameData.budget += 30000000;
        
        this.updateUI();
    }

    autoSave() {
        setInterval(() => {
            if (document.getElementById('auto-save').checked) {
                this.saveGame();
            }
        }, 60000); // Auto-save every minute
    }

    saveGame() {
        const saveData = JSON.stringify(this.gameData);
        localStorage.setItem('f1ManagerSave', saveData);
        
        // Also trigger download
        const blob = new Blob([saveData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `f1manager_save_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.addNewsItem('Game saved successfully!');
    }

    loadGame() {
        const input = document.getElementById('load-file');
        input.click();
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const saveData = JSON.parse(e.target.result);
                        this.gameData = saveData;
                        this.updateUI();
                        this.addNewsItem('Game loaded successfully!');
                    } catch (error) {
                        alert('Invalid save file!');
                    }
                };
                reader.readAsText(file);
            }
        };
    }

    resetGame() {
        if (confirm('Are you sure you want to start a new game? All progress will be lost!')) {
            location.reload();
        }
    }

    addNewsItem(text) {
        const newsFeed = document.getElementById('news-feed');
        const timestamp = new Date().toLocaleTimeString();
        newsFeed.innerHTML = `<p><strong>[${timestamp}]</strong> ${text}</p>` + newsFeed.innerHTML;
    }
}

// Global functions for facility upgrades and development
function upgradeFacility(facilityType) {
    const costs = {
        windTunnel: 5000000,
        simulator: 3000000,
        factory: 8000000
    };
    
    const cost = costs[facilityType];
    if (game.gameData.budget >= cost) {
        game.gameData.budget -= cost;
        game.gameData.team.facilities[facilityType]++;
        
        // Improve car stats based on facility upgrade
        switch (facilityType) {
            case 'windTunnel':
                game.gameData.car.aerodynamics += 2;
                break;
            case 'simulator':
                game.gameData.car.chassis += 2;
                break;
            case 'factory':
                game.gameData.car.reliability += 2;
                break;
        }
        
        game.updateUI();
        game.addNewsItem(`${facilityType} upgraded to level ${game.gameData.team.facilities[facilityType]}!`);
    } else {
        alert('Insufficient budget!');
    }
}

function startDevelopment(projectType) {
    const projects = {
        aero: { name: 'Aerodynamic Package', cost: 3000000, duration: 4, stat: 'aerodynamics', improvement: 5 },
        engine: { name: 'Engine Upgrade', cost: 5000000, duration: 6, stat: 'engine', improvement: 8 },
        chassis: { name: 'Chassis Optimization', cost: 4000000, duration: 5, stat: 'chassis', improvement: 6 },
        reliability: { name: 'Reliability Improvements', cost: 2000000, duration: 3, stat: 'reliability', improvement: 4 }
    };
    
    const project = projects[projectType];
    if (game.gameData.budget >= project.cost) {
        game.gameData.budget -= project.cost;
        game.gameData.developmentProjects.push({
            ...project,
            progress: 0
        });
        
        game.updateUI();
        game.addNewsItem(`Started development of ${project.name}!`);
    } else {
        alert('Insufficient budget!');
    }
}

// Initialize the game when the page loads
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new F1ManagerGame();
    
    // Try to load saved game
    const savedGame = localStorage.getItem('f1ManagerSave');
    if (savedGame) {
        try {
            game.gameData = JSON.parse(savedGame);
            game.updateUI();
            game.addNewsItem('Previous save loaded!');
        } catch (error) {
            console.log('No valid save found, starting new game');
        }
    }
});

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('F1 Manager Pro: Service Worker registered successfully:', registration.scope);
            })
            .catch((error) => {
                console.log('F1 Manager Pro: Service Worker registration failed:', error);
            });
    });
}
