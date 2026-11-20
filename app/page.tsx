const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CodeX Viber",
  slogan: "Ideas → Code → Impact",
  description: "A small studio that turns ideas into websites, AI tools, robotics experiments, and clear digital work.",
  telephone: "+919201109621",
  email: "aaditya37codex@gmail.com",
  founder: { "@type": "Person", name: "Aaditya", jobTitle: "Founder & Developer" },
  areaServed: "IN",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>

      <nav className="flex items-center justify-between px-6 py-5 border-b border-neutral-800 bg-[#0a0a0a] sticky top-0 z-50">
        <div className="font-semibold tracking-tight">CodeXViber</div>
        <div className="flex gap-6 text-sm text-neutral-400">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <main id="main" className="bg-[#0a0a0a] text-neutral-100">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-none mb-6">Ideas → Code → Impact</h1>
          <p className="text-neutral-400 text-lg max-w-xl mb-8">A small studio that turns ideas into websites, AI tools, robotics experiments, and clear digital work.</p>
          <a href="#contact" className="inline-block px-6 py-3 border border-neutral-600 rounded hover:bg-white hover:text-black transition">Start a project</a>
        </section>

        <section id="services" className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-medium mb-10">Services</h2>
          <div className="divide-y divide-neutral-800">
            <div className="py-6"><h3 className="font-medium mb-1">Website Development</h3><p className="text-neutral-500">Clean, responsive sites focused on clarity and real use.</p></div>
            <div className="py-6"><h3 className="font-medium mb-1">AI Agents</h3><p className="text-neutral-500">Useful automations and assistants that handle real tasks.</p></div>
            <div className="py-6"><h3 className="font-medium mb-1">Robotics & Prototyping</h3><p className="text-neutral-500">Concepts, control ideas, and hands-on experiments.</p></div>
            <div className="py-6"><h3 className="font-medium mb-1">Presentations</h3><p className="text-neutral-500">Clear decks that help an idea land with the right people.</p></div>
            <div className="py-6"><h3 className="font-medium mb-1">Coding & Tools</h3><p className="text-neutral-500">Custom apps, scripts, and workflow improvements.</p></div>
          </div>
        </section>

        <section id="work" className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-medium mb-10">Selected Work</h2>
          <div className="divide-y divide-neutral-800">
            <div className="py-6"><h3 className="font-medium mb-1">Jarvis Desktop Assistant</h3><p className="text-neutral-500">AI desktop assistant for automating daily tasks. Python-based studio concept.</p></div>
            <div className="py-6"><h3 className="font-medium mb-1">Agency Website Concepts</h3><p className="text-neutral-500">Responsive studio sites focused on clarity. Labeled as concepts, not client deliveries.</p></div>
          </div>
        </section>

        <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-medium mb-6">Contact</h2>
          <p className="text-neutral-400 mb-8">Have a project idea, a collaboration, or a question? Send a message and tell us what you would like to build.</p>
          <div className="flex gap-4 flex-wrap">
            <a href="mailto:aaditya37codex@gmail.com" className="inline-block px-6 py-3 border border-neutral-600 rounded hover:bg-white hover:text-black transition">Email</a>
            <a href="https://wa.me/919201109621" className="inline-block px-6 py-3 border border-neutral-600 rounded hover:bg-white hover:text-black transition">WhatsApp</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-600">
        © 2026 CodeXViber · India
      </footer>
    </>
  );
}
