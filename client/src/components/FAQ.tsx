import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Q. 어떤 예술 분야를 지원하나요?",
      answer:
        "음악, 미술, 공예, 무용, 문학, 연극, 영화, 사진 등 다양한 분야의 문화예술 활동을 모두 지원합니다. 동아리의 관심과 희망에 맞는 분야를 선택하세요.",
    },
    {
      question: "Q. 선정 이후 활동 기간은 얼마나 되나요?",
      answer:
        "선정 후 11월까지 동아리 활동을 진행하며, 구체적인 일정은 선정 후 안내해 드립니다.",
    },
    {
      question: "Q. 지원금 40%는 동아리에 현금으로 직접 지급되나요?",
      answer:
        "아닙니다. 지원금 40%는 동아리에 현금으로 지급되는 것이 아니라, 함께 활동하는 전문 예술교육가 강사비로 직접 집행됩니다. 기업(동아리)에서 부담하는 자부담금 60%는 재료비, 대관비 등 동아리 운영에 사용하고, 지출에 대한 증빙자료를 제출해 주시면 됩니다.",
    },
    {
      question: "Q. 꼭 전문 예술 교육가와 함께해야 하나요?",
      answer:
        "네. 전문 예술가의 교육과정을 최소 10회차 이상 구성하는 것이 필수 지원 조건입니다.",
    },
    {
      question: "Q. 회사가 다른 사람들끼리 모여도 신청할 수 있나요?",
      answer:
        "네, 가능합니다. 소속이 다른 직장인들끼리 자유롭게 구성한 연합 동아리도 지원 대상입니다.",
    },
        {
      question: "Q. 예술 교육가는 어떻게 구하나요?",
      answer:
        "동아리가 직접 예술 교육가를 섭외하여 신청할 수 있습니다. 원하실 경우, 희망 분야를 작성하여 제출하면 운영사무국에서 가장 적합한 강사를 매칭해 드립니다.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50" id="faq">
      <div className="relative container mx-auto px-4 z-[1]">
        <img
          src="/img106.png"
          alt="Decorative asset 6"
          className="absolute top-20 right-8 w-12 h-14 opacity-70 md:right-10 md:w-28 md:h-32 md:top-0 lg:right-40 xl:right-60 2xl:right-80 z-[-1]"
        />
        <img
          src="/img109.png"
          alt="Decorative asset 9"
          className="absolute -top-20 left-8 w-20 h-20 opacity-80 md:w-32 md:h-32 md:bottom-10 lg:left-40 xl:left-80 2xl:left-[18rem] z-[-1]"
        />
        <img
          src="/img110.png"
          alt="Decorative asset 16"
          className="absolute -bottom-32 right-4 w-40 h-28 opacity-80 md:right-40 md:w-52 md:h-38 md:-bottom-32 lg:right-40 xl:right-80 2xl:right-100 z-[-1]"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          자주 묻는 질문 (FAQ)
        </h2>
        <p className="text-xl text-center font-medium text-primary mb-12">
          "문화예술클럽에 대해 더 자세히 알고 싶어요!"
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-soft overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-4 font-bold hover:no-underline hover:bg-neutral-50 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-neutral-600 border-t border-neutral-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
