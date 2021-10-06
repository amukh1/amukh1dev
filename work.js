function handleMouseMove(event) {
    const height = window.innerHeight;
    const width = window.innerWidth;
    // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
    const yAxisDegree = event.pageX / width * 40 - 20;
    const xAxisDegree = event.pageY / height * -1 * 40 + 20;
    target.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
    // Set the sheen position
    setSheenPosition(event.pageX / width, event.pageY / width);
  }