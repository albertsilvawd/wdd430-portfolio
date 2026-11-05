interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <article className="p-4 bg-gray-50 border border-gray-200 rounded shadow-sm">
      <h2 className="text-xl font-bold mb-3 text-blue-800">{category}</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}