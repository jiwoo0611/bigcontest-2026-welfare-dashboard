# 팀원이 시작하는 방법

## 실행

Node.js 20.9 이상과 npm이 필요합니다. 저장소를 clone한 뒤 루트 폴더에서 실행합니다.

```bash
npm ci
npm run dev
```

브라우저에서 http://127.0.0.1:3001 을 엽니다. 종료는 터미널에서 Ctrl+C입니다.
환경변수나 API 키는 필요하지 않습니다.

## 소스 구조

| 경로 | 역할 |
| --- | --- |
| `app/page.tsx` | 메인 페이지 진입점 |
| `app/layout.tsx` | 페이지 메타데이터, 한글 글꼴 |
| `app/globals.css` | 전체 디자인과 반응형 스타일 |
| `components/dashboard.tsx` | 네 업무 화면, 필터, 상태, 저장, CSV 내보내기 |
| `lib/data.ts` | 기존 시연 데이터와 타입 |
| `next.config.ts` | 정적 내보내기 설정 |
| `vercel.json` | Vercel 빌드 설정 |

## 권장 시연 순서

지역 분석 → 사례 검토 → 담당자 의견 저장 → 지원 계획 → 첫 행동 준비 → 후보 기록 → 후속 상태/피드백 저장.

이 소스는 기존 Vercel 시연 버전입니다. 지역 지표·상담 사례·자원 카드는 가상 예시이며 실제 추가 EDA 결과를 연결한 버전이 아닙니다. 실시간 LLM 호출도 없습니다.
기록은 현재 브라우저 localStorage에만 저장되고 팀원/기기 간 공유되지 않습니다. 실제 개인 상담 기록을 입력하지 마세요.

## 수정 후 확인

```bash
npm run typecheck
npm run build
```

정적 결과는 `out/`에 생성됩니다. Python이 있으면 다음과 같이 결과를 확인할 수 있습니다.

```bash
python -m http.server 3002 --bind 127.0.0.1 --directory out
```

http://127.0.0.1:3002 로 접속합니다. `next start`는 이 정적 내보내기 프로젝트에서 사용하지 않습니다.

## 협업

수정용 브랜치에서 작업하고 변경 내용과 검증 결과를 PR에 기록합니다. 분석 데이터 연결은 시연 데이터와 구분하고 기간·단위·지역 기준·출처를 명시합니다. 대회 원본 데이터, API 키, `.env`, 실제 개인 기록을 커밋하지 않습니다.

## Vercel과 Git 연결

기존 배포: https://welfare-dashboard-vercel.vercel.app/

코드를 GitHub에 올리는 것만으로 기존 배포가 자동 연결되는 것은 아닙니다. Vercel의 기존 프로젝트 설정에서 해당 GitHub 저장소를 연결하거나 새 프로젝트로 Import해야 합니다. 이 프로젝트에는 정적 내보내기 설정과 빌드 명령이 이미 들어 있습니다.
