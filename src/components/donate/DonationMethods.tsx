import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Banknote, Globe, PiggyBank, Copy, CheckCircle, ExternalLink, TrendingUp, ChevronRight, Sparkles } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface BankDetails {
  accountNumber: string;
  bankName: string;
  accountName: string;
}

interface DonationMethod {
  title: string;
  bankDetails?: BankDetails;
  description?: string;
  type: "bank" | "online" | "gofundme";
  iconName: string;
  link?: string;
}

const donationMethods: DonationMethod[] = [
  {
    title: "Donate in Naira",
    bankDetails: {
      accountNumber: "0491316452",
      bankName: "Sterling Bank",
      accountName: "Ruth Oluwadamilola",
    },
    type: "bank",
    iconName: "Banknote",
  },
  {
    title: "Donate in USD",
    bankDetails: {
      accountNumber: "008991828",
      bankName: "Sterling",
      accountName: "Rekora Initiative",
    },
    type: "bank",
    iconName: "PiggyBank",
  },
  {
    title: "Flutterwave",
    description: "Our Flutterwave portal is designed for seamless, secure donations that make an immediate, global impact.",
    type: "online",
    iconName: "Globe",
    link: "https://flutterwave.com/pay/rekora",
  },
  {
    title: "GoFundMe",
    description: "Join our vibrant community on GoFundMe! Every share and contribution amplifies our collective power, driving forward our mission with speed.",
    type: "gofundme",
    iconName: "TrendingUp",
    link: "https://www.gofundme.com/rekora",
  },
];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Banknote": return Banknote;
    case "Globe": return Globe;
    case "PiggyBank": return PiggyBank;
    case "ExternalLink": return ExternalLink;
    case "TrendingUp": return TrendingUp;
    case "ChevronRight": return ChevronRight;
    case "Sparkles": return Sparkles;
    default: return null;
  }
};

export default function DonationMethods() {
  const [copiedStates, setCopiedStates] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const copyToClipboard = (text: string, index: number) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedStates(prev => ({ ...prev, [index]: true }));
      setTimeout(() => setCopiedStates(prev => ({ ...prev, [index]: false })), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
    document.body.removeChild(textArea);
  };

  const commonBgColor = "bg-rekora-light-blue";
  const commonAccentTextColor = "text-rekora-dark-blue";
  const commonButtonGradient = "from-rekora-dark-blue to-rekora-dark-blue/80";
  const commonCopyBgColor = "bg-rekora-dark-blue/10";
  const commonCopyTextColor = "text-rekora-dark-blue";

  return (
    <section className="min-h-screen relative overflow-hidden bg-rekora-dark-blue font-inter text-white flex flex-col items-center justify-center py-20 px-4 font-heading">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center justify-center">
    

        <div className="w-full flex flex-col items-center space-y-16 lg:space-y-20">
          {donationMethods.map((method, index) => {
            const IconComponent = getIconComponent(method.iconName);
            const isBankType = method.type === "bank";
            const isOnlineType = method.type === "online" || method.type === "gofundme";
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`w-full max-w-2xl relative p-6 md:p-8 rounded-3xl overflow-hidden shadow-2xl font-heading
                             border border-rekora-dark-blue/10 transform transition-all duration-500 ease-out-expo
                             hover:scale-[1.01] hover:shadow-rekora-dark-blue/40
                             ${commonBgColor}
                             ${isEven ? 'lg:self-start lg:ml-0' : 'lg:self-end lg:mr-0'} // Ensures all cards are centered on mobile
                             `}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12">
                  <div
                    className={`flex flex-col items-start text-left
                                ${!isEven ? 'md:order-last md:items-end md:text-right' : ''} // Only applies staggering/right-alignment on desktop
                               `}
                  >
                    <div className={`p-4 rounded-full bg-rekora-dark-blue/10 ${commonAccentTextColor} mb-4 shadow-md transition-transform duration-300`}>
                      {IconComponent && <IconComponent size={40} strokeWidth={2} />}
                    </div>
                    {(isBankType || isOnlineType) && (
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                                         bg-rekora-dark-blue/10 text-rekora-dark-blue/80 border border-rekora-dark-blue/20 mb-3`}>
                        {isBankType ? "Bank Transfer" : "Online"}
                      </span>
                    )}
                    <h3 className="text-3xl md:text-4xl font-extrabold text-rekora-dark-blue leading-tight mb-4 whitespace-normal lg:whitespace-nowrap">
                      {method.title}
                    </h3>
                  </div>

                  <div className="flex-grow w-full md:w-auto relative">
                    {isBankType && method.bankDetails ? (
                      <div className="space-y-4 text-sm font-medium">
                        <div className={`p-3 ${commonCopyBgColor} rounded-lg border border-rekora-dark-blue/10`}>
                          <p className={`text-xs uppercase tracking-wider mb-1 ${commonCopyTextColor}/70`}>Account Name</p>
                          <p className={`font-semibold text-lg ${commonCopyTextColor}`}>{method.bankDetails.accountName}</p>
                        </div>
                        <div className={`p-3 ${commonCopyBgColor} rounded-lg border border-rekora-dark-blue/10`}>
                          <p className={`text-xs uppercase tracking-wider mb-1 ${commonCopyTextColor}/70`}>Bank Name</p>
                          <p className={`font-semibold text-lg ${commonCopyTextColor}`}>{method.bankDetails.bankName}</p>
                        </div>
                        <div
                          onClick={() => copyToClipboard(method.bankDetails.accountNumber, index)}
                          className={`relative p-4 rounded-xl shadow-lg flex items-center justify-between cursor-pointer
                                     transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] group
                                     bg-gradient-to-r ${commonButtonGradient}`}
                        >
                          <div className="flex-grow text-left">
                            <p className="text-xs font-semibold text-rekora-light-blue/80 uppercase tracking-wider mb-1">Account Number</p>
                            <p className="font-extrabold text-rekora-light-blue text-xl md:text-2xl tracking-wide">{method.bankDetails.accountNumber}</p>
                          </div>
                          <button
                            className={`ml-4 p-3 rounded-full bg-rekora-dark-blue/20 text-rekora-light-blue hover:bg-rekora-dark-blue/30
                                         transition-all duration-300 transform group-hover:scale-110 flex-shrink-0`}
                            title="Copy account number"
                          >
                            {copiedStates[index] ? (
                              <CheckCircle size={20} className="text-lime-300 animate-pop-in" />
                            ) : (
                              <Copy size={20} className="text-rekora-light-blue" />
                            )}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col h-full items-start text-left">
                        <p className={`mb-8 flex-grow leading-relaxed text-base ${commonCopyTextColor} whitespace-normal`}>
                          {method.description}
                        </p>
                        <a href={method.link} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button className={`w-full py-4 rounded-full font-bold text-lg shadow-lg
                                             transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 hover:scale-[1.01] active:scale-95
                                             bg-gradient-to-r ${commonButtonGradient} text-rekora-light-blue
                                             relative overflow-hidden group`}>
                            <span className="relative z-10">
                              {method.type === "online" ? "Donate Online Now" : "Explore GoFundMe"}
                            </span>
                            <ChevronRight size={20} className="ml-2 relative z-10 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                            <span className="absolute inset-0 bg-rekora-light-blue opacity-0 transition-opacity duration-300 animate-shimmer group-hover:opacity-10"></span>
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        .ease-out-expo {
            transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }

        @keyframes sparkleGlow {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.2) rotate(15deg); opacity: 0.8; }
        }

        @keyframes popIn { 0% { transform: scale(0.5); opacity: 0; } 70% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); } }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>
    </section>
  );
}