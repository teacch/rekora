import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Banknote, PiggyBank, Copy, CheckCircle, ExternalLink } from "lucide-react";
import Flutterwave from '../../assets/flutterwave.png';
import Gofundme from '../../assets/gofundme.png';
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
  iconType: "lucide" | "img";
  iconName?: string;
  imgPath?: string;
  link?: string;
}

const donationMethods: DonationMethod[] = [
  {
    title: "Donate in Naira (NGN)",
    bankDetails: {
      accountNumber: "0491316452",
      bankName: "Sterling Bank",
      accountName: "Ruth Oluwadamilola",
    },
    type: "bank",
    iconType: "lucide",
    iconName: "Banknote",
  },
  {
    title: "Donate in US Dollars (USD)",
    bankDetails: {
      accountNumber: "008991828",
      bankName: "Sterling Bank",
      accountName: "Rekora Initiative",
    },
    type: "bank",
    iconType: "lucide",
    iconName: "PiggyBank",
  },
  {
    title: "Donate via Flutterwave",
    description: "Our Flutterwave portal offers a fast, secure, and globally accessible way to support our mission. Seamless for all currencies.",
    type: "online",
    iconType: "img",
    imgPath: Flutterwave,
    link: "https://flutterwave.com/pay/rekora",
  },
  {
    title: "Support on GoFundMe",
    description: "Join our vibrant community on GoFundMe! Your contribution and shares amplify our collective power, driving our mission forward.",
    type: "gofundme",
    iconType: "img",
    imgPath: Gofundme,
    link: "https://www.gofundme.com/rekora",
  },
];

const getLucideIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Banknote": return Banknote;
    case "PiggyBank": return PiggyBank;
    case "ExternalLink": return ExternalLink;
    default: return null;
  }
};

export default function DonationMethods() {
  const [copiedStates, setCopiedStates] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const copyToClipboard = (text: string, index: number) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedStates(prev => ({ ...prev, [index]: true }));
          setTimeout(() => setCopiedStates(prev => ({ ...prev, [index]: false })), 2000);
        })
        .catch(err => {
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
          } catch (err2) {
            alert('Failed to copy. Please manually copy: ' + text);
          } finally {
            document.body.removeChild(textArea);
          }
        });
    } else {
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
        alert('Failed to copy. Please manually copy: ' + text);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  const rekoraDarkBlue = "rekora-dark-blue";
  const rekoraLightBlue = "rekora-light-blue";

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white font-inter text-gray-900 flex flex-col items-center py-24 px-6 sm:px-6 md:py-28 lg:px-16 xl:px-20 overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
        {donationMethods.map((method, index) => {
          const LucideIcon = method.iconType === "lucide" ? getLucideIconComponent(method.iconName || '') : null;
          const isBankType = method.type === "bank";
          return (
            <div
              key={index}
              className={`relative p-6 sm:p-8 rounded-3xl overflow-hidden shadow-lg border border-gray-100
                          transform transition-all duration-300 ease-out-expo
                          bg-gradient-to-br from-${rekoraLightBlue}/20 to-white hover:scale-[1.01] hover:shadow-xl`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className={`shadow-md mr-4 flex-shrink-0 flex items-center justify-center
                                  ${method.iconType === "img"
                                      ? 'p-0 bg-transparent rounded-full overflow-hidden h-[48px] w-[48px]'
                                      : `p-3 rounded-full bg-${rekoraDarkBlue} text-white`}`}>
                    {method.iconType === "lucide" && LucideIcon && (
                      <LucideIcon size={36} strokeWidth={2} />
                    )}
                    {method.iconType === "img" && method.imgPath && (
                      <img src={method.imgPath} alt={`${method.title} icon`} className="h-full w-full object-cover" />
                    )}
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold text-${rekoraDarkBlue} leading-tight font-heading`}>
                    {method.title}
                  </h3>
                </div>
                {isBankType && method.bankDetails ? (
                  <div className="space-y-4 mb-6 mt-4">
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <p className="text-xs uppercase tracking-wider mb-1 text-gray-500">Account Name</p>
                      <p className={`font-semibold text-lg text-${rekoraDarkBlue}`}>{method.bankDetails.accountName}</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <p className="text-xs uppercase tracking-wider mb-1 text-gray-500">Bank Name</p>
                      <p className={`font-semibold text-lg text-${rekoraDarkBlue}`}>{method.bankDetails.bankName}</p>
                    </div>
                    <div
                      onClick={() => copyToClipboard(method.bankDetails.accountNumber, index)}
                      className={`relative p-4 rounded-xl shadow-md flex items-center justify-between cursor-pointer
                                  transition-all duration-300 transform hover:scale-[1.005] active:scale-[0.99] group
                                  bg-gradient-to-r from-${rekoraDarkBlue} to-${rekoraDarkBlue}/80 text-white`}
                      role="button"
                      aria-label={`Copy account number ${method.bankDetails.accountNumber}`}
                    >
                      <div className="flex-grow text-left">
                        <p className={`text-xs font-semibold text-${rekoraLightBlue}/80 uppercase tracking-wider mb-1`}>Account Number</p>
                        <p className={`font-extrabold text-xl md:text-2xl tracking-wide text-${rekoraLightBlue}`}>{method.bankDetails.accountNumber}</p>
                      </div>
                      <button
                        className={`ml-4 p-2 rounded-full bg-${rekoraDarkBlue}/20 text-white hover:bg-${rekoraDarkBlue}/30
                                    transition-all duration-300 transform group-hover:scale-110 flex-shrink-0`}
                        title="Copy account number"
                      >
                        {copiedStates[index] ? (
                          <CheckCircle size={24} className="text-lime-300 animate-pop-in" />
                        ) : (
                          <Copy size={24} className="text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <p className={`mb-8 flex-grow leading-relaxed text-base text-gray-700`}>
                      {method.description}
                    </p>
                    <a href={method.link} target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                      <Button className={`w-full py-6 px-12 rounded-lg font-bold text-lg shadow-md
                                        transition-all duration-300 flex items-center justify-center
                                        bg-${rekoraDarkBlue} text-white hover:bg-opacity-90 hover:shadow-lg
                                        group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-${rekoraDarkBlue} focus:ring-offset-2`}>
                        <span className="relative z-10">
                          {method.type === "online" ? "Donate Online Now" : "Visit GoFundMe Page"}
                        </span>
                        <ExternalLink
                          size={20}
                          className={`ml-2 relative z-10 text-${rekoraLightBlue} opacity-80
                                      transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100`}
                        />
                        <span className="absolute inset-0 bg-rekora-light-blue opacity-0 transition-opacity duration-300 animate-shimmer group-hover:opacity-10"></span>
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .ease-out-expo {
            transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-pop-in {
            animation: popIn 0.3s ease-out forwards;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>
    </section>
  );
}