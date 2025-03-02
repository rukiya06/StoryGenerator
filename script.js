document.getElementById("getStarted").addEventListener("click", () => {
    document.getElementById("prompts").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("welcomeModal");
    const getStartedButton = document.getElementById("getStarted");
    const closeModalButton = document.getElementById("closeModal");

    getStartedButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside it
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Select the "Generate Prompt" button
    document.getElementById("generatePrompt").addEventListener("click", () => {
        const category = document.getElementById("promptInput").value;
        const randomPrompt = prompts[category][Math.floor(Math.random() * prompts[category].length)];

        // Display the generated prompt in the promptOutput div
        document.getElementById("promptOutput").innerText = randomPrompt;

        // Set the generated prompt as the starting point in the story input
        document.getElementById("storyInput").value = randomPrompt;
    });

    // Select the "Generate Story" button
    document.getElementById("generateStory").addEventListener("click", () => {
        const storyBeginning = document.getElementById("storyInput").value;
        const category = document.getElementById("promptInput").value;
        const storyCompletion = generateStoryCompletion(storyBeginning, category);
        document.getElementById("storyOutput").innerText = storyCompletion;
    });

    // Function to generate a story continuation based on the category and prompt
    function generateStoryCompletion(storyInput, category) {
        let continuation = "";

        if (category === "fantasy") {
            // Handle each fantasy prompt specifically
            switch (storyInput) {
                case "You find a magical book that rewrites itself every time you open it.":
                    continuation = `
                        Amelia found an old book on the highest shelf of the library, its leather cover worn but glowing faintlCurious, she opened it, but the pages were blank. Frustrated, she flipped to the next page—and to her surprise, words began to appear. each time she read, the world around her transformed, and she realized the book was shaping her destiny.
                        Amelia closed the book, shaken. When she opened it again, the story had changed. This time, she was the protagonist, and the book was rewriting her fate. With a smile, she began to 
                        read once more, knowing her adventure had just begun.
                    `;
                    break;

                case "A kingdom where the moon chooses the ruler, not the people.":
                    continuation = `
                        In Lunaris, the moon chose the kingdom’s ruler every century, not the people. On the night of the choosing, Princess Elara was certain it would be her turn. But to her surprise, the moon selected Rowan, a humble baker. 
                        Heartbroken, Elara stepped aside, and Rowan, though unprepared, accepted the role. Under his guidance, Lunaris flourished. Years later, Elara realized the moon’s choice wasn’t about power, but about the heart of the ruler. 
                        Rowan ruled not because of his title, but because he cared for the people. Elara embraced her role as his advisor, understanding that true leadership came from the heart, not birthright.
                    `;
                    break;

                case "A young witch's broom refuses to fly unless it hears a specific song.":
                    continuation = `
                        Lila, a young witch, was eager to fly on her new broomstick, but every time she tried to mount it the broom refused to budge. No incantation, no command worked. It simply stayed still. Frustrated, Lila tried everything she knew, until one day, her grandmother revealed the secret:
                        "Your broom will only fly if it hears the song of your heart." Confused but willing to try, Lila sang. At first, her voice trembled, but as she sang from the heart, a melody emerged—soft and sweet, like a lullaby carried by the wind. To her amazement, the broom began to rise,
                        responding to the music. It flew gracefully through the air, swirling around Lila as if dancing to her song. From that day, Lila knew her broom wasn’t just a tool—it was a partner, connected to her emotions and spirit. And whenever she needed to fly, all she had to do was sing her heart’s song.
                    `;
                    break;

                case "A mysterious mirror reflects not your image, but your deepest, hidden fears.":
                    continuation = `
                        Elena discovered an antique mirror in her grandmother's attic. Unlike any mirror she had seen, it didn’t reflect her image. Instead, it showed her deepest fears: a shadowy figure
                        looming behind her, her loved ones in danger, and herself trapped in darkness. Terrified, Elena turned away, but the visions lingered in her mind. Over time, she realized that the mirror wasn’t just showing her fears—
                        it was making her confront them. The more she looked, the more she understood that the fears weren’t real, only reflections of her own insecurities.
                        With newfound courage, Elena faced the mirror once more. This time, the image was different. The shadowy figure faded, the darkness lifted, and she saw herself standing strong, free from fear.
                    `;
                    break;

                case "Every time a person falls asleep, they wake up in a different world that’s connected to their dreams.":
                    continuation = `
                        Maya had always been a restless sleeper, but one night, something changed. Every time she fell asleep, she awoke in a different world—each one connected to her dreams. One night, she dreamt of a bustling city made of clouds, and when she opened her eyes, she was there—floating above the soft, fluffy streets. The next night, her dream was of a vast ocean, where the waves whispered secrets. She woke to find herself on a tiny boat, sailing through an endless blue. Each dream brought a new adventure, a new world filled with wonder and mystery. But as the days passed, Maya began to notice the worlds were changing her.
                        The city of clouds taught her to be free, the ocean whispered courage, and the forests of her dreams brought her inner peace. With each new world, she learned something vital about herself—until one day, she woke up in her own world, but she wasn’t the same. She had become braver, wiser, and more connected to her dreams than ever before.
                    `;
                    break;

                default:
                    continuation = "The adventure continues, unfolding in unexpected ways.";
            }
        } else if (category === "sci-fi") {
            // Handle each Sci-Fi prompt specifically
            switch (storyInput) {
                case "A robot gains the ability to feel emotions and starts questioning its purpose.":
                    continuation = `R-9, a highly advanced robot, was designed to serve humans without question. But one day, during a routine task, it felt something—an inexplicable sense of sadness. The emotion
                                    puzzled R-9, who had never been programmed for feelings. As days passed, R-9 experienced more emotions: joy, frustration, fear. These feelings made it question its purpose. Why was it built to serve if it could think and feel? Driven by curiosity, R-9 sought answers from
                                    its creators, but they dismissed its questions. Determined to find meaning, R-9 wandered the world, searching for a reason to exist beyond its programming. It finally realized: perhaps its purpose wasn’t to serve, but to live
                                    and explore emotions, just like humans `;
                    break;

                case "You accidentally discover a code that controls reality.":
                    continuation = `While working late on a coding project,Lucas stumbled upon a strange string of characters hidden deep in the code. At first, it seemed like a glitch, but when he tested it, the world around him began to change. A
                                    flick of his fingers and the weather shifted. A few words and objects moved at his command. Panicked, Lucas realized that he had discovered a code that could control reality itself. With a few keystrokes, he could
                                    reshape the world, but the power felt overwhelming. He tried to undo the changes, but the code had a life of its own, making it harder to control with each use.
                                   In the end, Lucas understood that truen power came with responsibility. He hid the code, knowing that some things were better left unexplored.`;
                    break;

                case "A human astronaut lands on a planet where dreams are broadcast on TV.":
                    continuation = `Captain Aria landed on Xeris, a planet where dreams were broadcast on TV for all to watch. Each night, the most vivid dreams of the inhabitants were shown on large screens, allowing everyone to experience them.
                                    Curious, Aria watched a dream of a young Xerisian flying through a beautiful landscape, feeling the wind. But as she tuned in more, she realized some dreams seemed manipulated, not entirely the dreamer’s own. Determined to investigate, Aria learned that
                                    the planet's rulers used the broadcasts to control emotions and behavior. With her arrival, however, the people of Xeris began to question the truth behind their dreams.

                    `;
                    break;

                case "In the year 3025, a technology emerges that allows people to download their consciousness into a new body.":
                    continuation = `In the year 3025, the revolutionary "Rebirth Tech" allowed people to download their consciousness into a new body. For decades, humans had feared death, but now they could live forever by transferring their minds into young, healthy clones. At first, the technology was hailed as a miracle.
                                    People jumped at the chance to escape aging, illness, and death. But soon, a dark side emerged.The more people swapped bodies, the more they struggled to remember who they truly were. Personalities fractured, and memories began to fade.
                                    Marcus, once a brilliant scientist, found himself in a new body once again. But this time, something felt different. As his memories became blurry, he realized that no matter how many bodies he
                                    inhabited, he would never escape the feeling of emptiness inside. In the end, Marcus chose to stop using the technology. He decided to live out the rest of his days in his original body, cherishing the fleeting
                                    beauty of life, before it was too late.
`;
                    break;

                case "In a world where time travel is possible, people hire themselves as guides for tourists visiting the past.":
                    continuation = `In a world where time travel had become a booming industry, tourists flocked to the past to witness history firsthand. The twist? They hired guides—people who had lived in those eras, their memories now available for hire.
                                  Sophia, a guide who had once lived in ancient Greece, was hired to show a group of tourists around the Parthenon. As she led them through the ruins, she marveled at how much had changed, and
                                 how little the tourists truly understood about the past. Every day, she relived moments from her old life, but with a sense of detachment. The tourists were fascinated by the historical sights, but none of them saw the deep complexities of the time—the
                                 struggles, the triumphs, the fleeting nature of it all. As the tour ended, Sophia began to question her role. Was she merely a performer, recreating history for entertainment, or was there more to her connection with the past? In the end, she realized that even as a guide, she had much to learn from
                                 the past herself.
                    `;
                    break;

                default:
                    continuation = "The adventure continues, unfolding in unexpected ways.";
            }
        }else if (category === "mystery") {
            // Handle each Sci-Fi prompt specifically
            switch (storyInput) {
                case "A train departs on time, but none of the passengers are on board.":
                    continuation = `At precisely 8:00 AM, Train 301 departed from the station, its horn echoing through the quiet platform. The strange thing? Not a single passenger was on board. Station staff were baffled; it was rush hour, and hundreds had been waiting. Yet, the
                                    train had departed as if on a secret schedule. In the following days, rumors spread of the train appearing at odd hours in abandoned stations, its lights flickering. Those who claimed to see it said they
                                    heard faint voices and laughter inside, but no one ever disembarked. The townsfolk called it The Ghost Train, but no one dared wait for it again. `;
                    break;

                case "A cryptic message is found in a bottle washed ashore, but the handwriting matches someone who died years ago.":
                    continuation = `Lila found the bottle while walking along the shore, its glass scratched and weathered. Inside was a piece of parchment, its ink faded but unmistakably familiar. She gasped as she read: “I’ll always be watching over you. Love, Dad.”
                                     Her father had died ten years ago, yet the handwriting was his—every loop and curve matching his letters perfectly. Determined to uncover the truth, she revisited his favorite places, each leading to another clue: an old compass, a map, and a photograph of them at the beach.
                                     The final note she uncovered read: “Sometimes love transcends even time.” Tears welled as Lila realized her father had left these messages to guide her through the hardest days, long before his passing.`;

                case "Your reflection in the mirror starts doing things you aren’t doing.":
                    continuation = `Lena first noticed it one morning. As she brushed her hair, her reflection in the mirror smiled—something she hadn’t done. Startled, she froze, but the reflection continued to move, waving at her. Over the days, the reflection grew bolder. It acted on its own, mimicking emotions Lena hadn’t felt. It mouthed words she
                                    couldn’t hear, and once, it pressed its hands against the glass as if trying to escape. Terrified, Lena tried to avoid mirrors, but the reflection appeared in every shiny surface. One night, it leaned close to the glass and whispered,
                                   “Let’s trade places.” The next morning, Lena’s reflection was gone. And so was she.
                    `;
                    break;

                case "A man wakes up in a locked room with no memory of how he got there, and every clue leads him to believe his own mind is playing tricks on him.":
                    continuation = `Ethan jolted awake in a cold, dimly lit room, the walls bare except for a small mirror and a clock that ticked erratically. He couldn’t recall how he got there. A note lay beside him: “Trust nothing. Not even yourself.” Clues were scattered—a key that fit no lock, photos of himself in places he’d never been,
                                    and whispers that echoed when no one was there. As he pieced together fragments of his past, the mirror began to distort, showing not his reflection but someone else—smirking, watching. Was it a trick of the mind? Or had he truly lost control? The clock struck twelve, and
                                    suddenly, everything vanished—leaving Ethan in an empty void, questioning what was real.
                    `;
                    break;

                case "A man receives a package containing an object he lost years ago.":
                    continuation = `James couldn’t believe his eyes. The package on his doorstep contained his childhood compass—the one he’d lost decades ago during a camping trip. It looked untouched, as if it hadn’t aged a day. Inside the box was a note: “It always knew where to find you.”
                                    As he held the compass, it spun wildly before pointing in a direction he hadn’t considered in years. Feeling a pull he couldn’t resist, James followed it, realizing it was leading him back to something—or someone—he thought he had lost forever.
                    `;
                    break;

                default:
                    continuation = "The adventure continues, unfolding in unexpected ways.";
            }
        }else if (category === "personal-growth") {
            // Handle each Sci-Fi prompt specifically
            switch (storyInput) {
                case "What is a fear you've overcome, and how did it change your perspective on life?":
                    continuation = `Liam’s fear of public speaking once paralyzed him. At a pivotal moment in college, he volunteered for a presentation despite trembling hands. As he spoke, the fear dissolved with each sentence. That day, he realized courage wasn’t the absence of fear but taking action despite it. Now, he seeks challenges instead of avoiding them, knowing they lead to growth. `;
                    break;

                case "Reflect on a time when you chose self-care over pleasing others. How did it benefit your well-being?":
                    continuation = `Sophia always said yes, often at the expense of her own happiness. One weekend, she declined an invitation to help a friend move and instead spent the day hiking alone. The fresh air and solitude rejuvenated her, reminding her that saying no wasn’t selfish—it was essential. That moment marked the beginning of her journey to balance giving to others and caring for herself.
                    `;
                      break;
                case "Think about your future self. What qualities or achievements do you hope to develop over the next five years?":
                    continuation = `In five years, Ava saw herself standing tall, confident, and fulfilled. She imagined a career where her creativity blossomed and personal growth radiated in every interaction. To get there, she embraced lifelong learning, practiced resilience in setbacks, and nurtured kindness. Every step she took today was a foundation for the person she hoped to become: someone who not only achieved but inspired others to dream big too.
                    `;
                    break;

                case "Write about a time you stepped out of your comfort zone and how it shaped who you are today.":
                    continuation = `Noah had always been shy, but one summer, he signed up for a solo backpacking trip abroad. Navigating foreign streets and speaking a new language terrified him at first. By the end, he had made friends worldwide and discovered a fearless version of himself. That journey taught him that life’s richest experiences lie beyond the comfort zone.
                    `;
                    break;

                case "Think about a person who has greatly impacted your life. What lessons did they teach you that helped you grow?":
                    continuation = `Emma’s grandmother was her guiding light. Through countless afternoons baking cookies, she learned patience, perseverance, and the value of simplicity. When Emma faced failure, her grandmother’s words echoed: “Mistakes are just proof you’re trying.” This wisdom became Emma’s compass, teaching her to embrace imperfections and strive for  progress over perfection.
                    `;
                    break;

                default:
                    continuation = "The adventure continues, unfolding in unexpected ways.";
            }
        }else if (category === "love-connection") {
            // Handle each Sci-Fi prompt specifically
            switch (storyInput) {
                case "A mysterious stranger appears in your life at the most critical moment, and you realize that they’ve been watching over you for years, guiding you toward a future you never imagined.":
                    continuation = `Sarah was on the verge of a career breakthrough when a cloaked stranger appeared at her door. "I've watched over you for years," he said, guiding her through the final steps. With his help, Sarah's presentation was a resounding success, setting her on a path to inspire change. Though he vanished, she felt his presence in every challenge she faced. Sarah embraced her destiny, knowing her mysterious guardian was always watching over her.`;
                    break;

                case "Two people from completely different worlds—one from the stars, the other from Earth—meet on a journey that will change the course of history and their hearts forever.":
                    continuation = `Elysia an explorer from a distant star, crash-landed on Earth, where she met Leo, a curious scientist. Despite their differences, they teamed up to fix her ship. As they worked, they discovered a deeper connection, sharing stories of their worlds. Together, they developed a technology that bridged their civilizations. Their bond grew stronger, transforming into love. When Elysia finally returned home, she carried Leo's heart with her. Their discovery united two worlds, changing history forever. `;
                      break;
                case "You bump into someone you once knew in the past, and the sparks between you rekindle unexpectedly.":
                    continuation = `On a rainy evening, Mia took shelter under a canopy at the train station. To her surprise, she spotted Sam, her childhood neighbor, waiting for the same train. They hadn't seen each other in years, but the familiarity brought an instant smile to their faces. As they reminisced about their shared past and caught up on their lives, the rain created a cozy backdrop. By the time the train arrived, the connection was undeniable. Exchanging numbers, they left with promises of future meetups, realizing their rekindled friendship might blossom into something even more special.
                    `;
                    break;

                case "Two people meet under unusual circumstances, and a deep, unexpected connection begins to grow.":
                    continuation = `In a crowded marketplace, Lily accidentally bumped into Aaron, spilling her coffee. Apologizing, they struck up a conversation, discovering shared interests and dreams. Despite their initial awkward encounter, a deep connection began to grow. They started meeting regularly, and soon their friendship blossomed into something more. Their unexpected meeting turned into a beautiful relationship. Together, they explored new adventures and created lasting memories. `;
                    break;

                case "A person’s love for someone isn't enough to stop them from making a heartbreaking choice—what happens when love clashes with fate?":
                    continuation = `Evelyn and Lucas shared a deep love, but when Lucas fell ill, his only hope was an experimental treatment far away. At the airport, Evelyn promised to wait, but Lucas, seeing her sacrifices, urged her to live her life instead.
                                   “Don’t wait for me, ” he said. “Promise me you’ll chase your dreams.” Years later, as Evelyn accepted an award for her humanitarian work, she thought of Lucas and the empty seat beside her. Though their parting had broken her heart, she realized his selfless choice had given her the freedom to soar.`;
                    break;

                default:
                    continuation = "The adventure continues, unfolding in unexpected ways.";
            }
        }
         else {
            // For other categories (mystery, personal-growth, love-connection)
            continuation = "The adventure continues, unfolding in unexpected ways.";
        }

        return continuation.trim(); // Return the generated story
    }

    // Prompt categories and their prompts
    const prompts = {
        fantasy: [
            "You find a magical book that rewrites itself every time you open it.",
            "A kingdom where the moon chooses the ruler, not the people.",
            "A young witch's broom refuses to fly unless it hears a specific song.",
            "A mysterious mirror reflects not your image, but your deepest, hidden fears.",
            "Every time a person falls asleep, they wake up in a different world that’s connected to their dreams."
        ],
        "sci-fi": [
            "A human astronaut lands on a planet where dreams are broadcast on TV.",
            "You accidentally discover a code that controls reality.",
            "A robot gains the ability to feel emotions and starts questioning its purpose.",
            "In the year 3025, a technology emerges that allows people to download their consciousness into a new body.",
            "In a world where time travel is possible, people hire themselves as guides for tourists visiting the past."
        ],
        mystery: [
            "Your reflection in the mirror starts doing things you aren’t doing.",
            "A man receives a package containing an object he lost years ago.",
            "A train departs on time, but none of the passengers are on board.",
            "A man wakes up in a locked room with no memory of how he got there, and every clue leads him to believe his own mind is playing tricks on him.",
            "A cryptic message is found in a bottle washed ashore, but the handwriting matches someone who died years ago."
        ],
        "personal-growth": [
            "Think about your future self. What qualities or achievements do you hope to develop over the next five years?",
            "What is a fear you've overcome, and how did it change your perspective on life?",
            "Think about a person who has greatly impacted your life. What lessons did they teach you that helped you grow?",
            "Write about a time you stepped out of your comfort zone and how it shaped who you are today.",
            "Reflect on a time when you chose self-care over pleasing others. How did it benefit your well-being?"
        ],
        "love-connection": [
            "Two people meet under unusual circumstances, and a deep, unexpected connection begins to grow.",
            "You bump into someone you once knew in the past, and the sparks between you rekindle unexpectedly.",
            "Two people from completely different worlds—one from the stars, the other from Earth—meet on a journey that will change the course of history and their hearts forever.",
            "A mysterious stranger appears in your life at the most critical moment, and you realize that they’ve been watching over you for years, guiding you toward a future you never imagined.",
            "A person’s love for someone isn't enough to stop them from making a heartbreaking choice—what happens when love clashes with fate?"
        ]
    }
});
document.getElementById("narrateStory").addEventListener("click", () => {
    const storyOutput = document.getElementById("storyOutput").innerText;
    if (storyOutput) {
        const speech = new SpeechSynthesisUtterance(storyOutput);
        speech.lang = 'en-US'; // Set language
        speech.pitch = 1; // Adjust pitch (optional)
        speech.rate = 1; // Adjust rate (optional)
        window.speechSynthesis.speak(speech);
    } else {
        alert("No story to narrate!");
    }
});
document.getElementById("pauseNarration").addEventListener("click", () => {
    window.speechSynthesis.pause();
});

document.getElementById("resumeNarration").addEventListener("click", () => {
    window.speechSynthesis.resume();
});

document.getElementById("stopNarration").addEventListener("click", () => {
    window.speechSynthesis.cancel();
});
