// 사진 미리보기
function previewImage() {
  const file = document.getElementById("mainphotoInput").files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    const img = document.getElementById("mainPhoto");
    img.src = reader.result;
    img.style.display = "block";
  };
  if (file) reader.readAsDataURL(file);
}

function changeBtnColors(parentId, order) {
  const container = document.getElementById(parentId);
  if (!container) {
    console.error("부모 ID를 못 찾았어:", parentId);
    return;
  }

  const buttons = Array.from(container.children);

  buttons.forEach((btn, idx) => {
    if (idx === Number(order)) {
      // 안전하게 숫자로 변환해서 비교
      btn.classList.add("active-btn");
    } else {
      btn.classList.remove("active-btn");
    }
  });
}

function changeLayout(orderString, order) {
  const orderArray = orderString.split(",");
  orderArray.forEach((itemName, index) => {
    const element = document.getElementById(`item-${itemName}`);
    if (element) {
      element.style.order = index;
      if (itemName !== "photo") {
        // 2. 기존 클래스 제거 (기본 CSS 상태인 opacity 0으로 돌아감)
        element.classList.remove("fade-in");

        // 3. 마법의 리플로우 코드 (브라우저에게 새로 그리라고 명령)
        void element.offsetWidth;

        // 4. 딜레이 설정 및 클래스 추가
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add("fade-in");
      } else {
        // 사진은 늘 보여야 하니까 클래스 제거만 (기본 CSS 영향 안 받게 사진만 예외처리 필요하면 추가)
        element.classList.remove("fade-in");
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    }
  });
  changeBtnColors("layoutBtns", order);
}

function changeAlign(str, order) {
  document
    .getElementById("item-photo")
    .classList.remove("layoutCenter", "layoutLeft", "layoutRight");
  document
    .getElementById("item-name")
    .classList.remove("layoutCenter", "layoutLeft", "layoutRight");
  document
    .getElementById("item-date")
    .classList.remove("layoutCenter", "layoutLeft", "layoutRight");

  if (str === "center") {
    document.getElementById("item-photo").classList.add("layoutCenter");
    document.getElementById("item-name").classList.add("layoutCenter");
    document.getElementById("item-date").classList.add("layoutCenter");
  } else if (str === "left") {
    document.getElementById("item-photo").classList.add("layoutLeft");
    document.getElementById("item-name").classList.add("layoutLeft");
    document.getElementById("item-date").classList.add("layoutLeft");
  } else if (str === "right") {
    document.getElementById("item-photo").classList.add("layoutRight");
    document.getElementById("item-name").classList.add("layoutRight");
    document.getElementById("item-date").classList.add("layoutRight");
  }

  changeBtnColors("alignBtns", order);
}

function showTab(id) {
  document.getElementById(id).classList.toggle("show");
  if (id === "sub-step1") {
    document.getElementById("sub-step2").classList.remove("show");
    document.getElementById("sub-step2").classList.add("hide");
  } else if (id === "sub-step2") {
    document.getElementById("sub-step1").classList.remove("show");
    document.getElementById("sub-step1").classList.add("hide");
  }
}

function changeText(id, text) {
  const targetElem = document.getElementById(id);
  if (targetElem) {
    targetElem.textContent = text;
  }
}

function changeName() {
  const g = document.getElementById("groomName").value || "신랑 이름";
  const b = document.getElementById("brideName").value || "신부 이름";
  document.getElementById("names").innerText = g + " & " + b;
}
