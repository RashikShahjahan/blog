function FivePillars() {
  return (
    <article className="prose lg:prose-xl max-w-none">
      <h1 className="text-4xl font-bold mb-8">5 Pillars of Me</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Lately, I've been pondering on the significant facets of my life that take up the majority of my time and energy. 
          I have identified these facets as Spirituality, Career, Music, Fitness, and Community, collectively referring to 
          them as the "5 Pillars of Me." This piece serves as a deep dive into each pillar, offering an assessment of their 
          current states, pinpointing areas for improvement, and formulating solutions to reach my goals with them.
        </p>
      </div>

      {['Spirituality', 'Career', 'Music', 'Fitness', 'Community'].map((pillar, index) => (
        <section key={pillar} className="mb-16 p-6 border-2 border-black rounded-lg hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
              {index + 1}
            </span>
            {pillar}
          </h2>
          
          {['Current State', 'Challenges', 'Goals', 'Strategies for Growth'].map(section => (
            <div key={section} className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-gray-800">{section}</h3>
              <p className="text-gray-700 leading-relaxed">
                {section === 'Current State' && getCurrentState(pillar)}
                {section === 'Challenges' && getChallenges(pillar)}
                {section === 'Goals' && getGoals(pillar)}
                {section === 'Strategies for Growth' && getStrategies(pillar)}
              </p>
            </div>
          ))}
        </section>
      ))}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm curious to see the progress I can make. I'm considering running an experiment to track my activities 
          and their alignment with the '5 Pillars of Me.' Perhaps this can be the topic of a new post. Time will tell.
        </p>
      </div>
    </article>
  );
}

// Helper functions to return content for each pillar
function getCurrentState(pillar: string): string {
  const states: Record<string, string> = {
    Spirituality: "My spiritual practices are consistent, with daily breathwork and sound practices, enriched by podcasts, books, and occasional group retreats.",
    Career: "As a software engineer, I am building a strong foundation in both technical and social skills, accumulating valuable career capital.",
    Music: "I love listening to music, so I started taking weekly singing and piano lessons.",
    Fitness: "My fitness routine comprises 5 days a week at the gym, alternating between cardio and strength training, alongside a daily step goal.",
    Community: "My community engagement is predominantly with family and relatives, with minimal contact with old friends."
  };
  return states[pillar];
}

function getChallenges(pillar: string): string {
  const challenges: Record<string, string> = {
    Spirituality: "Maintaining regularity in my practices and safeguarding against disengagement are areas that need attention.",
    Career: "The next step is to grow into a senior engineering role, which requires honing my communication skills and developing expertise in a specific domain.",
    Music: "I need to establish a routine for structured practice outside of my lessons to expedite my learning and make it more cost-effective.",
    Fitness: "Reestablishing consistency after a brief hiatus and revamping my diet are my current challenges.",
    Community: "Expanding my social interactions and finding ways to connect with others in the GTA are pressing needs."
  };
  return challenges[pillar];
}

function getGoals(pillar: string): string {
  const goals: Record<string, string> = {
    Spirituality: "To deepen my spiritual connection and enhance mindfulness in everyday life.",
    Career: "To weave a safety net from building career capital and actual capital to allow me to take on more ambitious projects such as building a non-profit or high impact startup.",
    Music: "To become proficient in singing and piano, eventually branching out into songwriting and composition.",
    Fitness: "To reduce body fat and return to a healthier, more fit state.",
    Community: "To broaden my social network and rekindle old friendships."
  };
  return goals[pillar];
}

function getStrategies(pillar: string): string {
  const strategies: Record<string, string> = {
    Spirituality: "Engaging more actively in retreats and practicing mindfulness consistently.",
    Career: "Continue excelling in my current role while keeping an eye on opportunities in prestigious tech companies, despite the uncertain industry climate.",
    Music: "Dedicate daily 30-minute practice sessions for both singing and piano.",
    Fitness: "Cut back on eating out from three to one meal a week and delve into meal prep guides to streamline my cooking process.",
    Community: "Seek out events and activities that interest me, and reach out to university friends for potential meet-ups."
  };
  return strategies[pillar];
}

export default FivePillars; 