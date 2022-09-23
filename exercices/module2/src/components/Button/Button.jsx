const Button = ({ delta, changeCount, text }) => {
  const handleClick=(e) => {
    const i = e.target.dataset.delta;
    changeCount(i)
  }

 return <button data-delta={delta} onClick={handleClick}>{text}</button>
}


  export default Button