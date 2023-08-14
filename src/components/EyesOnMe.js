function OnFocus() {
  console.log(`Good!`);
}

function Blur() {
  console.log(`Hey! Eyes on me!`);
}

function EyesOnMe() {
  return (
    <div>
      <button onFocus={OnFocus} onBlur={Blur}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
