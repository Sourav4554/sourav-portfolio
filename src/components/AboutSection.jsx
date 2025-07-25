import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-amber-600"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              I’m a freelance web developer with over a year of experience creating
              responsive, accessible, and high‑performance web applications
              using modern tools and best practices. I love turning ideas into
              clean, user‑friendly interfaces and always strive for code that’s
              both elegant and maintainable.
            </p>

            <p className="text-muted-foreground">
              Freelancing has taught me a lot—not just about coding, but also
              about understanding real-world problems, managing time, and
              communicating clearly with clients. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button bg-amber-600">
                {" "}
                Get In Touch
              </a>

              <a
                href="/sourav.pdf"
                download
                className="px-6 py-2 rounded-full border border-amber-600 text-amber-600 hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Frontent Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building robust server-side applications with Node.js and
                    Express.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-amber-600" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full stack Developement
                  </h4>
                  <p className="text-muted-foreground">
                    Combining frontend and backend skills to deliver complete
                    web solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
