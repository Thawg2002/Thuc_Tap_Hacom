import { FaCalendarAlt } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { Flex } from "@mantine/core";
import "./ContactInFoating.scss";
import SendContact from "./SendContact/SendContact";
type Props = {};

const ContactInFoating = (props: Props) => {
  return (
    <div className="contact-floating-box">
      <Flex direction="column" className="contact-box-container">
        <SendContact/>
        <div className="contact-item">
          <div className="contact-icon">
            <FaFacebookMessenger />
          </div>
          <Flex direction="column" className="contact-text">
            <p className="lable-text">Chat Facebook</p>
            <p>(8h30-19h)</p>
          </Flex>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <SiZalo />
          </div>
          <Flex direction="column" className="contact-text">
            <p className="lable-text">Chat Zalo</p>
            <p>(8h30-19h)</p>
          </Flex>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <IoCall />
          </div>
          <Flex direction="column" className="contact-text">
            <p className="lable-text">09.8888.6666</p>
            <p>(8h30-19h)</p>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default ContactInFoating;
