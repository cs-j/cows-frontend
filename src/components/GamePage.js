import React from 'react';
import Matter from 'matter-js';
const cow = require('../cow.png');
// import { MatterWrap } from 'matter-wrap';

// Engine, Render, Runner, Composite, Composites, Common, MouseConstraint, Mouse, World, Bodies


class GamePage extends React.Component {

  // Matter.use(MatterWrap);
  // componentDidMount() {
  //   console.log(cow)
  // }

  Avalanche = function() {
      const Engine = Matter.Engine;
      const Render = Matter.Render;
      const Runner = Matter.Runner;
      const Composite = Matter.Composite;
      const Composites = Matter.Composites;
      const Common = Matter.Common;
      const MouseConstraint = Matter.MouseConstraint;
      const Mouse = Matter.Mouse;
      const World = Matter.World;
      const Bodies = Matter.Bodies;
      // const Body = Matter.Body;

      // create engine
      const engine = Engine.create();
      const world = engine.world;

      // create renderer
      let render = Render.create({
          element: document.body,
          engine: engine,
          options: {
              width: 800,
              height: 600,
              showAngleIndicator: true,
              // wireframes: false
          }
      });

      Render.run(render);

      // create runner
      const runner = Runner.create();
      Runner.run(runner, engine);

      // add bodies
      const stack = Composites.stack(20, 20, 20, 5, 0, 0, function(x, y) {
          // return Bodies.circle(x, y, Common.random(10, 20), { friction: 0.00001, restitution: 0.5, density: 0.001 });
          return Bodies.circle(x, y, Common.random(10, 20), {
            friction: 0.00001,
            restitution: 0.5,
            density: 0.001,
            render: {
              sprite: {
                texture: cow
              }
            }
          });
      });

      World.add(world, stack);

      World.add(world, [
          Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.06 }),
          Bodies.rectangle(500, 350, 700, 20, { isStatic: true, angle: -Math.PI * 0.06 }),
          Bodies.rectangle(340, 580, 700, 20, { isStatic: true, angle: Math.PI * 0.04 })
      ]);

      // add mouse control
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
              mouse: mouse,
              constraint: {
                  stiffness: 0.2,
                  render: {
                      visible: false
                  }
              }
          });

      World.add(world, mouseConstraint);

      // keep the mouse in sync with rendering
      render.mouse = mouse;

      // fit the render viewport to the scene
      Render.lookAt(render, Composite.allBodies(world));

      // wrapping using matter-wrap plugin
      // for (let i = 0; i < stack.bodies.length; i += 1) {
      //     stack.bodies[i].plugin.wrap = {
      //         min: { x: render.bounds.min.x, y: render.bounds.min.y },
      //         max: { x: render.bounds.max.x, y: render.bounds.max.y }
      //     };
      // }
    }

      // context for MatterTools.Demo
      render() {
        return (
            <div>{this.Avalanche()}</div>
            // engine: engine,
            // runner: runner,
            // render: render,
            // canvas: render.canvas,
            // stop: function() {
            //     Matter.Render.stop(render);
            //     Matter.Runner.stop(runner);
            // }
        )
      }
}

export default GamePage;
