import { Button } from "@/components/ui/button";
import OrganizationSection from "./OrganizationSection";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative" id="contact">
      <div className="relative z-[1] container mx-auto px-4 ">
        <img
          src="/자산8.png"
          alt="Decorative asset 8"
          className="absolute -top-10 left-6 w-24 h-20 opacity-80 md:w-36 md:h-32 md:-top-10 md:left-26 lg:left-40 xl:left-72 2xl:left-96 z-[-1]"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          문의
        </h2>
        <p className="text-xl text-center font-medium text-primary mb-12">
          "생활예술동아리, 지금 바로 문의하세요!"
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-50 rounded-xl p-8 shadow-soft">
            <h3 className="text-xl font-bold mb-6">
              생활예술동아리 운영 사무국
            </h3>
            <p className="text-lg mb-4 text-neutral-600">
              (한국문화예술교육진흥원 시민지역연계팀)
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">전화</p>
                  <p className="font-medium text-lg">02-6342-2801</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">이메일</p>
                  <p className="font-medium text-lg">test</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4">
                  <i className="ri-kakao-talk-line text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">카카오톡</p>
                  <p>
                    <strong>카톡 문의 : </strong>
                    <a
                      href="http://pf.kakao.com/_xkexdLG/chat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      바로가기
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4">
                  <i className="ri-time-line text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">영업시간</p>
                  <p className="font-medium text-lg">평일 9:00-18:00</p>
                  <span className="text-sm text-zinc-500">
                    (12:00-13:00 점심시간 제외)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Section */}
        <OrganizationSection />
      </div>
    </section>
  );
};

export default ContactSection;
