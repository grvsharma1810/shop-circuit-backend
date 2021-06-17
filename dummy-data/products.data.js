const faker = require("faker");

const musicProducts = [
  {
    name: "Ableton Push 2 Controller Instrument",
    image: "https://images-na.ssl-images-amazon.com/images/I/61PuvieaCDL._AC_SX679_.jpg",
    category: "Digital Audio Workstation",
    price: "7999",
    highlights: [
      "Hardware instrument for hands-on playability with Ableton live 10",
      "New sampling workflows: slice, play and manipulate samples from push",
      "Play or step sequence beats, notes, chords and automation",
      "Large multicolor display and 8 touch-sensitive encoders for controlling mixer, devices and instruments, and live browser navigation",
      "Includes live 10 Intro"
    ],
    sourceUrl: "https://www.amazon.com/Ableton-Push-Controller-Instrument-87565/dp/B01M1DW7IP"
  },
  {
    name: "Digital Audio Workstation",
    image: "https://images-na.ssl-images-amazon.com/images/I/51HpeC+3o7L._SX397_BO1,204,203,200_.jpg",
    category: "Digital Audio Workstation",
    price: "1799",
    highlights: [
      "A digital audio workstation (DAW) is a PC or Macintosh equipped with sound cards and software for editing and processing digital audio. A properly outfitted computer can now function like a sophisticated recording studio, using plug-ins and special software to create recording-studio quality sound on the desktop, and then allowing users to edit and process that sound to perfection. DAWs are not only revolutionizing the way music is recorded, but allow new forms of electronic music, created entirely in the computer, to be written and recorded on the desktop. The Digital Audio Workstation Studio, by renowned digital music expert Colby Lieder, will be the first book to teach the complete DAW process, from outfitting your computer with the necessary hardware and software, recording with the proper microphones, using DAW power to create perfectly modulated mixes, to finally mastering down into a completely professional finished product. With this book, a computer, and a little imagination, any musician can create utterly professional music CDs, DVDs, or streamed audio."
    ],
    sourceUrl: "https://www.amazon.com/Digital-Audio-Workstation-Colby-Leider/dp/0071422862"
  },
  {
    name: "Image Line FL Studio 20 Producer Edition Mac/Windows",
    image: "https://images-na.ssl-images-amazon.com/images/I/71yL66oxmRL._AC_SX679_.jpg",
    category: "Digital Audio Workstation",
    price: "14999",
    highlights: [
      "Powerful mixing and automation",
      "The best Piano Roll in the business",
      "Flexible Browser and workflow features",
      "Support for all VST standards",
      "Over 80 instrument and plugin effects included"
    ],
    sourceUrl: "https://www.amazon.com/Image-Line-Studio-Producer-Windows/dp/B07C895FTM"
  },
  {
    name: "Steinberg Nuendo 5 Digital Audio Workstation (Mac and Windows)",
    image: "https://images-na.ssl-images-amazon.com/images/I/21j2KXUasKL._AC_.jpg",
    category: "Digital Audio Workstation",
    price: "15999",
    highlights: [],
    sourceUrl: "https://us.amazon.com/Steinberg-Nuendo-Digital-Workstation-Windows/dp/B008ZT7XIA",
  },
  {
    name: "Image Line FL Studio Signature - Academic Edition",
    image: "https://images-na.ssl-images-amazon.com/images/I/61EkCAonXjL._AC_SX679_.jpg",
    category: "Digital Audio Workstation",
    price: "29999",
    highlights: [
      "Fully reworked scalable interface to fit any screen size or resolution Multi-touch capability extends to the Mixer New category Browser tabs and the ability to delete content on right-click Channel Options Menu has moved from the Toolbar Menus to the Channel rack Channel settings have been integrated into the Plugin Pattern Menu moved from the Channel rack to the Toolbar Menu and Pattern Selector Piano roll Auto-zoom can now be deselected Multiple drag and drop for audio fil",
      "FL Studio is a complete software music production environment and DAW representing more than 14 years of innovative developments",
      "Everything you need in one package to compose, arrange, record, edit, mix and master professional quality music",
      "FL Studio is the fastest way from your brain to your speakers",
      "Note: This title works ONLY on Windows systems"
    ],
    sourceUrl: "https://www.amazon.com/Image-Line-FL-Studio-Signature/dp/B00WASI9ZI"
  },
  {
    name: "PreSonus AudioBox Studio with Headphones, Microphone, Mic Cable, USB Cable, and StudioOne Artist Software",
    image: "https://images-na.ssl-images-amazon.com/images/I/51CuHB%2BvBFL._AC_.jpg",
    category: "Digital Audio Workstation",
    price: "14999",
    highlights: [
      "The PreSonus Audio Box Studio package comes with everything you need to record on your computer!",
      "Includes AudioBox USB Interface w/cable, Studio One software, M7 microphone, and HD7 headphones",
      "Zero-latency monitoring via internal mixer",
      "1/3U rack-mountable"
    ],
    sourceUrl: "https://www.amazon.com/PreSonus-Studio-Headphones-Microphone-StudioOne/dp/B004LLV04E"
  },
  {
    name: "USB Audio Interface with Mic Preamplifier",
    image: "https://images-na.ssl-images-amazon.com/images/I/6185RV5KWnS._AC_SX679_.jpg",
    category: "Audio Interfaces",
    price: "5999",
    highlights: [
      "Audio Interface Compatible with popular recording software, including Avid pro tools, Ableton live, Steinberg Cubase, etc.",
      "2x2 USB audio interface for recording microphones and instruments.",
      "Audiophile 48 kHz resolution for professional audio quality.",
      "USB Audio Interface Studio-grade converters for 24-bit/ 96 khz recording.",
      "NOTES: No DAW recording software included, you need to download the recording software yourself."
    ],
    sourceUrl: "https://www.amazon.com/Interface-Preamplifier-Computers-Equipment-Recording/dp/B08KG4Z2CG"
  },
  {
    name: "Focusrite Scarlett Solo (3rd Gen) USB Audio Interface with Pro Tools | First",
    image: "https://images-na.ssl-images-amazon.com/images/I/717gKDL1iML._AC_SX679_.jpg",
    category: "Audio Interfaces",
    price: "8999",
    highlights: [
      "The best performing mic preamps the Scarlett range has ever seen, now with switchable Air mode to give your recordings a brighter and more open sound",
      "One high-headroom instrument input to plug in your guitar or bass",
      "High-performance converters enable you to record and mix at up to 24-bit/ 192kHz",
      "Two hum-free balanced outputs provide clean audio playback",
      "With our Quick Start tool, it's now easier than ever to get up and running",
      "Country of Origin: China"
    ],
    sourceUrl: "https://www.amazon.in/Focusrite-Scarlett-Audio-Interface-Tools/dp/B07QR6Z1JB"
  },
  {
    name: "Donner Audio Interface Livejack Lite",
    image: "https://images-na.ssl-images-amazon.com/images/I/61hC29IyYCS._AC_SX679_.jpg",
    category: "Audio Interfaces",
    price: "8999",
    highlights: [
      "[2 In 2 Out]This audio interface has 2 high-headroom instrument inputs and 2 out USB-C audio interfaces with a high-headroom, Class A DYNA microphone preamplifier, giving your vocal recordings a brighter and more open sound. Instrument/Line input switch for plug in most kind of instruments and play.",
      "[ 24-bit/192 kHz]The usb audio interface Direct Monitoring feature lets you hear what you are playing in “real-time”, without the effects of computer latency.Studio-grade converters for 24-bit/192 kHz recording, mix and playback.",
      "[TRS Balanced ] TRS balanced output of mixer audio interface provide high quality audio output without hum or interference.",
      "[Livejack Lite Driver ]No external power required, just plug and play.Window users need to scan the QR code to download the asio driver for use. Uncompromising analog design, superior components, and premium build quality.",
      "[Headphone Amplifier]Built in headphone amplifier for loud, detailed, low-noise monitoring."
    ],
    sourceUrl: "https://www.amazon.com/Donner-Interface-Interfaces-Headphone-Amplifier/dp/B093H29FH2"
  },
  {
    name: "PreSonus AudioBox USB 96 25th Anniversary Edition with Studio One",
    image: "https://images-na.ssl-images-amazon.com/images/I/51W0PzR1xOL._AC_SX679_.jpg",
    category: "Audio Interfaces",
    price: "7999",
    highlights: [
      "2 high-quality Class-A mic preamps make it easy to get a great sound",
      "2 high-headroom instrument inputs to record guitar, bass, and your favorite line-level devices, plus MIDI I/O",
      "Studio-grade converters for 24-bit/96 kHz recording and playback",
      "DAW Recording Software – Studio One Artist and Ableton Live Lite",
      "Over $1,000 of computer recording software plug-ins – Studio Magic Plug-In Suite"
    ],
    sourceUrl: "https://www.amazon.com/PreSonus-AudioBox-USB-25th-Anniversary/dp/B08D8R6VFC"
  },
  {
    name: "MOTU M4 4x4 USB-C Audio Interface",
    image: "https://images-na.ssl-images-amazon.com/images/I/61QUU0g5POL._AC_SX679_.jpg",
    category: "Audio Interfaces",
    price: "13999",
    highlights: [
      "4-in/4-out USB-C Audio Interface with 2 Microphone Preamps",
      "6+GB of Free Content - Mac/PC/iOS",
      "Hardware Moniting",
      "LCD Screen",
      "Loopback"
    ],
    sourceUrl: "https://www.amazon.com/MOTU-M4-USB-C-Audio-Interface/dp/B08129P2XY"
  },
  {
    name: "Steinberg UR22MKII 2-Channel USB Interface",
    image: "https://images-na.ssl-images-amazon.com/images/I/61acj80uDSL._AC_SX679_.jpg",
    category: "Audio Interfaces",
    price: "12999",
    highlights: [
      "2 x 2 USB 2.0 audio interface",
      "24-Bit/192 kHz & Two Class-A D-PRE mic preamps",
      "Compatible with all major audio editing, mastering, and music production software",
      "MIDI input/output & iPad connectivity. System requirements: mac OS X 10.7/10.8/10.9/10.10/10.11 and windows 7 SP1/8/8.1/10",
      "Cubase AI and Cubasis LE included. Please refer the User Guide before use"
    ],
    sourceUrl: "https://www.amazon.com/Steinberg-UR22MKII-2-Channel-USB-Interface/dp/B017MVUAHM"
  },
  {
    name: "PreSonus AudioBox iOne 2x2 USB/iPad Audio Interface",
    image: "https://m.media-amazon.com/images/I/71+WSR3gxLS._AC_UL640_FMwebp_QL65_.jpg",
    category: "Audio Interfaces",
    price: "12599",
    highlights: [
      "Bus-powered USB 2.0/iPad audio interface",
      "1 instrument input and 1 microphone input with low-noise, high-headroom, class A mic preamplifier and +48V phantom power",
      "Start recordings with Capture Duo for iPad one-tap recording application, then finish songs with wireless transfer to included, easy-to-use Studio One 3 DAW software (Mac/Windows)",
      "Software includes 30 native effects, 4 virtual Instruments and over 6 GB of beats and sample content",
      "Compatible with almost all recording software for Mac, Windows and iPad",
      "Studio-quality 24-bit resolution",
      "44.1, 48, 88.2 and 96 kHz sampling rate"
    ],
    sourceUrl: "https://www.amazon.in/PreSonus-AudioBox-iOne-Recording-System/dp/B00KBMAJU8"
  },
  {
    name: "Antelope Audio Zen Go Synergy Core 4x8 Bus-Powered USB-C Audio Interface",
    image: "https://images-na.ssl-images-amazon.com/images/I/718bEBdLJAL._AC_SX679_.jpg",
    category: "Audio Interfaces",
    price: "18999",
    highlights: [
      "Bus-powered audio interface with USB-C connection for Mac/Windows",
      "Two Discrete ultra-linear preamps with 65 dB gain and switchable mic, line and Hi-Z modes, offering console-grade performance & low noise when recording",
      "Class-leading AD/DA conversion for the most detailed sound when recording and streaming audio, aided by 64-bit AFC clocking technology delivering increased sound width & separation",
      "37 Synergy Core analog-modeled effects included and over 50 available as optional expansions. Processed in real-time with imperceptible latency",
      "User-friendly software control of all available features including onboard effects processing, direct monitoring, signal routing and volume settings"
    ],
    sourceUrl: "https://www.amazon.com/dp/B08T5HS5WF"
  },
  {
    name: "AKAI Professional MPK Mini Play – USB MIDI Keyboard",
    image: "https://images-na.ssl-images-amazon.com/images/I/81n3JbyI5uL._AC_SX679_.jpg",
    category: "MIDI Keyboards",
    price: "10999",
    highlights: [
      "Standalone Piano Style Keyboard - Portable mini keyboard and USB MIDI controller with 25 velocity-sensitive synthesizer action keys, pitch/mod joystick control, plus 128 sounds and 10 drum kits",
      "Play Anywhere - Built in speaker, 1/8-inch headphone output and battery powered specification (3 x AA batteries – not included) for performing and producing on the go",
      "Beat Maker Essential - 2 banks of 8 ultra-responsive backlit MIDI drum pads with Note Repeat and Full Level functions for drum machine style performance and music production",
      "Tweak, Customize - 2 banks of 4 knobs (8 total) to tweak internal sounds or software parameters; In standalone mode control chorus, reverb, filter, EQ and envelope controls",
      "The MPC Production Experience - Includes MPC Beats Software complete with the finest features and essential production tools from the Akai Professional MPC Series",
      "Pro Software Suite - Includes ProTools First, Akai Pro MPC Beats, AIR Music Tech Hybrid 3 and SONiVOX Wobble (downloads)"
    ],
    sourceUrl: "https://www.amazon.com/Akai-Professional-Standalone-Instrument-Drum-Sounds/dp/B07HDB12FM"
  },
  {
    name: "AKAI Professional LPK25 - USB MIDI Keyboard controller",
    image: "https://images-na.ssl-images-amazon.com/images/I/71X3umkuU3L._AC_SL1500_.jpg",
    category: "MIDI Keyboards",
    price: "11999",
    highlights: [
      "Production in your Pocket - 13-inch, slim-line laptop performance keyboard with 25 velocity-sensitive mini-keyboard keys for playing melodies, bass lines, chords and more",
      "Full Range Performance - Dedicated octave up and down buttons to increase the keyboard to the full melodic range plus a sustain button for expressive performances",
      "Packed with Features - On-board arpeggiator steps through chords automatically and generates inspiring melodic ideas quickly",
      "Customized Production Experience - 4 programmable memory banks for instant recall of mappings for DAWs, virtual instruments, effects and more",
      "Effortless Setup - USB-powered and plug-and-play setup for Mac and PC",
      "The MPC Production Experience - Includes MPC Beats Software complete with the finest features and essential production tools from the Akai Professional MPC Series",
      "Works With All Popular Applications - GarageBand, Logic, Sonar, Cubase, Ableton Live, ProTools, Reason, Fruity Loops, Digital Performer, and more"
    ],
    sourceUrl: "https://www.amazon.com/Akai-Professional-LPK25-Ultra-Portable-Controller/dp/B002M8GBDI"
  },
  {
    name: "WORLDE 25 Key MIDI Controller, Portable USB MIDI Keyboard Controller",
    image: "https://images-na.ssl-images-amazon.com/images/I/71hK8SRIgQL._AC_SX679_.jpg",
    category: "MIDI Keyboards",
    price: "12999",
    highlights: [
      "🎬25 velocity sensitive mini-keys, with 3 velocity curve and 1 constant velocity; 8 Assignable rotary knobs, each can be edited by user.",
      "🎬16 high quality velocity & pressure sensitive performance pads with RGB backlit, can be assigned easily as pads, MIDI note buttons.",
      "🎬2 touch sensors of dynamic pitch bend and modulation touch strips; Play and record transport control buttons.",
      "🎬Powerful and creative Arpeggiator for generating ideas quickly; Fixed Chord mode; Brilliant OLED display for immediate parameter setting.",
      "🎬6.35mm standard sustain pedal jack, compatible with switch pedal; you can also connect to your hardware with the standard 3.5mm TRS MIDI Out jack."
    ],
    sourceUrl: "https://www.amazon.com/WORLDE-Portable-Keyboard-Controller-Assignable/dp/B091CGJNRN"
  },
  {
    name: "Vangoa Worlde TUNA MINI 25 Key USB MIDI Keyboard Controller",
    image: "https://images-na.ssl-images-amazon.com/images/I/71quNJYnEWL._AC_SX679_.jpg",
    category: "MIDI Keyboards",
    price: "13999",
    highlights: [
      "[25 Velocity-sensitive Keys] 3 velocity curves, 1 constant velocity are adjustable to find the perfect fits for you, mini size keys offer the ultra-portable ability, merely 1.1lb compact design for handy carrying with you anywhere for inspiration, ±4 Octave buttons offer access to full keyboard range",
      "[8 RGB Backlit Drum Pad] 2 banks of 8 beat pads with a softer and more sensitive touch for drum beats. With its editor, you can easily change to colorful lights or assign more functions to make much freedom for finger drumming",
      "[8 Assignable knobs&faders] Doubled the control to meet all your requirement for performing and producing. Infinite Knob gives an endless turn for larger data adjustment, high-quality faders with friction offer a great feel, run nicely smooth for sound control",
      "[Great Compatibility] Compatible with Win10/8/Win7/XP/Vista, Mac OSX, able to be pair with most mainstream DAWs, foot pedal connectable. It is easily connected to iOS & Android via OTG cable(not included) for any time use",
      "[Beyond Expection] Elegant white panel with wood grain finish sides. Pitch and mod touch strip have a smoothy feel and highly responsive, greatly deliver expressive, creative control. It considerately comes with a manual and USB MIDI cable for beginners"
    ],
    sourceUrl: "https://www.amazon.com/Vangoa-Worlde-Keyboard-Controller-Backlit/dp/B08J86NMZV"
  },
  {
    name: "AKAI Professional MPK Mini MK3 - 25 Key USB MIDI Keyboard Controller",
    image: "https://images-na.ssl-images-amazon.com/images/I/81OcnEezt8L._AC_SX679_.jpg",
    category: "MIDI Keyboards",
    price: "11399",
    highlights: [
      "Music Production and Beat Maker Essential - USB powered MIDI controller with 25 mini MIDI keyboard velocity-sensitive keys for studio production, virtual synthesizer control and beat production",
      "Total Control of your Production - Innovative 4-way thumbstick for dynamic pitch and modulation control, plus a built-in arpeggiator with adjustable resolution, range and modes",
      "The MPC Experience - 8 backlit velocity-sensitive MPC-style MIDI beat pads with Note Repeat & Full Level for programming drums, triggering samples and controlling virtual synthesizer / DAW controls",
      "Complete Command of your Virtual Instruments and FX - 8 360-degree knobs assign to all your music studio plugins for mixing, tweaking synth controls and more",
      "1500+ Sounds and Everything You Need for Pro Production - Complete Music Production Starter Kit including MPC Beats, 6 Virtual Instruments and 2GB of sound content"
    ],
    sourceUrl: "https://www.amazon.com/Professional-Keyboard-Controller-Production-Software/dp/B0886KWVYR"
  },
  {
    name: "Alesis, 49-Key 49-Key USB MIDI Keyboard Controller",
    image: "https://images-na.ssl-images-amazon.com/images/I/71MmroZ2xAL._AC_SX679_.jpg",
    category: "MIDI Keyboards",
    price: "13399",
    highlights: [
      "MIDI Keyboard with 49 full-sized, velocity sensitive square-front keys, perfect for playing Virtual Instruments",
      "8 velocity- and pressure-sensitive backlit pads for beat production and clip launching",
      "4 assignable knobs and 4 assignable buttons interface with your music software. Seamless, visual feedback via illuminated buttons and knobs",
      "Octave Up and Down buttons let you access the full keyboard range and Pitch and modulation wheels deliver expressive, creative control",
      "Premium Software Included - Includes ProTools, First Alesis Edition, Ableton Live Lite 9 and Eleven Lite, plus Mini Grand, DB-33 and Xpand 2 virtual instrument software by Air Music Tech"
    ],
    sourceUrl: "https://www.amazon.com/Alesis-V49-Keyboard-Controller-Buttons/dp/B00IWWEW20"
  },
  {
    name: "AKAI Professional MPK261 - USB MIDI Keyboard Controller",
    image: "https://images-na.ssl-images-amazon.com/images/I/61LSNnVDkjL._AC_SX679_.jpg",
    category: "MIDI Keyboards",
    price: "17999",
    highlights: [
      "Pro Keyboard Performance - 61 semi-weighted, velocity-sensitive full-size keys and a premium piano-style keybed for unprecedented response and natural feel",
      "Beat Making Essentials - 16 RGB-illuminated MPC-style pads each with 4 banks for 64 pads - the perfect solution for triggering samples, loops, one-shots, melodics and more",
      "Assignable Control - 24 assignable Q-Link controllers comprising 8 control knobs, faders and switches engineered for hassle-free DAW / virtual instrument mapping",
      "Your Studio Centerpiece - Take command of your peripheral MIDI equipment courtesy of an onboard USB-MIDI interface with 5-pin MIDI input & output",
      "Core MPC Tools - MPC mainstay controls included - MPC Note Repeat, arpeggiator, MPC Full Level, Tap Tempo and Time Division",
      "Comprehensive Production Software Package for Mac and PC included - Ableton Live Lite, Hybrid 3 by AIR Music Tech & SONiVOX Twist 2.0 (downloads)"
    ],
    sourceUrl: "https://www.amazon.com/Akai-Professional-MPK261-Semi-Weighted-Workstations/dp/B00IJ7J06Q"
  },
  {
    name: "PreSonus ATOM SQ Hybrid MIDI Keyboard",
    image: "https://images-na.ssl-images-amazon.com/images/I/81ZhgEz6juL._AC_SX679_.jpg",
    category: "MIDI Keyboards",
    price: "18999",
    highlights: [
      "A complete music production package with hybrid MIDI keyboard/pad performance and production controller and Studio One Artist and Ableton Live Lite (both included)",
      "32 velocity- and pressure-sensitive, RGB LED pads in a unique, staggered layout; intuitive for keyboard players and step sequencer fans",
      "Context-sensitive screen displays valuable parameter information including CC assignments, swing, and much more",
      "Eight endless rotary encoders can be easily configured to control nearly any software parameter",
      "Deep integration with Studio One’s Pattern editor for intuitive step sequencer programming",
      "Expressive arpeggiator for dramatic, easily-performed melodies",
      "Includes custom-curated content libraries for ATOM SQ"
    ],
    sourceUrl: "https://www.amazon.com/PreSonus-ATOM-Performance-Production-Controller/dp/B08D6YNZMW"
  },
  {
    name: "Donner DMK 25 MIDI Keyboard Controller Music ",
    image: "https://images-na.ssl-images-amazon.com/images/I/71IzpqCKAkL._AC_SX679_.jpg",
    category: "MIDI Keyboards",
    price: "19999",
    highlights: [
      "【Ultra-thin design and portability】USB powered MIDI controller with 25 mini MIDI keyboard velocity-sensitive keys for beat maker, studio production, virtual synthesizer control.",
      "【AIR-Touch: Touch Bar】Octave Up and Down Touch Bar let you access the full MIDI keyboard range and Pitch and modulation deliver expressive, creative control. Assignable Touch Bar, can be assigned to send Control Change message (hereinafter called the ‘CC’) or Pitch Bend Change message (hereinafter called the ‘Pitch’).",
      "【Synth-action keys】Premium MIDI controller with 25 expressive synth-action keys.8 Hyper-Sensitive backlit pads make drum beats. USB bus powered - no additional power cable needed.",
      "【TRANSPORT & NAVIGATION】Works with all music production equipment. Navigate your projects: The 6 dedicated transport buttons are always within reach and mapped to control Cycle, Rewind, Forward, Stop, Play and Record.",
      "【4 Program Presets】Four programmable memory banks for instant recall of personal control preferences.This MIDI controller offers 4 assignable knobs and 4 assignable Sliders interface with your music software."
    ],
    sourceUrl: "https://www.amazon.com/Donner-Keyboard-Controller-Backlit-control/dp/B08KGK5FGX"
  },
  {
    name: "Nektar, 25-Key Midi Controller",
    image: "https://images-na.ssl-images-amazon.com/images/I/51IJlEkOYAS._AC_SX679_.jpg",
    category: "MIDI Keyboards",
    price: "19999",
    highlights: [
      "Premium midi controller with 25 expressive synth-action keys, on-board pitch bend and modulation wheels for performances",
      "8 Hyper-Sensitive backlit pads",
      "Mac, PC and iOS compatible",
      "Software instruments automatically mapped to controls",
      "Includes Bitwig 8-Track DAW"
    ],
    sourceUrl: "https://www.amazon.com/Nektar-IMPACT-LX25-Impact/dp/B01M0KBF9F"
  },
  {
    name: "Novation Launchkey MK3 61-Key USB MIDI Keyboard Controller",
    image: "https://images-na.ssl-images-amazon.com/images/I/61qn2WKhEwL._AC_SX679_.jpg",
    category: "MIDI Keyboards",
    price: "19999",
    highlights: [
      "Bundle Includes: Novation Launchkey MK3 61-Key USB MIDI Ableton Keyboard Controller, Knox Gear Adjustable Double X Keyboard Stand, and On-Stage KSP100 Keyboard Piano Style Sustain Pedal (Black)",
      "Various Modes: Eight Scale modes guide you into new musical territory, by transposing keys played to notes in the scale selected. Simply choose your root note and your preferred scale, then play. Three Chord modes transform the keys and pads into an interactive surface of musical exploration, where every note played is tonally and harmonically linked. The arpeggiator lets you explore new melodies and find ideas quickly, while the mutate function reconstructs your patterns into exciting new forms",
      "Customizable for Convenience: Custom Modes simplify the relationship between controller and software, with more power than ever in your hands. Programmable using the Novation Components browser-based tool, Custom Modes let you design the behavior of your Launchkey, with control over control assignments, MIDI routing, pad color and much more",
      "5-Pin MIDI DIN Output: Launchkey MK3 61 is equipped with a full-size 5-pin MIDI DIN output, enabling simple connection to the universe of MIDI devices — new and old. Coupled with its immense standalone potential, Launchkey is now the centerpiece to your live or studio system — computer or not",
      "Integration with Ableton Live: The integration with Ableton Live is truly seamless, with a dedicated button for activating the Capture MIDI function, plus track arm, quantize, click and loop controls, for flying around your Session faster than ever"
    ],
    sourceUrl: "https://www.amazon.com/Novation-Launchkey-Keyboard-Controller-Adjustable/dp/B08ZYXDQG9"
  },
  {
    name: "Amazon Basics Computer Speakers for Desktop or Laptop PC | USB-Powered",
    image: "https://images-na.ssl-images-amazon.com/images/I/91Qr45nRJAL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    category: "Speakers",
    price: "1299",
    highlights: [
      "USB-powered (5V) speakers plug directly into your computer for portable convenience",
      "Turn the speakers on and adjust the volume using one simple control (located on the front of the speakers); volume control includes On/Standby",
      "Simple plug-and-play setup (no drivers needed); can be used with headphones via the 3.5mm jack connector",
      "Frequency range of 103 Hz - 20 KHz; 2.2 watts of total RMS power (1.1 watts per speaker)",
      "Measures 2.76 by 3.55 by 5.3 inches (LxWxH); weighs approximately 1.4 pounds;"
    ],
    sourceUrl: "https://www.amazon.com/AmazonBasics-Computer-Speakers-Desktop-USB-Powered/dp/B07D7TV5J3"
  },
  {
    name: "Creative Pebble 2.0 USB-Powered Desktop Speakers with Far-Field Drivers",
    image: "https://images-na.ssl-images-amazon.com/images/I/51MGXkzK1iL._AC_SY450_.jpg",
    category: "Speakers",
    price: "999",
    highlights: [
      "Single USB cable for computers and laptops | enjoy a hassle-free Audio experience with a single USB cable without the need for a power adapter",
      "Far-field drivers and passive radiators | custom-tuned far-field driver solution with rear facing passive radiators for excellent audio and enhanced bass reproduction",
      "45° elevated drivers | for enhanced audio projection and an immersive personal listening experience",
      "Modern and stylish aesthetics | perfect for any modern homes, offices and workspaces.",
      "Easy access volume control | Conveniently placed Front-facing controls for instant adjustments",
      "Frequency Response 100 Hz (Hertz) ~ 17 kHz (kiloHertz)"
    ],
    sourceUrl: "https://www.amazon.com/Creative-Labs-Pebble-Black-Loudspeaker/dp/B0791H74NT"
  },
  {
    name: "Bluetooth Speakers, DOSS SoundBox Pro+ Wireless",
    image: "https://images-na.ssl-images-amazon.com/images/I/81gnrnUYVYS._AC_SY450_.jpg",
    category: "Speakers",
    price: "2999",
    highlights: [
      "Brilliant Sound: Two full-range drivers and dual passive radiators produce 24W incredible sound with booming bass, tight mids, and crystal clear highs without distortion at any volume.",
      "Overwhelming Bass: Make the bass richer and volume louder via the single press of a button. Fills your room with impressive, overwhelming sound.",
      "Wireless Stereo Pairing: Connect 2 SoundBox Pro+ speakers via a single device for stereo sound and double the volume.",
      "Beat-Driven Party Lights: The mixing colored flashing lights that sync to the beat including line lights and a speaker light to create a pulsing light show for any song.",
      "Extended playtime: Built-in a rechargeable lithium-ion battery, play seamless music up to 15 hours at 50% volume without light.(battery life will vary with use, settings, and environmental conditions)"
    ],
    sourceUrl: "https://www.amazon.com/DOSS-SoundBox-Pro-Impressive-Waterproof/dp/B07W744WLJ"
  },
  {
    name: "Edifier R1280T Powered Bookshelf Speakers",
    image: "https://images-na.ssl-images-amazon.com/images/I/71o5w0ZfptL._AC_SY450_.jpg",
    category: "Speakers",
    price: "5999",
    highlights: [
      "2 x AUX INPUT - Convenient connection to any device that has a 3.5mm headphone output or dual RCA output. Connect to two devices via AUX at the same time, no plugging and switching needed. (None Bluetooth version)",
      "STUDIO SOUND QUALITY - Natural sound reproduction from 13mm silk dome tweeter and 4 inch full range unit",
      "REMOTE CONTROL - Adjust volume at your figure tips. Bass and treble control located on the side of main speaker.",
      "CLASSIC WOOD FINISH - High quality MDF wood build finished with wood effect vinyl serves as a great compliment to any home decor.",
      "2 YEAR WARRANTY - Guaranteed high quality and reliability with hassle-free parts and labor warranty for two years in USA and Canada."
    ],
    sourceUrl: "https://www.amazon.com/Edifier-R1280T-Powered-Bookshelf-Speakers/dp/B016P9HJIA"
  },
  {
    name: "Ortizan Portable Bluetooth Speaker IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound",
    image: "https://images-na.ssl-images-amazon.com/images/I/81qTTdKhiOL._AC_SX679_.jpg",
    category: "Speakers",
    price: "5999",
    highlights: [
      "[Hi-Fi Stereo Sound and TWS Pairing Function]: The bluetooth speaker equips with 24w of stereo audio drivers speaker and advanced digital signal processor, which pumps out crisp treble, detailed mids, and especially enhanced bass at any volume. You can purchase two speakers at the same time to truly enjoy the surround sound of a movie theater by pairing the TWS function, it's an auditory experience that's truly unparalleled.",
      "[RGB Colorful Light Show]: The wireless LED Bluetooth speakers not only a speaker but also as a unique night theme light, it provide different color-changing themes. Using Ortizan bluetooth speakers, a totally reimagined rainbow light show that pulses, phases, and shines to the beat of your music. While you enjoy music, gradient lights would truly bring you party atmospher. Using night theme light, you could just open it as a led light without use it to play music.",
      "[30-Hour Playing Time]: With the top-of-the-line rechargeable li-ion battery, the bluetooth speaker boasts an unbeatable 30 hours of continuous music playtime or make calls time(built in Microphone). Enjoy music day to night never stop.",
      "[IPX7 100% Waterproof]: IPX7 waterproof protection safeguards against rain, dust, snow, and spills, even the outdoor speaker can be fully immersed up to 3ft for about 30 minutes underwater. Perfect for showering, hiking, camping. No worries about weather and outdoor condition, be the Rocker on your trip.",
      "[Upgraded Bluetooth 5.0 Signal]: Ortizan wireless bluetooth speaker can normally connect the device from 66 unobstructed feets away even under difficult conditions and the signal is not disturbed. The bluetooth 5.0 chip easily reads music play list, and connect any devices such as smartphone, TV and laptop."
    ],
    sourceUrl: "https://www.amazon.com/Ortizan-Portable-Bluetooth-Waterproof-Wireless/dp/B08FDPW8KR"
  },
  {
    name: "OontZ Angle 3 Bluetooth Portable Speaker",
    image: "https://images-na.ssl-images-amazon.com/images/I/71evtyMeLiL._AC_SY450_.jpg",
    category: "Speakers",
    price: "1899",
    highlights: [
      "HIGHER QUALITY CRYSTAL CLEAR STEREO SOUND - The OontZ Angle 3 is Designed and Engineered by Cambridge Sound Works in the USA for greater clarity sound, accurate mids and clear highs from dual precision acoustic stereo drivers; the bass output is enhanced by our proprietary passive bass radiator; unique triangular design and downward facing bass radiator further enhance the sound quality; the Higher Quality Crystal Clear Sound & Features distance it from the competition.",
      "LOUDER VOLUME - Surprisingly loud, the Volume Booster 10+ watt power AMP pumps out more volume and plays your music with no distortion, even at maximum volume; the louder volume makes the OontZ Angle 3 Portable Bluetooth Speakers the perfect speaker for any room and the ideal Outdoor Speakers.",
      "INCREDIBLE 100 FOOT BLUETOOTH RANGE - Play the OontZ Angle 3 Bluetooth Speakers up to 100 unobstructed feet away from your device; advanced antenna design with Bluetooth 4.2 provides greater wireless range and faster Bluetooth connection; connects easily with the Echo Dot, Echo Dot 3rd Gen, Echo, Echo Plus, iPhone 6, iPhone 7, iPhone 8, iPhone X, iPad, Samsung Galaxy 8, Samsung Galaxy 9, Samsung Note, Smartphone, Cellphone, Laptop, computer, Mac, and all other Bluetooth devices",
      "IPX5 WATER RESISTANT – The OontZ Angle 3 is totally Splashproof, Rainproof shower speaker, great Shower Speaker; with IPX5 certification the speaker can resist gentle water spray and splash but cannot be partially or fully submerged",
      "LONGER BATTERY PLAYTIME UP TO 14 HOURS - Play from morning till night; bigger 2500mAh rechargeable battery can play up to 14 hours at 2/3 volume; AUX IN Jack connect from TVs and non-Bluetooth devices with a 3.5mm Line-In cable for the Perfect Line-In Speaker; BUILT-IN Microphone for personal handsfree speakerphone calls from a Cellphone or iPhone; Light-weight just 10 oz, 5” long, 2.8” high INCLUDES Micro-USB charging cable"
    ],
    sourceUrl: "https://www.amazon.com/Enhanced-Splashproof-Portable-Bluetooth-Radiator/dp/B010OYASRG"
  },
  {
    name: "Bluetooth Speakers, DOSS SoundBox Pro Portable Wireless Bluetooth Speaker",
    image: "https://images-na.ssl-images-amazon.com/images/I/81EK%2BUwPl3S._AC_SY450_.jpg",
    category: "Speakers",
    price: "1899",
    highlights: [
      "Stereo Sound: Two full-range drivers and dual passive radiators produce 20W stereo sound with enhanced bass, tight mids and crystal clear highs without distortion at any volume.",
      "Active Extra Bass: Make the bass more and volume louder by singel press the button. Enjoy the bass filling each corner of your room.",
      "Wireless Stereo Pairing: Connect 2 SoundBox Pro speakers via a single device for 360° stereo sound and double the volume.",
      "Beat-Driven Light Show: The wonderful light react and phase in time with the beat, included 6 color and 3 illumination patterns.",
      "IPX5 Waterproof: Let the DOSS Soundbox Pro waterproof Bluetooth speaker party by the poolside or beach, and even in the rain. With IPX5 waterproof, the speaker can resist water splash, spray, and rain. But don't soak directly it in water."
    ],
    sourceUrl: "https://www.amazon.com/DOSS-SoundBox-Pro-Bluetooth-Waterproof/dp/B07DMMG7QY"
  },
  {
    name: "Bluetooth Speaker, 40W (60W Peak) Portable Wireless",
    image: "https://images-na.ssl-images-amazon.com/images/I/61tmwFgdiEL._AC_SY450_.jpg",
    category: "Speakers",
    price: "1999",
    highlights: [],
    sourceUrl: "https://www.amazon.com/Bluetooth-Portable-Wireless-Colorful-Subwoofer/dp/B093D7ZQLM"
  },
  {
    name: "COWIN E7 Active Noise Cancelling Headphones",
    image: "https://images-na.ssl-images-amazon.com/images/I/41WzHq0SkRL._AC_.jpg",
    category: "Headphones",
    price: "9999",
    highlights: [
      "Active Noise Cancelling technology. Significant noise reduction for travel, work and anywhere in between. Advanced active noise reduction technology quells airplane cabin noise, city traffic or a busy office, makes you focus on what you want to hear,enjoy your music, movies and videos. The noise cancellation function can work well both in wire and wireless mode.",
      "Proprietary 45mm large-aperture drivers. Deep, accurate bass response. The Active Noise Cancelling around-ear headphones from COWIN give you crisp, powerful sound and quiet that helps you enjoy your music better. The goal that provide Customers with better sound quality, is our constant pursuit.",
      "High-quality built-in Microphone and NFC technology. COWIN E7 provides high-quality built-in microphone for hands-free calls, Which is convenient for you to free yourself from wires. NFC pairing aided by voice prompts, promises quick and stable connection with your Bluetooth enabled devices, Powerful Bluetooth Function.",
      "The professional protein earpad and 90° swiveling earcups. More durability and comfort, Enjoy high-quality, Long-listen comfort. Skin texture, lightweight comfortable around-ear fit you can wear all day long. Gentle Reminder: please take off the headphone every 2-3 hrs to get your ears relax, in order to get better hearing enjoyment, and keep the head comfortable.",
      "30 hours playtime per charge at Bluetooth mode. A built-in 750mAh battery won't allow your headphones power off, you can enjoy your world without noise for 30 hours' long time. Don't need to worry the power shortage problem on the long travel. 18-month warranty and quick response & friendly customer service. Dedicated customer service team, provide you with quick response and friendly customer service, which will always serve for you and certainly satisfy you."
    ],
    sourceUrl: "https://www.amazon.com/Cancelling-Headphones-Bluetooth-Microphone-Comfortable/dp/B019U00D7K"
  },
  {
    name: "Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110",
    image: "https://images-na.ssl-images-amazon.com/images/I/51eJUpMRnzL._AC_SX679_.jpg",
    category: "Headphones",
    price: "7999",
    highlights: [
      "Lightweight 1.38 in neodymium dynamic drivers deliver a punchy, rhythmic response to even the most demanding tracks",
      "The swiveling earcup design allows easy storage when you’re not using them, and enhances portability when you’re traveling",
      "Cushioned earpads for total comfort and enfolding closed-back design seals in sound",
      "The wide frequency range—spanning 12 Hz to 22 kHz—delivers deep bass, rich midrange, and soaring highs",
      "Plug: L-shaped stereo mini plug 3.5mm"
    ],
    sourceUrl: "https://www.amazon.com/Sony-MDRZX110-BLK-Stereo-Headphones/dp/B00NJ2M33I"
  },
  {
    name: "Apple AirPods Pro",
    image: "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SX466_.jpg",
    category: "Headphones",
    price: "21999",
    highlights: [
      "Active noise cancellation for immersive sound",
      "Transparency mode for hearing and connecting with the world around you",
      "Three sizes of soft, tapered silicone tips for a customizable fit",
      "Sweat and water resistant",
      "Adaptive EQ automatically tunes music to the shape of your ear",
      "Easy setup for all your Apple devices",
      "Quick access to Siri by saying 'Hey Siri'",
      "The Wireless Charging Case delivers more than 24 hours of battery life"
    ],
    sourceUrl: "https://www.amazon.com/Apple-MWP22AM-A-AirPods-Pro/dp/B07ZPC9QD4"
  },
  {
    name: "Amazon Basics Over-Ear Studio Monitor Headphones - Black",
    image: "https://images-na.ssl-images-amazon.com/images/I/71n83Gqlp6L._AC_SY450_.jpg",
    category: "Headphones",
    price: "5999",
    highlights: [
      "Studio monitor headphones with over-the-ear design helps isolate sound and block outside noise; ideal for studio and field recording",
      "Contoured ear-cups and self-adjustable, flexible leather headband promote long-lasting comfort",
      "90-degree swivel for single-ear use; ear-cups fold in for compact space-saving storage and transport",
      "40 mm diameter drivers; DJ-style 9.8-foot cord; detachable standard 6.3mm plug",
      "Backed by an Amazon Basics 1-year limited warranty"
    ],
    sourceUrl: "https://www.amazon.com/AmazonBasics-Over-Ear-Studio-Monitor-Headphones/dp/B07GFGJPNQ"
  },
  {
    name: "iJoy Matte Finish Premium Rechargeable Wireless Headphones",
    image: "https://images-na.ssl-images-amazon.com/images/I/815PM0CRkHL._AC_SX466_.jpg",
    category: "Headphones",
    price: "6999",
    highlights: [
      "Deep, accurate bass response, extended frequency range, rechargeable",
      "5-Button control, including play/pause/answer/hang-up, equalizer, next track/volume up, previous track/volume down",
      "Ear cups fit around ears to help isolate Audio, foldable design for easy carry, noise canceling design",
      "Micro SD card plug-in, built in radio receiver, built in mic for hands free calling",
      "New: 6 months!! Exchange warranty! If your headset breaks or is damaged for any reason, pranks will provide you with a free replacement!"
    ],
    sourceUrl: "https://www.amazon.com/iJoy-Rechargeable-Wireless-Headphones-Bluetooth/dp/B01HNMTCE2"
  },
  {
    name: "bopmen T3 Wired Over Ear Headphones - Stereo Sound Headphones ",
    image: "https://images-na.ssl-images-amazon.com/images/I/51JgVRxaT3L._AC_SX679_.jpg",
    category: "Headphones",
    price: "11999",
    highlights: [
      "The wideband frequency range – spanning 20Hz to 20kHz – is designed for today’s bass-heavy music. The 20Hz low end of the frequency range picks up every powerful sub-bass note, while at the 20kHz high-end, you’ll be able to enjoy vocal melodies in outstanding clarity",
      "The round earmuffs design with pressure-relieving cushions has been engineered to match the shape of your ears, ensuring a secure fit with minimal sound leakage. Ultra thick earmuffs with seamless sewing seal in sound, reflecting acoustics back towards your ears. As a result, you’ll hear more of your music with less outside interference and maximum bass signatures.",
      "These headphones are built meticulously with strong and sturdy plastic and steel (Steel hidden in Headband) for long-lasting resilience and durability. The easy adjustable headband allows you to get the perfect fit. The headband is also made of leather material to so it's comfortable to wear all day.",
      "Hook up the tangle free, 1.2m braided-nylon cord. The durable cable resists snags and tangles equipped with an in-line mic for taking calls, skipping tracks. Over ear headphone with an additional carry pouch, you can take them to everywhere with you.",
      "Compatible with all PC, Phones, MP3 player, Laptop, Tablets, other devices with 3.5mm headphone port."
    ],
    sourceUrl: "https://www.amazon.com/bopmen-T3-Wired-Over-Headphones/dp/B0853NW29Z"
  },
  {
    name: "6S Wireless Headphones Over Ear",
    image: "https://images-na.ssl-images-amazon.com/images/I/51023NIRT5L._AC_SY450_.jpg",
    category: "Headphones",
    price: "10999",
    highlights: [
      "【 HI-FI WIRELESS HEADPHONES】: High Definition Stereo Headphones, and advanced bluetooth 5.0 chip that aim to deliver you superior sound quality with high fidelity deep bass and crystal clear treble, Deep, accurate bass response, extended frequency range, rechargeable. Lose yourself in immersive music even in the lowest volume levels!",
      "【 BLUETOOTH 5.0 HEADPHONES】: Our upgrade Bluetooth 5.0 technology ensures fast and stable connections to your Bluetooth devices and low latency during audio/video streaming. Headphones wireless provide high-quality built in mic for hands free calling.No more worries about audio dropouts during phone calls and music listening.",
      "【BUILT FOR YOUR COMFORTABILITY 】: The Earmuff imitate human skin texture, ensuring lasting comfort. They are foldable and stretchable, which allows you to find the perfect fit without constraint and excellent durability. Wireless Headphones is the best Choice for Travel, Sport and Every day use by Unisex Kids, Teens and Adults.",
      "【ADJUSTABLE AND PORTABLE DESIGN】: Adjustable headband are ergonomic design and ultra-soft ear cups, Bluetooth headphones provide a comfortable around-ear fit. Foldable design makes it easy for you to take the headphones whenever they go. Perfect for on-line courses, classes, movies, etc.",
      "【LONG BATTERY LIFE & DUAL MODE】: Wireless Headphones Over Ear are Rechargeable. 500mAh battery, 20hours of music time, 2.5 hours Fast Charing. After 30 hours of playtime, you can switch to wired mode and enjoy your music NON-STOP. You do not need to worry about power shortage problem for the long travel. By choosing PRTUKYT, You are covered with 12 Months warranty and 100% Customer satisfaction."
    ],
    sourceUrl: "https://www.amazon.com/Wireless-Headphones-Foldable-Headsets-Earbuds/dp/B08VNFD8FS"
  },
  {
    name: "Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones",
    image: "https://images-na.ssl-images-amazon.com/images/I/61%2BWYAjltpL._AC_SX679_.jpg",
    category: "Headphones",
    price: "11999",
    highlights: [
      "Hi-Res Certified Music: Hear every detail of your favorite songs thanks to Life Q30’s 40mm drivers. The highly-flexible silk diaphragms reproduce thumping bass and crisp treble that extends up to 40kHz for improved clarity.",
      "Advanced Noise Cancellation Technology: Maintain your focus with Life Q30’s hybrid active noise cancellation. Dual noise-detecting microphones pick up and filter out up to 95% of low-frequency ambient sound to ensure nothing distracts you from your music.",
      "Ultimate Noise Cancellation Experience: Customize Life Q30’s noise cancellation with 3 modes—Transport minimizes airplane engine noise, Outdoor reduces traffic and wind, and Indoor dampens the sound of busy offices with people talking in the background.",
      "40-Hour Playtime: Life Q30 active noise cancelling headphones play up to 40 hours of music in noise cancelling mode. Standard mode extends the playtime to 60 hours, while a short 5-minute charge gives you 4 hours of listening.",
      "Pressure-Free Comfort: Life Q30 active noise cancelling headphones have ultra-soft protein leather earcups with memory foam padding to fit snugly over your ears. The lightweight build also ensures they’re comfortable for long listening sessions."
    ],
    sourceUrl: "https://www.amazon.com/Soundcore-Cancelling-Headphones-Comfortable-Bluetooth/dp/B08HMWZBXC"
  },
]

faker.seed(1024);
const products = musicProducts.map((item) => ({
  name: item.name,
  image: item.image,
  price: item.price,
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  rating: faker.finance.amount(1, 5, 1),
  discount: faker.random.arrayElement([25, 50, 70, 0]),
  category: item.category,
  highlights: item.highlights,
  sourceUrl: item.sourceUrl
}));

module.exports = products;