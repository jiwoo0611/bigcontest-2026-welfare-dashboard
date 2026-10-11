import type { Metadata } from 'next';
import '@fontsource/noto-sans-kr/400.css';
import '@fontsource/noto-sans-kr/500.css';
import '@fontsource/noto-sans-kr/600.css';
import '@fontsource/noto-sans-kr/700.css';
import './globals.css';
export const metadata:Metadata={title:'사회적 고립 대응 · 담당자 대시보드',description:'지역 변화 분석과 상담 근거 검토, 지원 계획, 후속 관리 시연 대시보드'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
