import { Button } from "@/components/ui/button";

const ApplicationProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-white " id="process">
      <div className="relative z-[1] container mx-auto px-4">
        <img
          src="/자산15.png"
          alt="Decorative asset 15"
          className="absolute -top-4 left-6 w-14 h-14 opacity-80 md:w-20 md:h-20 md:top-4 md:left-22 lg:left-40 xl:left-72 2xl:left-96 z-[-1] "
        />
        <img
          src="/자산4.png"
          alt="Decorative asset 4"
          className="absolute bottom-12 right-4 w-14 h-14 opacity-80 md:w-24 md:h-24 md:bottom-10 md:right-20 lg:right-40 xl:right-72 2xl:right-96 z-[-1] "
        />
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          진행 절차
        </h2>
        <p className="text-xl text-center font-medium text-primary mb-12">
          "간편한 신청으로 시작하는 우리 회사 예술 활동"
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-3">
            {/* Step 1 */}
            <div className="relative overflow-hidden bg-neutral-50 rounded-xl p-8 shadow-soft">
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="relative z-10 w-full">
                  <h3 className="text-xl font-bold mb-2">
                    <span className="inline-flex items-center justify-center bg-primary text-white size-8 rounded-full mr-2">
                      1
                    </span>
                    참여 기업 수요조사 및 신청
                  </h3>
                  <ul className="space-y-2 text-zinc-700">
                    <li className="flex items-start gap-2">
                      <div className="size-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span>
                        한국문화예술교육진흥원 누리집(www.arte.or.kr)을 통해
                        신청
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="size-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span>
                        기업 정보, 희망 동아리 분야 및 규모, 담당자 정보 등 제출
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 size-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full opacity-70" />
            </div>

            {/* Step 2 */}
            <div className="relative overflow-hidden bg-neutral-50 rounded-xl p-8 shadow-soft">
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="relative z-10 w-full">
                  <h3 className="text-xl font-bold mb-2">
                    <span className="inline-flex items-center justify-center bg-primary text-white size-8 rounded-full mr-2">
                      2
                    </span>
                    대상 기업 선정 및 안내
                  </h3>
                  <ul className="space-y-2 text-zinc-700">
                    <li className="flex items-start gap-2">
                      <div className="size-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span>지원 조건 검토 후 선정 기업 개별 통보</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="size-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span>사업 설명회 및 오리엔테이션 진행 (필요시)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 size-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full opacity-70" />
            </div>

            {/* Step 3 */}
            <div className="relative overflow-hidden bg-neutral-50 rounded-xl p-8 shadow-soft">
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="relative z-10 w-full">
                  <h3 className="text-xl font-bold mb-2">
                    <span className="inline-flex items-center justify-center bg-primary text-white size-8 rounded-full mr-2">
                      3
                    </span>
                    예술교육가 매칭 및 프로그램 확정
                  </h3>
                  <ul className="space-y-2 text-zinc-700">
                    <li className="flex items-start gap-2">
                      <div className="size-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span>기업 수요에 맞는 예술교육가 매칭</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="size-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span>
                        동아리와 예술교육가 협의를 통해 세부 프로그램 및 일정
                        확정
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 size-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full opacity-70" />
            </div>

            {/* Step 4 */}
            <div className="relative overflow-hidden bg-neutral-50 rounded-xl p-8 shadow-soft">
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="relative z-10 w-full">
                  <h3 className="text-xl font-bold mb-2">
                    <span className="inline-flex items-center justify-center bg-primary text-white size-8 rounded-full mr-2">
                      4
                    </span>
                    동아리 운영 및 지원금 지급
                  </h3>
                  <ul className="space-y-2 text-zinc-700">
                    <li className="flex items-start gap-2">
                      <div className="size-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span>확정된 계획에 따라 동아리 활동 진행 (~11월)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="size-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span>운영 결과에 따라 지원금 지급 및 정산</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 size-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full opacity-70" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white p-6 rounded-xl shadow-soft border-l-4 border-secondary inline-block text-left">
              <p className="italic text-zinc-700">
                "신청부터 운영까지 한국문화예술교육진흥원이 함께합니다. 궁금한
                점은 언제든 문의해주세요."
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-primary text-white hover:bg-primary-dark shadow-soft px-8 py-6"
              size="lg"
            >
              <a
                href="https://www.arte.or.kr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-file-list-3-line mr-2"></i>진흥원 홈페이지 방문
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
