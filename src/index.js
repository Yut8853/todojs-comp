const onClickAdd = () => {
  // テキストボックsの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createList(inputText);
};

const deleteFromcomp = (target) => {
  document.querySelector(".incompleteList").removeChild(target);
};

// 未完了リストに追加する関数/
const createList = (text) => {
  // LI生成
  const li = document.createElement("li");
  li.className = "list-row";

  // div生成
  const div = document.createElement("div");
  div.innerText = text;

  // buttonタグの生成
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    deleteFromcomp(completeBtn.parentNode);

    const addTarget = completeBtn.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // LIタグを生成
    const div = document.createElement("div");
    div.innerText = text;
    // buttonタグの生成
    const backbtn = document.createElement("button");
    backbtn.innerText = "戻す";

    backbtn.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除

      const deleteTarget = backbtn.parentNode;
      document.querySelector(".completeList").removeChild(deleteTarget);

      const text = backbtn.parentNode.firstChild.innerText;
      createList(text);
    });

    addTarget.appendChild(div);
    addTarget.appendChild(backbtn);

    document.querySelector(".completeList").appendChild(addTarget);
  });

  // buttonタグの生成
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除/
    deleteFromcomp(deleteBtn.parentNode);
  });

  // liタグの小要素に各要素を設定
  li.appendChild(div);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.querySelector(".incompleteList").appendChild(li);
};

document.getElementById("add-btn").addEventListener("click", () => {
  onClickAdd();
});
