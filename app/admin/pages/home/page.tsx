import { readContent } from '@/lib/content';
import HomeEditor, { type HomeData } from './HomeEditor';

export const dynamic = 'force-dynamic';

export default async function HomeEditorPage() {
  const data = await readContent<HomeData>('home');
  return (
    <>
      <h1 className="page-title">Home page</h1>
      <p className="page-sub">Edit the hero, the exam-target section and the FAQ list.</p>
      <HomeEditor initial={data} />
    </>
  );
}
