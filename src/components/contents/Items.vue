<template>
  <article>
    <form class="form-inputs">
      <input type="text" name="q">
      <button class="button-search"><span class="material-icons">search</span></button>
    </form>
    <div class="div-table">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>
              <span class="title-names">
                Name
                <span class="material-icons active">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </span>
            </th>
            <th>
              <span class="title-names">
                Enter
                <span class="material-icons">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </span>
            </th>
            <th>
              <span class="title-names">
                Expire
                <span class="material-icons">arrow_drop_up</span>
                <span class="material-icons">arrow_drop_down</span>
              </span>
            </th>
            <th>Edit</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>사과</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" @click="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>바나나</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>딸기</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>키위</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>사과</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>바나나</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>딸기</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>키위</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>사과</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>바나나</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>딸기</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>키위</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>사과</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>바나나</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>딸기</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>키위</td>
            <td>2021-01-01</td>
            <td>2021-02-02</td>
            <td class="td-update">
              <button class="button-update" onclick="modalToggle();"><span class="material-icons">edit_note</span></button>
            </td>
            <td class="td-delete">
              <button class="button-delete" onclick=""><span class="material-icons">delete</span></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-background" @click="modalToggle()">
      <form class="modal" onclick="event.stopPropagation()">
        <h3 class="modal-header">Edit</h3>
        <table class="modal-table">
          <tbody>
            <tr>
              <th>
                <span>Name</span>
              </th>
              <td><input type="text" name="item-name" placeholder="Name"></td>
            </tr>
            <tr>
              <th>
                <span>Enter</span>
              </th>
              <td><input type="date" name="item-enter" placeholder="YYYY-MM-DD"></td>
            </tr>
            <tr>
              <th>
                <span>Expire</span>
              </th>
              <td><input type="date" name="item-expire" placeholder="YYYY-MM-DD"></td>
            </tr>
          </tbody>
        </table>
        <div class="modal-footer">
          <button class="button-close" @click="modalToggle(); return false;"><span class="material-icons">close</span></button>
          <button class="button-update" onclick="return false;"><span class="material-icons">edit_note</span></button>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  methods: {
    modalToggle() {
      document.body.classList.toggle('o-hidden');
      document.getElementsByClassName('modal-background')[0].classList.toggle('active');
    }
  }
}
</script>