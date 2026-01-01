const AddExpense = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Add Expense</h2>

      <input type="date" /><br /><br />
      <input type="text" placeholder="Category" /><br /><br />
      <input type="number" placeholder="Amount" /><br /><br />
      <textarea placeholder="Remarks"></textarea><br /><br />

      <button>Add Expense</button>
    </div>
  );
};

export default AddExpense;