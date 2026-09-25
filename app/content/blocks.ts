export type DiagramKind = 'attention' | 'transformer' | 'retrieval' | 'data-split';

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'callout'; title: string; text: string }
  | { type: 'diagram'; kind: DiagramKind; caption: string }
  | { type: 'image'; src: string; alt: string; width: number; height: number; caption: string }
  | { type: 'code'; language: string; title: string; code: string }
  | { type: 'equation'; expression: string; explanation: string };
