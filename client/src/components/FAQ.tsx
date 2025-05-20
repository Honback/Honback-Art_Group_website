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
      question: "생활예술동아리 지원사업은 누가 신청할 수 있나요?",
      answer:
        "여가친화인증기업, 가족친화인증기업을 우선적으로 지원하며, 중소·중견·벤처기업도 신청 가능합니다. 기업 내에서 운영되는 문화예술 동아리가 대상입니다.",
    },
    {
      question: "지원금은 얼마나 받을 수 있나요?",
      answer:
        "동아리당 교육 비용의 30%를 지원하며, 10회차(1인 예술가) 기준 최소 105만 원부터 지원됩니다. 기업은 나머지 70%를 부담하며, 이 중 일부는 동아리 회원의 자부담으로 편성할 수 있습니다. (최대 40%까지)",
    },
    {
      question: "어떤 종류의 동아리 활동을 지원받을 수 있나요?",
      answer:
        "음악, 미술, 공예, 무용, 문학, 영화, 연극 등 문화예술 전반의 다양한 분야를 지원합니다. 동아리가 원하는 분야의 교육 프로그램을 신청할 수 있습니다.",
    },
    {
      question: "예술 강사는 어떻게 구해야 하나요?",
      answer:
        "한국문화예술교육진흥원에서 학교예술강사, 문화예술교육사 등 전문 자격을 갖춘 예술교육가 풀을 활용하여 기업의 수요에 맞는 강사를 매칭해 드립니다.",
    },
    {
      question: "신청 기간은 언제인가요?",
      answer:
        "(2025년 기준) 4월 22일부터 30일까지 참여 기업 수요조사가 진행되었습니다. 매년 사업 공고는 한국문화예술교육진흥원 누리집(www.arte.or.kr)을 통해 확인하실 수 있습니다.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50" id="faq">
      <div className="relative container mx-auto px-4 z-[1]">
        <img
          src="/자산6.png"
          alt="Decorative asset 6"
          className="absolute top-20 right-8 w-20 h-20 opacity-70 md:right-10 md:w-40 md:h-40 md:top-0 lg:right-40 xl:right-60 2xl:right-80 z-[-1]"
        />
        <img
          src="/자산9.png"
          alt="Decorative asset 9"
          className="absolute -top-20 left-6 w-20 h-20 opacity-80 md:w-32 md:h-32 md:bottom-10 lg:left-40 xl:left-80 2xl:left-100 z-[-1]"
        />
        <img
          src="/자산16.png"
          alt="Decorative asset 16"
          className="absolute -bottom-12 right-20 w-10 h-8 opacity-80 md:right-40 md:w-16 md:h-14 md:-bottom-20 lg:right-60 xl:right-80 2xl:right-100 z-[-1]"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          자주 묻는 질문 (FAQ)
        </h2>
        <p className="text-xl text-center font-medium text-primary mb-12">
          "생활예술동아리에 대해 더 자세히 알고 싶어요!"
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
