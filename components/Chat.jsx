import MainPage from "../components/MainPage.jsx";
import { FiSend } from "react-icons/fi";
import { useRef } from "react";

function Chat() {
  const textareaRef = useRef(null);
  function handleInput() {
    const el = textareaRef.current;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }

  return (
    <MainPage>
      <div className="chat-box">
        <ul className="messages">
          <li className="ai-message">Hi, how are you?</li>

          <li className="user-message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eros odio, cursus tincidunt urna ut, pellentesque pharetra magna.
            Donec sit amet dignissim ex, sed posuere magna. Aenean in suscipit
            urna, vitae cursus nulla. Sed eget tristique velit. Aenean luctus
            eleifend risus, id eleifend neque rutrum laoreet. Sed facilisis eu
            elit quis placerat. Nulla facilisi.
          </li>
        </ul>
        <div className="input-container">
          <div className="chat-item">
            <textarea
              ref={textareaRef}
              placeholder="Discuss your book..."
              onInput={handleInput}
            ></textarea>
            <i className="fa-solid fa-paper-plane chat-icon"></i>
          </div>
        </div>
      </div>
    </MainPage>
  );
}
export default Chat;
