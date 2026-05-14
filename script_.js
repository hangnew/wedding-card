// 탭 전환 함수
      function showTab(name) {
        document.getElementById("tab-info").style.display =
          name === "info" ? "block" : "none";
        document.getElementById("tab-photo").style.display =
          name === "photo" ? "block" : "none";
        document.getElementById("tab-bank").style.display =
          name === "bank" ? "block" : "none";

        document.getElementById("btn-info").style.background =
          name === "info" ? "#b8860b" : "#ddd";
        document.getElementById("btn-info").style.color =
          name === "info" ? "white" : "black";
        document.getElementById("btn-photo").style.background =
          name === "photo" ? "#b8860b" : "#ddd";
        document.getElementById("btn-photo").style.color =
          name === "photo" ? "white" : "black";
        document.getElementById("btn-bank").style.background =
          name === "bank" ? "#b8860b" : "#ddd";
        document.getElementById("btn-bank").style.color =
          name === "bank" ? "white" : "black";
      }

      // 실시간 텍스트 반영
      function run() {
        const g = document.getElementById("g").value || "신랑";
        const b = document.getElementById("b").value || "신부";
        document.getElementById("view").innerText = g + " & " + b;

        const gBank =
          document.getElementById("groom-bank").value ||
          "계좌 번호를 입력해 주세요.";
        const bBank =
          document.getElementById("bride-bank").value ||
          "계좌 번호를 입력해 주세요.";
        document.getElementById("viewBank").innerText = gBank;
        document.getElementById("viewBank2").innerText = bBank;
      }

      // 사진 미리보기
      function previewImage() {
        const file = document.getElementById("photoInput").files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
          const img = document.getElementById("mainPhoto");
          img.src = reader.result;
          img.style.display = "block";
          document.getElementById("msg").style.display = "none";
        };
        if (file) reader.readAsDataURL(file);
      }

      function toggleAcc() {
        const content = document.getElementById("accContent");

        // 현재 보이고 있으면 숨기고, 숨겨져 있으면 보여주기
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      }

      function saveData() {
        // 1. 모든 데이터를 긁어모은다 (보따리 싸기)
        const weddingData = {
          groom: document.getElementById("g").value,
          bride: document.getElementById("b").value,
          date: document.getElementById("d").value,
          bank: document.getElementById("groom-bank").value,
          bank2: document.getElementById("bride-bank").value,
          photo: document.getElementById("mainPhoto").src, // 이미지 데이터
        };

        // 2. 제대로 모였는지 확인 (콘솔창에 출력)
        console.log("------- 서버로 전송할 보따리 -------");
        console.table(weddingData); // 표 형태로 예쁘게 보여줌
        console.log("---------------------------------");

        // 3. 사용자에게 알림
        alert("데이터 보따리 준비 완료! F12를 눌러서 Console 탭을 확인해 봐!");

        // 원래는 여기서 fetch('서버주소', { method: 'POST', body: weddingData }) 가 들어가!
      }




      