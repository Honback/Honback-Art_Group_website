import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const ActivityCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50" id="activities">
      <div className="container mx-auto px-4 relative z-[1]">
        <img
          src="/img101.png"
          alt="Decorative asset 101"
          className="absolute top-8 right-6 w-36 h-32 opacity-70 md:opacity-90 md:w-44 md:h-40 md:top-4 md:left-22 lg:left-40 xl:left-72 2xl:left-96 z-[-1] "
        />
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          어떤 동아리 활동을 할 수 있나요?
        </h2>
        <p className="text-xl text-center font-medium text-primary mb-12 z-[1]">
          "상상하는 모든 것이 예술이 됩니다!"
        </p>

        {/* <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img
                src="/chinese-calligraphy-2025-03-13-02-17-04-utc.jpg"
                alt="직장인 서예 동아리 활동 모습"
                className="w-full h-64 object-cover rounded-xl shadow-soft"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/playing-acoustic-guitars-in-modern-music-studio-se-2025-01-29-14-48-03-utc.jpg"
                alt="직장인 음악 동아리 활동 모습"
                className="w-full h-64 object-cover rounded-xl shadow-soft"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/mother-with-daughter-makes-vase-in-a-potterystudio-2024-12-06-07-05-40-utc.jpg"
                alt="직장인 도자기 동아리 활동 모습"
                className="w-full h-64 object-cover rounded-xl shadow-soft"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border-2 border-primary/40 p-6 rounded-xl shadow-soft hover:shadow-md transition">
            <img
              src="/music.jpg"
              alt="직장인 음악 동아리 활동 모습"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <i className="ri-music-line text-primary text-xl"></i>
            <h3 className="font-bold text-lg mb-2">음악 분야</h3>
            <p className="text-neutral-600">
              직장인 밴드, 보컬 트레이닝, 합창, 악기 교실 (기타, 드럼, 우쿨렐레
              등), 오케스트라
            </p>
          </div>

          <div className="bg-white border-2 border-primary/40 p-6 rounded-xl shadow-soft hover:shadow-md transition">
            <img
              src="/art.jpg"
              alt="직장인 도자기 동아리 활동 모습"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <i className="ri-paint-brush-line text-primary text-xl"></i>
            <h3 className="font-bold text-lg mb-2">미술/공예 분야</h3>
            <p className="text-neutral-600">
              드로잉, 유화, 수채화, 캘리그라피, 도예, 목공예, 가죽공예, 뜨개질,
              웹툰 제작
            </p>
          </div>

          {/* <div className="bg-white border-2 border-primary/40 p-6 rounded-xl shadow-soft hover:shadow-md transition">
            <i className="ri-body-scan-line text-primary text-xl"></i>
            <h3 className="font-bold text-lg mb-2">무용/움직임 분야</h3>
            <p className="text-neutral-600">
              K-POP 댄스, 재즈댄스, 현대무용, 발레, 요가, 필라테스
            </p>
          </div> */}

          {/* <div className="bg-white border-2 border-primary/40 p-6 rounded-xl shadow-soft hover:shadow-md transition">
            <i className="ri-git-repository-line text-primary text-xl"></i>
            <h3 className="font-bold text-lg mb-2">문학/인문 분야</h3>
            <p className="text-neutral-600">
              시 창작, 소설 쓰기, 영화 제작 및 비평, 연극, 독서 토론, 인문학
              강좌
            </p>
          </div> */}

          <div className="bg-white border-2 border-primary/40 p-6 rounded-xl shadow-soft hover:shadow-md transition">
            <img
              src="/cul.png"
              alt="직장인 장구 동아리 활동 모습"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <i className="ri-brush-line text-primary text-xl"></i>
            <h3 className="font-bold text-lg mb-2">전통 예술 분야</h3>
            <p className="text-neutral-600">
              사물놀이, 민화 그리기, 전통 공예, 국악기 연주
            </p>
          </div>

          <div className="bg-white border-2 border-primary/40 p-6 rounded-xl shadow-soft hover:shadow-md transition">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <img
                src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500&h=500"
                alt="무용 활동"
                className="w-full h-24 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&h=500"
                alt="문학 활동"
                className="w-full h-24 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500&h=500"
                alt="촬영 활동"
                className="w-full h-24 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500"
                alt="디자인 활동"
                className="w-full h-24 object-cover rounded-lg"
              />
            </div>
            <i className="ri-shape-line text-primary text-xl"></i>
            <h3 className="font-bold text-lg mb-2">기타 예술 분야</h3>
            <p className="text-neutral-600">
              무용, 문학, 사진, 디자인, 만화 등
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-soft border-l-4 border-purple-600 inline-block text-left">
            <p className="italic text-neutral-600">
              "우리 회사, 우리 동료들과 가장 잘 맞는 예술 분야를 선택하고,
              전문가의 도움을 받아 즐겁게 활동을 시작해 보세요. 생각보다 훨씬
              쉽고 재미있게 예술을 경험할 수 있습니다."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityCategories;
