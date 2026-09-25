import type { DiagramKind } from '../content/blocks';

export function ArticleDiagram({ kind }: { kind: DiagramKind }) {
  if (kind === 'attention') return (
    <div className="attention-figure" role="img" aria-label="The query for bank assigns weights of 0.10 to the, 0.65 to river, and 0.25 to bank, then sums their weighted values.">
      <div className="diagram-label">One query: <strong>bank</strong></div>
      <div className="attention-columns">{[{token:'the',weight:'0.10',percent:10},{token:'river',weight:'0.65',percent:65},{token:'bank',weight:'0.25',percent:25}].map(item => <div key={item.token} className={item.token === 'river' ? 'attention-emphasis' : ''}><span className="diagram-token">{item.token}</span><div className="attention-meter"><i style={{height:`${item.percent}%`}} /></div><strong>{item.weight}</strong><small>× value({item.token})</small></div>)}</div>
      <div className="diagram-result"><span aria-hidden="true">↓</span> Sum the weighted values <span className="diagram-result-note">A context vector for “bank”</span></div>
    </div>
  );
  if (kind === 'transformer') return (
    <div className="model-flow" role="img" aria-label="Tokens become embeddings with position information, pass through repeated blocks of masked multi-head attention and feed-forward layers, then a linear layer and softmax produce next-token probabilities.">
      <div className="model-input"><span>the</span><span>river</span><span>bank</span></div>
      <span className="flow-arrow" aria-hidden="true">↓</span>
      <div className="flow-stage">Token embeddings + position</div>
      <span className="flow-arrow" aria-hidden="true">↓</span>
      <div className="model-block"><span className="diagram-label">REPEATED TRANSFORMER BLOCK</span><div>Masked multi-head attention</div><span className="flow-arrow" aria-hidden="true">↓</span><div>Feed-forward network</div><small>Residual connections + normalization</small></div>
      <span className="flow-arrow" aria-hidden="true">↓</span>
      <div className="flow-stage flow-output">Linear layer + softmax<small>Next-token probabilities</small></div>
    </div>
  );
  if (kind === 'retrieval') return (
    <div className="retrieval-figure" role="img" aria-label="Indexing: documents are split into passages, embedded, and indexed. At question time, embed the query, retrieve passages, and send the question and context to a language model for an answer with citations.">
      <span className="diagram-label">01 / PREPARE THE COLLECTION</span>
      <div className="pipeline-row"><div>Documents<small>Split into passages</small></div><span aria-hidden="true">→</span><div>Embeddings<small>Keep source metadata</small></div><span aria-hidden="true">→</span><div>Search index<small>Store for retrieval</small></div></div>
      <span className="diagram-label">02 / ANSWER A QUESTION</span>
      <div className="pipeline-row"><div>Question<small>Embed the query</small></div><span aria-hidden="true">→</span><div>Retrieve<small>Relevant passages</small></div><span aria-hidden="true">→</span><div>Generate<small>Answer + citations</small></div></div>
      <p className="diagram-footnote">The question and retrieved passages both go to the answer model.</p>
    </div>
  );
  return (
    <div className="split-figure" role="img" aria-label="Split the data before fitting. Training data learns parameters, validation data compares choices, and test data evaluates the final configuration.">
      <span className="diagram-label">SPLIT BEFORE FITTING</span>
      <div className="split-bar" aria-hidden="true"><i/><i/><i/></div>
      <div className="split-roles"><div><strong>Train</strong><span>Learn parameters</span></div><div><strong>Validate</strong><span>Compare choices</span></div><div><strong>Test</strong><span>Final evaluation</span></div></div>
      <p className="diagram-footnote">Group related examples or respect time order when the task requires it.</p>
    </div>
  );
}
