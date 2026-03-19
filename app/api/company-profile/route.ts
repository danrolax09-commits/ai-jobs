// V3 Feature: Company Profiles & Insights
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const companyName = searchParams.get('name');

  if (!companyName) {
    return NextResponse.json(
      { error: 'Company name required' },
      { status: 400 }
    );
  }

  // Mock company profile
  const profile = {
    name: companyName,
    founded: 2023,
    employees: 450,
    funding: '$200M Series B',
    locations: ['San Francisco', 'New York', 'London'],
    avgSalary: 245000,
    salaryRange: {
      junior: '150K - 200K',
      mid: '200K - 280K',
      senior: '280K - 400K',
      staff: '400K - 600K+',
    },
    benefits: [
      'Unlimited PTO',
      'Stock Options',
      'Health Insurance',
      'Learning Budget',
      'Parental Leave',
    ],
    reviews: {
      avgRating: 4.6,
      totalReviews: 234,
      cultureFit: 4.7,
      compensation: 4.5,
      growthOpp: 4.4,
      workLifeBalance: 4.2,
    },
    openJobs: 23,
    hireRateLastMonth: 5,
  };

  return NextResponse.json(profile);
}
