You will earn the majority of your grade from your sustained and considered engagement with three projects. Each project will ask you to integrate fundamental technical and artistic creative coding techniques into a polished art work for a collective classroom critique. All projects are assessed with the course project rubric below; each prompt lists its own technical requirements.

### Project 1: Generative Drawing Machine

Using p5\*js, create a drawing machine. We are drawing on the legacy of artists working in the branch of creative coding called generative art, including artists such as Vera Molnar, Lillian Schwartz, Manfred Mohr, Joan Truckenbrod, Casey Reas, Rafaël Rozendaal, Zach Lieberman, and Sougwen Chung. Ron Eglash's research on African fractals shows how generative, rule-based design long predates the computer.

Your drawing machine is a _compositional system_ built using the foundational technical elements of this semester.

_For loops_ are a fundamental structure of creative code that allow us to repeat a process like drawing a shape, but vary its position or color. We do this by using the structuring variable inside the for loop inside of drawing functions like `rect()` or `fill()`. A standard and reliable way to use a for loop is to nest one for loop inside another to create a grid of shapes. This provides you with a regular structure into which you will introduce variation.

_Global variables_ are declared variables at the top of your sketch which allow you to tune your drawing machine. Think of this like your artist control panel. These variables must be integrated into your code in the draw loop to create significant and meaningful visual changes in how your drawing machine operates. `noiseScale` will control the effect of the `noise()` function. `spacing` may control the distance in pixels between each shape. `numShapes` may control the number of shapes in each row and column of a nested for loop drawing a grid. `sizeMin` and `sizeMax` might work together with the random variable to assign different size values to a shape with a range (e.g. `let w = random(sizeMin,sizeMax); circle(x,y,w);`).

_Randomness_ will use the `random()` and/or `noise()` function to introduce non-linear or unexpected variation into how your shapes are drawn. You may randomize the color palette by declaring a variable `let r = random(100,150)` and using that as the red value in fill (e.g. `fill(r,100,0)`). You may offset the x position of each shape in your grid by declaring a variable `let xOffset = random(-10,10)` and adding that to the x position of each shape your drawing machine draws (e.g. `circle(x+xOffset,y,w)`).

Once you've gotten your drawing machine up and running, tune your drawing machine by experimenting with the global variables you've created. You may be inspired to go back and add other elements to your machine.

Ultimately, you will decide on a single image your drawing machine has created. Use `randomSeed()` and/or `noiseSeed` to "lock in" those. The idea here is to challenge yourself to make more and more discerning artistic decisions.

#### requirements

- use at least one `for loop`. Some A-level projects may use only one, but it's very likely you will need to use two or more `for loop`s, nested or otherwise.
- use at least 4 global variables that can be changed to influence the outcome of your generative drawing machine
- must be a static image. Use `noLoop()`. In other words, no animation.
- use `random()` and/or `noise()`
- use `randomSeed()` or `noiseSeed()` and select one final version of your compositions
- you are present for critique and participate in others' critique
- no WEBGL or 3D.

#### submission.

Submit both your p5.js URL as well as your exported image using `save()` at the very bottom of your draw loop. *Note, if you use save without `noLoop()`, p5 will try to export images every frame of video!* 

### Project 2: Animated Tableaus // Narrative, or Generative Art

We are now composing in time. Using p5\*js, use the canvas to create an animated artwork. You may make a gamelike animation, a sketch of a scene of an animated narrative, or a moving composition that continues in the aesthetic of generative art.

#### Narrative "Tableau"

When we hear the word "animation", we might think of a scene with a background and foreground which either plays automatically (more scene or narrative adjacent) or is activated by interactivity (more game like).

You should not aim to create an entire narrative or playable game with win and lose conditions. This is what is meant by "tableau". Aim instead to create something that gestures towards that: in the case of the narrative scene, maybe you are setting the scene just before the story starts. In the case of the interactive element, you may aim to have a convincing and satisfying interactive behavior that moves a character along.

#### Generative Art Moving "Tableau"

