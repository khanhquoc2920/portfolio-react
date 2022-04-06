import React from 'react';
import './App.css';

class App extends React.Component {
  render (){
    return (
      <div classNameName="App">
          <section id="overlay"></section>
    <header>
      <div class="container">
          <nav class="navbar">
           
              <div class="navbar__logo">
                  <img src="./image/rose.png" alt="logo"/>
              </div>
              <ul class="navbar__links">
                  <li class="navbar__link"><a href="#things">Dịch vụ</a></li>
                  <li class="navbar__link"><a href="#works">Công việc</a></li>
                  <li class="navbar__link"><a href="/static/cvofKhanh.pdf">Hồ sơ</a></li>
                  <a href="#footer"><button class="navbar__btn">Liên hệ</button></a>

              </ul>
              <div class="navbar__icons">
                <div class="navbar__icon">

                </div>
              </div>
          </nav>
      </div>
  </header>
  <section id="banner">
    <div class="container">
   
      <div class="banner__img">
        <img src="./image/bg.svg" alt="illustration of women" />
      </div>
   
      <div class="banner__heading">
        <h1>Hello, I'm Khánh</h1>
        <p>
         Mô tả về bản thân : Bản thân tôi là một người đam mê với lĩnh vực lập trình front-end
         với những kinh nghiệm liên quan từ khi còn là học sinh sinh viên
         Là một người điềm tĩnh , thích ứng nhanh với môi trường mới ,
         không ngại khó , hứng thú trong việc tìm ra hướng giải quyết của
         vấn đề 
        </p>
        <a href="#"><button class="banner__btn">Xem thêm</button></a>
        <div class="banner__socials">
          <a href="facebook.com/raudz292"><i class="fab fa-facebook"></i></a>
          <a href="instagram.com/khanhdz292"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </section>
  <section id="things">
    <div class="container">
  
      <div class="things__dec">
        <img src="./image/things-dec-l.png" alt="illustration of leaf" />
      </div>
   
      <div class="things__dec">
        <img src="./image/things-dec-r.png" alt="illustration of leaf" />
      </div>
    
      <h2>Dịch vụ</h2>
    
      <div class="things__item">
    
        <img src="./image/reason-2-343x200.png" alt="illustration of women" />
  
        <div class="things__item--heading">
          <h3>Đội ngũ chuyên nghiệp</h3>
          <p>
            Chúng tôi có đội ngủ chuyên nghiệp trong tất cả các 
            mảng mà bạn cần: designer, lập trình viên thiết kế website,
             lập trình di động, lập trình web-app, marketing online, 
             Business Analytics
          </p>
        </div>
      </div>

      <div class="things__item">
      
        <img src="./image/about-2.png" alt="illustration of women" />
      
        <div class="things__item--heading">
          <h3>Thiết kế sáng tạo</h3>
          <p>
            Chúng tôi luôn luôn xem thiết kế website 
            là một việc làm nghiêm túc, không phải vứt đại 
            cho khách hàng vài source code có sẵn và bào tiền
          </p>
        </div>
      </div>

      <div class="things__item">

        <img src="./image/about-4.png" alt="illustration of computer" />

        <div class="things__item--heading">
          <h3>Trách nhiệm</h3>
          <p>
            Nâng cấp bản thân: chúng tôi yêu thích công việc mình đang làm, 
            do đó mỗi thành viên đều coi việc nâng cấp và làm mới bản thân không 
            phải là gánh nặng mà ngược lại đó là một sự trải nghiệm thú vị
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="works">
    <div class="container">
   
      <div class="works__dec">
        <img src="./image/work-dec.png" alt="illustration of leaf" />
      </div>
      <div class="works__dec">
        <img src="./image/work-dec.png" alt="illustration of leaf" />
      </div>

      <h2>Dự án</h2>

      <div class="works__img">
        <div class="works__img--single">
          <img src="./image/duan.png" />
        </div>
        <div class="works__img--single">
          <img src="./image/duan2.png"  />
        </div>
        <div class="works__img--single">
          <img src="./image/duan3.png" />
        </div>
        <div class="works__img--single">
          <img src="./image/duan4.jpg"  />
        </div>
      </div>
      <div class="works__btn">
        <a href="#"><button>Xem thêm</button></a>
      </div>
    </div>
  </section>
  
  <footer id="footer">
    <div class="container">
    
      <div class="footer__dec">
        <img src="./image/things-dec-l.png" alt="illustration of leaf" />
      </div>
      
      <div class="footer__img">
        <img src="./image/footer-img.png" alt="illustration of women" />
      </div>

      <div class="footer__heading">
        <h1>Liên hệ với tôi ngay :</h1>

        <div class="footer__contact">
          <a href="tel:0869280017">
            <i class="fas fa-phone-alt"></i>
            <p>+84-869280017</p>
          </a>
          <a href="mailto:khanhquoc2920@gmail.com">
            <i class="fas fa-envelope"></i>
            <p>khanhquoc2920@gmail.com</p>
          </a>
        </div>
        <div class="banner__socials">
          <a href=""><i class="fa-solid fa-square-envelope"></i>   </a>
          <a href="github.com/khanhquoc2920"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </footer>
    
    </div>
    );
  }
}

export default App;
