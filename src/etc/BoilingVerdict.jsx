
function BoilingVerdict(props) {  
  return props.celsius >= 100 ? <p>물이 끓습니다.</p> : <p>물이 끓지 않습니다.</p>;
}

export default BoilingVerdict;