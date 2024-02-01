
const Checkout = (props) => {
  return (
    <form>
    <div>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name"/>
    </div>
    <div>
        <label htmlFor="street">Street</label>
        <ul id="street"></ul>
    </div>
    <div>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" name="postal"/>
    </div>
    <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city"/>
    </div>
    <button type="button">Cancel</button>
    <button>Confirm</button>
        
    </form>
  )
}

export default Checkout;