// F1 Manager Pro - Main Game Logic with Enhanced Fun Mechanics

class F1ManagerGame {
    constructor() {
        this.gameData = {
            season: 2024,
            currentRace: 1,
            totalRaces: 24,
            budget: 50000000,
            
            // Flow State & Difficulty Scaling
            difficultyLevel: 'medium', // easy, medium, hard, adaptive
            playerSkillRating: 50, // 0-100, adapts based on performance
            adaptiveDifficulty: true,
            performanceHistory: [],
            
            // Achievement & Mastery System
            achievements: [],
            unlockedFeatures: ['basic_strategy', 'pit_stops'],
            experiencePoints: 0,
            managerLevel: 1,
            
            // Variable Reward System
            luck: 50, // affects random events
            morale: 75, // team morale affects performance
            reputation: 50, // affects sponsorship deals and driver signings
            
            // Exploration & Discovery
            discoveredSecrets: [],
            hiddenSetups: {},
            researchProgress: {},
            
            // Social & Competition
            rivalTeams: ['Mercedes', 'Ferrari'],
            seasonGoals: [],
            personalBests: {},
            
            team: {
                name: "Red Bull Racing",
                founded: 2005,
                base: "Milton Keynes, UK",
                staff: 450,
                points: 0,
                wins: 0,
                position: 1,
                // Enhanced team mechanics
                morale: 75,
                reputation: 70,
                teamChemistry: 60,
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
                    wins: 0,
                    // Enhanced driver mechanics
                    morale: 85,
                    confidence: 90,
                    hiddenTalents: ['wet_weather', 'overtaking'],
                    personality: 'aggressive',
                    relationshipWithTeammate: 70
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
                    wins: 0,
                    // Enhanced driver mechanics
                    morale: 80,
                    confidence: 75,
                    hiddenTalents: ['tire_management', 'defensive_driving'],
                    personality: 'balanced',
                    relationshipWithTeammate: 70
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
        this.initializeAchievements();
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
    }    updateUI() {
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

        // Update Flow State & Skill Rating
        const skillElement = document.getElementById('skill-rating');
        const skillProgressElement = document.getElementById('skill-progress');
        const difficultyElement = document.getElementById('current-difficulty');
        
        if (skillElement) {
            skillElement.textContent = `${this.gameData.playerSkillRating}/100`;
        }
        if (skillProgressElement) {
            skillProgressElement.style.width = `${this.gameData.playerSkillRating}%`;
        }
        if (difficultyElement) {
            difficultyElement.textContent = this.gameData.difficultyLevel.charAt(0).toUpperCase() + this.gameData.difficultyLevel.slice(1);
            difficultyElement.className = `difficulty-indicator ${this.gameData.difficultyLevel}`;
        }

        // Update Achievement Progress
        const achievementCountElement = document.getElementById('achievement-count');
        if (achievementCountElement && this.achievementDefinitions) {
            const totalAchievements = Object.keys(this.achievementDefinitions).length;
            achievementCountElement.textContent = `${this.gameData.achievements.length}/${totalAchievements}`;
        }

        // Update Manager Level & XP
        const managerLevelElement = document.getElementById('manager-level');
        const xpProgressElement = document.getElementById('xp-progress');
        const currentXpElement = document.getElementById('current-xp');
        const nextLevelXpElement = document.getElementById('next-level-xp');
        
        if (managerLevelElement) {
            managerLevelElement.textContent = this.gameData.managerLevel;
        }
        
        const currentLevelXp = (this.gameData.managerLevel - 1) * 200;
        const nextLevelXp = this.gameData.managerLevel * 200;
        const progressInLevel = this.gameData.experiencePoints - currentLevelXp;
        const progressPercentage = (progressInLevel / 200) * 100;
        
        if (xpProgressElement) {
            xpProgressElement.style.width = `${Math.max(0, Math.min(100, progressPercentage))}%`;
        }
        if (currentXpElement) {
            currentXpElement.textContent = this.gameData.experiencePoints;
        }
        if (nextLevelXpElement) {
            nextLevelXpElement.textContent = nextLevelXp;
        }

        // Update Season Goals Progress
        this.updateSeasonGoalsDisplay();

        // Update Team Morale & Reputation
        const moraleElement = document.getElementById('team-morale');
        const reputationElement = document.getElementById('team-reputation');
        
        if (moraleElement) {
            moraleElement.textContent = `${this.gameData.team.morale}%`;
            moraleElement.style.color = this.gameData.team.morale > 75 ? '#22c55e' : 
                                       this.gameData.team.morale > 50 ? '#fbbf24' : '#ef4444';
        }
        if (reputationElement) {
            reputationElement.textContent = `${this.gameData.reputation}%`;
        }

        // Update Discovered Secrets Count
        const secretsElement = document.getElementById('secrets-discovered');
        if (secretsElement) {
            secretsElement.textContent = this.gameData.discoveredSecrets.length;
        }        // Update Rival Status
        this.updateRivalDisplay();
        
        // Update enhanced visual elements
        this.updateVisualDashboard();
        this.updatePerformanceGauge();
    }

    // Enhanced Visual Methods
    updateVisualDashboard() {
        // Update driver standings visual
        const drivers = this.gameData.drivers;
        const sortedDrivers = [...this.gameData.allDrivers].sort((a, b) => b.points - a.points);
        
        drivers.forEach((driver, index) => {
            const driverPosition = sortedDrivers.findIndex(d => d.name === driver.name) + 1;
            const maxPoints = Math.max(...sortedDrivers.map(d => d.points)) || 100;
            const progressPercentage = (driver.points / maxPoints) * 100;
            
            // Update dashboard driver info
            const nameElement = document.getElementById(`driver${index + 1}-name-dash`);
            const positionElement = document.getElementById(`driver${index + 1}-position-dash`);
            const pointsElement = document.getElementById(`driver${index + 1}-points-dash`);
            const progressElement = document.getElementById(`driver${index + 1}-progress`);
            
            if (nameElement) nameElement.textContent = driver.name;
            if (positionElement) positionElement.textContent = `#${driverPosition}`;
            if (pointsElement) pointsElement.textContent = `${driver.points} pts`;
            if (progressElement) {
                progressElement.style.width = `${Math.max(5, progressPercentage)}%`;
                // Color based on performance
                if (driverPosition <= 3) {
                    progressElement.style.background = 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)';
                } else if (driverPosition <= 10) {
                    progressElement.style.background = 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)';
                } else {
                    progressElement.style.background = 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)';
                }
            }
        });
    }

    updatePerformanceGauge() {
        const car = this.gameData.car;
        const overallRating = Math.round((car.aerodynamics + car.engine + car.chassis + car.reliability) / 4);
        
        const gaugeElement = document.getElementById('performance-rating');
        if (gaugeElement) {
            gaugeElement.textContent = overallRating;
        }
        
        // Update performance bars
        const performanceBars = document.getElementById('performance-bars');
        if (performanceBars) {
            const bars = performanceBars.querySelectorAll('.chart-bar');
            const values = [car.aerodynamics, car.engine, car.chassis, car.reliability];
            
            bars.forEach((bar, index) => {
                if (values[index] !== undefined) {
                    bar.style.height = `${values[index]}%`;
                    bar.setAttribute('data-value', values[index]);
                    
                    // Color coding based on performance
                    if (values[index] >= 85) {
                        bar.style.background = 'linear-gradient(to top, #22c55e 0%, #16a34a 100%)';
                    } else if (values[index] >= 70) {
                        bar.style.background = 'linear-gradient(to top, #fbbf24 0%, #f59e0b 100%)';
                    } else {
                        bar.style.background = 'linear-gradient(to top, #ef4444 0%, #dc2626 100%)';
                    }
                }
            });
        }
    }

    // Achievement Notification System
    showAchievementNotification(achievement) {
        const notification = document.getElementById('achievement-notification');
        const title = document.getElementById('achievement-title');
        const description = document.getElementById('achievement-description');
        const xp = document.getElementById('achievement-xp');
        
        if (notification && title && description && xp) {
            title.textContent = achievement.name;
            description.textContent = achievement.description;
            xp.textContent = `+${achievement.xp} XP`;
            
            notification.classList.add('show');
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);
        }
    }

    // Enhanced Race Visual Updates
    updateRaceVisuals(raceData) {
        if (!raceData) return;
        
        // Update position tracker
        this.updatePositionTracker(raceData.position, raceData.positionChange);
        
        // Update lap times
        this.updateLapTimeDisplay(raceData.currentLap, raceData.sectors, raceData.bestLap);
        
        // Update track conditions
        this.updateTrackConditions(raceData.weather);
        
        // Update car status
        this.updateCarStatus(raceData.carStatus);
        
        // Update timing board
        this.updateTimingBoard(raceData.timingData);
        
        // Add radio message
        if (raceData.radioMessage) {
            this.addRadioMessage(raceData.radioMessage);
        }
    }

    updatePositionTracker(position, change) {
        const positionElement = document.getElementById('current-position');
        const changeElement = document.getElementById('position-change');
        
        if (positionElement) {
            positionElement.textContent = position || '--';
        }
        
        if (changeElement && change !== undefined) {
            if (change > 0) {
                changeElement.innerHTML = `<span class="position-up">↑${change}</span>`;
                changeElement.className = 'position-change position-up';
            } else if (change < 0) {
                changeElement.innerHTML = `<span class="position-down">↓${Math.abs(change)}</span>`;
                changeElement.className = 'position-change position-down';
            } else {
                changeElement.innerHTML = `<span class="position-same">--</span>`;
                changeElement.className = 'position-change position-same';
            }
        }
    }

    updateLapTimeDisplay(currentLap, sectors, bestLap) {
        const currentLapElement = document.getElementById('current-lap-time');
        const bestLapElement = document.getElementById('best-lap-time');
        
        if (currentLapElement && currentLap) {
            currentLapElement.textContent = this.formatLapTime(currentLap);
        }
        
        if (bestLapElement && bestLap) {
            bestLapElement.textContent = this.formatLapTime(bestLap);
        }
        
        // Update sector times
        if (sectors) {
            sectors.forEach((sectorTime, index) => {
                const sectorElement = document.getElementById(`sector-${index + 1}`);
                const timeElement = document.getElementById(`sector-${index + 1}-time`);
                
                if (timeElement) {
                    timeElement.textContent = sectorTime.time.toFixed(1);
                }
                
                if (sectorElement) {
                    // Remove existing classes
                    sectorElement.classList.remove('fastest', 'personal-best', 'slow');
                    
                    // Add appropriate class based on sector performance
                    if (sectorTime.type === 'fastest') {
                        sectorElement.classList.add('fastest');
                    } else if (sectorTime.type === 'personal-best') {
                        sectorElement.classList.add('personal-best');
                    } else if (sectorTime.type === 'slow') {
                        sectorElement.classList.add('slow');
                    }
                }
            });
        }
    }

    updateTrackConditions(weather) {
        if (!weather) return;
        
        const weatherIcon = document.getElementById('weather-icon');
        const weatherCondition = document.getElementById('weather-condition');
        const airTemp = document.getElementById('air-temp');
        const trackTemp = document.getElementById('track-temp');
        const windSpeed = document.getElementById('wind-speed');
        
        if (weatherIcon && weatherCondition) {
            switch (weather.condition) {
                case 'sunny':
                    weatherIcon.textContent = '☀️';
                    weatherCondition.textContent = 'Sunny';
                    break;
                case 'cloudy':
                    weatherIcon.textContent = '☁️';
                    weatherCondition.textContent = 'Cloudy';
                    break;
                case 'rain':
                    weatherIcon.textContent = '🌧️';
                    weatherCondition.textContent = 'Rain';
                    break;
                case 'storm':
                    weatherIcon.textContent = '⛈️';
                    weatherCondition.textContent = 'Storm';
                    break;
            }
        }
        
        if (airTemp) airTemp.textContent = `${weather.airTemp}°C`;
        if (trackTemp) trackTemp.textContent = `${weather.trackTemp}°C`;
        if (windSpeed) windSpeed.textContent = `${weather.windSpeed} km/h`;
    }

    updateCarStatus(carStatus) {
        if (!carStatus) return;
        
        // Update DRS status
        const drsIndicator = document.getElementById('drs-indicator');
        const drsStatus = document.getElementById('drs-status');
        if (drsIndicator && drsStatus) {
            if (carStatus.drsAvailable) {
                drsIndicator.classList.add('active');
                drsStatus.textContent = 'Available';
            } else {
                drsIndicator.classList.remove('active');
                drsStatus.textContent = 'Disabled';
            }
        }
        
        // Update ERS status
        const ersIndicator = document.getElementById('ers-indicator');
        const ersPercentage = document.getElementById('ers-percentage');
        if (ersIndicator && ersPercentage) {
            ersPercentage.textContent = `${carStatus.ersPercentage}%`;
            if (carStatus.ersPercentage > 50) {
                ersIndicator.classList.add('active');
            } else {
                ersIndicator.classList.remove('active');
            }
        }
        
        // Update fuel status
        const fuelRemaining = document.getElementById('fuel-remaining');
        if (fuelRemaining) {
            fuelRemaining.textContent = `${carStatus.fuelPercentage}%`;
        }
        
        // Update damage indicators
        const damageComponents = ['front-wing', 'rear-wing', 'engine', 'gearbox'];
        damageComponents.forEach(component => {
            const element = document.getElementById(component);
            const statusElement = document.getElementById(`${component}-status`);
            
            if (element && statusElement && carStatus.damage[component] !== undefined) {
                const damage = carStatus.damage[component];
                statusElement.textContent = `${(100 - damage)}%`;
                
                // Remove existing damage classes
                element.classList.remove('damaged', 'critical');
                
                // Add damage class based on condition
                if (damage > 75) {
                    element.classList.add('critical');
                } else if (damage > 25) {
                    element.classList.add('damaged');
                }
            }
        });
    }

    updateTimingBoard(timingData) {
        if (!timingData) return;
        
        const timingContent = document.getElementById('timing-board-content');
        if (!timingContent) return;
        
        timingContent.innerHTML = '';
        
        timingData.forEach((driver, index) => {
            const row = document.createElement('div');
            row.className = 'timing-row';
            if (driver.isPlayer) {
                row.classList.add('player');
            }
            
            row.innerHTML = `
                <div>${index + 1}</div>
                <div>${driver.name}</div>
                <div>${driver.gap}</div>
                <div>${driver.lastLap}</div>
                <div><span class="tire-compound tire-${driver.tire}"></span></div>
            `;
            
            timingContent.appendChild(row);
        });
    }

    addRadioMessage(message) {
        const radioMessages = document.getElementById('radio-messages');
        if (!radioMessages) return;
        
        const timestamp = new Date().toISOString().substr(14, 5); // MM:SS format
        
        const messageElement = document.createElement('div');
        messageElement.className = 'radio-message';
        messageElement.innerHTML = `
            <span class="radio-timestamp">[${timestamp}]</span>
            <span class="radio-speaker">${message.speaker}:</span>
            <div class="radio-content">${message.content}</div>
        `;
        
        radioMessages.appendChild(messageElement);
        
        // Auto-scroll to bottom
        radioMessages.scrollTop = radioMessages.scrollHeight;
        
        // Remove old messages if too many
        const messages = radioMessages.querySelectorAll('.radio-message');
        if (messages.length > 10) {
            messages[0].remove();
        }
    }

    formatLapTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = (seconds % 60).toFixed(3);
        return `${minutes}:${secs.padStart(6, '0')}`;
    }

    updateSeasonGoalsDisplay() {
        this.gameData.seasonGoals.forEach(goal => {
            const progressElement = document.getElementById(`${goal.id}-progress`);
            const progressBarElement = document.getElementById(`${goal.id}-progress-bar`);
            
            if (progressElement) {
                progressElement.textContent = `${goal.current}/${goal.target}`;
            }
            if (progressBarElement) {
                const percentage = (goal.current / goal.target) * 100;
                progressBarElement.style.width = `${Math.min(100, percentage)}%`;
                
                // Add visual feedback for completed goals
                if (goal.current >= goal.target) {
                    progressBarElement.style.background = 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)';
                    if (!goal.completed) {
                        goal.completed = true;
                        this.gameData.experiencePoints += goal.xp;
                        this.addNewsItem(`🎯 Season Goal Completed: ${goal.name} (+${goal.xp} XP)`);
                        this.updateManagerLevel();
                    }
                }
            }
        });
    }

    updateRivalDisplay() {
        const rivalStatusElement = document.getElementById('rival-status');
        if (rivalStatusElement && this.gameData.rivalTeams.length > 0) {
            const rivalTeam = this.gameData.allTeams.find(team => 
                team.name === this.gameData.rivalTeams[0]
            );
            
            if (rivalTeam) {
                const pointDiff = this.gameData.team.points - rivalTeam.points;
                const status = pointDiff > 0 ? 
                    `Leading ${rivalTeam.name} by ${pointDiff} points` :
                    `Behind ${rivalTeam.name} by ${Math.abs(pointDiff)} points`;
                
                rivalStatusElement.textContent = status;
                rivalStatusElement.style.color = pointDiff > 0 ? '#22c55e' : '#ef4444';
            }
        }
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
    }    startRace() {
        const liveUpdates = document.getElementById('live-updates');
        liveUpdates.innerHTML = '<p>🏁 Race is starting! Lights out and away we go!</p>';
        
        // Get strategy selections
        const strategy1 = document.getElementById('driver1-strategy').value;
        const strategy2 = document.getElementById('driver2-strategy').value;
        const pitStrategy = document.getElementById('pit-strategy').value;
        
        // Initialize race visuals
        this.initializeRaceVisuals();
        
        // Simulate race with enhanced visual feedback
        this.simulateRaceWithVisuals(strategy1, strategy2, pitStrategy, pitStrategy);
    }

    initializeRaceVisuals() {
        // Reset position tracker
        this.updatePositionTracker(20, 0); // Start from back of grid
        
        // Initialize track conditions
        const race = this.gameData.races[this.gameData.currentRace - 1];
        const weather = this.generateWeatherConditions(race);
        this.updateTrackConditions(weather);
        
        // Initialize car status
        const initialCarStatus = {
            drsAvailable: false,
            ersPercentage: 100,
            fuelPercentage: 100,
            damage: {
                'front-wing': 0,
                'rear-wing': 0,
                'engine': 0,
                'gearbox': 0
            }
        };
        this.updateCarStatus(initialCarStatus);
        
        // Add race start radio message
        this.addRadioMessage({
            speaker: 'Race Engineer',
            content: 'Radio check, we\'re live! Formation lap complete, grid positions locked in.'
        });
        
        // Initialize timing board with starting grid
        this.initializeTimingBoard();
    }

    generateWeatherConditions(race) {
        const weatherTypes = ['sunny', 'cloudy', 'rain', 'storm'];
        const weights = race.weatherProbability || [0.6, 0.25, 0.12, 0.03];
        
        let condition = 'sunny';
        let random = Math.random();
        let cumulative = 0;
        
        for (let i = 0; i < weatherTypes.length; i++) {
            cumulative += weights[i];
            if (random <= cumulative) {
                condition = weatherTypes[i];
                break;
            }
        }
        
        return {
            condition: condition,
            airTemp: race.temperature + Math.floor(Math.random() * 10 - 5),
            trackTemp: race.temperature + Math.floor(Math.random() * 20 - 10) + 15,
            windSpeed: Math.floor(Math.random() * 15) + 2
        };
    }

    initializeTimingBoard() {
        // Create initial timing data based on qualifying
        const timingData = this.gameData.qualifyingResults.slice(0, 20).map((result, index) => ({
            name: result.driver,
            gap: index === 0 ? 'Leader' : `+${(Math.random() * 2).toFixed(3)}`,
            lastLap: '--:---.---',
            tire: 'soft',
            isPlayer: result.driver === this.gameData.drivers[0].name || 
                     result.driver === this.gameData.drivers[1].name
        }));
        
        this.updateTimingBoard(timingData);
    }

    simulateRaceWithVisuals(strategy1, strategy2, pitStrategy1, pitStrategy2) {
        const totalLaps = this.gameData.races[this.gameData.currentRace - 1].laps || 50;
        let currentLap = 1;
        
        // Enhanced race data tracking
        const raceData = {
            position: 20,
            positionChange: 0,
            currentLap: null,
            sectors: [],
            bestLap: null,
            weather: this.generateWeatherConditions(this.gameData.races[this.gameData.currentRace - 1]),
            carStatus: {
                drsAvailable: false,
                ersPercentage: 100,
                fuelPercentage: 100,
                damage: { 'front-wing': 0, 'rear-wing': 0, 'engine': 0, 'gearbox': 0 }
            },
            timingData: [],
            radioMessage: null
        };
        
        // Race progression simulation
        const progressInterval = setInterval(() => {
            // Update lap progress
            currentLap++;
            
            // Simulate lap performance
            const lapResult = this.simulateLap(currentLap, totalLaps, strategy1, strategy2, raceData);
            
            // Update race data
            raceData.position = lapResult.position;
            raceData.positionChange = lapResult.positionChange;
            raceData.currentLap = lapResult.lapTime;
            raceData.sectors = lapResult.sectors;
            raceData.bestLap = lapResult.bestLap;
            raceData.carStatus = lapResult.carStatus;
            raceData.timingData = lapResult.timingData;
            raceData.radioMessage = lapResult.radioMessage;
            
            // Update visuals
            this.updateRaceVisuals(raceData);
            
            // Check for race completion
            if (currentLap >= totalLaps) {
                clearInterval(progressInterval);
                this.completeRace(strategy1, strategy2, pitStrategy1, pitStrategy2);
            }
        }, 2000); // Update every 2 seconds for dramatic effect
    }

    simulateLap(lapNumber, totalLaps, strategy1, strategy2, raceData) {
        const race = this.gameData.races[this.gameData.currentRace - 1];
        const car = this.gameData.car;
        const drivers = this.gameData.drivers;
        
        // Enhanced lap time calculation with multiple factors
        const baseTime = 60 + Math.random() * 20; // Base lap time in seconds
        const driverPerformance = this.calculateDriverPerformance(drivers[0], strategy1, race);
        const carPerformance = this.calculateCarPerformance(car, race);
        
        // Apply wear and fuel effects
        const lapProgress = lapNumber / totalLaps;
        const tireWear = this.calculateTireWear(lapProgress, strategy1);
        const fuelLoad = this.calculateFuelLoad(lapProgress);
        
        const adjustedTime = baseTime - (driverPerformance / 10) - (carPerformance / 10) + 
                           tireWear + fuelLoad + (Math.random() * 2 - 1);
        
        // Generate sector times
        const sectors = [
            { time: adjustedTime * 0.35, type: this.getSectorPerformance() },
            { time: adjustedTime * 0.35, type: this.getSectorPerformance() },
            { time: adjustedTime * 0.30, type: this.getSectorPerformance() }
        ];
        
        // Simulate position changes
        const positionChange = this.calculatePositionChange(lapNumber, driverPerformance, carPerformance);
        const newPosition = Math.max(1, Math.min(20, raceData.position + positionChange));
        
        // Generate radio messages
        const radioMessage = this.generateRaceRadioMessage(lapNumber, newPosition, raceData.position);
        
        // Update car status
        const carStatus = this.updateLapCarStatus(raceData.carStatus, lapProgress, strategy1);
        
        // Generate timing data
        const timingData = this.generateLiveTimingData(newPosition, adjustedTime);
        
        return {
            position: newPosition,
            positionChange: positionChange,
            lapTime: adjustedTime,
            sectors: sectors,
            bestLap: raceData.bestLap ? Math.min(raceData.bestLap, adjustedTime) : adjustedTime,
            carStatus: carStatus,
            timingData: timingData,
            radioMessage: radioMessage
        };
    }

    getSectorPerformance() {
        const random = Math.random();
        if (random < 0.1) return 'fastest';
        if (random < 0.3) return 'personal-best';
        if (random < 0.8) return 'normal';
        return 'slow';
    }

    calculatePositionChange(lapNumber, driverPerformance, carPerformance) {
        const baseChange = (driverPerformance + carPerformance - 150) / 50; // Normalize
        const randomFactor = Math.random() * 2 - 1; // -1 to 1
        const lapFactor = lapNumber > 30 ? 0.5 : 1; // Fewer changes late in race
        
        return Math.round((baseChange + randomFactor) * lapFactor);
    }

    generateRaceRadioMessage(lapNumber, currentPosition, previousPosition) {
        const messages = [];
        
        if (lapNumber === 1) {
            messages.push('Great start! Keep it clean through turn 1.');
        } else if (lapNumber === 10) {
            messages.push('One-quarter distance. How are the tires feeling?');
        } else if (lapNumber === 25) {
            messages.push('Halfway point. We\'re looking good on strategy.');
        } else if (currentPosition < previousPosition) {
            messages.push(`Nice overtake! P${currentPosition} now. Keep pushing!`);
        } else if (currentPosition > previousPosition) {
            messages.push(`Lost a position. Don\'t worry, plenty of time left.`);
        } else if (Math.random() < 0.2) {
            const randomMessages = [
                'DRS available on main straight.',
                'Gap to car ahead is closing.',
                'Tire temperatures looking good.',
                'Watch your fuel consumption.',
                'Safety car standby, standby...',
                'All clear, all clear.'
            ];
            messages.push(randomMessages[Math.floor(Math.random() * randomMessages.length)]);
        }
        
        if (messages.length > 0) {
            return {
                speaker: 'Race Engineer',
                content: messages[Math.floor(Math.random() * messages.length)]
            };
        }
        
        return null;
    }

    updateLapCarStatus(currentStatus, lapProgress, strategy) {
        const newStatus = { ...currentStatus };
        
        // ERS depletion and recovery
        if (strategy === 'aggressive') {
            newStatus.ersPercentage = Math.max(0, newStatus.ersPercentage - 2);
        } else {
            newStatus.ersPercentage = Math.min(100, newStatus.ersPercentage + 1);
        }
        
        // Fuel consumption
        newStatus.fuelPercentage = Math.max(0, 100 - (lapProgress * 100));
        
        // DRS availability (random on some straights)
        newStatus.drsAvailable = Math.random() < 0.3;
        
        // Random damage (very rare)
        if (Math.random() < 0.02) {
            const components = Object.keys(newStatus.damage);
            const component = components[Math.floor(Math.random() * components.length)];
            newStatus.damage[component] = Math.min(100, newStatus.damage[component] + Math.random() * 20);
        }
        
        return newStatus;
    }

    generateLiveTimingData(playerPosition, playerLapTime) {
        const drivers = [
            'Verstappen', 'Hamilton', 'Leclerc', 'Russell', 'Norris', 'Piastri',
            'Sainz', 'Perez', 'Alonso', 'Stroll', 'Gasly', 'Ocon',
            'Tsunoda', 'Ricciardo', 'Bottas', 'Zhou', 'Magnussen', 'Hulkenberg',
            'Albon', 'Sargeant'
        ];
        
        const tireCompounds = ['soft', 'medium', 'hard'];
        
        return drivers.slice(0, 20).map((driver, index) => {
            const position = index + 1;
            const isPlayer = position === playerPosition && 
                           (driver === this.gameData.drivers[0].name.split(' ')[1] || 
                            driver === this.gameData.drivers[1].name.split(' ')[1]);
            
            return {
                name: driver,
                gap: position === 1 ? 'Leader' : `+${(Math.random() * 30).toFixed(1)}s`,
                lastLap: isPlayer ? this.formatLapTime(playerLapTime) : 
                        this.formatLapTime(60 + Math.random() * 20),
                tire: tireCompounds[Math.floor(Math.random() * tireCompounds.length)],
                isPlayer: isPlayer
            };
        });
    }

    completeRace(strategy1, strategy2, pitStrategy1, pitStrategy2) {
        // Final race simulation
        const result = this.simulateRace(strategy1, strategy2, pitStrategy1, pitStrategy2);
        
        // Add final radio message
        this.addRadioMessage({
            speaker: 'Race Engineer',
            content: `Checkered flag! P${result.position1} and P${result.position2}. Great job today!`
        });
        
        // Update results with enhanced feedback
        this.updateRaceResults(result);
        
        // Achievement and progression checks
        this.checkAchievements(result);
        this.updateManagerProgression(result);
    }simulateRace(strategy1, strategy2, pitStrategy1, pitStrategy2) {
        const race = this.gameData.races[this.gameData.currentRace - 1];
        const car = this.gameData.car;
        const drivers = this.gameData.drivers;
        
        // Base performance calculation
        let driver1Performance = this.calculateDriverPerformance(drivers[0], strategy1, race);
        let driver2Performance = this.calculateDriverPerformance(drivers[1], strategy2, race);
        
        // Apply difficulty modifiers for flow state
        const difficultyModifier = this.getDifficultyModifier();
        driver1Performance *= difficultyModifier;
        driver2Performance *= difficultyModifier;
        
        // Variable reward system - random events
        const randomEvents = this.generateRandomEvents(race);
        
        // Apply random events
        randomEvents.forEach(event => {
            if (event.affectedDriver === 1) {
                driver1Performance *= event.performanceModifier;
            } else if (event.affectedDriver === 2) {
                driver2Performance *= event.performanceModifier;
            }
            this.addNewsItem(event.message);
        });
        
        // Calculate positions with some randomness for excitement
        const position1 = Math.max(1, Math.min(20, Math.round(21 - (driver1Performance + this.getRandomVariance()))));
        const position2 = Math.max(1, Math.min(20, Math.round(21 - (driver2Performance + this.getRandomVariance()))));
        
        const result = { position1, position2, events: randomEvents };
        
        // Update skill rating and difficulty
        this.updatePlayerSkillRating(result);
        
        // Check for achievements
        this.checkAchievements(result);
        
        // Generate dynamic narrative
        this.generateDynamicNarrative(result);
        
        // Update rival status
        this.updateRivalStatus();
        
        // Check for secret discoveries
        this.checkForSecretDiscoveries(result, race);
          // Update season goals
        this.updateSeasonGoalProgress(result);
        
        return result;
    }

    calculateCarPerformance() {
        const car = this.gameData.car;
        return (car.aerodynamics + car.engine + car.chassis + car.reliability) / 4;
    }

    generateLapTime(performance) {
        // Base lap time around 1:30 (90 seconds), adjusted by performance
        const baseTime = 90;
        const variation = (100 - performance) * 0.3; // Better performance = lower time
        const totalSeconds = baseTime + variation + (Math.random() - 0.5) * 2;
        
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = (totalSeconds % 60).toFixed(3);
        
        return `${minutes}:${seconds.padStart(6, '0')}`;
    }

    updateRaceResults(result) {
        const { position1, position2 } = result;
        const race = this.gameData.races[this.gameData.currentRace - 1];
        
        // Calculate points
        const points1 = position1 <= 10 ? this.pointsSystem[position1 - 1] || 0 : 0;
        const points2 = position2 <= 10 ? this.pointsSystem[position2 - 1] || 0 : 0;
        
        // Update driver points and wins
        this.gameData.drivers[0].points += points1;
        this.gameData.drivers[1].points += points2;
        
        if (position1 === 1) this.gameData.drivers[0].wins++;
        if (position2 === 1) this.gameData.drivers[1].wins++;
        
        // Update team points and wins
        this.gameData.team.points += (points1 + points2);
        if (position1 === 1 || position2 === 1) this.gameData.team.wins++;
        
        // Update all teams points (simulate other teams)
        this.simulateOtherTeamsRace(result);
        
        // Update championship standings
        this.updateChampionshipStandings();
        
        // Display race results
        const resultsDiv = document.getElementById('race-results');
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `
            <h4>🏁 ${race.name} - Race Results</h4>
            <div class="race-result">
                <p><strong>${this.gameData.drivers[0].name}:</strong> P${position1} (+${points1} points)</p>
                <p><strong>${this.gameData.drivers[1].name}:</strong> P${position2} (+${points2} points)</p>
                <p><strong>Team Points:</strong> +${points1 + points2} (Total: ${this.gameData.team.points})</p>
            </div>
            <button class="btn btn-primary" onclick="game.nextRace()">Next Race</button>
        `;
        
        // Update UI
        this.updateUI();
        this.updateStandings();
        
        // Auto-save progress
        this.autoSave();
    }

    simulateOtherTeamsRace(playerResult) {
        // Simulate points for other teams based on random performance
        this.gameData.allTeams.forEach(team => {
            if (team.name !== this.gameData.team.name) {
                const teamPerformance = Math.random() * 40 + 30; // 30-70 performance range
                const avgPosition = Math.max(1, Math.min(20, Math.round(21 - teamPerformance)));
                const points = avgPosition <= 10 ? this.pointsSystem[avgPosition - 1] || 0 : 0;
                team.points += points * 2; // Approximate for two drivers
                
                if (avgPosition === 1 && Math.random() < 0.1) {
                    team.wins++;
                }
            }
        });
    }

    updateChampionshipStandings() {
        // Sort teams by points
        this.gameData.allTeams.sort((a, b) => b.points - a.points);
        
        // Update team position
        const teamIndex = this.gameData.allTeams.findIndex(team => team.name === this.gameData.team.name);
        this.gameData.team.position = teamIndex + 1;
        
        // Sort drivers by points
        this.gameData.allDrivers.sort((a, b) => b.points - a.points);
    }

    nextRace() {
        if (this.gameData.currentRace < this.gameData.totalRaces) {
            this.gameData.currentRace++;
            
            // Reset qualifying and race results
            this.gameData.qualifyingResults = [];
            this.gameData.raceResults = [];
            
            // Hide race results
            document.getElementById('race-results').style.display = 'none';
            document.getElementById('start-race-btn').disabled = true;
            
            // Update UI for next race
            this.updateUI();
            this.updateRaceTab();
            
            this.addNewsItem(`🏁 Moving to Round ${this.gameData.currentRace}: ${this.gameData.races[this.gameData.currentRace - 1].name}`);
        } else {
            this.endSeason();
        }
    }

    endSeason() {
        this.addNewsItem('🏆 Season completed! Congratulations on a great campaign!');
        
        // Calculate season achievements
        if (this.gameData.team.position === 1) {
            this.unlockAchievement('championship_leader');
        }
        
        if (this.gameData.budget > 40000000) {
            this.unlockAchievement('budget_master');
        }
        
        // Show season summary
        const resultsDiv = document.getElementById('race-results');
        resultsDiv.innerHTML = `
            <h3>🏆 Season ${this.gameData.season} Complete!</h3>
            <div class="season-summary">
                <p><strong>Final Championship Position:</strong> ${this.gameData.team.position}${this.getOrdinalSuffix(this.gameData.team.position)}</p>
                <p><strong>Total Points:</strong> ${this.gameData.team.points}</p>
                <p><strong>Race Wins:</strong> ${this.gameData.team.wins}</p>
                <p><strong>Manager Level:</strong> ${this.gameData.managerLevel}</p>
                <p><strong>Achievements Unlocked:</strong> ${this.gameData.achievements.length}</p>
                <button class="btn btn-primary" onclick="game.startNewSeason()">Start Next Season</button>
            </div>
        `;
    }

    startNewSeason() {
        this.gameData.season++;
        this.gameData.currentRace = 1;
        this.gameData.team.points = 0;
        this.gameData.team.wins = 0;
        
        // Reset all team and driver points
        this.gameData.allTeams.forEach(team => {
            team.points = 0;
            team.wins = 0;
        });
        
        this.gameData.allDrivers.forEach(driver => {
            driver.points = 0;
            driver.wins = 0;
        });
        
        this.gameData.drivers.forEach(driver => {
            driver.points = 0;
            driver.wins = 0;
        });
        
        // Generate new season goals
        this.generateSeasonGoals();
        
        // Hide race results
        document.getElementById('race-results').style.display = 'none';
        document.getElementById('start-race-btn').disabled = true;
        
        this.addNewsItem(`🌟 Welcome to Season ${this.gameData.season}! New challenges await!`);
        this.updateUI();
    }

    updatePlayerSkillRating(raceResult) {
        const { position1, position2 } = raceResult;
        const avgPosition = (position1 + position2) / 2;
        
        // Performance-based skill adjustment
        if (avgPosition <= 3) {
            this.gameData.playerSkillRating = Math.min(100, this.gameData.playerSkillRating + 2);
        } else if (avgPosition <= 8) {
            this.gameData.playerSkillRating = Math.min(100, this.gameData.playerSkillRating + 1);
        } else if (avgPosition >= 15) {
            this.gameData.playerSkillRating = Math.max(0, this.gameData.playerSkillRating - 1);
        }
        
        this.gameData.performanceHistory.push({
            race: this.gameData.currentRace,
            avgPosition: avgPosition,
            skillRating: this.gameData.playerSkillRating
        });
        
        // Keep only last 5 races for performance tracking
        if (this.gameData.performanceHistory.length > 5) {
            this.gameData.performanceHistory.shift();
        }
        
        this.adjustDifficulty();
    }
    
    adjustDifficulty() {
        if (!this.gameData.adaptiveDifficulty) return;
        
        const recentPerformance = this.gameData.performanceHistory.slice(-3);
        const avgRecentPosition = recentPerformance.reduce((sum, race) => sum + race.avgPosition, 0) / recentPerformance.length;
        
        // Flow state balancing
        if (avgRecentPosition <= 3) {
            // Player is dominating - increase challenge
            this.gameData.difficultyLevel = 'hard';
            this.addNewsItem('🔥 Other teams are stepping up their game to challenge you!');
        } else if (avgRecentPosition >= 12) {
            // Player is struggling - decrease challenge
            this.gameData.difficultyLevel = 'easy';
            this.addNewsItem('💡 Your team has found some performance improvements!');
        } else {
            // Sweet spot - maintain medium difficulty
            this.gameData.difficultyLevel = 'medium';
        }
    }

    // Enhanced Helper Methods for Visual Racing
    calculateTireWear(lapProgress, strategy) {
        const baseWear = lapProgress * 2; // Base wear increases with race progress
        const strategyMultiplier = {
            'aggressive': 1.5,
            'balanced': 1.0,
            'conservative': 0.7
        };
        
        return baseWear * (strategyMultiplier[strategy] || 1.0);
    }

    calculateFuelLoad(lapProgress) {
        // Fuel load effect decreases as fuel is consumed
        const remainingFuel = 1 - lapProgress;
        return remainingFuel * 1.5; // Maximum 1.5 second penalty with full fuel
    }

    // Enhanced Achievement System with Visual Feedback
    checkAchievements(raceResult) {
        const { position1, position2 } = raceResult;
        
        // First race achievement
        if (this.gameData.currentRace === 1) {
            this.unlockAchievement('first_race');
        }
        
        // Podium achievements
        if (position1 <= 3) {
            this.unlockAchievement('first_podium');
            if (position1 === 1) {
                this.unlockAchievement('first_win');
            }
        }
        
        // Double points achievement
        if (position1 <= 10 && position2 <= 10) {
            this.unlockAchievement('double_points');
        }
        
        // Perfect weekend (pole + win)
        if (this.gameData.qualifyingResults[0]?.driver === this.gameData.drivers[0].name && position1 === 1) {
            this.unlockAchievement('perfect_weekend');
        }
        
        // Comeback achievement (start low, finish high)
        const qualifyingPos = this.gameData.qualifyingResults.findIndex(r => 
            r.driver === this.gameData.drivers[0].name
        ) + 1;
        
        if (qualifyingPos > 15 && position1 <= 5) {
            this.unlockAchievement('comeback_king');
        }
    }

    unlockAchievement(achievementId) {
        if (this.gameData.achievements.includes(achievementId)) return;
        
        const achievement = this.achievementDefinitions[achievementId];
        if (!achievement) return;
        
        this.gameData.achievements.push(achievementId);
        this.gameData.experiencePoints += achievement.xp;
        
        // Show visual notification
        this.showAchievementNotification(achievement);
        
        // Add to news feed
        this.addNewsItem(`🏆 ACHIEVEMENT UNLOCKED: ${achievement.name} (+${achievement.xp} XP)`);
        
        // Unlock features if any
        if (achievement.unlocks) {
            achievement.unlocks.forEach(feature => {
                if (!this.gameData.unlockedFeatures.includes(feature)) {
                    this.gameData.unlockedFeatures.push(feature);
                    this.addNewsItem(`🔓 New Feature Unlocked: ${feature.replace('_', ' ').toUpperCase()}`);
                }
            });
        }
        
        this.updateManagerLevel();
        this.updateUI();
    }

    updateManagerProgression(raceResult) {
        const { position1, position2 } = raceResult;
        
        // Base XP for participation
        let xpGained = 25;
        
        // Position-based XP
        if (position1 <= 3) xpGained += 50;
        if (position1 === 1) xpGained += 100;
        if (position2 <= 10) xpGained += 25;
        
        // Strategy bonus XP
        if (this.evaluateStrategySuccess(raceResult)) {
            xpGained += 30;
            this.addNewsItem('🎯 Strategy Bonus: Excellent tactical decisions! (+30 XP)');
        }
        
        this.gameData.experiencePoints += xpGained;
        
        // Track performance for adaptive difficulty
        this.gameData.performanceHistory.push({
            race: this.gameData.currentRace,
            position1: position1,
            position2: position2,
            points: (position1 <= 10 ? this.pointsSystem[position1 - 1] || 0 : 0) +
                   (position2 <= 10 ? this.pointsSystem[position2 - 1] || 0 : 0)
        });
        
        // Adaptive difficulty adjustment
        this.adjustDifficulty();
        
        this.updateManagerLevel();
    }

    evaluateStrategySuccess(raceResult) {
        // Simple strategy evaluation based on finishing positions vs. qualifying
        const qualifyingPos1 = this.gameData.qualifyingResults.findIndex(r => 
            r.driver === this.gameData.drivers[0].name
        ) + 1;
        const qualifyingPos2 = this.gameData.qualifyingResults.findIndex(r => 
            r.driver === this.gameData.drivers[1].name
        ) + 1;
        
        const improvement1 = qualifyingPos1 - raceResult.position1;
        const improvement2 = qualifyingPos2 - raceResult.position2;
        
        return (improvement1 + improvement2) >= 2; // Net improvement of 2+ positions
    }

    adjustDifficulty() {
        if (!this.gameData.adaptiveDifficulty) return;
        
        const recentPerformance = this.gameData.performanceHistory.slice(-5);
        if (recentPerformance.length < 3) return;
        
        const avgPoints = recentPerformance.reduce((sum, race) => sum + race.points, 0) / recentPerformance.length;
        const avgPosition = recentPerformance.reduce((sum, race) => 
            sum + Math.min(race.position1, race.position2), 0) / recentPerformance.length;
        
        // Adjust player skill rating
        if (avgPoints > 15 && avgPosition < 5) {
            this.gameData.playerSkillRating = Math.min(100, this.gameData.playerSkillRating + 2);
            this.addNewsItem('📈 Difficulty increased - you\'re performing excellently!');
        } else if (avgPoints < 5 && avgPosition > 15) {
            this.gameData.playerSkillRating = Math.max(0, this.gameData.playerSkillRating - 2);
            this.addNewsItem('📉 Difficulty decreased - finding your optimal challenge level.');
        }
    }

    getDifficultyModifier() {
        // Flow state induction - adjust AI difficulty based on player skill
        const baseModifier = 1.0;
        const skillDifference = this.gameData.playerSkillRating - 50; // Relative to baseline
        
        // Make AI easier if player is struggling, harder if dominating
        return baseModifier - (skillDifference / 200); // ±0.25 maximum adjustment
    }

    updateManagerLevel() {
        const xpForLevel = (level) => level * 200; // XP required for each level
        
        let newLevel = 1;
        while (this.gameData.experiencePoints >= xpForLevel(newLevel)) {
            newLevel++;
        }
        
        if (newLevel > this.gameData.managerLevel) {
            const oldLevel = this.gameData.managerLevel;
            this.gameData.managerLevel = newLevel;
            
            // Level up benefits
            this.gameData.budget += 2000000; // $2M bonus per level
            
            this.addNewsItem(`🆙 LEVEL UP! Manager Level ${newLevel} reached! (+$2M budget bonus)`);
            
            // Unlock new features at certain levels
            this.checkLevelUnlocks(newLevel);
            
            // Show achievement-style notification for level up
            this.showAchievementNotification({
                name: `Level ${newLevel} Manager`,
                description: `You've reached Manager Level ${newLevel}!`,
                xp: 0
            });
        }
    }

    checkLevelUnlocks(level) {
        const levelUnlocks = {
            2: ['advanced_strategy'],
            3: ['weather_prediction'],
            5: ['driver_development'],
            7: ['advanced_telemetry'],
            10: ['team_chemistry'],
            15: ['secret_setups'],
            20: ['legendary_status']
        };
        
        if (levelUnlocks[level]) {
            levelUnlocks[level].forEach(feature => {
                if (!this.gameData.unlockedFeatures.includes(feature)) {
                    this.gameData.unlockedFeatures.push(feature);
                    this.addNewsItem(`🔓 Level ${level} Unlock: ${feature.replace('_', ' ').toUpperCase()}`);
                }
            });
        }
    }

    // Missing utility functions
    getOrdinalSuffix(num) {
        const lastDigit = num % 10;
        const lastTwoDigits = num % 100;
        
        if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
            return 'th';
        }
        
        switch (lastDigit) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    addNewsItem(message) {
        const newsElement = document.getElementById('live-updates');
        if (newsElement) {
            const timestamp = new Date().toLocaleTimeString();
            const newsItem = document.createElement('div');
            newsItem.innerHTML = `<span style="color: #888;">[${timestamp}]</span> ${message}`;
            newsElement.insertBefore(newsItem, newsElement.firstChild);
            
            // Keep only last 10 news items
            while (newsElement.children.length > 10) {
                newsElement.removeChild(newsElement.lastChild);
            }
        }
    }

    autoSave() {
        try {
            localStorage.setItem('f1ManagerProSave', JSON.stringify(this.gameData));
            this.addNewsItem('💾 Game auto-saved successfully');
        } catch (error) {
            console.error('Auto-save failed:', error);
        }
        
        // Schedule next auto-save in 30 seconds
        setTimeout(() => this.autoSave(), 30000);
    }

    // Achievement System Initialization
    initializeAchievements() {
        this.achievementDefinitions = {
            first_win: {
                name: "First Victory",
                description: "Win your first race",
                icon: "🏆",
                xp: 100,
                unlocks: ["advanced_strategy"]
            },
            podium_finish: {
                name: "On the Podium",
                description: "Finish in the top 3",
                icon: "🥉",
                xp: 50,
                unlocks: []
            },
            perfect_weekend: {
                name: "Perfect Weekend",
                description: "Win both qualifying and race",
                icon: "⭐",
                xp: 200,
                unlocks: ["secret_setups"]
            },
            championship_leader: {
                name: "Championship Leader",
                description: "Lead the championship standings",
                icon: "👑",
                xp: 150,
                unlocks: ["reputation_boost"]
            },
            budget_master: {
                name: "Budget Master",
                description: "Complete a season under budget",
                icon: "💰",
                xp: 100,
                unlocks: ["financial_advisor"]
            },
            development_guru: {
                name: "Tech Innovator",
                description: "Complete 5 development projects",
                icon: "🔧",
                xp: 150,
                unlocks: ["advanced_development"]
            },
            explorer: {
                name: "Secret Finder",
                description: "Discover 3 hidden features",
                icon: "🔍",
                xp: 120,
                unlocks: ["exploration_bonus"]
            },
            consistency_king: {
                name: "Mr. Consistent",
                description: "Finish in points for 5 consecutive races",
                icon: "📈",
                xp: 100,
                unlocks: ["consistency_bonus"]
            },
            rival_beater: {
                name: "Rival Crusher",
                description: "Beat all rival teams in a race",
                icon: "⚔️",
                xp: 180,
                unlocks: ["psychological_warfare"]
            },
            master_strategist: {
                name: "Master Strategist",
                description: "Make 10 perfect strategy calls",
                icon: "🧠",
                xp: 200,
                unlocks: ["strategy_mastery"]
            },
            first_race: {
                name: "First Race",
                description: "Complete your first race",
                icon: "🏁",
                xp: 50,
                unlocks: []
            },
            first_podium: {
                name: "First Podium",
                description: "Finish in the top 3 for the first time",
                icon: "🥈",
                xp: 75,
                unlocks: []
            },
            double_points: {
                name: "Double Points",
                description: "Score points with both drivers in the same race",
                icon: "💯",
                xp: 100,
                unlocks: []
            },
            comeback_king: {
                name: "Comeback King",
                description: "Start a race in 16th or lower and finish in the top 5",
                icon: "🔄",
                xp: 150,
                unlocks: []
            }
        };

        // Initialize season goals based on current skill level
        this.generateSeasonGoals();
    }

    generateSeasonGoals() {
        const skillLevel = this.gameData.playerSkillRating;
        this.gameData.seasonGoals = [];

        if (skillLevel < 30) {
            // Beginner goals
            this.gameData.seasonGoals.push({
                id: 'score_points',
                name: 'Score Championship Points',
                description: 'Finish in the top 10 in any race',
                target: 1,
                current: 0,
                xp: 50
            });
        } else if (skillLevel < 60) {
            // Intermediate goals
            this.gameData.seasonGoals.push({
                id: 'win_races',
                name: 'Win Races',
                description: 'Win 3 races this season',
                target: 3,
                current: this.gameData.team.wins,
                xp: 150
            });
        } else {
            // Advanced goals
            this.gameData.seasonGoals.push({
                id: 'championship',
                name: 'Championship Contender',
                description: 'Stay in top 3 of championship',
                target: 1,
                current: this.gameData.team.position <= 3 ? 1 : 0,
                xp: 300
            });
        }

        this.gameData.seasonGoals.push({
            id: 'budget_efficiency',
            name: 'Budget Efficiency',
            description: 'Maintain budget above $40M',
            target: 1,
            current: this.gameData.budget > 40000000 ? 1 : 0,
            xp: 100
        });
    }

    unlockFeaturesByLevel(level) {
        const unlocks = {
            2: ['weather_analysis'],
            3: ['advanced_telemetry'],
            4: ['driver_coaching'],
            5: ['team_negotiations'],
            6: ['media_management'],
            7: ['sponsor_relations'],
            8: ['technical_partnerships'],
            9: ['data_analytics'],
            10: ['championship_mode']
        };

        if (unlocks[level]) {
            unlocks[level].forEach(feature => {
                if (!this.gameData.unlockedFeatures.includes(feature)) {
                    this.gameData.unlockedFeatures.push(feature);
                    this.addNewsItem(`🔓 New feature unlocked: ${feature.replace('_', ' ').toUpperCase()}`);
                }
            });
        }
    }

    // Enhanced Social Competition System
    updateRivalStatus() {
        this.gameData.rivalTeams.forEach(rivalName => {
            const rival = this.gameData.allTeams.find(team => team.name === rivalName);
            if (rival) {
                const pointDifference = this.gameData.team.points - rival.points;
                
                if (pointDifference > 50) {
                    this.addNewsItem(`🎯 You're dominating ${rivalName}! They're ${pointDifference} points behind.`);
                } else if (pointDifference < -20) {
                    this.addNewsItem(`⚠️ ${rivalName} is pulling ahead by ${Math.abs(pointDifference)} points!`);
                } else if (Math.abs(pointDifference) < 10) {
                    this.addNewsItem(`🔥 Intense battle with ${rivalName}! Only ${Math.abs(pointDifference)} points separate you.`);
                }
            }
        });
    }

    // Enhanced Narrative Transportation
    generateDynamicNarrative(raceResult) {
        const { position1, position2 } = raceResult;
        const driver1 = this.gameData.drivers[0];
        const driver2 = this.gameData.drivers[1];
        const race = this.gameData.races[this.gameData.currentRace - 1];

        // Create immersive race narratives based on results
        if (position1 === 1 && position2 === 2) {
            this.addNewsItem(`🌟 INCREDIBLE! ${driver1.name} and ${driver2.name} deliver a stunning 1-2 finish at ${race.country}! The team is ecstatic!`);
            this.gameData.team.morale = Math.min(100, this.gameData.team.morale + 15);
        } else if (position1 === 1 || position2 === 1) {
            const winner = position1 === 1 ? driver1 : driver2;
            this.addNewsItem(`🏆 ${winner.name} conquers ${race.country}! What a masterful drive in challenging conditions!`);
        } else if (position1 > 15 && position2 > 15) {
            this.addNewsItem(`😤 Disappointing weekend at ${race.country}. The team regroups for the next challenge.`);
            this.gameData.team.morale = Math.max(20, this.gameData.team.morale - 10);
        }
    }    // Enhanced Agency & Consequence System
    makeStrategicDecision(decision, context) {
        const consequences = {
            aggressive_development: {
                budget: -5000000,
                performance: +8,
                risk: 'high',
                narrative: 'Bold development push pays off with significant performance gains!'
            },
            conservative_approach: {
                budget: -2000000,
                performance: +3,
                risk: 'low',
                narrative: 'Steady progress with minimal risk to team resources.'
            },
            driver_motivation: {
                morale: +15,
                performance: +5,
                narrative: 'Motivational team talk boosts driver confidence!'
            }
        };

        if (consequences[decision]) {
            const result = consequences[decision];
            
            if (result.budget) {
                this.gameData.budget += result.budget;
            }
            if (result.performance) {
                // Apply to random car component
                const components = ['aerodynamics', 'engine', 'chassis', 'reliability'];
                const component = components[Math.floor(Math.random() * components.length)];
                this.gameData.car[component] = Math.min(100, this.gameData.car[component] + result.performance);
            }
            if (result.morale) {
                this.gameData.team.morale = Math.min(100, this.gameData.team.morale + result.morale);
            }
            
            this.addNewsItem(`📋 ${result.narrative}`);
            return result;
        }
    }

    // Enhanced Exploration & Discovery
    checkForSecretDiscoveries(raceResult, race) {
        const { position1, position2 } = raceResult;
        
        // Weather-based discoveries
        if (race.weather.includes('Rain') && (position1 <= 3 || position2 <= 3)) {
            if (!this.gameData.discoveredSecrets.includes('wet_weather_master')) {
                this.gameData.discoveredSecrets.push('wet_weather_master');
                this.addNewsItem('🌧️ SECRET DISCOVERED: Wet Weather Mastery! Your team excels in challenging conditions.');
                this.gameData.experiencePoints += 150;
                this.unlockAchievement('explorer');
            }
        }
        
        // Performance-based discoveries
        if (position1 === 1 && position2 <= 5) {
            if (!this.gameData.discoveredSecrets.includes('perfect_setup')) {
                this.gameData.discoveredSecrets.push('perfect_setup');
                this.addNewsItem('⚙️ SECRET DISCOVERED: Perfect Car Setup! Optimal balance found.');
                this.gameData.car.aerodynamics += 5;
                this.gameData.car.chassis += 5;
                this.gameData.experiencePoints += 200;
            }
        }
        
        // Random discovery chance
        if (Math.random() < 0.1) {
            const secrets = [
                'tire_whisperer',
                'fuel_efficiency',
                'aerodynamic_breakthrough',
                'driver_synergy',
                'data_insights'
            ];
            
            const undiscovered = secrets.filter(secret => 
                !this.gameData.discoveredSecrets.includes(secret)
            );
            
            if (undiscovered.length > 0) {
                const newSecret = undiscovered[Math.floor(Math.random() * undiscovered.length)];
                this.gameData.discoveredSecrets.push(newSecret);
                this.addNewsItem(`🔍 SECRET DISCOVERED: ${newSecret.replace('_', ' ').toUpperCase()}!`);
                this.gameData.experiencePoints += 100;
            }
        }
    }

    updateSeasonGoalProgress(raceResult) {
        const { position1, position2 } = raceResult;
        
        this.gameData.seasonGoals.forEach(goal => {
            if (goal.completed) return;
            
            switch (goal.id) {
                case 'score_points':
                    if (position1 <= 10 || position2 <= 10) {
                        goal.current = Math.max(goal.current, 1);
                    }
                    break;
                    
                case 'win_races':
                    if (position1 === 1 || position2 === 1) {
                        goal.current = this.gameData.team.wins;
                    }
                    break;
                    
                case 'championship':
                    goal.current = this.gameData.team.position <= 3 ? 1 : 0;
                    break;
                    
                case 'budget_efficiency':
                    goal.current = this.gameData.budget > 40000000 ? 1 : 0;
                    break;
            }
        });
    }

    // Enhanced Achievement System
    checkAchievements(raceResult) {
        const { position1, position2 } = raceResult;
        
        // Competence-based achievements
        if ((position1 === 1 || position2 === 1) && this.gameData.team.wins === 0) {
            this.unlockAchievement('first_win');
        }
        
        if (position1 <= 3 || position2 <= 3) {
            this.unlockAchievement('podium_finish');
        }
        
        if (position1 === 1 && position2 === 2) {
            this.unlockAchievement('perfect_weekend');
        }
        
        if (this.gameData.team.position === 1) {
            this.unlockAchievement('championship_leader');
        }
        
        // Mastery-based achievements
        if (this.gameData.developmentProjects.length >= 5) {
            this.unlockAchievement('development_guru');
        }
        
        if (this.gameData.discoveredSecrets.length >= 3) {
            this.unlockAchievement('explorer');
        }
        
        // Social competition achievements
        const allRivalsBeaten = this.gameData.rivalTeams.every(rivalName => {
            const rival = this.gameData.allTeams.find(team => team.name === rivalName);
            return rival && this.gameData.team.points > rival.points;
        });
        
        if (allRivalsBeaten && this.gameData.rivalTeams.length > 0) {
            this.unlockAchievement('rival_beater');
        }
        
        // Consistency check
        if (this.gameData.performanceHistory.length >= 5) {
            const recentRaces = this.gameData.performanceHistory.slice(-5);
            const allInPoints = recentRaces.every(race => race.avgPosition <= 10);
            if (allInPoints) {
                this.unlockAchievement('consistency_king');
            }
        }
    }

    unlockAchievement(achievementId) {
        if (this.gameData.achievements.includes(achievementId)) return;
        if (!this.achievementDefinitions[achievementId]) return;
        
        const achievement = this.achievementDefinitions[achievementId];
        this.gameData.achievements.push(achievementId);
        this.gameData.experiencePoints += achievement.xp;
        
        // Unlock features
        achievement.unlocks.forEach(feature => {
            if (!this.gameData.unlockedFeatures.includes(feature)) {
                this.gameData.unlockedFeatures.push(feature);
                this.addNewsItem(`🔓 New feature unlocked: ${feature.replace('_', ' ').toUpperCase()}`);
            }
        });
        
        // Show achievement notification
        this.showAchievementPopup(achievementId);
        this.updateManagerLevel();
        
        // Update UI
        this.updateUI();
    }

    showAchievementPopup(achievementId) {
        const achievement = this.achievementDefinitions[achievementId];
        if (!achievement) return;
        
        // Create achievement notification
        const popup = document.createElement('div');
        popup.className = 'achievement-popup';
        popup.innerHTML = `
            <div class="achievement-content">
                <h3>${achievement.icon} Achievement Unlocked!</h3>
                <p><strong>${achievement.name}</strong></p>
                <p>${achievement.description}</p>
                <span class="xp-reward">+${achievement.xp} XP</span>
            </div>
        `;
        document.body.appendChild(popup);
        
        // Play achievement sound if enabled
        this.playAchievementSound();
        
        setTimeout(() => {
            if (popup.parentNode) {
                popup.parentNode.removeChild(popup);
            }
        }, 3000);
    }

    // Enhanced Sensory-Motor Feedback
    playAchievementSound() {
        if (document.getElementById('sound-effects')?.checked) {
            // Create a simple achievement sound using Web Audio API
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
                oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
                oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.5);
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        }
    }

    // Enhanced Visual Feedback
    createRaceHighlight(message, type = 'info') {
        const highlight = document.createElement('div');
        highlight.className = `race-highlight ${type}`;
        highlight.textContent = message;
        
        const container = document.getElementById('live-updates');
        if (container) {
            container.insertBefore(highlight, container.firstChild);
            
            // Animate highlight
            setTimeout(() => {
                highlight.style.animation = 'highlightFade 3s ease-out forwards';
            }, 100);
            
            setTimeout(() => {
                if (highlight.parentNode) {
                    highlight.parentNode.removeChild(highlight);
                }
            }, 3000);
        }
    }

    // Load saved game with enhanced features
    loadGame() {
        try {
            const savedData = localStorage.getItem('f1ManagerProSave');
            if (savedData) {
                const loadedData = JSON.parse(savedData);
                
                // Merge with default values for new features
                this.gameData = { ...this.gameData, ...loadedData };
                
                // Ensure new features have default values
                if (!this.gameData.achievements) this.gameData.achievements = [];
                if (!this.gameData.experiencePoints) this.gameData.experiencePoints = 0;
                if (!this.gameData.managerLevel) this.gameData.managerLevel = 1;
                if (!this.gameData.discoveredSecrets) this.gameData.discoveredSecrets = [];
                if (!this.gameData.seasonGoals) this.gameData.seasonGoals = [];
                if (!this.gameData.performanceHistory) this.gameData.performanceHistory = [];
                
                this.addNewsItem('💾 Game loaded successfully!');
                this.updateUI();
                return true;
            }
        } catch (error) {
            console.error('Load game failed:', error);
            this.addNewsItem('❌ Failed to load saved game');
        }
        return false;
    }
}

