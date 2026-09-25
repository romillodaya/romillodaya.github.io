import type { Project } from '../content';

export const mlProjects: Project[] = [
  {
    example: true, index: 'P-01', slug: 'paper-lens', title: 'Paper Lens', status: 'Example project',
    category: 'Retrieval & language models', year: '2026', role: 'ML engineering',
    copy: 'Search a collection of research papers and trace every answer back to the passage that supports it.',
    tags: ['Python', 'Sentence Transformers', 'FAISS', 'FastAPI'],
    thumbnail: { src: '/projects/paper-lens.svg', alt: 'Paper Lens concept: a question connects to relevant passages and a cited answer.' },
    repository: { href: 'https://github.com/romillodaya', placeholder: true },
    challenge: 'A folder full of papers is easy to collect and difficult to search. The proposed tool would help a reader locate an explanation across documents, while preserving enough context to check the source.',
    approach: [
      'Extract text with document and page identifiers, then split it at section and paragraph boundaries. Keep the original passage alongside each embedding so search results remain inspectable.',
      'Compare a lexical search baseline with dense retrieval. Feed a small set of relevant passages to the answer model, and display those passages beside the response instead of hiding them behind a citation badge.',
      'Include questions that the collection cannot answer. The interface should make missing evidence visible and let readers open the source before trusting a generated explanation.',
    ],
    evaluation: [
      'Build a small, manually reviewed set of questions and relevant passages.',
      'Measure retrieval recall at a fixed k before changing the answer prompt.',
      'Review whether each answer is supported by its cited passages, and record latency alongside quality.',
    ],
    takeaway: 'A useful answer needs a useful trail of evidence. Retrieval quality and citation quality deserve separate checks.',
    relatedPost: 'retrieval-before-generation',
  },
  {
    example: true, index: 'P-02', slug: 'tiny-transformer', title: 'Tiny Transformer', status: 'Example project',
    category: 'Deep learning', year: '2026', role: 'Model implementation',
    copy: 'A small language-model training setup for inspecting attention, token predictions, and the learning process.',
    tags: ['PyTorch', 'Python', 'Tokenization'],
    thumbnail: { src: '/projects/tiny-transformer.svg', alt: 'Tiny Transformer concept: token sequences alongside a triangular causal attention grid.' },
    repository: { href: 'https://github.com/romillodaya', placeholder: true },
    challenge: 'High-level training libraries can hide the operations that make a language model work. This example project reduces the scope to a small decoder so tensor shapes, masking, and the loss are easy to inspect.',
    approach: [
      'Begin with a bigram baseline on a small, openly licensed text corpus. Define train and validation splits at document boundaries before making token windows.',
      'Implement embeddings, causal self-attention, a position-wise feed-forward network, and residual connections. Log tensor shapes and check that a token cannot attend to future positions.',
      'Save the tokenizer, configuration, random seed, and checkpoint together. A short generation script would compare temperatures using the same prompt, while an attention view would help inspect one layer at a time.',
    ],
    evaluation: [
      'Overfit one tiny batch to check the training loop before a larger run.',
      'Compare validation cross-entropy against the bigram baseline using the same tokenizer and split.',
      'Track training and validation loss together; inspect samples without treating them as a benchmark.',
    ],
    takeaway: 'A small, inspectable model is a useful learning tool. The aim here is understanding and reproducibility, not a claim of competitive performance.',
    relatedPost: 'transformers-from-tokens-to-attention',
  },
  {
    example: true, index: 'P-03', slug: 'vision-workbench', title: 'Vision Workbench', status: 'Example project',
    category: 'Computer vision', year: '2026', role: 'Experiment design',
    copy: 'An image-classification experiment with a closer look at the examples a model gets wrong.',
    tags: ['PyTorch', 'torchvision', 'scikit-learn'],
    thumbnail: { src: '/projects/vision-workbench.svg', alt: 'Vision Workbench concept: an image patch grid, classification bars, and an error-analysis matrix.' },
    repository: { href: 'https://github.com/romillodaya', placeholder: true },
    challenge: 'A single accuracy score can hide repeated failures on a particular class or capture condition. This concept puts error analysis next to the training workflow so a model can be inspected beyond its headline score.',
    approach: [
      'Use a public image dataset and preserve its documented split. Audit duplicates and label mappings before applying any augmentation.',
      'Compare a frozen pretrained backbone with a small fine-tuning run under the same data and evaluation conditions. Keep training augmentations separate from deterministic evaluation transforms.',
      'Build an error gallery with true labels, predictions, and model scores. Group confusions by class, and inspect whether backgrounds or repeated images explain apparently strong performance.',
    ],
    evaluation: [
      'Report per-class precision and recall alongside overall accuracy.',
      'Inspect a confusion matrix and a reproducible sample of incorrect predictions.',
      'Select settings on validation data, then evaluate the chosen configuration once on the reserved test set.',
    ],
    takeaway: 'The most useful next experiment often comes from inspecting failures, rather than adding another training epoch.',
    relatedPost: 'a-validation-score-you-can-trust',
  },
];
