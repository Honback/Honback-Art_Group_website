const OperationGuide = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="guide">
      <div className="relative z-[1] container mx-auto px-4">
        <img
          src="/img103.png"
          alt="Decorative asset 3"
          className="absolute -top-14 left-8 w-16 h-16 opacity-100 md:left-16 md:w-24 md:h-24 md:top-0 lg:left-40 xl:left-60 2xl:left-80 z-[-1]"
        />
        <img
          src="/img107.png"
          alt="Decorative asset 17"
          className="absolute -bottom-12 right-8 w-20 h-20 opacity-80 md:right-12 md:w-36 md:h-36 md:-bottom-24 lg:right-20 xl:right-36 xl:-bottom-32 2xl:right-48 z-[1]"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          문화예술클럽 운영 안내
        </h2>
        <p className="text-xl text-center font-medium text-primary mb-12">
          "직장인 맞춤형 문화예술교육 프로그램"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src="/oper-art.jpg"
              alt="다양한 동아리 활동 모습"
              className="w-full h-auto rounded-xl shadow-soft mb-4 object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">주요 지원 내용</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-4 text-primary">
                  <i className="ri-check-line text-xl"></i>
                </div>
                <div>
                  <span className="font-medium">예술교육가 매칭:</span>{" "}
                  기업(관)의 수요와 예술교육가의 전문성을 바탕으로 맞춤형 매칭
                  지원
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 text-primary">
                  <i className="ri-check-line text-xl"></i>
                </div>
                <div>
                  <span className="font-medium">동아리 운영비 지원:</span>{" "}
                  예술교육가 인건비, 프로그램 운영 관련 비용 일부 지원 (정부
                  40%, 기업 60% 매칭 - 동아리 자부담 포함 가능)
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 text-primary">
                  <i className="ri-check-line text-xl"></i>
                </div>
                <div>
                  <span className="font-medium">운영 컨설팅:</span> 프로그램
                  기획 및 운영 전반에 대한 컨설팅 및 지원
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 text-primary">
                  <i className="ri-check-line text-xl"></i>
                </div>
                <div>
                  <span className="font-medium">특별 프로그램:</span> 저명
                  예술인 특강, 연합 동아리 활동, 우수동아리 발표회 등 추가 지원
                  기획 제공
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 rounded-xl p-6 shadow-soft">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="ri-team-line text-primary text-2xl mr-3"></i>
              지원 대상
            </h3>
            <ul className="space-y-2 ml-6 list-disc text-neutral-600">
              <li>
                기업 내 기존 또는 신규 문화예술 동아리 (최소 5인 이상 권장)
              </li>
              <li>소속이 다른 직장인도 연합 동아리 형태로 신청 가능</li>
              <li>중소·벤처·사회적기업 등 기업 규모와 상관없이 모두 신청 가능</li>
            </ul>
          </div>

          <div className="bg-neutral-50 rounded-xl p-6 shadow-soft">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="ri-calendar-check-line text-primary text-2xl mr-3"></i>
              운영 방식
            </h3>
            <ul className="space-y-2 ml-6 list-disc text-neutral-600">
              <li>
                <span className="font-medium">교육 기간:</span> (2025년 기준)
                5월 ~ 11월
              </li>
              <li>
                <span className="font-medium">교육 횟수:</span> 10회, 20회, 30회
                중 선택 가능
              </li>
              <li>
                <span className="font-medium">교육 장소:</span> 기업 내 회의실,
                휴게 공간 등 활용 또는 별도 공간 협의
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-soft border-l-4 border-purple-500 inline-block text-left text-md md:text-xl">
            <p className="italic text-neutral-600">
              "기업의 특성과 구성원의 수요를 반영한 맞춤형 프로그램을 통해
              문화예술 활동의 즐거움을 경험하고, 동료들과 함께 성장하는 시간을
              만들어갑니다."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationGuide;
