import { notFound } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "포트폴리오 사이트",
    description: "Next.js 15로 만든 포트폴리오",
  },
  { id: 2, title: "블로그", description: "MDX 기반 기술 블로그" },
  { id: 3, title: "쇼핑몰", description: "Prisma + PostgreSQL 풀스택" },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) notFound();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
}
