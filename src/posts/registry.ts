import FivePillars from './life/FivePillars'
import HelloGoodbye from './life/HelloGoodbye'
import Lost from './life/Lost'
import TheGoal from './life/TheGoal'
import BanglaLLM from './tech/BanglaLLM'
import MistralInstructBangla from './tech/MistralInstructBangla'
import AiDrawing from './tech/AiDrawing'

export const posts = {
  tech: [
    {
      id: 'mistral-instruct-bangla',
      title: 'Mistral-Instruct-Bangla: Bridging the Gap in Bengali AI',
      component: MistralInstructBangla,
      date: '2024-01-11'
    },
    {
      id: 'banglallm',
      title: 'BanglaLLM: A Tool for Manually Verifying Synthetic Bengali Text Data',
      component: BanglaLLM,
      date: '2023-12-22'
    },
    {
      id: 'ai-drawing',
      title: 'Can an AI Learn to Draw?',
      component: AiDrawing,
      date: '2024-11-30'
    }
    // Add more tech posts...
  ],
  life: [
    {
      id: 'hello-goodbye',
      title: 'Hello/Goodbye',
      component: HelloGoodbye,
      date: '2024-08-28'
    },
    {
      id: 'lost',
      title: 'Lost',
      component: Lost,
      date: '2024-06-26'
    },
    {
      id: 'the-goal',
      title: 'The Goal',
      component: TheGoal,
      date: '2024-06-17'
    },
    {
      id: '5-pillars',
      title: '5 Pillars of Me',
      component: FivePillars,
      date: '2023-10-30'
    }
  ]
} 