You may elect to continue working in a more geometric and visually abstract fashion as we saw in the first project, except this time your work will require motion. This time you should _not_ use noLoop() as we want for your composition to change over time. In this approach, you may use any and all of the techniques described above to create movement, including interactivity, changing variables linearly (+,-, for example), animation loops, LFOs, sine wave or circular movement, translate, rotate, etc. The difference is primarily that you are not trying to render a scene, but working with shapes (or images!) to create a more abstract visual.

In our tutorials, we have seen two different ways of approaching animation and movement in p5. Many of you will find it convenient to choose one or the other, but both approaches can be combined in interesting ways as well.

In both cases, you should aim to use coding elements which support your artistic vision, integrating elements from this module with the previous module. You do not need to use all of these, but you will likely use three or four from each module. What I am most interested in is that you have created a compelling animated sketch that evidences two weeks of work.

#### requirements

- your sketch must be animated: do not use `noLoop()`; the composition changes over time
- choose a narrative / game-like tableau or a generative moving tableau
- use at least three techniques from Module 1 and at least three from Module 2 (reviewed below)
- the work should evidence two weeks of development
- you are present for critique and participate in others' critique

#### submission

Submit your p5.js editor URL and a short screen recording (15–30 seconds) of the sketch running. Projects are presented for critique in Week 11.

As a review:

#### Module 1: Generative art

- variables (in both local and global scope)
- simple 2D shapes
- complex shapes with `beginShape()`, `endShape()`, and `vertex()`
- for loops
  -- index style (where the for loop variable increments by one)
  -- drawing element style (where the for loop variable increments by some amount that is useful to a drawing operation)
- nested for loops
- `random()`
- `noise()`
- `if/else` conditional statements

#### Module 2: Animation and Movement

- changing variables with `+=`, `++`, etc.
- using `noise()` with `frameCount` to fluidly change the output
- opacity/transparency (either in background or stroke/fill to create different effects)
- images
  -- textured images with `tint()` and `filter()`
  -- sprite animations or characters
- transformations
  -- `translate()`
  -- `rotate()`
  -- `scale()`
- sinusoidal movement
  -- drawing in a circular fashion with `sin()` and `cos()`
  -- drawing in a spiral fashion with `sin()` and `cos()` and a changing radius
  -- moving elements in a sine wave fashion with `sin()` and a changing angle input
- easing
  -- smooth changes in position to create a more naturalistic movement (e.g. `let easing = 0.01; let x = 100; let targetX = 200; let dx= targetX - x; x += dx * easing;`)
- animation loops
  -- if/else loops (e.g. loop from 0 to 255 and back `let x = 0; x++; if (x>255){x=0;}`)
  -- if/else loops with "bounce" (e.g. 0->255->0);
- "LFO" (low frequency oscillator) modulation of animation loops (a slower loop that modifies the speed of the first loop)
- interactivity
  -- from keyboard input (`key()`, `function keyPressed()`)
  -- from mouse input (`mouseX`,`mouseY`, `function mousePressed()`)
- arrays

### Project 3: Immersive Virtual Exhibition

In this project, we will bring our p5 compositions into the artist-built platform New Art City, an online 3D virtual reality environment. Now, we are not only in time, but in 3D space. Each student will have their own _space_ in our collaborative _world_. In your _space_, you are tasked with designing an environment for your work to be viewed. You will need to produce at least one new p5 sketch that is displayed in your space.

#### Considerations

How can you make use of this 3D space? Will your space be everyday or fantastical? Will it resemble a gallery, or be otherworldly? How can you use sound or images in order to create a sense of immersion?

#### Requirements

- You must design your own 3D space using your own assets.
- You can use as many p5 sketches you've made this semester as you like, but you must use at least one new p5 sketch as an asset in your space.
- This new sketch should be a star in your show. It may be a static image, a moving image, or wrapped around a 3D object.
- You may choose to explore "Miss Sammi's Garden" to find ready-made 3D assets you can import into your space.
- You may use sound to create atmosphere in your space.
- Submit a 100–200 word proposal in Week 14 describing your artistic intent and the coding techniques you plan to use.

#### Submission

Submit the link to your space in our New Art City world, the p5.js editor URL of your new sketch, and two or three screenshots of your space. We tour and critique the exhibition together in Week 15.
