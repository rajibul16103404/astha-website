import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TbBrandWhatsappFilled } from "react-icons/tb";

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(prev => !prev);
  };

  return (
    <>
      {/* Chat Popup */}
      {showPopup && (
        <div className="fixed bottom-20 right-6 z-50 w-72 bg-white border-primary shadow-xl rounded-lg p-4 border border-primary-500 animate-fade-in">
          <div className="text-sm text-gray-800 mb-3">
            Hi there! 👋 <br />
            We are available on whatsapp.
          </div>
          <a
            href="https://wa.me/8801303460386"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-primary border-primary  text-white rounded-md py-2 text-sm transition-colors"
          >
            Start Chat
          </a>
        </div>
      )}

      {/* WhatsApp FAB */}

      <TbBrandWhatsappFilled onClick={togglePopup} aria-label="Chat on WhatsApp" className="text-5xl fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full p-1 shadow-lg hover:bg-primary-600 transition-colors"/>


    </>
  );
};

export default WhatsAppButton;
