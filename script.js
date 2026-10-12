// ========================================
// ANNE.EXE — MAIN JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    console.log("ANNE.EXE loaded successfully! 🚀");


    // ---------- BOOT SCREEN ----------

    const bootScreen = document.getElementById("bootScreen");
    const progressFill = document.getElementById("progressFill");
    const bootText = document.getElementById("bootText");
    const home = document.getElementById("home");

    let progress = 0;

    const bootMessages = [
        "INITIALIZING DIGITAL UNIVERSE...",
        "LOADING CREATIVE MODULES...",
        "CONNECTING TO ANNE_OS...",
        "SYSTEM READY. WELCOME, ANNE!"
    ];

    if (bootScreen && progressFill && bootText && home) {

        home.classList.add("hidden");

        const bootInterval = setInterval(function() {

            progress += 2;

            progressFill.style.width = progress + "%";

            const messageIndex = Math.min(
                Math.floor(progress / 26),
                bootMessages.length - 1
            );

            bootText.textContent = bootMessages[messageIndex];

            if (progress >= 100) {

                clearInterval(bootInterval);

                setTimeout(function() {

                    bootScreen.classList.add("fadeOut");
                    home.classList.remove("hidden");

                    setTimeout(function() {
                        bootScreen.classList.add("hidden");
                    }, 500);

                }, 400);
            }

        }, 45);

    } else if (home) {

        home.classList.remove("hidden");

    }


    // ---------- HOME NAVIGATION ----------

    const enterBtn = document.getElementById("enterBtn");
    const universe = document.getElementById("universe");
    const room = document.getElementById("room");
    const backBtn = document.getElementById("backBtn");

    if (enterBtn && home && universe) {
        enterBtn.addEventListener("click", function() {
            home.classList.add("hidden");
            universe.classList.remove("hidden");
            window.scrollTo(0, 0);
        });
    }

    if (backBtn && room && universe) {
        backBtn.addEventListener("click", function() {
            room.classList.add("hidden");
            universe.classList.remove("hidden");
            window.scrollTo(0, 0);
        });
    }


    // ---------- FOUR ROOMS ----------

    const roomTitle = document.getElementById("roomTitle");
    const roomText = document.getElementById("roomText");
    const cards = document.querySelectorAll(".card");

    const rooms = {
        about: {
            title: "MIND ROOM",
            text: "Hey, I'm Anne! ✨ I'm a student, aspiring developer, anime lover and creative thinker. I love exploring technology, building digital projects and turning random ideas into something real. Welcome to my little universe!"
        },

        skills: {
            title: "CREATOR LAB",
            text: "MY TOOLKIT 💻 | HTML — building web pages | CSS — styling and animations | JavaScript — interactive websites | Python & C — learning programming fundamentals | Canva & creative tools — exploring design. Currently learning, experimenting and improving one project at a time!"
        },

        game: {
            title: "CHAOS ROOM",
            text: "WELCOME TO THE CHAOS! 🎮 This is where game ideas, anime-inspired experiments and creative coding projects come alive. Current mission: build cool things, learn new skills and make my digital universe more interactive. PROJECT STATUS: WORK IN PROGRESS."
        },

        secret: {
            title: "SECRET ZONE",
            text: "✨ YOU FOUND MY SECRET CORNER! ✨ Behind every line of code is a new idea, a new experiment and another chance to learn. Keep exploring, stay curious and never stop creating. ACCESS LEVEL: CURIOUS MIND."
        }
    };

    function openRoom(roomName) {

        const selectedRoom = rooms[roomName];

        if (!selectedRoom || !room || !universe) {
            return;
        }

        if (roomTitle) {
            roomTitle.textContent = selectedRoom.title;
        }

        if (roomText) {
            roomText.textContent = selectedRoom.text;
        }
        room.dataset.room = roomName;

        universe.classList.add("hidden");
        room.classList.remove("hidden");

        window.scrollTo(0, 0);
    }

    cards.forEach(function(card) {

        card.addEventListener("click", function() {
            openRoom(card.dataset.room);
        });

        card.addEventListener("keydown", function(event) {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openRoom(card.dataset.room);
            }

        });

    });


    // ---------- MOUSE GLOW ----------

    document.addEventListener("mousemove", function(event) {

        document.documentElement.style.setProperty(
            "--mouse-x",
            event.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            event.clientY + "px"
        );

    });


    // ---------- X KEY GLITCH ----------

    document.addEventListener("keydown", function(event) {

        if (
            event.key.toLowerCase() === "x" &&
            !["INPUT", "TEXTAREA"].includes(
                document.activeElement.tagName
            )
        ) {

            document.body.classList.remove("glitch");

            void document.body.offsetWidth;

            document.body.classList.add("glitch");

            setTimeout(function() {
                document.body.classList.remove("glitch");
            }, 700);

        }

    });


    // ---------- TERMINAL ----------

    const terminalForm = document.getElementById("terminalForm");
    const terminalInput = document.getElementById("terminalInput");
    const terminalOutput = document.getElementById("terminalOutput");

    const commands = {

        goal: "My goal is to improve my coding skills and build creative digital projects.",

        anime: "Anime is one of my creative inspirations! 🎌",

        contact: "Scroll down to the CONTACT ME section to find my social links.",

        universe: "Welcome to ANNE.EXE — my personal digital universe! 🌌",

        help: "Available commands: help, about, skills, projects, secret, hello, whoami, date, clear",

        about: "I'm Anne — student, creator and aspiring developer.",

        skills: "HTML | CSS | JavaScript | Python | C",

        projects: "ANNE.EXE — My digital universe is a work in progress!",

        secret: "Your story is only beginning. Keep creating!",

        hello: "Hello, visitor! Welcome to Anne's digital universe.",

        whoami: "You are a visitor inside ANNE.EXE.",

        date: "Your local date and time are displayed in the System Monitor."
    };

    if (terminalForm && terminalInput && terminalOutput) {

        terminalForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const command = terminalInput.value
                .trim()
                .toLowerCase();

            if (!command) {
                return;
            }

            if (command === "clear") {
                terminalOutput.replaceChildren();
                terminalInput.value = "";
                return;
            }

            const result = commands[command] ||
                "Command not found: " + command +
                ". Type 'help' to see available commands.";

            const line = document.createElement("p");

            line.textContent = "> " + command + "\n" + result;

            terminalOutput.appendChild(line);

            terminalInput.value = "";

            terminalOutput.scrollTop =
                terminalOutput.scrollHeight;

        });

    }


    // ---------- LIVE CLOCK & DATE ----------

    function updateAnneClock() {

        const clock = document.getElementById("liveClock");
        const date = document.getElementById("liveDate");

        if (!clock || !date) {
            return;
        }

        const now = new Date();

        clock.textContent = now.toLocaleTimeString("en-IN", {
            hour12: false
        });

        date.textContent = now.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    }

    updateAnneClock();

    setInterval(updateAnneClock, 1000);


    // ---------- SECRET ACCESS ----------

    const secretForm = document.getElementById("secretForm");
    const secretPassword = document.getElementById("secretPassword");
    const secretMessage = document.getElementById("secretMessage");

    if (secretForm && secretPassword && secretMessage) {

        secretForm.addEventListener("submit", function(event) {

            event.preventDefault();

            if (secretPassword.value.trim() === "anne404") {

                secretMessage.textContent =
                    "ACCESS GRANTED ✨ Welcome to the Secret Zone!";

            } else {

                secretMessage.textContent =
                    "ACCESS DENIED ❌ Try the hint: anne404";

            }

            secretPassword.value = "";

        });

    }

});

