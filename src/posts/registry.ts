import FivePillars from './life/FivePillars'
import HelloGoodbye from './life/HelloGoodbye'
import Lost from './life/Lost'
import TheGoal from './life/TheGoal'
import BanglaLLM from './tech/BanglaLLM'
import MistralInstructBangla from './tech/MistralInstructBangla'
import AiDrawing from './tech/AiDrawing'
import WhatIWant from './life/WhatIWant'
import ToRashik from './life/ToRashik'
import SonicML from './tech/SonicML'
import Onwards from './life/Onwards'
import BracketBot from './tech/BracketBot'

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
      id: 'bracket-bot',
      title: 'BracketBot: A Self-Programming Robot Using Voice Commands',
      component: BracketBot,
      date: '2025-02-11',
      description: 'A robot that takes voice commands and writes python code for motor control',
      image: ''
    },
    {
      id: 'sonic-ml',
      title: 'Sonic-ML: Train Tiny Language Models on any device',
      component: SonicML,
      date: '2025-01-05',
      description: 'A simple command-line tool for training language models from scratch',
      image: ''
    },
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
      image: 'https://blog.rashik.sh/artsy_fractal.png'
    }
  ],
  life: [
    { 
      id: 'onwards',
      title: 'Onwards',
      component: Onwards,
      date: '2025-03-27',
      description: 'Keep going forward',
      image: ''},
    {
      id: 'to-rashik',
      title: 'To Rashik',
      component: ToRashik,
      date: '2025-01-01',
      description: 'A letter from a dear friend',
      image: ''
    },

    {
      id: 'what-I-want',
      title: 'What I Want',
      component: WhatIWant,
      date: '2024-12-16',
      description: '',
      image: ''
    },

    {
      id: 'hello-goodbye',
      title: 'Hello/Goodbye',
      component: HelloGoodbye,
      date: '2024-08-28',
      description: 'Hello/Goodbye',
      image: ''
    },
    {
      id: 'lost',
      title: 'Lost',
      component: Lost,
      date: '2024-06-26',
      description: 'Good poetry',
      image: ''
    },
    {
      id: 'the-goal',
      title: 'The Goal',
      component: TheGoal,
      date: '2024-06-17',
      description: 'Okay poetry',
      image: ''
    },
    {
      id: '5-pillars',
      title: '5 Pillars of Me',
      component: FivePillars,
      date: '2023-10-30',
      description: 'Thought dump structured by GPT',
      image: ''
    }
  ]
} 