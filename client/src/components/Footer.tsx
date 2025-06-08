const Footer = () => {
  return (
    <footer className="bg-primary text-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-black text-center md:text-left mb-6 md:mb-0">
            <div className="text-xl font-bold mb-2">한국문화예술교육진흥원</div>
            <div className="text-sm text-neutral-800">문화예술클럽 지원사업</div>
          </div>
          
          <div className="text-black flex space-x-6">
            <a href="#" className="hover:text-primary transition" title="자료집 다운로드">
              <i className="ri-file-download-line text-2xl"></i>
            </a>
            <a href="mailto:artclub@arte.or.kr" className="hover:text-primary transition" title="이메일 문의">
              <i className="ri-mail-line text-2xl"></i>
            </a>
            <a href="https://www.arte.or.kr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition" title="한국문화예술교육진흥원 웹사이트">
              <i className="ri-external-link-line text-2xl"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center md:text-left text-sm text-neutral-600">
          <p>Copyright(c) Korea Arts & Culture Education Service. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
