import Image from 'next/image';
import type { ContentBlock } from '../content/blocks';
import { ArticleDiagram } from './article-diagram';
import { assetPath } from './photo-art';

export function ArticleBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'paragraph': return <p>{block.text}</p>;
    case 'list': {
      const List = block.ordered ? 'ol' : 'ul';
      return <List>{block.items.map(item => <li key={item}>{item}</li>)}</List>;
    }
    case 'callout': return <aside className="reading-callout"><strong>{block.title}</strong><p>{block.text}</p></aside>;
    case 'diagram': return <figure className="reading-figure"><div className="diagram-surface"><ArticleDiagram kind={block.kind}/></div><figcaption>{block.caption}</figcaption></figure>;
    case 'image': return <figure className="reading-figure"><Image src={assetPath(block.src)} alt={block.alt} width={block.width} height={block.height} unoptimized/><figcaption>{block.caption}</figcaption></figure>;
    case 'equation': return <figure className="reading-equation"><div tabIndex={0} role="region" aria-label="Equation">{block.expression}</div><figcaption>{block.explanation}</figcaption></figure>;
    case 'code': return <div className="reading-code"><div className="code-heading"><span>{block.title}</span><small>{block.language}</small></div><pre tabIndex={0} aria-label={`${block.title}, scroll horizontally for long lines`}><code>{block.code}</code></pre></div>;
  }
}
