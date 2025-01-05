function SonicML() {
  return (
    <article className="prose prose-lg max-w-none px-4 py-8 mx-auto">
      <p className="text-gray-700 leading-relaxed mb-6">
        Last year, I spent hundreds of hours trying to train toy language models from scratch. 
        None of them were "useful", but they weren't meant to be. Language models are fascinating, 
        and I wanted to capture even a fraction of the magic.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        While fine-tuning large language models (LLMs) is relatively straightforward, there are 
        far fewer tools available for pre-training them from scratch. I ended up using Andrej 
        Karpathy's llama.c —a fantastic educational project—but I soon realized its limitations. 
        It wasn't designed to easily integrate new datasets or experiment with custom model architectures.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        That's why, over the past few weeks, I built <strong>Sonic-ML</strong>: a simple, command-line 
        tool for training language models from scratch on a single machine, whether it's running a CPU, 
        M-Chip, or GPU. <strong>Sonic-ML</strong> streamlines the process, making it easy to train and 
        evaluate models with just one command. Beyond that, it simplifies downloading datasets from 
        Hugging Face and enables users to train custom tokenizers on any dataset.
      </p>

      <p className="text-gray-700 leading-relaxed">
        This project is open-source and available to the public on{' '}
        <a 
          href="https://github.com/RashikShahjahan/sonic-ml" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          GitHub
        </a>. 
        If you're excited about language models and want to contribute, check out the issues 
        section—I'd love to hear your ideas and see your contributions!
      </p>
    </article>
  )
}

export default SonicML 