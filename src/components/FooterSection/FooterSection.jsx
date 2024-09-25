import './FooterSection.css';

function FooterSection() {
  return (
    <footer>
      <div className="sectionFooter">
        <ul>
          <li>
            <img
              className="logoFooter"
              src="https://tuwaiq.edu.sa/img/logos/logo.svg"
              alt="Tuwaiq Academy Logo"
            />
          </li>
          <li>
            <div>
              <a href="#" className="sectionatag">شارك كمدرب</a>
              <br />
              <a href="#" className="sectionatag">حول الأكاديمية</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#" className="sectionatag">الشروط والأحكام</a>
              <br />
              <a href="#" className="sectionatag">سياسة الخصوصية</a>
            </div>
          </li>
          <li>
            <div className="socialIcons">
              <a href="https://www.linkedin.com/company/tuwaiqacademy" target="_blank" rel="noopener noreferrer">
                <img src="https://tuwaiq.edu.sa/icons/linkedin-icon.svg" alt="LinkedIn" />
              </a>
              <a href="https://www.snapchat.com/add/tuwaiqacademy" target="_blank" rel="noopener noreferrer">
                <img src="https://tuwaiq.edu.sa/icons/snapchat-icon.svg" alt="Snapchat" />
              </a>
              <a href="https://www.youtube.com/channel/UC_pOwgeaVK7bg3z7fJB5N8w" target="_blank" rel="noopener noreferrer">
                <img src="https://tuwaiq.edu.sa/icons/youtube-icon.svg" alt="YouTube" />
              </a>
              <a href="https://x.com/TuwaiqAcademy?mx=2" target="_blank" rel="noopener noreferrer">
                <img src="https://tuwaiq.edu.sa/icons/twitter-icon.svg" alt="Twitter" />
              </a>
              <a href="https://discord.com/invite/DWpUH7wFxj" target="_blank" rel="noopener noreferrer">
                <img src="https://tuwaiq.edu.sa/icons/discord-icon.svg" alt="Discord" />
              </a>
            </div>
            <h4 dir="ltr">@TuwaiqAcademy</h4>
          </li>
          <li>
            <img src="https://tuwaiq.edu.sa/img/logos/logos2.svg" alt="Logos" />
          </li>
        </ul>
      </div>
      <h3>جميع الحقوق محفوظة لأكاديمية طويق 2024</h3>
    </footer>
  );
}

export default FooterSection;
