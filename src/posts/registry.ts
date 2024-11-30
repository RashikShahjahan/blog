import FivePillars from './life/FivePillars'
import HelloGoodbye from './life/HelloGoodbye'
import Lost from './life/Lost'
import TheGoal from './life/TheGoal'
import BanglaLLM from './tech/BanglaLLM'
import MistralInstructBangla from './tech/MistralInstructBangla'
import AiDrawing from './tech/AiDrawing'

type Post = {
  id: string
  title: string
  component: React.ComponentType
  date: string
  description?: string
  image?: string
}

type PostCategory = 'tech' | 'life'

type PostRegistry = Record<PostCategory, Post[]>

export const posts: PostRegistry = {
  tech: [
    {
      id: 'mistral-instruct-bangla',
      title: 'Mistral-Instruct-Bangla: Bridging the Gap in Bengali AI',
      component: MistralInstructBangla,
      date: '2024-01-11',
      description: 'An exploration of fine-tuning Mistral for Bengali language processing',
      image: ''
    },
    {
      id: 'banglallm',
      title: 'BanglaLLM: A Tool for Manually Verifying Synthetic Bengali Text Data',
      component: BanglaLLM,
      date: '2023-12-22',
      description: 'An overview of BanglaLLM, a tool for manually verifying synthetic Bengali text data',
      image: ''
    },
    {
      id: 'can-ai-learn-to-draw',
      title: 'Can an AI Learn to Draw?',
      component: AiDrawing,
      date: '2024-11-30',
      description: 'I tried to teach an AI to draw',
      image: 'artsy_fractal.png'
    }
    // Add more tech posts...
  ],
  life: [
    {
      id: 'hello-goodbye',
      title: 'Hello/Goodbye',
      component: HelloGoodbye,
      date: '2024-08-28',
      description: 'A reflection on the complexities of human relationships and the importance of saying goodbye',
      image: ''
    },
    {
      id: 'lost',
      title: 'Lost',
      component: Lost,
      date: '2024-06-26',
      description: 'A story about the emotional journey of losing someone close',
      image: ''
    },
    {
      id: 'the-goal',
      title: 'The Goal',
      component: TheGoal,
      date: '2024-06-17',
      description: 'A reflection on the importance of setting and achieving goals in life',
      image: ''
    },
    {
      id: '5-pillars',
      title: '5 Pillars of Me',
      component: FivePillars,
      date: '2023-10-30',
      description: 'An exploration of the five pillars of my life',
      image: ''
    }
  ]
} 