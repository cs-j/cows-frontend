import Matter from 'matter-js';
import MatterWrap from 'matter-wrap';
const GameScreen = GameScreen || {};
const cow = require('../cow.png');
const map = require('../map.png');

// shared variables
// let currentScore, highScore;
let currentScore = 0;
// highScore = 0;

Matter.use(
  MatterWrap
);

export default GameScreen.avalanche = function() {

    let Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Events = Matter.Events,
        Bodies = Matter.Bodies;

    // create engine
    let engine = Engine.create(),
        world = engine.world;

    // create renderer
    let render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            background: '#ffffff',
            showAngleIndicator: false,
            wireframes: false
        }
    });

    Render.run(render);

    // create runner
    let runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    const cowStack = Composites.stack(20, 20, 5, 10, 0, 0, function(x, y) {
      return Bodies.circle(x, y, Common.random(15, 15), {
        friction: 0.00001,
        restitution: 0.5,
        density: 0.001,
        label: 'cow',
        render: {
          sprite: {
            texture: cow
          }
        }
      });
    });

    const mapStack = Composites.stack(20, 20, 5, 10, 0, 0, function(x, y) {
      return Bodies.rectangle(x, y, 1, 1, {
        friction: 0.00001,
        restitution: 0.5,
        density: 0.001,
        label: 'map',
        render: {
          sprite: {
            texture: map
          }
        }
      })
    })

    World.add(world, [cowStack, mapStack]);

    World.add(world, [
        Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.06 }),
        Bodies.rectangle(500, 350, 700, 20, { isStatic: true, angle: -Math.PI * 0.06 }),
        Bodies.rectangle(340, 580, 700, 20, { isStatic: true, angle: Math.PI * 0.04 })
    ]);

    // add mouse control
    let mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    function loseGame() {
      // Matter.Render.stop(render);
      // Matter.Runner.stop(runner);
      alert("You lost! Play again?");
      document.location.reload();
    }

    setTimeout(function() {
      alert("Time's up! Play again?");
      document.location.reload();
    }, 30000);

    function addCowToScore() {
      updateScore(currentScore + 10);
    }

    function updateScore(newCurrentScore) {
  		currentScore = newCurrentScore;
  		// highScore = Math.max(currentScore, highScore);

      console.log('current score is', currentScore)
      // console.log('high score is', highScore)

      if(currentScore > 50) {
        alert(`YOU WIN, CONGRATULATIONS!
        Your final score is ${currentScore}`);
        document.location.reload();
      }

      // render.canvas.fillText("Score: "+currentScore, 8, 20);
    }

    function handleClick(event) {
        if (event.body.label === 'cow') {
          addCowToScore()
        }
        else {
          loseGame()
        }
      }

    Events.on(mouseConstraint, 'enddrag', function(event) {
      handleClick(event);
    });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, Composite.allBodies(world));

    // wrapping using matter-wrap plugin
    for (let i = 0; i < cowStack.bodies.length; i += 1) {
        cowStack.bodies[i].plugin.wrap = {
            min: { x: render.bounds.min.x, y: render.bounds.min.y },
            max: { x: render.bounds.max.x, y: render.bounds.max.y }
        };
    }

    for (let i = 0; i < mapStack.bodies.length; i += 1) {
        mapStack.bodies[i].plugin.wrap = {
            min: { x: render.bounds.min.x, y: render.bounds.min.y },
            max: { x: render.bounds.max.x, y: render.bounds.max.y }
        };
    }

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};
