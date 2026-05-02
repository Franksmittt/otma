/** How OTMA image prompts are written — kept in-repo for Ad Studio backup. */
export const AD_STUDIO_PROMPT_METHODOLOGY = `Because realism always beats artificial drama when you are building commercial assets, the entire goal behind these prompts is to actively fight the AI's natural urge to make everything look like a glossy, CGI corporate stock photo.

To get that gritty, authentic "documentary" look, you have to constrain the AI tightly. Here is the exact thought process and formula used to build those prompts, so you can replicate it for any other scenario.

The 3-Part JSON Structure
Prompts are split into three fields (scene_description, visual_details, and camera_settings). AI image generators look for keywords. By feeding the same information in three different formats (a narrative paragraph, a comma-separated tag list, and technical metadata), you essentially "lock in" the constraints so it doesn't ignore your instructions.

1. The Aesthetic Anchor (Killing the "AI Plastic" Look)
AI defaults to perfect, smooth skin and hyper-clean environments. You have to explicitly demand imperfection.
Keywords used: Documentary-style, candid, raw, authentic, visible film grain.
Why: These words force the AI to pull from its training data of photojournalism rather than 3D renders or staged stock photography.

2. Hyper-Specific Character Design
If you just say "a mover," the AI will give you a guy in a pristine white t-shirt and a bright yellow hardhat with a fake logo.
Keywords used: Black South African professional movers, unbranded black one-piece work overalls, light sweat sheen from exertion, minor dust.
Why: Giving them a specific uniform (black overalls) creates consistency. Adding "unbranded" or "zero logos" stops the AI from hallucinating weird, unreadable text on their chests. Adding "sweat sheen" and "exertion" gives them humanity and grounds the image in the reality of hard physical labor.

3. The Logic and Physics Constraint (The Tape Rule)
AI has no common sense. It knows moving involves tape, so it just slaps tape everywhere.
Keywords used: Tape strictly applied only to the plastic layers, ensuring the tape never touches the bare wood surface.
Why: You have to micromanage the physics of the scene. Describe exactly what the hands are doing and why. If you want them carrying a fridge, tell the AI they are using "extreme physical leverage" or gripping "heavy-duty ratchet straps." Detail the tools and the exact technique.

4. Lighting and Environment
Lighting changes a sterile image into a real moment.
Keywords used: Harsh midday South African sun, deep shadows, mixed fluorescent and ambient window light, dusty air catching light.
Why: South African light is notoriously harsh and bright. By specifying the light source, you give the image 3D depth and texture. If it's inside a truck, say "dim interior with light spilling in from the open tailgate."

5. Faux Camera Metadata
This is the secret weapon for photorealism.
Keywords used: Shot on Kodak Portra 400, 35mm lens, f/4.0, 1/125 sec, ISO 800.
Why: Image generators are trained on millions of photos scraped from the internet, many of which had their EXIF data (camera settings) attached. By putting camera settings in your prompt, you trick the AI into rendering the image as if it were taken by that specific lens and film stock.
Want high action? Use a fast shutter speed (1/500 sec).
Want a gritty, low-light truck interior? Ask for pushed film (ISO 1600) and heavy grain.
Want to focus on the hands packing a fragile item? Ask for a shallow depth of field (f/2.8).

Summary for your next batch
Start with the camera/film type, then describe the specific, unbranded humans and their physical state, then explain exactly what their hands are doing with the materials, then light the scene, then add the camera settings at the end.`;
