const MorseCode = () => {
  const morseCode = {
    A: "• —",
    B: "— • • •",
    C: "— • — •",
    D: "— • •",
    E: "•",
    F: "• • — •",
    G: "— — •",
    H: "• • • •",
    I: "• •",
    J: "• — — —",
    K: "— • —",
    L: "• — • •",
    M: "— —",
    N: "— •",
    O: "— — —",
    P: "• — — •",
    Q: "— — • —",
    R: "• — •",
    S: "• • •",
    T: "—",
    U: "• • —",
    V: "• • • —",
    W: "• — —",
    X: "— • • —",
    Y: "— • — —",
    Z: "— — • •",
    1: "• — — — —",
    2: "• • — — —",
    3: "• • • — —",
    4: "• • • • —",
    5: "• • • • •",
    6: "— • • • •",
    7: "— — • • •",
    8: "— — — • •",
    9: "— — — — •",
    0: "— — — — —",
  };

  return (
    <>
      <div style={{ fontFamily: "monospace", padding: "20px" }}>
        <h2>Morse Code</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {Object.entries(morseCode).map(([key, value]) => (
            <li key={key} style={{ margin: "5px 0" }}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MorseCode