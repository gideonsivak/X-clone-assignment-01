// நம்ம ட்வீட் பாக்ஸை தானாகவே கீழே இறக்க வைக்கும் கஸ்டம் லாஜிக்
function autoResize(element) {
    // முதலில் உயரத்தை ரீசெட் செய்கிறோம்
    element.style.height = "auto";
    // டைப் செய்த எழுத்துக்களின் உயரத்துக்கு ஏத்த மாதிரி பாக்ஸை கீழே இறக்குகிறோம்
    element.style.height = element.scrollHeight + "px";
}   