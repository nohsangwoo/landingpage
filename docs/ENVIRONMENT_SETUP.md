# 환경 변수 설정 가이드

## 📋 필수 환경 변수

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 환경 변수들을 설정하세요.

### SEO 검증 코드
```bash
# Google Search Console 검증 코드
GOOGLE_SITE_VERIFICATION=your_google_verification_code_here

# Naver Search Advisor 검증 코드  
NAVER_SITE_VERIFICATION=your_naver_verification_code_here
```

### Google Analytics (선택사항)
```bash
# Google Analytics 4 측정 ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 기본 사이트 정보
```bash
# 사이트 기본 URL
NEXT_PUBLIC_SITE_URL=https://www.heudy.shop

# 회사 기본 정보
NEXT_PUBLIC_COMPANY_NAME=주식회사 럿지
NEXT_PUBLIC_COMPANY_EMAIL=milli@molluhub.com
NEXT_PUBLIC_COMPANY_PHONE=02-931-9310
```

## 🔧 설정 방법

### 1. Google Search Console 설정

1. [Google Search Console](https://search.google.com/search-console) 접속
2. 속성 추가 → URL 접두사 선택 → 사이트 URL 입력
3. HTML 태그 방법 선택
4. `content="..."` 부분의 값을 복사
5. `.env.local`에 `GOOGLE_SITE_VERIFICATION` 값으로 설정

```bash
# 예시
GOOGLE_SITE_VERIFICATION=abc123def456ghi789
```

### 2. Naver Search Advisor 설정

1. [Naver Search Advisor](https://searchadvisor.naver.com/) 접속
2. 사이트 등록 → 사이트 URL 입력
3. HTML 태그 확인 방법 선택
4. `content="..."` 부분의 값을 복사
5. `.env.local`에 `NAVER_SITE_VERIFICATION` 값으로 설정

```bash
# 예시
NAVER_SITE_VERIFICATION=naver123456789
```

### 3. Google Analytics 설정

1. [Google Analytics](https://analytics.google.com/) 접속
2. 계정 생성 → 속성 생성 → 데이터 스트림 설정
3. 측정 ID (G-XXXXXXXXXX) 복사
4. `.env.local`에 `NEXT_PUBLIC_GA_MEASUREMENT_ID` 값으로 설정

```bash
# 예시
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123DEF4
```

## 📝 .env.local 파일 예시

```bash
# SEO 검증 코드
GOOGLE_SITE_VERIFICATION=abc123def456ghi789
NAVER_SITE_VERIFICATION=naver123456789

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123DEF4

# 사이트 기본 정보
NEXT_PUBLIC_SITE_URL=https://www.heudy.shop
NEXT_PUBLIC_COMPANY_NAME=주식회사 럿지
NEXT_PUBLIC_COMPANY_EMAIL=milli@molluhub.com
NEXT_PUBLIC_COMPANY_PHONE=02-931-9310

# 기타 설정 (필요시)
NEXT_PUBLIC_ENVIRONMENT=production
```

## 🚀 배포 환경 설정

### Vercel 배포시
1. Vercel 대시보드 → 프로젝트 → Settings → Environment Variables
2. 각 환경 변수를 Production, Preview, Development 환경에 추가

### Netlify 배포시
1. Netlify 대시보드 → Site settings → Environment variables
2. 각 환경 변수를 추가

### 기타 플랫폼
- 각 플랫폼의 환경 변수 설정 방법에 따라 동일한 키-값으로 설정

## ⚠️ 보안 주의사항

1. **절대 커밋하지 말 것**
   - `.env.local` 파일은 `.gitignore`에 포함되어 있음
   - 실제 값들을 GitHub에 푸시하지 않도록 주의

2. **환경별 분리**
   - 개발/스테이징/프로덕션 환경별로 다른 값 사용
   - 특히 Analytics ID는 환경별로 분리 권장

3. **접근 권한 관리**
   - 팀원들과 환경 변수 공유시 안전한 방법 사용
   - 민감한 정보는 별도 관리

## 🔍 검증 방법

### 1. 개발 환경에서 확인
```bash
npm run dev
```
- 브라우저 개발자 도구에서 HTML head 부분 확인
- Google/Naver 검증 메타 태그가 올바르게 렌더링되는지 확인

### 2. 빌드 후 확인
```bash
npm run build
npm run start
```
- 프로덕션 빌드에서도 환경 변수가 올바르게 적용되는지 확인

### 3. 검색엔진 도구에서 검증
- Google Search Console에서 소유권 확인
- Naver Search Advisor에서 사이트 확인
- Google Analytics에서 실시간 데이터 확인

## 🆘 문제 해결

### 환경 변수가 적용되지 않는 경우
1. `.env.local` 파일이 프로젝트 루트에 있는지 확인
2. 파일명이 정확한지 확인 (`.env.local`)
3. 개발 서버 재시작 (`npm run dev`)
4. 브라우저 캐시 클리어

### 검증이 실패하는 경우
1. 환경 변수 값에 불필요한 공백이나 따옴표가 없는지 확인
2. 검증 코드가 올바르게 복사되었는지 확인
3. 사이트 URL이 정확한지 확인
4. HTTPS 설정이 올바른지 확인

## 📞 지원

환경 설정 관련 문의사항이 있으시면 연락주세요.

- **이메일**: milli@molluhub.com
- **전화**: 02-931-9310
- **회사**: 주식회사 럿지 (LUDGI Inc.)
