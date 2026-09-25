import type { WritingPost } from '../content';

// Reading times are calculated centrally from the rendered content.
export const mlWriting: WritingPost[] = [
  {
    example: true, number: '01', slug: 'transformers-from-tokens-to-attention',
    title: 'Transformers, from tokens to attention',
    excerpt: 'Follow a sequence through self-attention, with a diagram, the key equation, and a small PyTorch example.',
    category: 'Deep learning', published: 'September 2026', accent: 'violet',
    meta: '', readTime: '',
    opening: 'Start with a short sequence. Turn it into vectors. Then let each position gather information from the others. That is the operation at the heart of a transformer.',
    summary: ['How queries, keys, and values work together', 'What a causal mask changes', 'Where attention fits inside a transformer'],
    relatedProject: 'tiny-transformer',
    sections: [
      { id: 'tokens-and-context', heading: 'Tokens need context', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'Consider the phrase “the river bank.” A token representation becomes more useful when it can incorporate nearby context: “river” helps distinguish this use of “bank” from a financial institution. For a first walkthrough, imagine each word is one token, although real tokenizers often split words into smaller pieces.' },
        { type: 'paragraph', text: 'An embedding maps each token ID to a vector. Position information gives the model a way to distinguish order. Self-attention then mixes information across positions; the output still has one vector per input position.' },
        { type: 'diagram', kind: 'transformer', caption: 'A simplified decoder-only language model. Each block includes residual connections and normalization, omitted here to keep the main path readable.' },
      ] },
      { id: 'queries-keys-values', heading: 'Queries, keys, and values', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'Three learned projections of the input produce queries, keys, and values. A query is compared with every allowed key. The resulting scores determine how much of each value contributes to that position’s output.' },
        { type: 'list', items: ['Query: the vector used to ask for relevant context.', 'Key: the vector compared against a query.', 'Value: the information mixed into the result.'] },
        { type: 'equation', expression: 'Attention(Q, K, V) = softmax(QKᵀ / √dₖ)V', explanation: 'dₖ is the key dimension. Softmax runs across the key positions in each row; the resulting weights multiply V.' },
        { type: 'paragraph', text: 'Dividing by the square root of the key dimension controls the scale of the scores. For one sequence with T positions, the score matrix is T × T: every row describes the context gathered for one query position.' },
        { type: 'diagram', kind: 'attention', caption: 'An illustrative attention row for “bank”: 0.10 × value(the) + 0.65 × value(river) + 0.25 × value(bank). These weights are made up, not measurements from a trained model.' },
      ] },
      { id: 'causal-attention', heading: 'A small causal-attention example', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'In next-token prediction, a position must not see future tokens. A causal mask excludes those keys before softmax. During training, this lets us compute many positions together without revealing their future context.' },
        { type: 'code', title: 'One attention head · PyTorch', language: 'python', code: `import torch
import torch.nn.functional as F

torch.manual_seed(7)
# Batch, heads, sequence length, head dimension
q = torch.randn(1, 1, 3, 8)
k = torch.randn(1, 1, 3, 8)
v = torch.randn(1, 1, 3, 8)

context = F.scaled_dot_product_attention(
    q, k, v,
    is_causal=True,
    dropout_p=0.0,
)
print(context.shape)  # torch.Size([1, 1, 3, 8])` },
        { type: 'paragraph', text: 'Here q, k, and v are random tensors so the example can run on its own. In a model, learned projections create them from hidden states. The function performs scaling, masking, softmax, and value aggregation; it does not supply those projections or a complete transformer block.' },
        { type: 'callout', title: 'One useful detail', text: 'This function applies dropout according to dropout_p, even when the surrounding model is in evaluation mode. Pass 0.0 explicitly when evaluating.' },
      ] },
      { id: 'beyond-one-head', heading: 'Beyond one attention head', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'Multi-head attention runs several learned projections in parallel and combines their outputs. A transformer layer also uses a feed-forward network, residual connections, and normalization. Encoder-decoder models add a route for the decoder to attend to the encoder’s outputs.' },
        { type: 'paragraph', text: 'When inspecting an implementation, follow the shapes before tuning anything. Write down the batch size, sequence length, model width, and number of heads. Then check which dimension softmax uses and which positions the mask allows. This gives you a concrete way to compare the diagram, the equation, and the code.' },
        { type: 'callout', title: 'Try this next', text: 'Change only the final value vector in the example. With causal attention, earlier output positions should remain unchanged. It is a small experiment that makes the masking rule visible.' },
      ] },
    ],
    sources: [
      { title: 'Vaswani et al. — Attention Is All You Need', href: 'https://arxiv.org/abs/1706.03762' },
      { title: 'PyTorch — Scaled dot product attention', href: 'https://docs.pytorch.org/docs/stable/generated/torch.nn.functional.scaled_dot_product_attention.html' },
      { title: 'PyTorch — Transformer reference', href: 'https://docs.pytorch.org/docs/stable/generated/torch.nn.Transformer.html' },
    ],
  },
  {
    example: true, number: '02', slug: 'retrieval-before-generation', title: 'Good retrieval comes before a good answer',
    excerpt: 'A practical walkthrough of a document-search pipeline, and how to find out which step is failing.',
    category: 'Retrieval & RAG', published: 'September 2026', accent: 'mint',
    meta: '', readTime: '',
    opening: 'A fluent answer can still be built on the wrong paragraph. Making retrieved evidence visible is a useful first step toward understanding a retrieval-augmented system.',
    summary: ['The path from documents to a grounded answer', 'Why chunk boundaries and metadata matter', 'How to evaluate retrieval separately from generation'],
    relatedProject: 'paper-lens',
    sections: [
      { id: 'two-separate-jobs', heading: 'Two separate jobs', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'Retrieval-augmented generation combines a search step with a generation step. The retriever selects material from an external collection; the generator uses that material to help answer a question. This creates a place to update evidence without treating every document change as a model-training task.' },
        { type: 'diagram', kind: 'retrieval', caption: 'A typical document RAG pipeline. The document index is prepared ahead of time; each question uses that index to retrieve context for an answer.' },
        { type: 'paragraph', text: 'These two jobs can fail independently. The right passage might never reach the model. Or the passage might be present while the response misreads it. A single answer-quality score cannot tell you which stage needs attention.' },
      ] },
      { id: 'keep-the-source', heading: 'Keep the source attached', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'Start by preserving a document ID, title, section, and location with every chunk. If a search result cannot be traced back to the original text, debugging the answer becomes much harder. A citation needs to lead to evidence a reader can inspect.' },
        { type: 'paragraph', text: 'Chunk size is an experiment, not a universal constant. A very short chunk can lose the definition that makes a sentence meaningful. A long chunk can mix unrelated subjects. Try paragraph or section boundaries first, then inspect retrieval results for your own questions.' },
        { type: 'callout', title: 'A useful review question', text: 'Could someone understand this passage without opening the previous chunk? If not, consider including the heading or a little surrounding context.' },
      ] },
      { id: 'search-the-collection', heading: 'Search the collection', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'In dense retrieval, an embedding model maps the query and document passages into a shared vector space. A similarity measure ranks candidate passages. Use a model appropriate for short questions matched against longer documents; symmetric sentence similarity and question-to-passage retrieval are different tasks.' },
        { type: 'paragraph', text: 'Keep a lexical baseline in the comparison, especially for exact names, identifiers, and error messages. If dense search misses a specific function name, changing the generation prompt will not repair the missing evidence.' },
        { type: 'list', ordered: true, items: ['Write a question with a known answer in the collection.', 'Inspect the top results and their surrounding text.', 'Record which relevant passages were found or missed.', 'Only then inspect the generated answer and its citations.'] },
      ] },
      { id: 'evaluate-the-stages', heading: 'Evaluate the stages separately', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'For a small evaluation set, label the passages that support each question. Recall@k asks what fraction of those relevant passages appears among the first k results. Review answer support separately: do the cited passages actually justify the claims in the response?' },
        { type: 'paragraph', text: 'Include questions that have no answer in the collection. A system that always produces confident prose may look convincing in a demo and still be unhelpful in everyday use. Record missing evidence, ambiguous questions, and retrieval failures as distinct cases.' },
        { type: 'callout', title: 'An experiment to start with', text: 'Hold the questions and answer model fixed. Compare two chunking strategies and inspect which passages change. This makes the effect of a retrieval decision much easier to see.' },
      ] },
    ],
    sources: [
      { title: 'Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks', href: 'https://arxiv.org/abs/2005.11401' },
      { title: 'Sentence Transformers — Semantic search', href: 'https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html' },
    ],
  },
  {
    example: true, number: '03', slug: 'a-validation-score-you-can-trust', title: 'A validation score you can trust',
    excerpt: 'Data splits, leakage, and a small pipeline that keeps preprocessing inside the training boundary.',
    category: 'ML fundamentals', published: 'September 2026', accent: 'yellow',
    meta: '', readTime: '',
    opening: 'Before improving a model’s score, check what the score is measuring. A careful split often tells you more than a more complicated model.',
    summary: ['Choose a split that matches future use', 'Fit preprocessing on training data only', 'Reserve the test set for a final evaluation'],
    relatedProject: 'vision-workbench',
    sections: [
      { id: 'what-is-unseen', heading: 'Decide what “unseen” means', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'Imagine classifying product photos. If near-identical photographs of one product appear in both training and validation, the score may measure familiarity with that product rather than generalization to a new one. The rows are different; the underlying example is almost the same.' },
        { type: 'paragraph', text: 'Choose the split around the way the model will be used. Group related observations when testing on new entities. Preserve temporal order when predicting future observations. A random split can be appropriate for independent examples, but it does not automatically fit every prediction problem.' },
        { type: 'diagram', kind: 'data-split', caption: 'Each split has a different job. The proportions shown are illustrative, not a recommended ratio; the right split depends on the data and task.' },
      ] },
      { id: 'preprocessing-leaks', heading: 'Preprocessing can leak information', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'Leakage can happen before the model sees a label. For example, a scaler fitted on the full dataset has already used information from the held-out observations. Split first, fit preprocessing on the training partition, and use the learned transformation on the other partitions.' },
        { type: 'code', title: 'Keep fitting inside the training split', language: 'python', code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_iris(return_X_y=True)
X_train, X_valid, y_train, y_valid = train_test_split(
    X, y, test_size=0.25, stratify=y, random_state=7
)
model = make_pipeline(
    StandardScaler(),
    LogisticRegression(max_iter=500),
)
model.fit(X_train, y_train)
print(model.score(X_valid, y_valid))` },
        { type: 'paragraph', text: 'The pipeline fits its scaler using X_train. Its score method transforms X_valid using that same fitted scaler before evaluating the classifier. This small example uses a validation split for demonstration; a final test set would be reserved separately.' },
      ] },
      { id: 'validation-is-feedback', heading: 'Validation is feedback', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'Use validation data to compare model settings. With cross-validation, preprocessing should be fitted separately inside each fold, which is another reason to include it in a pipeline. A group-aware or time-aware splitter can preserve the structure of the prediction problem.' },
        { type: 'callout', title: 'Keep a final test set', text: 'Repeatedly choosing settings based on test performance turns that set into another source of training feedback. Save it for evaluating the configuration you have already chosen.' },
      ] },
      { id: 'inspect-the-errors', heading: 'Inspect the errors, too', paragraphs: [], blocks: [
        { type: 'paragraph', text: 'Suppose the overall score improves while one small class gets worse. That can be a meaningful tradeoff, but it should be visible. Read a few correct and incorrect examples, check the label mapping, and record which classes or capture conditions deserve another look.' },
        { type: 'list', items: ['Keep the split definition and random seed with the experiment.', 'Compare models on the same held-out examples.', 'Check duplicates and unavailable-at-prediction-time features.', 'Write down a failure case alongside the headline metric.'] },
      ] },
    ],
    sources: [
      { title: 'scikit-learn — Data leakage and common pitfalls', href: 'https://scikit-learn.org/stable/common_pitfalls.html#data-leakage' },
      { title: 'scikit-learn — Cross-validation', href: 'https://scikit-learn.org/stable/modules/cross_validation.html' },
    ],
  },
];