// NEON DODGE GAME
(function() {
    const canvas = document.getElementById("gameCanvas");
    const startBtn = document.getElementById("gameStartBtn");
    const scoreDisplay = document.getElementById("gameScore");
    const bestDisplay = document.getElementById("gameBest");
    const message = document.getElementById("gameMessage");

    if (!canvas || !startBtn || !scoreDisplay || !bestDisplay || !message) return;

    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    let player = { x: W / 2 - 15, y: H - 48, w: 30, h: 30, speed: 5 };
    let blocks = [];
    let keys = {};
    const leftBtn = document.getElementById("moveLeftBtn");
    const rightBtn = document.getElementById("moveRightBtn");

    function bindTouchButton(button, keyName) {
        if (!button) return;

        button.addEventListener("pointerdown", function(event) {
            event.preventDefault();
            keys[keyName] = true;
            button.setPointerCapture(event.pointerId);
        });

        function releaseKey() {
            keys[keyName] = false;
        }

        button.addEventListener("pointerup", releaseKey);
        button.addEventListener("pointercancel", releaseKey);
        button.addEventListener("lostpointercapture", releaseKey);
    }

    bindTouchButton(leftBtn, "ArrowLeft");
    bindTouchButton(rightBtn, "ArrowRight");
    let score = 0;
    let best = 0;

    try {
        best = Number(localStorage.getItem("anneNeonBest")) || 0;
    } catch (error) {}

    let running = false;
    let paused = false;
    const difficultySelect = document.getElementById("gameDifficulty");
    const pauseBtn = document.getElementById("gamePauseBtn");
    let animationId = null;
    let spawnTimer = 0;
    let lastTime = 0;

    bestDisplay.textContent = best;

    function drawPlayer() {
        ctx.fillStyle = "#67e8f9";
        ctx.shadowColor = "#67e8f9";
        ctx.shadowBlur = 16;
        ctx.fillRect(player.x, player.y, player.w, player.h);
        ctx.shadowBlur = 0;
    }

    function drawBlock(block) {
        ctx.fillStyle = "#a78bfa";
        ctx.shadowColor = "#a78bfa";
        ctx.shadowBlur = 12;
        ctx.fillRect(block.x, block.y, block.w, block.h);
        ctx.shadowBlur = 0;
    }

    function drawScene() {
        ctx.clearRect(0, 0, W, H);

        ctx.strokeStyle = "#a78bfa18";
        for (let x = 0; x < W; x += 30) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, H);
            ctx.stroke();
        }

        for (const block of blocks) drawBlock(block);
        drawPlayer();
    }

    function overlaps(a, b) {
        return a.x < b.x + b.w &&
            a.x + a.w > b.x &&
            a.y < b.y + b.h &&
            a.y + a.h > b.y;
    }

    function endGame() {
        running = false;
        cancelAnimationFrame(animationId);
        startBtn.textContent = "↻ PLAY AGAIN";
        message.textContent = "GAME OVER! Final score: " + score;

        if (score > best) {
            best = score;
            bestDisplay.textContent = best;
            try {
                localStorage.setItem("anneNeonBest", String(best));
            } catch (error) {}
        }
    }

    function loop(time) {
        if (!running) return;

        const delta = Math.min((time - lastTime) / 16.67 || 1, 2);
        lastTime = time;

        if ((keys.ArrowLeft || keys.a) && player.x > 0) {
            player.x -= player.speed * delta;
        }

        if ((keys.ArrowRight || keys.d) && player.x + player.w < W) {
            player.x += player.speed * delta;
        }

        spawnTimer += delta;

        const difficulty = difficultySelect ? difficultySelect.value : "normal";

        const settings = {
            easy: { spawn: 65, speed: 1.5 },
            normal: { spawn: 48, speed: 2.5 },
            hard: { spawn: 32, speed: 4 }
        };

        const selected = settings[difficulty] || settings.normal;
        const spawnRate = Math.max(15, selected.spawn - score / 4);
        if (spawnTimer >= spawnRate) {
            spawnTimer = 0;
            const size = 18 + Math.random() * 20;
            blocks.push({
                x: Math.random() * (W - size),
                y: -size,
                w: size,
                h: size,
                speed: 2 + Math.random() * 1.5 + score / 100
            });
        }

        for (const block of blocks) {
            block.y += block.speed * delta;

            if (overlaps(player, block)) {
                drawScene();
                endGame();
                return;
            }
        }

        blocks = blocks.filter(block => block.y < H + block.h);
        score += 0.05 * delta;
        scoreDisplay.textContent = Math.floor(score);

        drawScene();
        animationId = requestAnimationFrame(loop);
    }

    function startGame() {
        cancelAnimationFrame(animationId);

        player.x = W / 2 - player.w / 2;
        blocks = [];
        score = 0;
        spawnTimer = 0;
        lastTime = performance.now();
        scoreDisplay.textContent = "0";
        message.textContent = "DODGE THE BLOCKS!";
        startBtn.textContent = "RESTART GAME";
        running = true;

        drawScene();
        animationId = requestAnimationFrame(loop);
    }

    document.addEventListener("keydown", function(event) {
        if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
            event.preventDefault();
        }
        keys[event.key] = true;
    });

    document.addEventListener("keyup", function(event) {
        keys[event.key] = false;
    });

    startBtn.addEventListener("click", startGame);
    if (pauseBtn) {
        pauseBtn.addEventListener("click", function() {
            if (!running) return;

            paused = !paused;

            if (paused) {
                cancelAnimationFrame(animationId);
                pauseBtn.textContent = "▶ RESUME";
                message.textContent = "GAME PAUSED";
            } else {
                lastTime = performance.now();
                pauseBtn.textContent = "Ⅱ PAUSE";
                message.textContent = "KEEP DODGING!";
                animationId = requestAnimationFrame(loop);
            }
        });
    }

    drawScene();
})();

// ANNE.EXE NEON PARTICLES
(function() {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        particles = Array.from({ length: 55 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.5 + 0.15,
            alpha: Math.random() * 0.6 + 0.2
        }));
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.y -= p.speed;

            if (p.y < -5) {
                p.y = height + 5;
                p.x = Math.random() * width;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(103, 232, 249, ${p.alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#7c3aed";
            ctx.fill();
        });

        ctx.shadowBlur = 0;
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animateParticles();
})();
const anneAgent = document.getElementById("aiAgent");

if (anneAgent) {
    anneAgent.addEventListener("click", () => {
        anneAgent.classList.remove("agent-clicked");

        void anneAgent.offsetWidth;

        anneAgent.classList.add("agent-clicked");

        setTimeout(() => {
            anneAgent.classList.remove("agent-clicked");
        }, 700);
    });
}