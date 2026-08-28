# 범용 포트폴리오 v2 · OutSystems 지원형

## 적용 방법
1. ZIP을 압축 해제합니다.
2. 내부 `portfolio-2026` 폴더의 파일을 GitHub 저장소 루트에 덮어씁니다.
3. `index.html`, `style.css`, `script.js`가 저장소 루트에 위치하는지 확인합니다.
4. GitHub Pages가 `main / root`를 바라보는지 확인합니다.

## 이번 수정
- 상단에 `스마트 안전진단 시스템` OutSystems 대표 프로젝트 추가
- Low-Code Projects를 5개로 변경하고 OutSystems 프로젝트를 첫 번째로 배치
- 장비 및 직원 관리 화면 이미지 추가
- 팀 프로젝트 전체 범위와 연형석 담당 범위를 명확히 구분
- Entity 관계, Aggregate 조회, 삭제 제한 업무 규칙, Users–Staff 권한 연계를 중심으로 구현 내용 정리
- 첫 대표 프로젝트를 `Evidence-Grounded Legal AI`로 변경
- 직무 한정 표현을 줄이고 `AI Systems Portfolio`로 재정의
- About Me를 법무·AI·Backend·RPA에 공통 적용 가능한 내용으로 개편
- Core Capabilities 섹션 추가
- Legal AI 최신 구현 내용 반영
  - 법령 데이터 파이프라인
  - Hybrid Retrieval
  - 공식 판례 구조화 및 판례·법령 정합성 검사
  - 판례 연결 조문의 출처를 구분해 검색 결과에 보강
  - 답변 문장별 근거 연결
  - 인용 내용의 일치 여부 검증
  - 근거 부족 시 답변 유보
  - 공식 핵심 평가 61문항(기존 49문항 + 안전성·경계 사례 12문항) 및 별도 판례 평가 20문항
  - 10단계 Agent Workflow와 단계별 Execution Trace
  - 제한된 재시도와 안전한 답변 보류
  - 동일 데이터셋의 Baseline·Agent 실험 저장 및 비교
  - 검색·답변·안전성 지표와 응답시간 트레이드오프 분리
  - 실패 유형 분석 / 246개 변경 후 반복 검증
  - 4,833개 법령 문서 기반 41개 법률 개념 지식베이스
  - 실제 법령 개정 전후 비교·영향 추적·시행일 경계 평가
  - 법령 개정 검수·승인 게이트와 폐쇄형 평가 범위 명시
  - FastAPI 기반 제품화
  - 공개 Agent 평가 콘솔과 운영 서버의 전체 실험 실행 제한
- 기존 Web Application 및 RPA 프로젝트는 유지

## 확인 사항
- Legal AI GitHub 저장소가 비공개라면 외부 방문자는 링크 내용을 볼 수 없습니다.
- Featured Project와 상세 섹션의 Live Demo 버튼을 법령 AI 공개 데모 주소에 연결했습니다.
