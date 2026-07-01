function showSection(sectionId) {
    // வரி 1: ஹோம் செக்ஷனை மறைக்கிறோம்
    if(document.getElementById('john-home-tweets')) {
        document.getElementById('john-home-tweets').style.display = 'none';
    }
    
    // வரி 2: நோட்டிபிகேஷன் செக்ஷனை மறைக்கிறோம்
    if(document.getElementById('divinson-notifications')) {
        document.getElementById('divinson-notifications').style.display = 'none';
    }
    
    // வரி 3: அபௌட் செக்ஷனை மறைக்கிறோம்
    if(document.getElementById('kajan-about')) {
        document.getElementById('kajan-about').style.display = 'none';
    }

    // வரி 4 & 5: நாம்ப கிளிக் பண்ணுன செக்ஷனை மட்டும் தேடி காமிக்கிறோம்
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}



// நம்ம ட்வீட் பாக்ஸை தானாகவே கீழே இறக்க வைக்கும் கஸ்டம் லாஜிக்
function autoResize(element) {
    // முதலில் உயரத்தை ரீசெட் செய்கிறோம்
    element.style.height = "auto";
    // டைப் செய்த எழுத்துக்களின் உயரத்துக்கு ஏத்த மாதிரி பாக்ஸை கீழே இறக்குகிறோம்
    element.style.height = element.scrollHeight + "px";
}   