// Global game instance
let game;

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    game = new F1ManagerGame();
});

// Global functions for HTML onclick handlers
function startDevelopment(type) {
    const costs = {
        aero: { cost: 3000000, improvement: 5, duration: 4, name: "Aerodynamic Package" },
        engine: { cost: 5000000, improvement: 8, duration: 6, name: "Engine Upgrade" },
        chassis: { cost: 4000000, improvement: 6, duration: 5, name: "Chassis Optimization" },
        reliability: { cost: 2500000, improvement: 4, duration: 3, name: "Reliability Enhancement" }
    };

    const project = costs[type];
    if (!project) return;

    if (game.gameData.budget >= project.cost) {
        game.gameData.budget -= project.cost;
        game.gameData.developmentProjects.push({
            type: type,
            name: project.name,
            cost: project.cost,
            improvement: project.improvement,
            duration: project.duration,
            progress: 0
        });

        game.addNewsItem(`🔧 Started ${project.name} development project (-$${(project.cost / 1000000).toFixed(1)}M)`);
        game.updateUI();
        game.updateCarDevelopmentTab();
    } else {
        game.addNewsItem(`❌ Insufficient budget for ${project.name} (Need $${(project.cost / 1000000).toFixed(1)}M)`);
    }
}

function upgradeFacility(facility) {
    const costs = {
        windTunnel: 5000000,
        simulator: 3000000,
        factory: 8000000
    };

    const cost = costs[facility];
    if (!cost) return;

    if (game.gameData.budget >= cost) {
        game.gameData.budget -= cost;
        game.gameData.team.facilities[facility]++;
        
        // Facility upgrades provide immediate car improvements
        const improvements = {
            windTunnel: { aerodynamics: 2 },
            simulator: { chassis: 2 },
            factory: { reliability: 2 }
        };

        const improvement = improvements[facility];
        if (improvement) {
            Object.keys(improvement).forEach(stat => {
                game.gameData.car[stat] = Math.min(100, game.gameData.car[stat] + improvement[stat]);
            });
        }

        game.addNewsItem(`🏗️ Upgraded ${facility.replace(/([A-Z])/g, ' $1').trim()} to Level ${game.gameData.team.facilities[facility]} (-$${(cost / 1000000).toFixed(1)}M)`);
        game.updateUI();
    } else {
        game.addNewsItem(`❌ Insufficient budget for ${facility} upgrade (Need $${(cost / 1000000).toFixed(1)}M)`);
    }
}

function saveGame() {
    try {
        const gameDataStr = JSON.stringify(game.gameData);
        const blob = new Blob([gameDataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `f1-manager-pro-save-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        game.addNewsItem('💾 Game saved successfully!');
    } catch (error) {
        console.error('Save failed:', error);
        game.addNewsItem('❌ Failed to save game');
    }
}

function loadGame() {
    const fileInput = document.getElementById('load-file');
    fileInput.click();
    
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const loadedData = JSON.parse(e.target.result);
                game.gameData = { ...game.gameData, ...loadedData };
                game.updateUI();
                game.addNewsItem('💾 Game loaded successfully!');
            } catch (error) {
                console.error('Load failed:', error);
                game.addNewsItem('❌ Failed to load saved game');
            }
        };
        reader.readAsText(file);
    };
}

function resetGame() {
    if (confirm('Are you sure you want to start a new game? This will delete your current progress.')) {
        localStorage.removeItem('f1ManagerProSave');
        location.reload();
    }
}