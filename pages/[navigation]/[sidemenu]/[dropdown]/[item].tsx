import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.component}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}