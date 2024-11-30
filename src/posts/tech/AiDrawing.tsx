function AiDrawing() {
  return (
    <article className="prose prose-invert prose-gray mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">      
      <p className="text-black leading-relaxed text-lg">
        Tools like Dalle3 let you create fantastic images like the following:
      </p>
      
      <blockquote className="border-l-4 border-gray-700 pl-4 my-6 italic text-black">
        Prompt: A glowing metropolis with flying cars, towering skyscrapers, and neon lights reflecting on wet streets.
      </blockquote>
      
      <div className="my-8">
        <img 
          src="/dalle_initial.png" 
          alt="Dalle3 generated cityscape" 
          className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>

      <p className="text-black leading-relaxed mb-6">
        This is an art piece and a beautiful one. But I wouldn't call it drawing. Let me explain.
      </p>

      <p className="text-black leading-relaxed mb-6">
        Back in grade school, I used to hate "art." My art classes always followed the same routine: 
        the teacher would describe exactly what to draw, and I'd try to copy it onto paper. 
        I disliked the process of drawing, and because of that, I decided I disliked art—or at least the visual arts.
      </p>

      <p className="text-black leading-relaxed mb-6">
        The rise of tools like Stable Diffusion and Dalle gave people like me a second chance. 
        Now, I can just type a description, and the AI does the work. I don't need to draw to create art anymore.
      </p>

      <p className="text-black leading-relaxed mb-6">
        Long before the current AI wave, 2D graphics libraries such as Cairo let programmers "draw" using code. 
        Drawing with code isn't the same as drawing by hand, but in both cases, you're following a concrete set of 
        actions to produce an image. The difference is, art created with code—or by hand—comes with a blueprint 
        that others can replicate, something AI image generators simply don't offer.
      </p>

      <p className="text-black leading-relaxed mb-8">
        This realization led me to a more interesting question:{' '}
        <strong className="block mt-4 text-xl">
          Can an AI learn to write code using a drawing library?
        </strong>
      </p>

      <p className="text-black leading-relaxed mb-8">
        To answer this question, I created <a href="https://artsy.rashik.sh" target="_blank" rel="noopener noreferrer">Artsy</a> —a website
        where users can enter a prompt to generate both an image and the code that created it. Unlike traditional 
        AI art generators, Artsy produces reproducible, modifiable code that anyone can understand and adapt.
      </p>

      <p className="text-black leading-relaxed mb-6">
        In this case, the AI is given the description of a Python class that wraps a few core Cairo functions, 
        along with a prompt specific to the user's query. For example the prompt previously passed to Dalle3 gives this result:
      </p>

      <img 
        src="/artsy_initial.png" 
        alt="Artsy generated cityscape" 
        className="my-4 rounded-lg"
      />

      <p className="text-black leading-relaxed mb-6">
        Not exactly mind-blowing, but it also gives me the code to replicate or modify the image. 
        More importantly, it shows the reasoning the AI went through to create it.
      </p>

      <p className="text-black leading-relaxed mb-6">Here's the code used to draw the image above:</p>

      <div className="my-12">
        <pre className="bg-gray-900 p-6 rounded-xl overflow-x-auto shadow-xl border border-gray-700/30">
          <code className="text-sm md:text-base font-mono text-gray-200 whitespace-pre leading-relaxed">
            {`from artcanvas import ArtCanvas
import math
import random
canvas = ArtCanvas()
# Set dark background for night sky
canvas.fill_background(0.05, 0.05, 0.1)
# Draw gradient sky
canvas.set_gradient(0.0, 0.0, 0.0, 1200.0, [
	(0.0, 0.05, 0.05, 0.1, 1.0),
	(0.5, 0.1, 0.05, 0.2, 1.0),
	(1.0, 0.2, 0.1, 0.3, 1.0)
])
canvas.draw_rectangle(0.0, 0.0, 1920.0, 1200.0, True)
# Draw distant buildings
for x in range(0, 1920, 40):
	height = random.uniform(300.0, 800.0)
	width = random.uniform(20.0, 35.0)
	canvas.set_color(0.1, 0.1, 0.15, 0.8)
	canvas.draw_rectangle(float(x), 1200.0 - height, width, height, True)
	# Windows
	for y in range(int(1200.0 - height), 1200, 30):
    	if random.random() > 0.3:
        	canvas.set_color(1.0, 1.0, 0.7, 0.8)
        	canvas.draw_rectangle(float(x) + 5.0, float(y), width - 10.0, 20.0, True)
# Draw neon reflections
for i in range(20):
	x = random.uniform(0.0, 1920.0)
	canvas.set_color(random.uniform(0.5, 1.0),
                	random.uniform(0.0, 0.5),
                	random.uniform(0.5, 1.0),
                	0.3)
	canvas.draw_bezier_curve(
    	x, 1200.0,
    	x + random.uniform(-100.0, 100.0), 1100.0,
    	x + random.uniform(-100.0, 100.0), 900.0,
    	x + random.uniform(-50.0, 50.0), 800.0
	)
# Draw flying cars
for i in range(15):
	x = random.uniform(0.0, 1920.0)
	y = random.uniform(200.0, 600.0)
	# Car body
	canvas.set_color(0.8, 0.8, 0.9, 0.9)
	canvas.draw_rectangle(x, y, 40.0, 15.0, True)
	# Glow effect
	canvas.set_radial_gradient(
    	x + 20.0, y + 7.5, 0.0,
    	x + 20.0, y + 7.5, 60.0,
    	[(0.0, 1.0, 0.8, 0.2, 0.5),
     	(1.0, 1.0, 0.8, 0.2, 0.0)]
	)
	canvas.draw_circle(x + 20.0, y + 7.5, 30.0, True)
# Wet street reflections
canvas.set_gradient(0.0, 800.0, 0.0, 1200.0, [
	(0.0, 0.1, 0.1, 0.2, 0.8),
	(1.0, 0.05, 0.05, 0.1, 1.0)
])
canvas.draw_rectangle(0.0, 800.0, 1920.0, 400.0, True)
canvas.save()
`}
          </code>
        </pre>
      </div>

      <p className="text-black italic my-6">
        <em>
          "A highly detailed, colorful fractal design with infinite complexity, featuring swirling patterns 
          that resemble spirals, paisley shapes, and branching tendrils. The fractal is rendered in vibrant 
          gradients of blue, green, and gold, transitioning into purples and pinks at the edges. The pattern 
          feels infinite, with intricate, repeating details visible at every zoom level. The background is dark 
          to highlight the luminous fractal shapes, creating a mesmerizing and otherworldly effect."
        </em>
      </p>

      <div className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-black font-medium text-center">Dalle3's response:</h3>
            <img 
              src="/dalle_fractal.png" 
              alt="Dalle3 generated fractal" 
              className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-black font-medium text-center">Artsy's response:</h3>
            <img 
              src="/artsy_fractal.png" 
              alt="Artsy generated fractal" 
              className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>

      <p className="text-black leading-relaxed">
        This answers my question about whether an AI can draw. But it also made me realize I was asking 
        the wrong question. The "text to code to X" framework can extend far beyond drawing—it could be 
        used for tasks like generating music or controlling a robot. The real question is this:
      </p>

      <blockquote className="text-black text-lg border-l-4 border-gray-700 pl-6 py-2 my-8 italic">
        Can an API fully encapsulate all operations required for a specific task, and can its usage guide 
        be concise enough to fit within a language model's context window?
      </blockquote>
    </article>
  );
};

export default AiDrawing; 