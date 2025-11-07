"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GitHubContributions } from "@/components/github-contributions"
import {
  Moon,
  Sun,
  Code,
  Mail,
  Globe,
  Wrench,
  GraduationCap,
  Code2,
  Lightbulb,
  ChevronDown,
  Smartphone,
  Cloud,
  Brain,
  Github,
  Linkedin,
  Send,
  ArrowUp,
  Quote,
  Calendar,
} from "lucide-react"

export default function PortfolioPage() {
  const [isDark, setIsDark] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%287%29-ec8js98EN1bdL6ujqiZnEzTZh2WrF3.png"
              alt="Tronexis Logo"
              className="h-12 w-auto hover:scale-110 transition-transform duration-300 animate-float"
            />
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-sm hover:text-indigo-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm hover:text-indigo-600 transition-colors">
                About
              </a>
              <a href="#skills" className="text-sm hover:text-indigo-600 transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-sm hover:text-indigo-600 transition-colors">
                Experience
              </a>
              <a href="#services" className="text-sm hover:text-indigo-600 transition-colors">
                Services
              </a>
              <a href="#projects" className="text-sm hover:text-indigo-600 transition-colors">
                Projects
              </a>
              <a href="#testimonials" className="text-sm hover:text-indigo-600 transition-colors">
                Testimonials
              </a>
              <a href="#blog" className="text-sm hover:text-indigo-600 transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-sm hover:text-indigo-600 transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-muted transition-colors">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <span className="text-sm">{isDark ? "Dark" : "Light"}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg mb-4 opacity-90">{"Hello, I'm"}</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Mustapha
                <br />
                Laadnani
              </h1>
              <p className="text-2xl mb-6 font-semibold">Full Stack Developer</p>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                Passionate developer specializing in <span className="text-yellow-300 font-semibold">Python</span>,{" "}
                <span className="text-yellow-300 font-semibold">JavaScript</span>,{" "}
                <span className="text-yellow-300 font-semibold">Java</span>,{" "}
                <span className="text-yellow-300 font-semibold">Go</span>, and modern web technologies. Creating
                innovative solutions as a freelancer and continuous learner.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 hover:scale-105 transition-transform"
                >
                  <Code className="w-4 h-4 mr-2" />
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-transform"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="hidden md:block animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gray-900 rounded-lg p-6 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-xs text-gray-400">portfolio.py</div>
                </div>
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{`class Developer:

    def __init__(self):
        self.name = "Mustapha Laadnani"
        self.skills = ["Python", "JavaScript"]
        self.passion = "Creating Amazing Apps"`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-float-up">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[0, 1, 2].map((index) => (
              <Card
                key={index}
                className="border-t-4 border-t-indigo-600 animate-scale-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                    {index === 0 && <GraduationCap className="w-7 h-7 text-indigo-600" />}
                    {index === 1 && <Code2 className="w-7 h-7 text-indigo-600" />}
                    {index === 2 && <Lightbulb className="w-7 h-7 text-indigo-600" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {index === 0 && "Student & Freelancer"}
                    {index === 1 && "Multi-Language Developer"}
                    {index === 2 && "Problem Solver"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {index === 0 &&
                      "Currently pursuing my studies while working as a freelance developer, combining academic knowledge with real-world experience."}
                    {index === 1 &&
                      "Proficient in Python, JavaScript, Java, Go, and web technologies. Always exploring new frameworks and tools to stay current."}
                    {index === 2 &&
                      "Love tackling complex challenges and turning ideas into functional, user-friendly applications that make a difference."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10", label: "Projects Completed" },
              { value: "5", label: "Programming Languages" },
              { value: "100", label: "GitHub Contributions" },
              { value: "2", label: "Years Experience" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0 animate-float-up hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="pt-8 text-center">
                  <div className="text-5xl font-bold mb-2 text-yellow-300">{stat.value}</div>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-float-up">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card className="animate-scale-in hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold">Programming Languages</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Python</span>
                      <span className="text-indigo-600 font-semibold">95%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">JavaScript</span>
                      <span className="text-indigo-600 font-semibold">90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Java</span>
                      <span className="text-indigo-600 font-semibold">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Go</span>
                      <span className="text-indigo-600 font-semibold">75%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Web Technologies */}
            <Card
              className="animate-scale-in hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold">Web Technologies</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">HTML/CSS</span>
                      <span className="text-indigo-600 font-semibold">95%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">React</span>
                      <span className="text-indigo-600 font-semibold">88%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Node.js</span>
                      <span className="text-indigo-600 font-semibold">80%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">TypeScript</span>
                      <span className="text-indigo-600 font-semibold">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tools & Frameworks */}
            <Card
              className="animate-scale-in hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold">Tools & Frameworks</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Code className="w-10 h-10 text-indigo-600" />
                  </div>
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Globe className="w-10 h-10 text-indigo-600" />
                  </div>
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Code2 className="w-10 h-10 text-indigo-600" />
                  </div>
                  <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Wrench className="w-10 h-10 text-indigo-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-float-up">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">My professional journey and achievements</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-indigo-600 pl-8 space-y-12">
              {/* Experience 1 */}
              <div className="relative animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                <div className="absolute -left-10 top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-background"></div>
                <div className="inline-block px-4 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full mb-4">
                  2023 - Present
                </div>
                <Card className="border-l-4 border-l-indigo-600 hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">Senior Full Stack Developer</h3>
                    <p className="text-muted-foreground mb-4">Freelance</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Leading development of complex web applications using Python, JavaScript, and modern frameworks.
                      Specializing in AI integration and scalable solutions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Delivered 15+ successful projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Improved client efficiency by 40%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Specialized in AI/ML integration</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Experience 2 */}
              <div className="relative animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                <div className="absolute -left-10 top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-background"></div>
                <div className="inline-block px-4 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full mb-4">
                  2022 - 2023
                </div>
                <Card className="border-l-4 border-l-indigo-600 hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">Full Stack Developer</h3>
                    <p className="text-muted-foreground mb-4">Tech Solutions Inc.</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Developed and maintained web applications using Java, Go, and modern JavaScript frameworks.
                      Collaborated with cross-functional teams to deliver high-quality solutions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Built 10+ enterprise applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Reduced load times by 60%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Mentored junior developers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Experience 3 */}
              <div className="relative animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                <div className="absolute -left-10 top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-background"></div>
                <div className="inline-block px-4 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full mb-4">
                  2021 - 2022
                </div>
                <Card className="border-l-4 border-l-indigo-600 hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">Junior Developer</h3>
                    <p className="text-muted-foreground mb-4">StartUp Innovations</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Started my professional journey working on various projects, learning modern development practices
                      and contributing to team success.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Contributed to 5+ major projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Learned agile methodologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Built strong foundation in web development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-float-up">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">What I can do for you</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-indigo-600 hover:shadow-lg transition-shadow animate-scale-in">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Full-stack web applications using modern technologies like React, Node.js, Python, and more.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Performance Optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>SEO Friendly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Cross-browser Compatibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="border-t-4 border-t-indigo-600 hover:shadow-lg transition-shadow animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Cross-platform Solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Native Performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>App Store Deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Maintenance & Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="border-t-4 border-t-indigo-600 hover:shadow-lg transition-shadow animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Integration</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Integrate artificial intelligence and machine learning capabilities into your applications.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Machine Learning Models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Computer Vision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Chatbot Development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="border-t-4 border-t-indigo-600 hover:shadow-lg transition-shadow animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Deploy and manage applications on cloud platforms with scalability and security in mind.
                </p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>AWS/Azure/GCP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Docker & Kubernetes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>CI/CD Pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">→</span>
                    <span>Monitoring & Analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-float-up">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">Some of my recent work and contributions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Project 1 - Krili */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden animate-scale-in">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    HTML/CSS
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Krili Website</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A modern web application with interactive features and responsive design. Built with vanilla
                  JavaScript and modern CSS techniques.
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Interactive UI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Modern CSS</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Project 2 - QuickForm Builder */}
            <Card
              className="hover:shadow-lg transition-shadow overflow-hidden animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Code2 className="w-16 h-16 text-white" />
              </div>
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    Form Builder
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">QuickForm Builder</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Dynamic form builder application allowing users to create custom forms with drag-and-drop
                  functionality and real-time preview.
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Drag & Drop</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Real-time Preview</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Export Forms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Project 3 - Weather App */}
            <Card
              className="hover:shadow-lg transition-shadow overflow-hidden animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    API
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Weather App</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Python-based weather application that fetches real-time weather data and provides detailed forecasts
                  with a clean interface.
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Real-time Data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Weather Forecast</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Clean UI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Project 4 - Krili React TS */}
            <Card
              className="hover:shadow-lg transition-shadow overflow-hidden animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    React
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Krili React TS</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Modern React application built with TypeScript, featuring type-safe code and modern development
                  practices.
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>React Hooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Type Safety</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Project 5 - NEXUS AI */}
            <Card
              className="hover:shadow-lg transition-shadow overflow-hidden animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <Brain className="w-16 h-16 text-white" />
              </div>
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    AI
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    CSS
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">NEXUS AI</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  AI-powered application with modern interface and intelligent features for enhanced user experience and
                  automation.
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>AI Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Modern UI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Project 6 - Galactic Defender */}
            <Card
              className="hover:shadow-lg transition-shadow overflow-hidden animate-scale-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <Code2 className="w-16 h-16 text-white" />
              </div>
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 text-xs font-semibold rounded-full">
                    Game
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Galactic Defender</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Interactive game built with TypeScript featuring engaging gameplay mechanics and smooth animations.
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Game Mechanics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Smooth Animations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Interactive</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center animate-float-up">
            <Button
              size="lg"
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white bg-transparent"
              asChild
            >
              <a href="https://github.com/Laadnanimoustapha" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* GitHub & Fun Fact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* GitHub Contributions */}
            <div>
              <div className="text-center mb-12 animate-float-up">
                <h2 className="text-4xl font-bold mb-4">GitHub Contributions</h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
                <p className="text-muted-foreground text-lg">A look at my recent coding activity</p>
              </div>
              <GitHubContributions />
            </div>

            {/* Fun Fact */}
            <div>
              <div className="text-center mb-12 animate-float-up">
                <h2 className="text-4xl font-bold mb-4">Fun Fact</h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
                <p className="text-muted-foreground text-lg">Did you know?</p>
              </div>
              <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0 animate-scale-in hover:shadow-xl">
                <CardContent className="pt-8 text-center">
                  <p className="text-xl leading-relaxed">
                    Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-float-up">
            <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">What clients say about my work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-t-4 border-t-indigo-600 animate-scale-in">
              <CardContent className="pt-8">
                <Quote className="w-10 h-10 text-indigo-600 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Mustapha delivered an exceptional web application that exceeded our expectations. His attention to
                  detail and technical expertise are outstanding."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-muted-foreground">CEO, Tech Startup</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-indigo-600 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-8">
                <Quote className="w-10 h-10 text-indigo-600 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Working with Mustapha was a pleasure. He understood our requirements perfectly and delivered a
                  high-quality solution on time."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Miller</p>
                    <p className="text-sm text-muted-foreground">Product Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-indigo-600 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-8">
                <Quote className="w-10 h-10 text-indigo-600 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Highly skilled developer with great communication. The AI integration he built for us has transformed
                  our business processes."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">RJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Robert Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, Enterprise Co.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-float-up">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">Thoughts on web development and technology</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden animate-scale-in">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>March 15, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Building Scalable Web Applications with Next.js</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Learn how to build performant and scalable web applications using Next.js and modern best practices.
                </p>
                <Button variant="link" className="text-indigo-600 p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg transition-shadow overflow-hidden animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Brain className="w-16 h-16 text-white" />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>March 10, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Integrating AI into Your Web Applications</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Discover how to leverage AI and machine learning to create intelligent web applications.
                </p>
                <Button variant="link" className="text-indigo-600 p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg transition-shadow overflow-hidden animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>March 5, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Modern CSS Techniques for Better UX</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Explore modern CSS features and techniques to create beautiful and responsive user interfaces.
                </p>
                <Button variant="link" className="text-indigo-600 p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-float-up">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to my newsletter for the latest insights on web development, AI, and technology trends.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-float-up">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">{"Let's work together on your next project"}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-indigo-600 animate-slide-in-left">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email Me</h3>
                      <p className="text-muted-foreground mb-3">
                        Ready to discuss your project or just want to say hello?
                      </p>
                      <a
                        href="mailto:mustaphalaadnani313@gmail.com"
                        className="text-indigo-600 hover:underline font-medium"
                      >
                        mustaphalaadnani313@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-indigo-600 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                      <p className="text-muted-foreground mb-3">
                        Connect with me for professional networking and opportunities.
                      </p>
                      <a href="#" className="text-indigo-600 hover:underline font-medium">
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="animate-slide-in-right">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="Project inquiry" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="Tell me about your project..." rows={5} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t animate-float-up">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Mustapha Laadnani. All rights reserved.</p>
        </div>
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all z-50 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
