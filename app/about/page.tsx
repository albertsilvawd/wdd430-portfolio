import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-8">
        I&apos;m Albert Silva, a Brazilian living in Argentina. I work with data and I&apos;m studying
        Software Development at BYU-Pathway. I enjoy building tools that turn data into clear
        information for people.
      </p>

      <section className="grid gap-4 md:grid-cols-2">
        <SkillCard
          category="Data"
          skills={['Python', 'SQL', 'BigQuery', 'Power BI', 'Machine Learning']}
        />
        <SkillCard
          category="Web Development"
          skills={['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Next.js']}
        />
      </section>
    </main>
  );
}