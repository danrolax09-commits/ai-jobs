// V3 Feature: AI Interview Prep & Practice
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { jobTitle, company, questionType } = await request.json();

  if (!jobTitle || !company) {
    return NextResponse.json(
      { error: 'Job title and company required' },
      { status: 400 }
    );
  }

  // Mock interview prep questions
  const questions = {
    technical: [
      {
        question: 'Explain how transformers work in LLMs',
        difficulty: 'Hard',
        topic: 'Deep Learning',
        hints: ['Attention mechanism', 'Self-attention', 'Query, Key, Value'],
      },
      {
        question: 'Design a system for real-time price tracking',
        difficulty: 'Hard',
        topic: 'System Design',
        hints: ['Scalability', 'Latency', 'WebSockets'],
      },
    ],
    behavioral: [
      {
        question: 'Tell me about a time you led an ambiguous project',
        difficulty: 'Medium',
        topic: 'Leadership',
        hints: ['STAR method', 'Decision making', 'Impact'],
      },
    ],
    domain: [
      {
        question: `How would you approach scaling ${jobTitle} at ${company}?`,
        difficulty: 'Hard',
        topic: 'Role-Specific',
        hints: ['Current market', 'Technical challenges', 'Growth strategy'],
      },
    ],
  };

  const selectedQuestions = questionType === 'all'
    ? [...questions.technical, ...questions.behavioral, ...questions.domain]
    : questions[questionType as keyof typeof questions] || [];

  return NextResponse.json({
    jobTitle,
    company,
    questions: selectedQuestions.slice(0, 5), // Return 5 questions
    totalAvailable: selectedQuestions.length,
    estimatedPrepTime: `${selectedQuestions.length * 15} minutes`,
    difficulty: 'Hard',
  });
}
