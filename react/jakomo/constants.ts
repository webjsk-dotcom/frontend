import { NavItem, StoryItem, FeatureItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '자코모', href: '#hero' },
  { label: '아카데미', href: '#academy' },
  { label: '브랜드', href: '#brand' },
  { label: '감사의 그곳', href: '#craftsmanship' },
  { label: '글로벌쇼룸', href: '#showroom' },
  { label: '미디어룸', href: '#media' },
];

export const STORIES: StoryItem[] = [
  {
    id: 1,
    category: '자코모 소개',
    title: 'About',
    image: 'https://picsum.photos/id/122/400/500', // Architecture/Building
  },
  {
    id: 2,
    category: '자코모 이야기',
    title: 'Story',
    image: 'https://picsum.photos/id/433/400/500', // Vintage/B&W style
  },
  {
    id: 3,
    category: '자코모 제품 철학',
    title: 'Philosophy',
    image: 'https://picsum.photos/id/250/400/500', // Craftsman/Detail
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: '깊이의 차이, R&D 센터',
    description: '시대를 통찰하고, 소비 트렌드와 라이프 문화를 분석하여 제품 개발은 물론, 제품의 표준 관리와 품질 개선을 위한 자코모 R&D 센터가 있습니다.',
    image: 'https://picsum.photos/id/3/800/500', // Tech/Office
    reverse: false,
  },
  {
    id: 2,
    title: '창조를 위한, 교류',
    description: '브랜드의 가치를 공유하고 서로의 장점을 극대화하기 위해 색다른 교류를 합니다. 도출된 영감으로 고객들에게 보다 새롭고, 다양한 콜라보 제품을 선보입니다.',
    image: 'https://picsum.photos/id/1068/800/500', // Interior/Design
    reverse: true,
  },
  {
    id: 3,
    title: '경계가 없는, 영감',
    description: '분야별 디자이너들과 함께 남양주 디자인 하우스에 자체 갤러리를 운영하고 있습니다. 고객들에게 한 차원 높은 예술 공간 체험과 남다른 디자인 경험을 제공합니다.',
    image: 'https://picsum.photos/id/1078/800/500', // Gallery/Sofa
    reverse: false,
  },
];