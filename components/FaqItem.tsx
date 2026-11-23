import { PlusIcon } from '@/lib/icons';

type Props = { q: string } & ({ a: string; answerHtml?: never } | { a?: never; answerHtml: string });

export default function FaqItem({ q, a, answerHtml }: Props) {
  return (
    <details className="qa">
      <summary className="q">
        {q}
        <span className="ic"><PlusIcon /></span>
      </summary>
      <div className="a">
        {answerHtml === undefined ? <p>{a}</p> : <p dangerouslySetInnerHTML={{ __html: answerHtml }} />}
      </div>
    </details>
  );
}
