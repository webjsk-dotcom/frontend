import React from 'react';
import { Youtube, Plus, Facebook, Instagram, MessageCircle, MonitorPlay } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f2224] text-gray-400">
      {/* Media Room Section */}
      <div className="container mx-auto px-6 py-16 border-b border-gray-700">
        <h2 className="text-3xl font-serif text-white mb-12">Media room</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Youtube */}
            <div>
                <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-2">
                    <div className="flex items-center gap-2 text-white">
                        <span className="font-bold">자코모 TV</span>
                        <Youtube size={18} className="text-red-600" />
                    </div>
                    <Plus size={18} className="cursor-pointer hover:text-white" />
                </div>
                <div className="aspect-video bg-black relative group cursor-pointer">
                    <img src="https://picsum.photos/id/1/600/350" alt="Video thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                         </div>
                    </div>
                </div>
                <p className="mt-2 text-xs">소파에 진심인 브랜드 이야기를 담았습니다.</p>
                
                {/* Thumbnails below video */}
                <div className="grid grid-cols-5 gap-2 mt-4">
                     {[1,2,3,4,5].map(i => (
                         <div key={i} className="aspect-video bg-gray-800 cursor-pointer hover:opacity-75">
                             <img src={`https://picsum.photos/id/${i+10}/100/60`} className="w-full h-full object-cover" alt="thumb"/>
                         </div>
                     ))}
                </div>
            </div>

            {/* Right: Notices */}
            <div>
                 <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-2">
                    <div className="flex items-center gap-2 text-white">
                        <span className="font-bold">공지사항</span>
                    </div>
                    <Plus size={18} className="cursor-pointer hover:text-white" />
                </div>
                <ul className="space-y-0">
                    {[
                        { title: '자코모와 국내외 다양한 소식을 전해드립니다.', date: '2024. 05. 28' },
                        { title: '소파전문가 2급(초급) 자격검정시험 공고', date: '2024. 05. 20' },
                        { title: '남양주 본점 디자인 하우스 - 제 8회 전시회가 오픈되었습니다.', date: '2024. 05. 04' },
                        { title: '[마감] 남양주 본점 디자인 하우스 - 제 7회 전시회가 오픈했습니다.', date: '2024. 01. 01' },
                    ].map((notice, idx) => (
                        <li key={idx} className="border-b border-gray-700 py-4 hover:bg-gray-800/50 transition-colors px-2 cursor-pointer">
                            <p className="text-sm text-gray-200 mb-1 truncate">{notice.title}</p>
                            <span className="text-xs text-gray-600">{notice.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="container mx-auto px-6 py-12 text-xs leading-relaxed">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-2xl font-serif text-white mb-4 md:mb-0">JAKOMO</h1>
            <div className="flex space-x-4">
                <Facebook size={18} className="hover:text-white cursor-pointer"/>
                <Instagram size={18} className="hover:text-white cursor-pointer"/>
                <MessageCircle size={18} className="hover:text-white cursor-pointer"/>
                <MonitorPlay size={18} className="hover:text-white cursor-pointer"/>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-70">
            <div>
                <p>고객센터 1588-6007</p>
                <p>팩스 031-527-6618</p>
                <p>이메일 jakomo@jakomo.co.kr</p>
            </div>
            <div>
                <p>주소 경기도 남양주시 오남읍 양지로 45번길 8 (주)자코모</p>
                <p>대표 박유신, 박경신</p>
                <p>사업자번호 132-81-82165</p>
            </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center opacity-50">
            <p>© 2024 JAKOMO Corp.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <span>이용약관</span>
                <span>개인정보처리방침</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;