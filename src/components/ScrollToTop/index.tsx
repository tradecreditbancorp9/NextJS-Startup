import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const phoneNumber = '447453747965';
  const message = 'Hello, I’m looking out for your banking services, Could you get back to me?';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-99">
      <div className=" h-14 w-14 sm:h-20 sm:w-20 rounded-full">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/logo/wa.jpeg" alt="whatsapp" className="rounded-full" />
        </a>
      </div>
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="bg-primary/80 hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white shadow-md transition duration-300 ease-in-out"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
        </div>
      )}



    </div>
  );
}
