function TodoItem2() {
  let todoName = "Go to College ";
  let todoDate = "4/10/2025";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-3">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
