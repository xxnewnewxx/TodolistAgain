//  유저가 값을 입력한다
//  +버튼을 클릭하면, 할일이 추가된다
//  딜리트 버튼을 누르면 할일이 삭제된다
// 체크 버튼을 누르면, 할일이 끝나면서 밑줄이 간다
// 진행중 끝남 탭을 누르면, 언더바가 이동한다
// 끝남탭은, 끝남 탭만, 진행중인탭은, 진행중인 아이템만
// 전체탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("taskInputHTML");
console.log(taskInput);

let addButton = document.getElementById("addButtonHTML");
addButton.addEventListener("click", addTask);

let tsakList = [];

function addTask() {
  //할일이 추가되도록 작업
  let taskContent = taskInput.value;
  tsakList.push(taskContent);
  console.log(tsakList);
  render();

  //   console.log("clicked");
}

function render() {
  let resultHTML = "";

  for (let i = 0; i < tsakList.length; i++) {
    resultHTML += `
      <div class="task">
        <div>${tsakList[i]}</div>
        <div>
          <button>check</button>
          <button>Delete</button>
        </div>
      </div>`;
  }

  document.getElementById("taskBoardHTML").innerHTML = resultHTML;
}
