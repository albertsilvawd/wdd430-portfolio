import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'SleepOutside',
    description: 'An e-commerce website for camping gear with product listings, product details, and a shopping cart, built in WDD 330.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/albertsilvawd/wdd330-sleepoutside',
  },
  {
    title: 'CSE 340 Web Application',
    description: 'A server-side web application built with Node.js and Express, using a database, built in CSE 340.',
    technologies: ['Node.js', 'Express', 'JavaScript'],
    link: 'https://github.com/albertsilvawd/cse340-course-repo',
  },
  {
    title: 'Data Pipeline QA',
    description: 'An ETL pipeline with automated data quality tests, including SQL checks, event validation, and BigQuery integration.',
    technologies: ['Python', 'SQL', 'BigQuery', 'pytest'],
    link: 'https://github.com/albertsilvawd/data-pipeline-qa',
  },
  {
    title: 'Sales Prediction Dashboard',
    description: 'An interactive dashboard that predicts sales using machine learning, built with simulated data for educational purposes.',
    technologies: ['Python', 'Streamlit', 'Machine Learning'],
    link: 'https://github.com/albertsilvawd/db-ventas-predictivo',
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a data professional and full-stack web development student learning Next.js and React.
          Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}