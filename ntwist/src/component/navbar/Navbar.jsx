import React, { useEffect, useState } from "react";
import "./navbar.css"; // Create this CSS file for styling.
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // If scrolled down, set scrolling to true
        setScrolling(true);
      } else {
        // If at the top, set scrolling to false
        setScrolling(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="navbar-left">
        {scrolling ? (
          <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png" />
        ) : (
          <img
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            alt="Icon"
          />
        )}
      </div>
      <div className="navbar-right">
        <ul>
          <li className="nothide"
         
          >
            <a href="/" style={{ color: scrolling ? "black" : "white" }}>
              Home
            </a>
          </li>
          <li className="nothide">
            <a href="/industries"
              style={{ color: scrolling ? "black" : "white" }}
            >
              Industries
            </a>
            
            
          </li>

          

          
          <li className="nothide">
            <a
              href="/ai-software"
              style={{ color: scrolling ? "black" : "white" }}
            >
              AI Software
            </a>
          </li>
          <li className="nothide">
            <a href="/blog" style={{ color: scrolling ? "black" : "white" }}>
              Blog
            </a>
          </li>
          <li className="nothide">
            <a
              href="/contact-us"
              style={{ color: scrolling ? "black" : "white" }}
            >
              Contact Us
            </a>
          </li>
          <li>

          </li>
          <li className="hide">
            <HamburgerIcon
              w={6}
              h={6}
              color={scrolling ? "black" : "white"}
              
                onClick={openModal}
              
            />
          </li>
        </ul>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add your mobile menu content here */}
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Industries</a>
              </li>
              <li>
                <a href="/">    AI Software</a>
              </li>
              <li>
                <a href="/">    Blog</a>
              </li>
              <li>
                <a href="/"> Contact Us</a>
              </li>
            </ul>
           
          </ModalBody>
        </ModalContent>
      </Modal>
    </nav>
  );
};

export default Navbar;
