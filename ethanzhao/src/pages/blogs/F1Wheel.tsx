// import React from "react";

import BlogPage from "../../components/BlogPage";
import CodeBlock from "../../components/CodeBlock";
import Image from "../../components/Image";

const F1Wheel = () => {
  return (
    <BlogPage
      title="FIN01: 3D Printed F1 Steering Wheel"
      date="June 7, 2025"
      tags={["3D Printing", "Arduino", "CAD Design"]}
      content={
        <>
          <p className="h1-blog">Introduction</p>
          <p className="mb-4">
            In the fall of 2023, my Formula 1 addiction started. I was
            captivated by the speed, percision, and most of all, the
            technologies behind every tenth of a second gained. As I grew more
            and more invested, my addiction demanded I not just watch the sport,
            but try to experience it first hand, thus starting my journey into
            sim racing.
          </p>
          <p className="mb-4">
            Dispite being a beginner, I wanted to get the most immersive
            experience possible, and racing using a keyboard and mouse simply
            didn't cut it for me. I needed to get a steering wheel, a 8nm direct
            drive wheelbase, and pedals. Within the first few google searches, I
            quickly realized that even the cheapest sim racing setups would set
            me back hundreds, if not thousands of dollars, money I simply did
            not have.
          </p>
          <p className="mb-4">
            Realizing there might be many others in the same situation, wanting
            to sim race but not having the money, an idea sprung to my mind:
            What if I made my own simracing peripherals as a cheap alternative
            to big name brands such as Fanetec or MOZA? And so began the months
            long development of my Formula 1 style racing wheel, dubbed the
            FIN01.
          </p>
          <p className="h1-blog">First Steps</p>
          <p className="mb-4">
            As soon as I started looking for ways to turn my ideas into reality,
            I found out just how much knolwedge I lacked. I had no idea, at this
            point, what CAD was, no clue how electronics even worked, and was
            ultimately severly underprepared to take on this project.
          </p>
          <p className="mb-4">
            Fortunately, at this time (around November of 2024 I believe?), I
            was taking a Principles of Engineering class at my High School,
            which opened my eyes to a very simplistic online CAD website:
            Tinkercad by Autodesk. I spent a couple weeks playing around with
            the website, exploring it's capabilities and assessing it's
            viability for my project. At one point, I found out that it was
            possible to create 3D designs from SVG files, leading to my first
            model being created.
          </p>
          <Image
            src="/F1Wheel/TinkerCADFirstDesign.png"
            alt="First TinkerCAD Design"
            caption="The my very rudimentary first draft of the wheel"
          />
          <p className="mb-4">
            Clearly, this design was far from perfect, (sharp, fradgile edges, no way
            to control thickness of individual sides, doesn't very pretty) but it was
            a start that kept me motivated to continue. Knowing the limitations, and
            realizing there was a need to upgrade to a more professional software, I
            started looking for free CAD software that I could use and ultimately ended
            up on Onshape.
          </p>
          <p className="mb-4">
            Clearly, this design was far from perfect, (sharp, fradgile edges, no way
            to control thickness of individual sides, doesn't very pretty) but it was
            a start that kept me motivated to continue. Knowing the limitations, and
            realizing there was a need to upgrade to a more professional software, I
            started looking for free CAD software that I could use and ultimately ended
            up on Onshape.
          </p>
          <p className="h1-blog">Onshape</p>
          <p className="mb-4">
            Again, at this point, I had little to no experience with CAD, and had never
            actually made anything using CAD before, so my first attempt at building a
            fully fledged F1 wheel severely flopped; I sketched a few shapes and realized
            how lost I truly was. I had no choice but to return to the library of all human
            knolwedge: YouTube. Before long, I could scrape together simple shapes and projects
            that ultimately helped me build up experience for what I truly wanted to build.
          </p>
          <p className="mb-4">
            Again, at this point, I had little to no experience with CAD, and had never
            actually made anything using CAD before, so my first attempt at building a
            fully fledged F1 wheel severely flopped; I sketched a few shapes and realized
            how lost I truly was. I had no choice but to return to the library of all human
            knolwedge: YouTube. Before long, I could scrape together simple shapes and things
            that ultimately helped me build up experience for what I truly wanted to build.
          </p>
          <Image
            src="/F1Wheel/OnshapeLearning.jpg"
            alt="Learning OnShape"
            caption="Interesting shapes that used many core Onshape features"
          />
          <p className="mb-4">
            Feeling like I had a decent amount of experience, I embarked on my first full-scale
            F1 wheel design in Onshape, applying the skills and techniques I had learned from my
            experiments and youtube tutorials. Unfortunately, the skills and techniques I had
            aquired were still nowhere near sufficient to complete my project.
          </p>
          <Image
            src="/F1Wheel/OnshapeFirstAttempt.png"
            alt="My first attempt at building a full scale F1 wheel"
            caption="The wheel wasn't even built as a singular part 😭"
          />
          <Image
            src="/F1Wheel/OnshapeFirstAttemptBack.png"
            alt="My first attempt at building a full scale F1 wheel"
            caption="The back of the wheel"
          />
          <p className="mb-4">
            A key principle that I stand by is that experience is by far the best teacher.
            This attempt, even if it wasn't successful, would continue to build up skills
            that I simply couldn't have gotten from just watching tutorials on Youtube and
            sketching random shapes. Additionally, the attempt gave me some key design insights
            and philosophies that would continue on to help me in future designs and iterations.
            The overall shaping of the wheel, including button holes, grips, and more, would
            largely stay the same throughout all my future iterations. Additionally, the desire
            for a 2 piece construction with a hollowed out center would be another key design
            element that persisted in future iterations as an attempt to save weight. The attempt
            also gave me quite a few ideas for improvements on the wheel. For instance, the chunky
            grips and sharp edges would should rounded for better aesthetics and overall strength
            of the wheel under stress and continued use.
          </p>
          <p className="mb-4">
            And so, using these newfound skills, I embarked on my next iteration of the F1 wheel.
          </p>
          <h1 className="h1-blog">FIN01 v1</h1>
          <p className="mb-4">
            The completion of the second iteration of my wheel was when I realized <i>"Oh shoot!
            I could actually do this!!!"</i> To say that the FIN01 v1 was an improvement on its
            predecesor would be an understatement. Not only did I make a much more advanced version
            of the previous iteration, I even managed to create a model of what the back of the wheel
            would look like, as long as a rudimentary draft of the paddle shifters. (Sadly, the back
            of the wheel never saved in OnShape, but you'll get a view of it in the 3D Printing section!)
          </p>
          <Image
            src="/F1Wheel/FIN01v1.png"
            alt="Oh shoot! I can actually do this!!!"
            caption="Not bad for a second draft!"
          />
          <p className="mb-4">
            The above image of FIN01 v1 solved a lot of the problems I had in the previous iteration.
            For one, it's actually one whole part now... Jokes aside, it solves a lot of the problems
            that I wanted to address from the first iteration. The wheel looks much better than before,
            with smooth edges that ensure a comfortable grip and increase structural integrety, a slimmer
            design that allows the wheel to not be too bulky to hold, and reoriented buttons for less
            clutter. The inside of the wheel, you'll notice, is far less hollow than before as well, as
            an attempt to increase the structural integrity of the wheel (a design choice that would
            come to cost me a lot, money wise).
          </p>
          <Image
            src="/F1Wheel/FIN01v1PaddleShifters.png"
            alt="The FIN01 v1 Paddle Shifters"
            caption="This took heavy inspiration from real F1 paddle shifters"
          />
          <p className="mb-4">
            The paddle shifters I created above was actually a really exciting development
            for me. Paddle shifters, to me, seemed like the most entertaining, satisifying,
            and immersive part of sim racing wheels, and I'd really wanted to replicate that
            experience in my own custom wheel. However, this first first design presented a
            lot of problems: It was a challenge to create a housing on the back of the wheel
            for which the paddle shifter would be held in a secure and compact manner, while
            also allowing for smooth operation and satisfying tactile feedback. Furthermore,
            the little extrusions on the shifters, which were meant to press buttons and
            trigger corresponding inputs seemed to be inconsistent at best. Due to these
            problems, creating a better design for paddle shifters became a priority
            for the next iteration.
          </p>
          <p className="h1-blog">Printing</p>
          <p className="mb-4">
            You'd think that, since I had issues with my implementation of the wheel, I would
            wait on the costly and time consuming 3D printing process. Unfortuantely for my
            wallet, I REALLY wanted to see how the wheel would look in real life, and jumped
            the gun for printing my wheel.
          </p>
          <Image
            src="/F1Wheel/FIN01v1Printed.jpg"
            alt="The first printed wheel"
            caption="First time 3d printing!! Anndd I misnamed the version."
          />
          <p className="mb-4">
            I forgot the exact price, but it was somewhere between $60 and $80, a HUGE improvement
            over what a sim racing wheel would cost you if you bought it online (On average upwards
            of $300). But of course, the wheels online all work, and you can actually race with them.
            I, on the other hand, hadn't gotten there yet.
          </p>
          <p className="mb-4">
            Some more little things I wanted to point out, before getting to the next iteration of the
            wheel: 1. We can actually see the inner portion of the back of my wheel! There were 2 rectangular
            holes cut out of the back in order for the extrusions of the paddle shifters to fit through and
            actuate the buttons inside the wheel. There was also a hole for the USB-C female port, as well as
            another rectangular cutout that I wanted to put some control systems in. Unfortunately, 2. The
            size of the wheel was actually too large for the 3D printer I was using. As a
            result, I sloppily (lazily) applied a scale on the wheel without realizing that this would
            cause several knock on effects: The hole in the back would no longer fit a USB-C female port,
            the extrusions of the paddle shifters would no longer fit in the rectangular cutouts in the back
            of the wheel, and all the screw sizes were wrong.
          </p>
          <h1 className="h1-blog">FIN01 v2</h1>
          <p className="mb-4">
            Keeping those issues in mind, I started on the next iteration of the wheel, what would, as of now,
            be the final version of the wheel (bar some very minor revisions to how the wheel channels wiring).
            In this iteration, my goals were to 1. Adress the paddle shifter issues from the pervious version,
            2. Ensure that a quickrelease system was added to allow for easy attachment and detachment of the
            wheel from the base, 3. Create a wheelbase, and 4. MAKE IT WORK!!! I'm proud to say that I acheived
            all 4 of these goals!! (somewhat)
          </p>
          <Image
            src="/F1Wheel/FIN01v2.jpg"
            alt="The second version of the wheel"
            caption="Front of the wheel (left), back of the wheel (right)"
          />
          <h2 className="h2-blog">Electronics Integration</h2>
          <p className="mb-4">
            An Arduino microcontroller was used to manage the button inputs on
            the steering wheel. Each button was wired to the Arduino, which was
            programmed to send corresponding signals to the computer when
            pressed. This setup allows the steering wheel to function as a fully
            operational gaming peripheral.
          </p>
          <p className="mb-4">
            The Arduino was housed within the steering wheel, with careful
            routing of wires to maintain a clean appearance and prevent
            interference with the user's grip.
          </p>
          <h2 className="h2-blog">Conclusion</h2>
          <p className="mb-4">
            The FinF1 project successfully combined 3D design, printing, and
            electronics to create a functional and visually appealing Formula 1
            style steering wheel for gaming. This project not only enhanced my
            skills in CAD design and 3D printing but also provided valuable
            experience in integrating hardware components for custom
            peripherals.
          </p>
          <CodeBlock language="python" code={`print("Hello, World!")`} />
        </>
      }
    />
  );
};

export default F1Wheel;
