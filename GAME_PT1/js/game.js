(function () {
  const TAMX = 620;
  const TAMY = 100;
  const FPS = 100;
  const PROB_ENEMY_SHIP = 0.5;
  let space, ship, lifes;
  let enemies = [];
  let newLifes = [0, 1, 2];
  let counter = 3;
  let playing = false;
  let pause = false;
  let score = 0;
  let interval;
  let dificulty;
  let getEnemyId;
  let popUp = document.getElementById("pop-up");
  let restart = document.getElementById("restart");
  let pStart = document.getElementById("p-start");
  let finished = false;
  let max = 5;
  let min = 2;

  function init() {
    lifes = new Lifes();
    lifes.createLife();

    function clickSpace(event) {
      if (
        (event.key == " " || event.code == "Space" || event.keyCode == 32) &&
        playing == false &&
        pause == false &&
        finished == false
      ) {
        pStart.style.display = "none";
        playing = true;
        pause = false;
        window.addEventListener("keydown", changeDirection);
        space = new Space();
        ship = new Ship();
        playerScore();
        interval = window.setInterval(run, 1000 / FPS);
      } else if (
        (event.key == " " || event.code == "Space" || event.keyCode == 32) &&
        playing == true &&
        finished == false
      ) {
        event.preventDefault();
        fireLaser();
      } else if (event.keyCode == 80 && playing == true && finished == false) {
        playing = false;
        pause = true;
        clearInterval(interval);
        pStart.style.display = "initial";
        pStart.innerHTML = "Paused";
        pStart.style.left = "37%";
      } else if (
        event.keyCode == 80 &&
        playing == false &&
        pause == true &&
        finished == false
      ) {
        playing = true;
        pause = false;
        interval = window.setInterval(run, 1000 / FPS);
        pStart.style.display = "none";
      }
    }
    window.addEventListener("keyup", clickSpace, false);
    dificulty = setInterval(() => {
      max += 1;
      min += 1;
    }, 60000);
  }

  function fireLaser() {
    let laser = createLaserElement();
    space.element.appendChild(laser);
    laser.setAttribute("id", "laser");
    moveLaser(laser);
  }

  function createLaserElement() {
    let xPosition = parseInt(ship.element.style.left);
    let yPosition = parseInt(ship.element.style.bottom);
    let newLaser = document.createElement("img");
    newLaser.src = "assets/laserRed.png";
    newLaser.classList.add("laser");
    newLaser.style.position = "absolute";
    newLaser.style.left = `${xPosition + 45}px`;
    newLaser.style.bottom = `${yPosition + 80}px`;
    return newLaser;
  }

  function moveLaser(laser) {
    let laserInterval = setInterval(() => {
      let yPosition = parseInt(laser.style.bottom);
      setInterval(() => {
        shoot = true;
      }, 100);

      enemies.forEach((enemy) => {
        if (checkLaserCollision(laser, enemy) == true) {
          enemy.element.style.display = "none";
          getEnemyId = document.getElementById(
            `enemy-${enemies.indexOf(enemy)}`
          );
          enemies.splice(enemies.indexOf(enemy), 1);
          space.element.removeChild(getEnemyId);

          if (enemy.element.src.includes("meteorBig")) {
            score = parseInt(score) + 10;
          } else if (enemy.element.src.includes("enemyUFO")) {
            score = parseInt(score) + 20;
          } else if (enemy.element.src.includes("enemyShip")) {
            score = parseInt(score) + 50;
          } else if (enemy.element.src.includes("meteorSmall")) {
            score = parseInt(score) + 100;
          }
          playerScore();
        }
      });

      if (yPosition > 599) {
        laser.remove();
      } else {
        laser.style.bottom = `${yPosition + 100}px`;
      }
    }, 100);
    setTimeout(() => {
      clearInterval(laserInterval);
    }, 600);
  }

  function changeDirection(e) {
    if (e.key === "ArrowLeft") ship.mudaDirecao(-1);
    else if (e.key === "ArrowRight") ship.mudaDirecao(+1);
  }

  class Space {
    constructor() {
      this.element = document.getElementById("space");
      this.element.style.width = `${TAMX}px`;
      this.element.style.height = `${TAMY}vh`;
      this.element.style.backgroundPositionY = "0px";
    }
    move() {
      this.element.style.backgroundPositionY = `${
        parseInt(this.element.style.backgroundPositionY) + 1
      }px`;
    }
  }

  class Lifes {
    constructor() {
      this.element = document.getElementById("lifes");
      this.life = "assets/life.png";
    }

    createLife() {
      newLifes.map((life) => {
        let img = document.createElement("img");
        img.setAttribute("id", `img-${newLifes[life]}`);
        this.element.appendChild(img);
        img.src = this.life;
        img.style.width = "30%";
        img.style.height = "45px";
      });
    }

    removeLife() {
      newLifes.pop();
      if (newLifes.length > 0) {
        let cadaImg = document.getElementById(`img-${newLifes.length - 1}`);
        this.element.removeChild(cadaImg);
      } else {
        this.element.style.display = "none";
      }
    }
  }

  class Ship {
    constructor() {
      this.element = document.getElementById("ship");
      this.AssetsDirecoes = [
        "assets/playerLeft.png",
        "assets/player.png",
        "assets/playerRight.png",
      ];
      this.direcao = 1;
      this.element.src = this.AssetsDirecoes[this.direcao];
      this.element.style.bottom = "20px";
      this.element.style.left = `${parseInt(TAMX / 2) - 40}px`;
    }
    mudaDirecao(giro) {
      if (
        this.direcao + giro >= 0 &&
        this.direcao + giro <= 2 &&
        playing == true
      ) {
        this.direcao += giro;
        this.element.src = this.AssetsDirecoes[this.direcao];
      }
    }
    move() {
      if (this.direcao === 0 && this.element.style.left != `0px`)
        this.element.style.left = `${parseInt(this.element.style.left) - 2}px`;
      if (this.direcao === 2 && this.element.style.left != `${TAMX - 99}px`)
        this.element.style.left = `${parseInt(this.element.style.left) + 2}px`;
      space.move();
    }
  }

  class EnemyShip {
    constructor() {
      this.element = document.createElement("img");
      this.element.className = "enemy-ship";
      this.element.style.top = "-20px";
      this.element.style.left = `${Math.floor(Math.random() * TAMX)}px`;
      space.element.appendChild(this.element);
      this.randomNumber = Math.floor(Math.random() * (max - min) + min);
      console.log(this.sum);
      this.randomImage = Math.floor(Math.random() * (4 - 0) + 0);
      this.randomEnemies = [
        "assets/enemyShip.png",
        "assets/enemyUFO.png",
        "assets/meteorBig.png",
        "assets/meteorSmall.png",
      ];
      this.element.src = this.randomEnemies[this.randomImage];
    }
    move() {
      this.element.style.top = `${
        parseInt(this.element.style.top) + this.randomNumber
      }px`;
    }
  }

  function run() {
    const random_enemy_ship = Math.random() * 100;
    if (random_enemy_ship <= PROB_ENEMY_SHIP) {
      let enemyShip = new EnemyShip();
      enemies.push(enemyShip);
    }
    enemies.forEach((e) => {
      e.move();
      e.element.setAttribute("id", `enemy-${enemies.indexOf(e)}`);
      let shipLeft = parseInt(ship.element.style.left);
      let enemyLeft = parseInt(e.element.style.left);
      let enemyTop = parseInt(e.element.style.top);

      if (
        (enemyTop == 655 || enemyTop == 656) &&
        enemyLeft > shipLeft - e.element.width &&
        enemyLeft < shipLeft + 99
      ) {
        let playerDamaged = setInterval(() => {
          ship.element.src = "assets/playerDamaged.png";
          ship.element.style.animation = "damaged 0.5s infinite";
        }, 10);
        setTimeout(() => {
          clearInterval(playerDamaged);
          ship.element.src = "assets/player.png";
          ship.element.style.animation = "";
        }, 5000);
        lifes.removeLife();
        counter -= 1;
        if (counter < 0) {
          finished = true;
          restart.onclick = () => {
            location.reload();
          };
          popUp.style.visibility = "visible";
          popUp.style.display = "flex";
          clearInterval(interval);
          clearInterval(dificulty);
          playing = false;
          pause = true;
        }
      } else if (enemyTop > 800) {
        getEnemyId = document.getElementById(`enemy-${enemies.indexOf(e)}`);
        space.element.removeChild(getEnemyId);
        enemies.splice(enemies.indexOf(e), 1);
      }
    });
    ship.move();
  }

  function checkLaserCollision(laser, enemy) {
    let laserLeft = parseInt(laser.style.left);
    let laserBottom = parseInt(laser.style.bottom);
    let enemyLeft = parseInt(enemy.element.style.left);
    let enemyTop = parseInt(enemy.element.style.top);
    if (
      (laserBottom + 33 > enemyTop + 50 ||
        laserBottom + 33 > enemyTop + 91 ||
        laserBottom + 33 > enemyTop + 111 ||
        laserBottom + 33 > enemyTop + 42) &&
      enemyLeft > laserLeft - 96 &&
      enemyLeft < laserLeft + 9
    ) {
      return true;
    } else {
      return false;
    }
  }

  function playerScore() {
    let scoreContainer = document.getElementById("score");
    scoreContainer.innerHTML = addZeroes(score, 6);

    function addZeroes(num, len) {
      var convertedNumber = String(num);
      var counter = convertedNumber.length;
      while (counter < len) {
        convertedNumber = "0" + convertedNumber;
        counter++;
      }
      return convertedNumber;
    }
  }

  init();
})();
