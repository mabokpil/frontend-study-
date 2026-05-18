import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "포트폴리오 사이트",
    description: "Next.js 15로 만든 포트폴리오",
  },
  { id: 2, title: "블로그", description: "MDX 기반 기술 블로그" },
  { id: 3, title: "쇼핑몰", description: "Prisma + PostgreSQL 풀스택" },
];

export const metadata = { title: "프로젝트" };

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">프로젝트</h1>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="p-6 border rounded-lg hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
