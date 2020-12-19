import './Global.css';
import './App.css';
import facultyLogo from './img/E1C634CA-30D1-4DE1-A83E-5646826F34BD.svg';
import favouriteIcon from './img/061B0B44-9ED6-468F-AB5E-5AF524849B12.svg';
import editIcon from './img/449225D5-09A0-4989-ABBA-D00457B1306B.svg';
import scoreIcon from './img/355696EA-8BA6-4F08-B4ED-8B11881F2BBA.svg';
import shareIcon from './img/541ED811-D07F-47D6-8C07-62FC74AC4B2F.svg';
import userIcon from './img/1077114.svg';


function App() {
  return (
    <div className="container">
        <div className="card">

          <div className="header">
              <div className="faculty-logo">
                <img className="faculty-logo-img" src={facultyLogo} alt="faculty logo"/>
              </div>
              <div className="faculty-label">
                  <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h2 className="faculty-label-name">คณะวิศวกรรมศาสตร์</h2>
                    <img className="favorite-icon-img" src={favouriteIcon} alt="favourite"/>
                  </div>
                  <h3 className="faculty-label-field">สาขาวิศวกรรมทั่วไป</h3>
                  <h3 className="faculty-label-university">จุฬาลงกรณ์มหาวิทยาลัย</h3>
              </div>
          </div>

          <div className="round">
            <div className="round-label">
              รอบที่เปิด
            </div>
            <div className="round-quota">
              <div class="circle-active">1</div>
              <div class="circle-active">2</div>
              <div class="circle-inactive">3</div>
              <div class="circle-active">4</div>
              <div class="circle-inactive">5</div>
            </div>
          </div>

          <div className="detail">

            <div className="detail-header">
                <div className="deatail-header-left-label">
                    รอบที่ 4 : Admission
                </div>
                <div className="deatail-header-right">
                  <button type="button" className="deatail-header-right-button">แก้ไขคะแนน <img className="edit-icon-img" src={editIcon} alt="edit"/></button>
                </div>
            </div>

            <div className="detail-center">
              <div className="detail-center-left">
                <img className="score-icon-img" src={scoreIcon} alt="score"/>
              </div>
              <div className="detail-center-right">
                <p className="score-label">คะแนนของคุณคือ</p>
                <p className="your-score">23,453</p>
              </div>
            </div>
          </div>

          <div className="detail-bottom">
              <div className="other-socre">
                <p className="score-number">20,845</p>
                <p className="score-label2">คะแนนต่ำสุด 60</p>
              </div>
              <div className="score-border"></div>
              <div className="other-socre-center">
                <p className="score-number">21,345</p>
                <p className="score-label2">คะแนนเฉลี่ย 60</p>
              </div>
              <div className="score-border"></div>
              <div className="other-socre">
                <p className="score-number">23,415</p>
                <p className="score-label2">คะแนนสูงสุด 60</p>
              </div>
          </div>

          <div className="score-ratio">
              <div className="arrow-left"></div>
              <p className="score-ratio-label">ดูสัดส่วนคะแนน</p>
          </div>

          <div className="interest">
              <div className="interest-left">
                <img className="user-icon-img" src={userIcon} alt="user"/>
                <p className="interest-label">10 <i>คนที่สนใจ</i></p>
              </div>
              <div className="interest-right">
                <img className="share-icon-img" src={shareIcon} alt="share"/>
              </div>
          </div>

        </div>
    </div> 
  );
}

export default App;
