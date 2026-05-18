export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">
        안녕하세요 👋 저는 [이름]입니다
      </h1>
      <p className="text-gray-600 mb-8">
        Next.js 풀스택 개발자를 목표로 공부중입니다
      </p>
      <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
      <div className="flex gap-2 flex-wrap">
        {["Next.js", "TypeScript", "Tailwind CSS", "React"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-black text-white rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
