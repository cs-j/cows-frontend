// import React from 'react';
import Matter from 'matter-js';
import MatterWrap from 'matter-wrap';
import cow from '../images/cow.png';
import cow2 from '../images/cow2.png';
import cow3 from '../images/cow3.png';
// import { Modal, Icon, Button, Header } from 'semantic-ui-react';
const GameScreen = GameScreen || {};
const map = require('../images/map.png');
let currentScore = 0;

Matter.use(
  MatterWrap
);

export default GameScreen.avalanche = function(setState) {

    let Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
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
            width: 900,
            height: 450,
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
    const cowStack = Composites.stack(1, 1, 3, 3, 50, 5, function(x, y) {
      return Bodies.rectangle(x, y, 50, 50, {
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

    const cowStack2 = Composites.stack(50, 1, 3, 3, 50, 5, function(x, y) {
      return Bodies.rectangle(x, y, 50, 50, {
        friction: 0.00001,
        restitution: 0.5,
        density: 0.001,
        label: 'cow',
        render: {
          sprite: {
            texture: cow2
          }
        }
      });
    });

    const cowStack3 = Composites.stack(100, 1, 3, 3, 50, 5, function(x, y) {
      return Bodies.rectangle(x, y, 50, 50, {
        friction: 0.00001,
        restitution: 0.5,
        density: 0.001,
        label: 'cow',
        render: {
          sprite: {
            texture: cow3
          }
        }
      });
    });

    const mapStack = Composites.stack(1, 1, 3, 3, 50, 5, function(x, y) {
      return Bodies.rectangle(x, y, 50, 50, {
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

    World.add(world, [cowStack, cowStack2, cowStack3, mapStack]);

    World.add(world, [
        Bodies.rectangle(0, 150, 700, 10, { isStatic: true, angle: Math.PI * 0.06, render: {fillStyle: 'black'} }),
        Bodies.rectangle(500, 350, 700, 10, { isStatic: true, angle: -Math.PI * 0.06, render: {fillStyle: 'black'} }),
        Bodies.rectangle(200, 580, 700, 10, { isStatic: true, angle: Math.PI * 0.04, render: {fillStyle: 'black'} })
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
      alert(
        `YOU LOST!
        Your score was ${currentScore}.
        Play again?`);
      document.location.reload();
    }

    function checkForWin() {
      if(currentScore > 300) {
        alert(`YOU WIN, CONGRATULATIONS!
        Your final score is ${currentScore}.
        Play again?`);
        document.location.reload();
      }
    }

    function addCowToScore() {
      updateScore(currentScore + 10)
      if(setState) {setState({score: currentScore})}
      return currentScore
    }

    function updateScore(newCurrentScore) {
  		currentScore = newCurrentScore;
    }

    function handleClick(event) {
        if (event.body.label === 'cow') {
          addCowToScore()
          checkForWin()
          Composite.remove(cowStack, event.body)
          Composite.remove(cowStack2, event.body)
          Composite.remove(cowStack3, event.body)
        } else if (event.body.label === 'map') {
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

    for (let i = 0; i < cowStack2.bodies.length; i += 1) {
        cowStack2.bodies[i].plugin.wrap = {
            min: { x: render.bounds.min.x, y: render.bounds.min.y },
            max: { x: render.bounds.max.x, y: render.bounds.max.y }
        };
    }

    for (let i = 0; i < cowStack3.bodies.length; i += 1) {
        cowStack3.bodies[i].plugin.wrap = {
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

    return {
        score: currentScore,
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
