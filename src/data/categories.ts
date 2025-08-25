import { CategoryInfo } from '@/types/blog';

export const categories: CategoryInfo[] = [
  {
    id: 'tech',
    name: '기술',
    description: 'AI, 인공지능, 머신러닝, 클라우드, 빅데이터 등 최신 기술 동향',
    icon: '🖥️',
    color: 'blue',
    priority: 0.9,
    updateFrequency: 'weekly'
  },
  {
    id: 'business',
    name: '비즈니스',
    description: 'BKNIL, 스타트업, 경영 전략, 시장 분석, 비즈니스 인사이트',
    icon: '💼',
    color: 'green',
    priority: 0.9,
    updateFrequency: 'weekly'
  },
  {
    id: 'news',
    name: '뉴스',
    description: '럿지 소식, 업데이트, 이벤트, 세미나',
    icon: '📰',
    color: 'red',
    priority: 0.8,
    updateFrequency: 'daily'
  },
  {
    id: 'tutorial',
    name: '튜토리얼',
    description: '가이드, 사용법, 강좌, how-to, 실습',
    icon: '📚',
    color: 'purple',
    priority: 0.8,
    updateFrequency: 'monthly'
  },
  {
    id: 'review',
    name: '리뷰',
    description: '리뷰, 후기, 평가, 비교 분석',
    icon: '⭐',
    color: 'yellow',
    priority: 0.7,
    updateFrequency: 'monthly'
  },
  {
    id: 'lifestyle',
    name: '라이프스타일',
    description: '일상, 문화, 트렌드, 라이프스타일',
    icon: '🌟',
    color: 'pink',
    priority: 0.6,
    updateFrequency: 'monthly'
  },
  {
    id: 'daily',
    name: '일상',
    description: '일상적인 이야기, 개인적인 경험, 소소한 일상',
    icon: '📝',
    color: 'gray',
    priority: 0.5,
    updateFrequency: 'weekly'
  }
];

export function getCategoryInfo(categoryId: string): CategoryInfo | undefined {
  return categories.find(cat => cat.id === categoryId);
}

export function getCategoryName(categoryId: string): string {
  const category = getCategoryInfo(categoryId);
  return category?.name || categoryId;
}
