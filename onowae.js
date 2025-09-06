document.body.innerHTML = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Pacifico&display=swap');

    .ono-message-container {
      text-align: center;
      margin-top: 15%;
      padding: 30px;
      background: linear-gradient(135deg, #ff6b6b, #ffa500);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      color: white;
      font-family: 'Montserrat', sans-serif;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0;
      transform: translateY(-20px);
      animation: fadeInSlideUp 1.5s forwards ease-out;
    }

    .ono-message-container strong {
      font-size: 60px;
      display: block;
      margin-bottom: 10px;
      letter-spacing: 2px;
      text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
    }

    .ono-message-container span {
      font-family: 'Pacifico', cursive;
      font-size: 35px;
      display: block;
      margin-top: 15px;
    }

    @keyframes fadeInSlideUp {
      from {
        opacity: 0;
        transform: translateY(-50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .ono-message-container .rocket {
        display: inline-block;
        animation: flyRocket 2s infinite alternate ease-in-out;
    }

    @keyframes flyRocket {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(-10deg); }
        100% { transform: translateY(0) rotate(0deg); }
    }
  </style>
  <div class="ono-message-container">
    <strong>LIBUR DULU BOSKU</strong>
    <span>From Mati Lampu <span class="rocket">🚀</span></span>
  </div>
` + document.body.innerHTML;
