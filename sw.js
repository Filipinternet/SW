function spinWheel() {
    const wheel = document.getElementById('wheel');
    const segments = 16;
    const spinDegree = 3600; // 10 full rotations

    // Target the orange segment (second segment, index 1)
    const targetSegment = 1;
    
    // Calculate the degree to stop at the target segment
    const targetDegree = (360 / segments) * targetSegment;
    
    // Total degree to spin
    const totalDegree = spinDegree + targetDegree;
    
    wheel.style.transform = `rotate(${totalDegree}deg)`;
}