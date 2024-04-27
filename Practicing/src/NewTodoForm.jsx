import { useState } from "react"

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSumit(e) {
      e.preventDefault()
      if (newItem === "") return

      onSubmit(newItem)

      setNewItem("")
    }

    return <form onSubmit={handleSumit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input valie={newItem} onChange={e=> setNewItem(e.target.value)} type="text" name="" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
}