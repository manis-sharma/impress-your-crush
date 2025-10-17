# 💕 Romantic Proposal - Interactive Web Experience

> A beautifully crafted, interactive romantic proposal web application with personalized photos, magical animations, and ambient music.

![License](https://img.shields.io/badge/License-MIT-blue.svg)     ![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)   ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)   ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

- 📸 **Personalized Photo Upload** - Add 4 special photos to create your unique moment
- 💖 **Interactive Proposal Experience** - Smooth transitions between romantic moments
- 🎵 **Background Music** - Custom music support with easy toggle controls
- 🌸 **Floating Hearts Animation** - Beautiful animated hearts floating across the screen
- ✨ **Sparkle Effects** - Magical particle effects with physics-based motion
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Glassmorphic design with gradient backgrounds
- 🎯 **Playful Interactions** - "No" button cleverly evades the cursor

## 🚀 Screenshots:
![WhatsApp Image 2025-10-17 at 14 56 27_95c8ebc4](https://github.com/user-attachments/assets/c6e5f475-c6e0-4381-801b-7d13e4ea2be4)
![WhatsApp Image 2025-10-17 at 15 00 45_5a32e8ba](https://github.com/user-attachments/assets/87fb1cf9-ddb2-45b8-8da8-37e1d6a5231e)
![WhatsApp Image 2025-10-17 at 15 51 23_e1856ccc](https://github.com/user-attachments/assets/faccba33-358c-46b2-a9af-da2a651e2db2)
![WhatsApp Image 2025-10-17 at 15 51 23_4c562212](https://github.com/user-attachments/assets/a5454aa6-7103-4946-8bc8-e8b834c3af6f)
![WhatsApp Image 2025-10-17 at 15 53 40_dbf090b1](https://github.com/user-attachments/assets/09de2963-fb98-48e9-be62-c59b27965f9d)
![WhatsApp Image 2025-10-17 at 15 54 32_57f3f3fc](https://github.com/user-attachments/assets/461ab163-cb64-420b-bad5-2200409f82e4)

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Your custom music file (`.mp3`, `.wav`, or `.ogg`)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/manis-sharma/impress-your-crush/
cd impress-your-crush
```

2. Add your music file to the project folder and name it `music` (e.g., `music.mp3`)

3. Open `index.html` in your web browser

That's it! No build tools or dependencies needed. 🎉

## 📁 Project Structure

```
romantic-proposal/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript functionality
├── assets/
│     ├── music               # Your custom music file
├── LICENSE             # MIT License
└── README.md           # This file
```

## 🎯 How It Works

### Step 1: Photo Upload 📸
- Upload or select 4 special photos
- See animated previews with smooth transitions
- Photos appear with zoom and rotation effects

### Step 2: Love Messages 💌
- Read personalized love messages that appear one by one
- Each line fades in with beautiful timing
- Navigate to the proposal moment

### Step 3: The Proposal ❤️
- Ask the magical question: "Will you be mine?"
- The "No" button playfully runs away (can't escape fate!)
- Click "Yes" for the magical moment

### Step 4: Photo Collage 🖼️
- Your 4 photos appear in an animated heart arrangement
- Pop-in effect with staggered timing
- Interactive hover effects with glow
- Sparkle animations fill the scene

### Step 5: Final Message 💖
- Last romantic message revealing your reasons
- Celebrate your beautiful moment together

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --pink: #ff4d6d;      /* Main accent color */
  --rose: #ff8fab;      /* Secondary color */
  --text: #f7f7fb;      /* Text color */
  --bg1: #1a0b2e;       /* Background color 1 */
  --bg2: #0b213a;       /* Background color 2 */
}
```

### Add Your Music
Replace the `music` file path in `index.html`:
```html
<source src="your-music-file.mp3" type="audio/mp3">
```

### Customize Messages
Edit the love messages in `index.html`:
```html
<p id="line1">Your custom message here...</p>
<p id="line2">Another beautiful message...</p>
<p id="line3">And one more...</p>
```

Edit the reasons in the final step:
```html
<li>Your custom reason 1</li>
<li>Your custom reason 2</li>
```

## 🎬 Animation Highlights

- **Grid Animation**: Preview items pulse with life
- **Image Reveal**: Photos zoom in with blur and rotation
- **Photo Pop-In**: Heart collage photos spring to life with cubic-bezier easing
- **Sparkle Effects**: 60+ particles with gradient and physics
- **Floating Hearts**: Smooth animation from bottom to top
- **Hover Effects**: Interactive glow and scale transforms
- **Loading Screen**: Animated dots with staggered timing

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full support |
| Firefox | ✅ Full support |
| Safari  | ✅ Full support |
| Edge    | ✅ Full support |
| Mobile Browsers | ✅ Full support |

## 📱 Responsive Design

The application is fully responsive and works beautifully on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (600px - 1023px)
- Mobile (320px - 599px)

## 🎵 Audio Support

Supported audio formats:
- `.mp3` - Most compatible
- `.wav` - High quality
- `.ogg` - Open format
- `.m4a` - Apple format

## 🎯 Tips for Best Experience

1. **Use High-Quality Photos**: Choose clear, well-lit photos for the best visual impact
2. **Choose Meaningful Music**: Pick a song that's special to both of you
3. **Test First**: Run through the experience before the big moment
4. **Full Screen**: Use full screen mode for maximum immersion (F11)
5. **Volume Check**: Remember to enable audio - it enhances the moment!

## 📸 Screenshot Ideas

Add screenshots showing:
- Photo upload interface
- Love messages screen
- Interactive proposal buttons
- Photo collage with animations
- Final celebration screen

## 🐛 Troubleshooting

### Music not playing?
- Check if the audio file path is correct
- Verify the file format is supported
- Try a different audio file to test

### Photos not uploading?
- Ensure files are in image format (.jpg, .png, .gif, .webp)
- Check file size isn't too large
- Try refreshing the page

### Animations not smooth?
- Close unnecessary browser tabs
- Update your browser to the latest version
- Try a different browser

### Mobile issues?
- Disable browser extensions
- Clear browser cache
- Use landscape mode for better viewing

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Improve animations
- Enhance the user experience

Please open an issue or submit a pull request with your ideas!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ❤️ Special Thanks

- Built with love for special moments
- Inspired by romance and creativity
- Designed for unforgettable experiences

## 📧 Contact & Support

- 🌐 Portfolio: [manishsharma](https://www.manishsharma0.com.np/)

- 💻 GitHub: [manis-sharma](https://github.com/manis-sharma/impress-your-crush/)

- 📺 YouTube: [themanishcodes](https://www.youtube.com/@themanishcodes)

- 📧 Email: manish.234th@gmail.com


---

## 🎉 Make It Special

This project is meant to create an unforgettable moment. Customize it, personalize it, and make it uniquely yours. Love is all about the details! 💕

### Share Your Love Story!
If you use this for your special moment, we'd love to hear about it! Drop a star ⭐ if you find this useful, and feel free to share how you customized it.

---

**Made with 💖 by [Manish Sharma]**

*"Every great love story needs a beautiful beginning."*
