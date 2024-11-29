function BanglaLLM() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        BanglaLLM: A Tool for Manually Verifying Synthetic Bengali Text Data
      </h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">
        The Problem
      </h2>
      <p>
        While large language models (LLMs) like GPT-4 demonstrate impressive capabilities in generating English text, 
        their performance in other languages, especially less-represented ones, can be lacking. Bengali, or 'Bangla' 
        to natives, is a prime example. Despite being one of the most spoken languages globally, Bangla suffers from 
        a scarcity of digitized content. Our project aims to create a high-quality Bangla text corpus, akin to 
        the TinyStories dataset (<a href="https://huggingface.co/datasets/roneneldan/TinyStories" target="_blank" rel="noopener noreferrer">link</a>).
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-800 dark:text-gray-200">
        Solution Overview
      </h2>
      <p>
        The original TinyStories project harnessed GPT-3.5 and 4 to produce synthetic English data. However, given 
        GPT's limited Bangla generation capabilities, we've devised a different approach involving two key steps:
      </p>
      <ol>
        <li>Use GPT-4 to translate each story from the TinyStories dataset into Bangla.</li>
        <li>Manually verify each story for linguistic and logical accuracy.</li>
      </ol>

      <p>
        Opting for translation over direct Bangla text generation has proven more reliable. To facilitate this, 
        we developed a software system comprising two components:
      </p>

      <h3>Data Synthesis</h3>
      <div className="flex justify-center my-8 rounded-lg overflow-hidden shadow-lg">
        <img 
          src="../_datasynth.drawio.png" 
          alt="Data Synthesis Process"
          className="max-w-full h-auto"
        />
      </div>

      <p>
        As shown in the diagram above, we have a background data synthesis process which takes the following steps:
      </p>
      <ul>
        <li>Extract a story from the TinyStories dataset.</li>
        <li>Translate the story into Bangla using an LLM.</li>
        <li>Store the translation in a message queue.</li>
      </ul>

      <h3>Draft Editor</h3>
      <div className="flex justify-center my-8 rounded-lg overflow-hidden shadow-lg">
        <img 
          src="../_draft_editor.drawio.png" 
          alt="Draft Editor Process"
          className="max-w-full h-auto"
        />
      </div>

      <p>
        The second piece of our software involves a web application for verifying the translated stories. 
        As shown in the above diagram, it works as follows:
      </p>
      <ul>
        <li>A pregenerated story is retrieved from the message queue into an online text editor.</li>
        <li>Our verifiers edit and refine these drafts in the editor.</li>
        <li>Once finalized, the stories are saved in a NoSQL document store.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-gray-800 dark:text-gray-200">
        Impact & Learnings
      </h2>
      <p className="mb-8">
        This project demonstrated both the challenges and opportunities in creating synthetic datasets 
        for low-resource languages. The combination of machine translation and human verification 
        proved to be an effective approach for generating high-quality Bangla text data, potentially 
        serving as a model for similar initiatives in other languages.
      </p>
    </article>
  )
}

export default BanglaLLM 