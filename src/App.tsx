/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  Phone,
  MapPin,
  MessageCircle,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  Sprout,
  Scale,
  Building2,
  Truck,
  CheckCircle2,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Navigation,
  ShieldCheck,
  Sparkles,
  BookOpen,
  HelpCircle,
  Droplets,
  Flame,
  Maximize2,
  Leaf,
  Trees,
  Sun,
  CookingPot,
  Recycle,
  RotateCcw,
  Clock
} from 'lucide-react';

// Complete Bilingual Content Dictionary
const T: Record<string, Record<string, string>> = {
  en: {
    eyebrow: "Established 2008 · Erode, Tamil Nadu",
    n1: "About",
    n2: "Products",
    n3: "Farmers & Buyers",
    n4: "Process",
    n_lifecycle: "Life Cycle",
    n5: "FAQ",
    n6: "Contact",
    h1: "Sri Kuzhali Traders: <em>a fair rate for every farmer</em>, quality for every buyer",
    hp: "For over a decade and a half, Sri Kuzhali Traders has bought coconuts directly from farmers, processed them with care, made copra, and supplied buyers across North India.",
    c1: "I want to sell coconuts",
    c2: "I want to buy",
    qct: "Talk to us today",
    qcl: "Erode, Tamil Nadu",
    at: "Trading coconuts since 2008",
    al: "We started in Erode with a simple promise: pay farmers fairly and deliver buyers quality they can rely on. Today we buy, process, dry and dispatch coconut and copra under one roof.",
    a1t: "Direct from farms",
    a1d: "We purchase straight from coconut growers, so farmers get a clear price and buyers get fresh stock.",
    a2t: "Honest weighing",
    a2d: "Open weighing and open rates. You see the number before you agree.",
    a3t: "In-house processing",
    a3d: "Sorting, grading and copra drying are done by our own team, which keeps quality consistent.",
    a4t: "Long-distance supply",
    a4d: "Packed and loaded for the journey from Tamil Nadu to markets in North India.",
    st1: "years in coconut trading",
    st2: "core products: coconut and copra",
    st3: "team from farm purchase to dispatch",
    pt: "Our products",
    tp1: "Coconut",
    tp2: "Copra",
    p1t: "Processed coconut",
    p1d: "Mature coconuts collected from farms around Erode, sorted by size and quality and prepared for bulk sale and long transport.",
    p1a: "Bought directly from farmers",
    p1b: "Sorted and graded before dispatch",
    p1c: "Packed for long-distance loads to North India",
    p1d2: "Supplied to traders and wholesalers in bulk",
    pc1: "Ask for coconut rates",
    p2t: "Copra",
    p2d: "Copra is dried coconut kernel, the raw material for coconut oil. We make it ourselves, so we control the drying and the quality.",
    p2a: "Made from our own processed coconuts",
    p2b: "Dried so it stores and travels well",
    p2c: "Suited for oil mills and bulk buyers",
    p2d2: "Current stock and rates on request",
    pc2: "Ask for copra rates",
    ft: "Who are you?",
    tf1: "I am a farmer",
    tf2: "I am a buyer",
    f1t: "Fair price",
    f1d: "We quote the current market-based rate openly. No hidden deductions.",
    f2t: "No middlemen",
    f2d: "Sell straight to the trader who processes the coconut.",
    f3t: "Simple process",
    f3d: "Call us, tell us the quantity and place, agree the rate, and we handle the rest.",
    fc: "Tell us about your harvest",
    fcall: "Call now",
    fcall2: "Call now",
    b1t: "Reliable supply",
    b1d: "Regular coconut and copra supply from Tamil Nadu to North India.",
    b2t: "Consistent quality",
    b2d: "Graded and processed by one team, so each load matches the last.",
    b3t: "Quick response",
    b3d: "Send your requirement and we reply with availability and rates.",
    bc: "Send your requirement",
    mt: "From Erode across India",
    md: "Our loads travel from Erode to buyers in Karnataka, Telangana, Kolkata, Ahmedabad, Mumbai and beyond. Move your mouse or finger over the map to turn it.",
    prt: "From farm to dispatch",
    prl: "Tap a step to see what happens.",
    s1: "Buying",
    s1d: "Coconuts are collected from farmers, weighed in front of them and paid at the agreed rate.",
    s2: "Processing",
    s2d: "The stock is sorted and graded. Good coconuts are readied for sale as coconut.",
    s3: "Copra making",
    s3d: "Part of the stock is dried into copra under our own supervision.",
    s4: "Dispatch",
    s4d: "Loads are packed and sent to buyers in North India as per the order.",
    qt: "Common questions",
    q1: "Where are you located?",
    a1: "We operate from Erode, Tamil Nadu. Use the map button in the contact section to find us.",
    q2: "Can farmers sell small quantities?",
    a2: "Please call or message us with your quantity and village. We will tell you if we can collect it.",
    q3: "Do you supply outside Tamil Nadu?",
    a3: "Yes. We supply processed coconut and copra to buyers across North India.",
    q4: "How do I get today's rate?",
    a4: "Rates change with the market, so we share them by call or WhatsApp. Use the form below or call 9788626461.",
    et: "Send an enquiry on WhatsApp",
    el: "Fill this in and your message opens in WhatsApp, ready to send.",
    l1: "I want to",
    o1: "Sell my coconuts",
    o2: "Buy coconut",
    o3: "Buy copra",
    l2: "Quantity & Quality",
    ph1: "Example: 5 tonnes / Grade A",
    l3: "Customer Name",
    l4: "Village / city",
    sb: "Open in WhatsApp",
    ct: "Visit or call us",
    ctl: "Call or message us about rates, stock and visits.",
    c3: "Call us",
    cw: "WhatsApp",
    c4: "Chat on WhatsApp",
    c5: "Find us",
    c6: "Sri Kuzhali Traders, Erode, Tamil Nadu",
    cp: "Copy",
    cpd: "Copied",
    bsy: "Since 2008",
    bcs: "Coconut & copra traders",
    back: "← Back to home",
    xst: "Sell your coconuts to us",
    xsl: "Fill in your details. Your message opens in WhatsApp and we will call you back with today's rate.",
    xs2: "Contact number",
    xs3: "Place / village",
    xs4: "Location (optional)",
    xp4: "Google Maps link or landmark",
    xs5: "Number of coconuts",
    xp5: "Example: 10000",
    xsQuality: "Coconut Quality / Variety",
    xpQuality: "Example: Semi-husked, Well-matured / Tall variety",
    xs6: "Expected rate (₹ per coconut)",
    xp6: "Example: 28",
    xloc: "Use my current location",
    sendwa: "Send on WhatsApp",
    xbt: "Send us your requirement",
    xbl: "Tell us what you need. Your message opens in WhatsApp and we will reply with availability and rates.",
    xb2: "Company name",
    xb4: "City / state",
    xb5: "Product",
    o2b: "Coconut",
    o3b: "Copra",
    xb6: "Required quantity",
    xp7: "Example: 10 tonnes",
    xbQuality: "Quality / Grade Specification",
    xpBQuality: "Example: Grade A (600g+) / Milling copra (<6% moisture)",
    xb7: "Price you can offer (₹)",
    xp8: "Example: 30 per coconut",
    ft2: "Coconut and copra traders in Erode since 2008"
  },
  ta: {
    eyebrow: "2008 முதல் · ஈரோடு, தமிழ்நாடு",
    n1: "எங்களைப் பற்றி",
    n2: "பொருட்கள்",
    n3: "விவசாயிகள் & வாங்குபவர்",
    n4: "செயல்முறை",
    n_lifecycle: "வாழ்க்கைச் சுழற்சி",
    n5: "கேள்விகள்",
    n6: "தொடர்பு",
    h1: "ஸ்ரீ குழலி டிரேடர்ஸ்: <em>ஒவ்வொரு விவசாயிக்கும் நியாயமான விலை</em>, ஒவ்வொரு வாங்குபவருக்கும் தரம்",
    hp: "பதினாறு ஆண்டுகளுக்கு மேலாக, ஸ்ரீ குழலி டிரேடர்ஸ் விவசாயிகளிடம் நேரடியாக தேங்காய் வாங்கி, பதப்படுத்தி, கொப்பரை தயாரித்து, வட இந்தியா முழுவதும் விநியோகிக்கிறது.",
    c1: "நான் தேங்காய் விற்க வேண்டும்",
    c2: "நான் வாங்க வேண்டும்",
    qct: "இன்றே எங்களிடம் பேசுங்கள்",
    qcl: "ஈரோடு, தமிழ்நாடு",
    at: "2008 முதல் தேங்காய் வியாபாரம்",
    al: "விவசாயிக்கு நியாயமான விலை, வாங்குபவருக்கு நம்பகமான தரம் என்ற உறுதியுடன் ஈரோட்டில் தொடங்கினோம். இன்று தேங்காய் மற்றும் கொப்பரையை ஒரே இடத்தில் வாங்கி, பதப்படுத்தி, உலர்த்தி அனுப்புகிறோம்.",
    a1t: "பண்ணையிலிருந்து நேரடி",
    a1d: "தேங்காய் விவசாயிகளிடம் நேரடியாக வாங்குகிறோம். விவசாயிக்கு தெளிவான விலை, வாங்குபவருக்கு புதிய சரக்கு.",
    a2t: "நேர்மையான எடை",
    a2d: "வெளிப்படையான எடை, வெளிப்படையான விலை. ஒப்புக்கொள்ளும் முன் எண்ணை நீங்களே பார்க்கலாம்.",
    a3t: "சொந்த பதப்படுத்தல்",
    a3d: "தரம் பிரித்தல், கொப்பரை உலர்த்துதல் அனைத்தும் எங்கள் குழுவே செய்வதால் தரம் ஒரே மாதிரி இருக்கும்.",
    a4t: "நீண்ட தூர விநியோகம்",
    a4d: "தமிழ்நாட்டிலிருந்து வட இந்திய சந்தைகளுக்கு பயணிக்க ஏற்றவாறு பேக் செய்து ஏற்றுகிறோம்.",
    st1: "ஆண்டுகள் தேங்காய் வியாபார அனுபவம்",
    st2: "முக்கிய பொருட்கள்: தேங்காய், கொப்பரை",
    st3: "கொள்முதல் முதல் அனுப்புதல் வரை ஒரே குழு",
    pt: "எங்கள் பொருட்கள்",
    tp1: "தேங்காய்",
    tp2: "கொப்பரை",
    p1t: "பதப்படுத்திய தேங்காய்",
    p1d: "ஈரோடு சுற்றுவட்டார பண்ணைகளில் சேகரித்த முதிர்ந்த தேங்காய்கள், அளவு மற்றும் தரத்தின்படி பிரித்து மொத்த விற்பனைக்கு தயாராக்கப்படுகின்றன.",
    p1a: "விவசாயிகளிடம் நேரடியாக வாங்கியது",
    p1b: "அனுப்பும் முன் தரம் பிரிக்கப்படுகிறது",
    p1c: "வட இந்தியாவிற்கு நீண்ட தூர லோடுக்கு பேக்கிங்",
    p1d2: "வியாபாரிகள், மொத்த விற்பனையாளர்களுக்கு மொத்தமாக",
    pc1: "தேங்காய் விலை கேளுங்கள்",
    p2t: "கொப்பரை",
    p2d: "கொப்பரை என்பது உலர்ந்த தேங்காய் பருப்பு, தேங்காய் எண்ணெய்க்கான மூலப்பொருள். நாங்களே தயாரிப்பதால் உலர்த்தல் மற்றும் தரத்தை கட்டுப்படுத்துகிறோம்.",
    p2a: "எங்கள் சொந்த பதப்படுத்திய தேங்காயிலிருந்து தயாரிப்பு",
    p2b: "நன்கு உலர்த்தப்பட்டு சேமிக்கவும் அனுப்பவும் ஏற்றது",
    p2c: "எண்ணெய் ஆலைகள், மொத்த வாங்குபவர்களுக்கு ஏற்றது",
    p2d2: "தற்போதைய இருப்பு, விலை கேட்டால் தெரிவிக்கப்படும்",
    pc2: "கொப்பரை விலை கேளுங்கள்",
    ft: "நீங்கள் யார்?",
    tf1: "நான் விவசாயி",
    tf2: "நான் வாங்குபவர்",
    f1t: "நியாயமான விலை",
    f1d: "இன்றைய சந்தை அடிப்படையிலான விலையை வெளிப்படையாக சொல்வோம். மறைமுக கழிவு இல்லை.",
    f2t: "இடைத்தரகர் இல்லை",
    f2d: "தேங்காயை பதப்படுத்தும் வியாபாரியிடமே நேரடியாக விற்கலாம்.",
    f3t: "எளிய நடைமுறை",
    f3d: "அழையுங்கள், அளவு மற்றும் இடம் சொல்லுங்கள், விலை ஒப்புக்கொள்ளுங்கள், மற்றதை நாங்கள் பார்த்துக்கொள்கிறோம்.",
    fc: "உங்கள் விளைச்சல் பற்றி சொல்லுங்கள்",
    fcall: "இப்போது அழைக்க",
    fcall2: "இப்போது அழைக்க",
    b1t: "நம்பகமான விநியோகம்",
    b1d: "தமிழ்நாட்டிலிருந்து வட இந்தியாவிற்கு தொடர்ந்து தேங்காய், கொப்பரை விநியோகம்.",
    b2t: "ஒரே மாதிரி தரம்",
    b2d: "ஒரே குழு தரம் பிரித்து பதப்படுத்துவதால் ஒவ்வொரு லோடும் ஒரே தரத்தில் இருக்கும்.",
    b3t: "விரைவான பதில்",
    b3d: "உங்கள் தேவையை அனுப்புங்கள், இருப்பு மற்றும் விலையுடன் பதில் தருவோம்.",
    bc: "உங்கள் தேவையை அனுப்புங்கள்",
    mt: "ஈரோட்டிலிருந்து இந்தியா முழுவதும்",
    md: "எங்கள் லோடுகள் ஈரோட்டிலிருந்து கர்நாடகா, தெலங்கானா, கொல்கத்தா, அகமதாபாத், மும்பை மற்றும் அதற்கு அப்பாலும் உள்ள வாங்குபவர்களுக்கு செல்கின்றன. மேப்பின் மேல் மௌஸ் அல்லது விரலை நகர்த்தி திருப்பிப் பாருங்கள்.",
    prt: "பண்ணையிலிருந்து அனுப்புதல் வரை",
    prl: "ஒவ்வொரு படியையும் தொட்டு பாருங்கள்.",
    s1: "கொள்முதல்",
    s1d: "விவசாயிகளிடம் தேங்காய் சேகரித்து, அவர்கள் முன்னிலையில் எடை போட்டு ஒப்புக்கொண்ட விலையில் பணம் கொடுக்கிறோம்.",
    s2: "பதப்படுத்துதல்",
    s2d: "சரக்கு தரம் பிரிக்கப்படுகிறது. நல்ல தேங்காய்கள் விற்பனைக்கு தயாராகின்றன.",
    s3: "கொப்பரை தயாரிப்பு",
    s3d: "ஒரு பகுதி எங்கள் மேற்பார்வையில் கொப்பரையாக உலர்த்தப்படுகிறது.",
    s4: "அனுப்புதல்",
    s4d: "ஆர்டரின்படி பேக் செய்து வட இந்திய வாங்குபவர்களுக்கு அனுப்புகிறோம்.",
    qt: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    q1: "நீங்கள் எங்கே இருக்கிறீர்கள்?",
    a1: "ஈரோடு, தமிழ்நாட்டில் இயங்குகிறோம். தொடர்பு பகுதியில் உள்ள மேப் பொத்தானை பயன்படுத்துங்கள்.",
    q2: "விவசாயிகள் சிறிய அளவு விற்கலாமா?",
    a2: "அளவு மற்றும் ஊரை சொல்லி அழையுங்கள் அல்லது செய்தி அனுப்புங்கள். எடுத்துக்கொள்ள முடியுமா என்று சொல்கிறோம்.",
    q3: "தமிழ்நாட்டிற்கு வெளியே விநியோகம் உண்டா?",
    a3: "உண்டு. வட இந்தியா முழுவதும் வாங்குபவர்களுக்கு தேங்காய், கொப்பரை அனுப்புகிறோம்.",
    q4: "இன்றைய விலையை எப்படி அறிவது?",
    a4: "விலை சந்தையுடன் மாறுவதால் அழைப்பு அல்லது வாட்ஸ்அப்பில் சொல்கிறோம். கீழே உள்ள படிவத்தை பயன்படுத்துங்கள் அல்லது 9788626461 ஐ அழையுங்கள்.",
    et: "வாட்ஸ்அப்பில் விசாரணை அனுப்புங்கள்",
    el: "இதை நிரப்பினால் உங்கள் செய்தி வாட்ஸ்அப்பில் தயாராக திறக்கும்.",
    l1: "எனக்கு வேண்டியது",
    o1: "தேங்காய் விற்க",
    o2: "தேங்காய் வாங்க",
    o3: "கொப்பரை வாங்க",
    l2: "அளவு & தரம் (Quantity / Quality)",
    ph1: "உதா: 5 டன் / முதல் தரம்",
    l3: "வாடிக்கையாளர் பெயர் (Customer Name)",
    l4: "ஊர் / நகரம்",
    sb: "வாட்ஸ்அப்பில் திற",
    ct: "நேரில் வாருங்கள் அல்லது அழையுங்கள்",
    ctl: "விலை, இருப்பு மற்றும் நேரில் வருகை பற்றி அழையுங்கள் அல்லது செய்தி அனுப்புங்கள்.",
    c3: "அழைக்க",
    cw: "வாட்ஸ்அப்",
    c4: "வாட்ஸ்அப்பில் பேசுங்கள்",
    c5: "எங்களை கண்டறிய",
    c6: "ஸ்ரீ குழலி டிரேடர்ஸ், ஈரோடு, தமிழ்நாடு",
    cp: "நகலெடு",
    cpd: "நகலெடுக்கப்பட்டது",
    bsy: "2008 முதல்",
    bcs: "தேங்காய் & கொப்பரை வியாபாரிகள்",
    back: "← முகப்புக்கு திரும்ப",
    xst: "உங்கள் தேங்காயை எங்களுக்கு விற்கவும்",
    xsl: "விவரங்களை நிரப்புங்கள். உங்கள் செய்தி வாட்ஸ்அப்பில் திறக்கும், இன்றைய விலையுடன் உங்களை அழைப்போம்.",
    xs2: "தொடர்பு எண்",
    xs3: "ஊர் / கிராமம்",
    xs4: "இடம் (விருப்பம்)",
    xp4: "கூகுள் மேப்ஸ் லிங்க் அல்லது அடையாளம்",
    xs5: "தேங்காய் எண்ணிக்கை",
    xp5: "உதா: 10000",
    xsQuality: "தேங்காய் தரம் (Quality / Variety)",
    xpQuality: "உதா: மட்டை உரித்தது / முற்றிய நெட்டுக் காய்",
    xs6: "எதிர்பார்க்கும் விலை (ஒரு தேங்காய்க்கு ₹)",
    xp6: "உதா: 28",
    xloc: "என் தற்போதைய இடத்தை பயன்படுத்து",
    sendwa: "வாட்ஸ்அப்பில் அனுப்பு",
    xbt: "உங்கள் தேவையை எங்களுக்கு அனுப்புங்கள்",
    xbl: "உங்களுக்கு என்ன தேவை என்று சொல்லுங்கள். உங்கள் செய்தி வாட்ஸ்அப்பில் திறக்கும், இருப்பு மற்றும் விலையுடன் பதில் தருவோம்.",
    xb2: "நிறுவனத்தின் பெயர்",
    xb4: "நகரம் / மாநிலம்",
    xb5: "பொருள்",
    o2b: "தேங்காய்",
    o3b: "கொப்பரை",
    xb6: "தேவையான அளவு",
    xp7: "உதா: 10 டன்",
    xbQuality: "தேவையான தரம் (Quality Specification)",
    xpBQuality: "உதா: கிரேடு ஏ (600g+) / கொப்பரை (<6% ஈரப்பதம்)",
    xb7: "நீங்கள் தரக்கூடிய விலை (₹)",
    xp8: "உதா: ஒரு தேங்காய்க்கு 30",
    ft2: "2008 முதல் ஈரோட்டில் தேங்காய் & கொப்பரை வியாபாரிகள்"
  }
};

// SVG Map Path for India
const INDIA_MAP_PATH = "M30.0,276.5L33.5,274.9L39.0,274.6L39.9,268.4L52.4,269.2L56.4,271.1L67.5,266.7L68.4,266.6L68.9,269.1L71.1,269.8L76.4,266.9L75.2,263.9L76.5,261.8L70.1,248.7L70.0,244.4L63.8,243.7L61.2,240.0L62.0,229.3L51.6,225.1L52.1,218.2L57.9,211.8L61.9,205.0L66.1,201.8L69.7,203.4L72.4,207.6L89.7,202.9L97.3,188.5L107.1,182.3L114.0,166.6L120.9,163.7L122.9,161.3L122.4,157.3L129.5,148.7L134.2,146.0L132.4,143.2L133.6,137.9L132.3,133.3L133.0,131.3L145.4,123.7L143.9,120.7L136.7,119.1L128.8,112.5L120.8,110.6L114.3,102.9L112.7,91.3L117.6,71.8L122.4,63.9L124.0,52.0L140.1,30.0L156.2,31.0L172.4,40.1L185.2,58.0L198.1,56.0L209.4,58.0L223.9,63.9L225.5,79.6L219.1,89.4L208.1,118.3L203.3,121.0L199.8,116.4L194.8,117.4L196.5,123.7L200.3,128.6L199.7,132.7L201.4,135.0L200.4,140.6L206.3,139.1L213.7,147.7L217.4,147.3L223.1,150.6L223.8,154.8L230.5,157.0L236.5,161.0L237.0,162.4L234.3,162.8L227.2,170.4L221.8,187.0L227.4,191.1L230.2,190.4L250.5,204.7L252.7,203.8L260.2,208.2L263.8,208.2L264.7,211.0L273.7,213.7L276.2,212.0L282.4,213.6L286.6,211.5L295.0,215.0L296.2,219.7L305.1,224.9L311.7,223.5L314.0,227.6L317.5,226.7L328.7,230.6L333.7,228.4L334.9,230.6L338.1,232.0L340.1,230.8L349.5,231.6L352.2,225.4L349.3,218.0L352.0,206.8L351.2,204.0L359.6,200.6L362.5,202.1L363.2,204.6L361.7,211.0L363.9,214.7L361.5,217.2L363.4,221.1L368.1,223.7L371.1,223.2L378.0,225.8L383.8,224.9L387.4,222.4L393.7,224.5L402.6,224.2L404.8,222.8L408.8,224.0L414.9,222.7L413.9,218.6L415.4,215.2L413.9,212.3L409.9,212.4L407.5,210.3L408.1,206.6L413.7,207.2L422.9,204.5L425.1,202.5L425.3,199.6L432.1,194.9L434.2,190.7L442.4,188.9L456.3,178.1L458.6,180.7L468.0,183.3L470.7,180.1L479.1,175.7L482.3,179.4L484.2,179.3L480.5,182.4L480.7,185.3L485.5,183.0L487.8,188.3L483.0,194.7L484.7,195.5L488.2,193.8L491.0,195.5L495.8,195.5L499.8,198.3L500.0,203.4L492.6,209.8L496.2,218.3L493.9,218.0L490.3,214.4L481.6,215.7L464.4,227.7L463.2,232.2L464.5,237.7L461.5,243.8L455.6,250.6L455.2,252.4L457.7,255.4L448.3,276.2L435.4,272.9L436.8,279.6L436.0,289.2L435.1,291.0L432.8,291.0L431.4,296.5L432.6,305.0L430.9,305.8L429.6,308.9L425.1,306.7L423.3,309.4L421.9,297.1L419.8,292.8L418.0,279.6L412.9,279.5L413.1,282.7L410.1,286.5L410.0,290.6L407.9,291.9L404.9,288.0L403.9,288.1L403.8,290.3L403.0,289.7L400.5,280.0L403.8,272.3L412.1,270.5L413.2,267.7L415.7,266.8L417.7,258.4L421.2,258.9L421.6,257.3L414.9,253.3L388.9,253.5L379.1,251.1L378.9,239.5L376.5,234.6L375.1,235.1L374.5,238.3L371.6,238.3L368.7,236.5L366.0,231.1L364.4,231.7L365.2,233.9L362.9,233.9L355.5,228.3L356.7,231.8L352.0,236.9L350.9,240.4L357.7,246.7L362.0,247.5L364.9,251.7L362.8,253.1L356.9,252.9L354.6,258.4L352.0,257.8L349.9,262.9L351.9,265.4L361.3,269.1L358.7,279.7L361.5,283.9L361.3,287.1L364.6,288.3L363.3,290.8L366.5,304.2L366.1,310.1L364.9,310.1L366.5,315.0L364.2,315.0L363.4,313.4L361.6,316.2L360.7,313.6L361.5,308.9L359.9,306.9L359.0,314.9L356.8,315.7L354.2,313.2L353.7,315.5L351.6,315.3L350.5,314.3L352.7,306.6L348.6,302.5L349.0,304.6L352.1,306.9L348.7,312.0L344.4,315.0L335.1,317.6L331.2,322.2L333.1,331.5L329.5,338.1L323.4,343.4L321.3,342.6L322.4,343.7L320.8,345.3L310.5,348.8L309.2,348.7L310.3,347.7L309.3,345.4L305.2,347.7L304.2,350.4L307.2,349.0L308.4,349.9L297.6,358.4L286.8,372.6L279.6,376.4L272.2,384.2L258.7,392.9L257.4,395.6L258.7,398.1L257.1,401.9L249.1,405.8L241.4,405.6L236.4,415.3L234.0,415.2L233.3,413.5L231.1,413.0L225.4,416.1L221.5,426.8L223.6,436.7L222.5,441.1L225.6,453.2L223.2,449.4L221.7,451.2L226.2,455.2L224.4,466.3L218.4,477.9L216.7,484.7L217.4,486.8L215.7,489.0L217.5,488.6L218.0,489.7L218.1,505.3L209.6,506.3L208.7,510.0L203.6,517.6L203.3,519.5L204.9,521.4L211.2,523.7L204.2,522.5L195.3,525.2L191.5,528.7L189.5,536.9L180.7,541.9L173.4,538.0L165.1,528.5L161.5,519.5L160.2,511.7L161.8,513.4L162.3,518.1L163.6,518.1L161.8,511.8L159.8,510.2L151.8,488.2L143.3,476.8L139.2,468.4L130.2,436.4L123.2,426.8L120.8,421.4L122.9,421.4L120.3,418.4L121.3,417.0L118.9,416.1L113.4,403.6L110.4,384.0L105.9,366.7L108.0,360.3L107.4,358.0L105.2,361.0L104.7,359.2L104.9,355.5L107.7,355.9L104.5,354.4L102.6,346.4L106.2,331.9L104.9,324.3L103.0,323.2L101.9,319.9L103.6,318.2L101.7,318.3L109.7,313.3L100.5,314.2L103.1,309.5L100.2,309.4L100.7,306.2L104.8,304.9L94.7,304.3L96.7,305.7L96.2,307.4L92.4,312.1L95.2,313.7L95.9,317.1L92.1,323.6L76.1,330.8L71.2,330.8L67.4,329.1L60.1,323.2L43.0,303.9L44.3,301.4L47.9,304.0L62.4,299.0L67.8,291.5L67.5,290.0L65.0,292.6L61.5,292.5L54.2,295.8L47.3,294.2L37.7,288.2L34.1,281.5L39.9,276.6L31.1,281.1ZM444.5,562.2L443.5,563.5L441.6,559.4L440.7,559.2L440.7,557.2L441.2,556.4L443.4,555.6L444.0,556.1L445.1,559.8ZM441.9,553.6L440.4,555.2L439.7,554.2L440.0,553.6L441.3,552.8ZM432.4,539.1L432.9,539.7L432.0,539.6L431.2,538.7L431.7,537.5ZM437.3,545.2L436.0,545.2L435.2,543.8L435.5,543.1L436.2,542.9L437.1,544.0ZM438.8,542.2L437.8,542.8L437.6,541.4L437.5,540.4L438.1,539.5L438.7,539.7L438.4,540.6ZM422.1,501.5L421.6,502.0L420.0,501.6L420.0,497.6L422.3,495.8L423.3,499.0ZM425.2,487.9L424.4,488.2L423.6,487.8L424.2,487.2L424.4,485.8L425.1,486.6ZM425.7,485.4L425.3,485.8L424.8,485.3L422.6,479.8L423.8,478.6L424.9,474.6L426.7,474.0L426.6,472.7L425.6,471.8L425.6,468.8L426.3,466.7L425.9,464.9L427.0,463.2L427.8,455.3L428.9,453.2L431.2,452.2L431.4,454.6L430.4,455.7L431.3,457.1L430.9,458.7L428.3,462.2L429.6,463.7L430.0,468.9L429.1,470.3L428.0,470.5L428.0,474.7L426.0,477.8L426.9,479.8ZM430.4,477.1L431.2,479.4L429.9,478.4L429.4,477.7ZM425.6,463.5L425.1,464.5L425.2,461.9L425.8,462.1Z";

// Geographic Mercator Projection for Map of India
const SCALE = 923.141;
const TX = -1068.26;
const TY = 672.49;
const MAP_W = 530;
const MAP_H = 594;

function mercatorProj(lon: number, lat: number): [number, number] {
  return [
    TX + SCALE * lon * (Math.PI / 180),
    TY - SCALE * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
  ];
}

function BrandSignature({ text }: { text?: string }) {
  return (
    <div className="section-brand-signature">
      <div className="brand-logo-frame-mini" aria-hidden="true">
        <img src="/sriKuzhali.svg" alt="" className="brand-logo-asset-mini" />
      </div>
      <span>SRI KUZHALI TRADERS</span>
      {text && <span className="opacity-70">· {text}</span>}
    </div>
  );
}

const LIFECYCLE_STAGES = [
  {
    code: '01',
    phaseEn: 'Cultivation',
    phaseTa: 'பயிரிடுதல்',
    titleEn: 'The Beginning: Seed to Sapling',
    titleTa: 'தொடக்க நிலை: விதை முதல் கன்று வரை',
    subtitleEn: 'Planting, germination & early nursery growth',
    subtitleTa: 'விதைக்காய் தேர்வு, முளைப்பு & நர்சரி வளர்ச்சி',
    timelineEn: '0 — 6 Months',
    timelineTa: '0 — 6 மாதங்கள்',
    storyEn: 'Every grand coconut palm begins with a mature seed nut (11–12 months old) selected from high-yielding, 25-plus-year-old mother trees. Placed horizontally or angled in nursery beds with its stalk end upward, the embryo drinks the sweet coconut water inside, swells a spongy nutrient-rich haustorium (பொங்கு / coconut apple), and pierces through the soft germination pore ("eye"). Well-drained sandy loam or alluvial soil, tropical warmth (27°C–35°C), gentle sunlight, and controlled moisture nurture the first shoot and vigorous bifid leaves within 60 to 90 days.',
    storyTa: 'ஒவ்வொரு சிறந்த தென்னையும் அதிக காய்ப்புத் திறன் கொண்ட 25+ வயதுடைய தாய் மரத்திலிருந்து தேர்ந்தெடுக்கப்பட்ட முதிர்ந்த விதைக்காயிலிருந்தே (11-12 மாதங்கள்) தொடங்குகிறது. நாற்றுப் பாத்திகளில் காய் கிடைமட்டமாக அல்லது சற்று சாய்வாக நடப்படுகிறது. மட்டையின் உள்ளே இருக்கும் கரு, தேங்காய் நீரை உட்கொண்டு சத்துமிக்க பொங்கு (spongy haustorium) உருவாகி, மென்மையான முளைக்கண் வழியாக குருத்தாக வெளிவருகிறது. வடிகால் வசதியுள்ள மணற்பாங்கான செம்மண், மிதமான வெயில், போதிய ஈரப்பதம் ஆகியவை 60 முதல் 90 நாட்களில் பசுமையான முதல் இலைகள் மற்றும் ஆழமான வேர்கள் செழித்து வளர உதவுகின்றன.',
    specsEn: [
      { label: 'Seed Nut Selection', val: '11–12 Month Mature Nut', desc: 'Heavy weight, clear sloshing water sound, uniform oval shape free of cracks.' },
      { label: 'Ideal Soil Profile', val: 'Sandy Loam & Alluvial', desc: 'pH 5.5–8.0 with deep 1.5m root permeability; prevents waterlogging.' },
      { label: 'Sunlight & Warmth', val: '27°C – 35°C Tropical', desc: '2000+ hours of annual sunshine; filtered shade during initial germination.' },
      { label: 'First Shoot & Roots', val: 'Haustorium Nutrition', desc: 'Nut supplies food until the first 4–6 leaves start independent photosynthesis.' }
    ],
    specsTa: [
      { label: 'விதைக்காய் தேர்வு', val: '11–12 மாத முதிர்ந்த காய்', desc: 'நன்கு குலுங்கும் நீர் ஒலி, அதிக எடை, சீரான வடிவம் மற்றும் பூச்சி தாக்காத காய்.' },
      { label: 'மண் வளம்', val: 'வண்டல் & மணல் கலந்த செம்மண்', desc: 'pH 5.5–8.0, 1.5 மீ ஆழம் வரை வேர் ஊடுருவக்கூடிய வடிகால் வசதி.' },
      { label: 'வெப்பம் & சூரிய ஒளி', val: '27°C – 35°C வெப்பமண்டலம்', desc: 'ஆண்டுக்கு 2000+ மணிநேர சூரிய வெளிச்சம்; தொடக்க நிலையில் மிதமான நிழல்.' },
      { label: 'முதல் குருத்து & வேர்', val: 'பொங்கு ஊட்டச்சத்து', desc: 'முதல் 4–6 இலைகள் வெளிவந்து தானாக ஒளிச்சேர்க்கை செய்யும் வரை பருப்பே உணவு.' }
    ]
  },
  {
    code: '02',
    phaseEn: 'Growth',
    phaseTa: 'வளர்ச்சி',
    titleEn: 'Growing Toward the Sky',
    titleTa: 'வானோக்கி வளர்தல்: இளம் கன்றிலிருந்து பெருமரம்',
    subtitleEn: '3–10 years, depending on variety',
    subtitleTa: '3–10 ஆண்டுகள் (ரகங்களைப் பொறுத்து)',
    timelineEn: '3 — 10 Years',
    timelineTa: '3 — 10 ஆண்டுகள்',
    storyEn: 'Transplanted into open groves, the young palm rapidly thickens into a stout solitary trunk marked with distinctive ring-shaped leaf scars. The palm expands an architectural crown of 25 to 35 pinnate fronds, each spanning up to 6 meters. Dwarf varieties (குட்டை ரகங்கள்) mature rapidly and begin bearing in about 3 to 4 years, whereas tall varieties (நெட்டை ரகங்கள்) commonly take 6 to 10 years to reach full maturity. Cultivar genetics, soil nutrient management, and year-round irrigation dictate timing, blessing farmers with a towering tree that yields for over 80 years.',
    storyTa: 'தோப்பில் நடப்பட்ட இளம் தென்னங்கன்று வானை நோக்கி நிமிர்ந்து வளர்கிறது. உதிர்ந்த மட்டைகள் தண்டின் மீது வட்டமான வளையத் தழும்புகளை ஏற்படுத்துகின்றன. மரத்தின் உச்சியில் 25 முதல் 35 பிரம்மாண்டமான தென்னை ஓலைகள் குடைபோல விரிகின்றன. சௌகாட், மலாயன் போன்ற குட்டை ரகங்கள் 3 முதல் 4 ஆண்டுகளிலேயே காய்க்கத் தொடங்குகின்றன; ஈரோடு மற்றும் கொங்கு மண்டலத்தில் விளையும் பாரம்பரிய நெட்டை ரகங்கள் முழு வளர்ச்சி அடைய 6 முதல் 10 ஆண்டுகள் எடுத்துக்கொண்டு, 80 முதல் 100 ஆண்டுகள் வரை தொடர்ந்து அபரிமிதமான விளைச்சல் தருகின்றன.',
    specsEn: [
      { label: 'Dwarf Cultivars', val: 'Bears in 3 — 4 Years', desc: 'Compact height (5–8m), sweet tender water, early commercial return (Chowghat / Malayan).' },
      { label: 'Tall Cultivars', val: 'Bears in 6 — 10 Years', desc: 'Grand canopy (20–30m), 80+ yr lifespan, heavy copra yield (West Coast & East Coast Tall).' },
      { label: 'Root Network', val: '4,000–7,000 Roots', desc: 'Fibrous adventitious root system spread up to 6m, anchoring firmly against monsoons.' },
      { label: 'Canopy Density', val: '25 — 35 Arching Fronds', desc: 'Pinnate leaves producing constant photosynthetic energy for monthly flowering.' }
    ],
    specsTa: [
      { label: 'குட்டை ரகங்கள்', val: '3 — 4 ஆண்டுகளில் காய்ப்பு', desc: 'குறைந்த உயரம் (5–8 மீ), சுவையான இளநீர், விரைவான விளைச்சல் (சௌகாட் / மலாயன்).' },
      { label: 'நெட்டை ரகங்கள்', val: '6 — 10 ஆண்டுகளில் காய்ப்பு', desc: 'உயர்ந்த மரம் (20–30 மீ), 80+ ஆண்டுகள் ஆயுள், தடிமனான எண்ணெய் கொப்பரை.' },
      { label: 'வேரமைப்பு', val: '4,000–7,000 சல்லி வேர்கள்', desc: '6 மீட்டர் சுற்றளவுக்கு பரவி, பலத்த காற்று மற்றும் மழையிலும் மரத்தை உறுதியாக தாங்கும்.' },
      { label: 'மகுட ஓலைகள்', val: '25 — 35 விரிந்த மட்டைகள்', desc: 'ஒவ்வொரு மாதமும் புதிய பாளை உருவாகத் தேவையான ஒளிச்சேர்க்கை ஆற்றலைத் தருகின்றன.' }
    ]
  },
  {
    code: '03',
    phaseEn: 'Harvesting',
    phaseTa: 'அறுவடை',
    titleEn: 'Flowering, Fruiting & Harvest',
    titleTa: 'பூத்தல், காய்த்தல் & அறுவடை',
    subtitleEn: 'Fruit development & timing for tender vs copra nuts',
    subtitleTa: 'பாளை வெடித்தல், இளநீர் & முற்றிய தேங்காய் அறுவடை',
    timelineEn: '11 — 12 Months per Nut',
    timelineTa: '11 — 12 மாதங்கள் முதிர்ச்சி',
    storyEn: 'Every month, a woody spathe opens to reveal a flowering spadix with thousands of sweet male blossoms and delicate female "button" flowers. Once fertilized, the buttons develop into bunches of green fruit. Tender coconuts (Elaneer) are harvested early at 6 to 7 months for their refreshing isotonic water and delicate jelly. For copra drying and golden oil, nuts are harvested at full maturity around 11 to 12 months, when moisture recedes, the fibrous husk turns golden-brown, and the white kernel reaches 65–70% oil concentration.',
    storyTa: 'ஒவ்வொரு மாதமும் மரத்தின் உச்சியில் பூம்பாளை வெடித்து ஆயிரக்கணக்கான ஆண் பூக்களையும், சிறிய குரும்பைகளையும் (பெண் பூக்கள்) வெளிப்படுத்துகிறது. மகரந்தச் சேர்க்கைக்குப் பின் குரும்பைகள் காயாக மாறுகின்றன. 6–7 மாதங்களில் இயற்கை தாது உப்புகள் நிறைந்த சுவையான இளநீராக அறுவடை செய்யப்படுகிறது. எண்ணெய் மற்றும் கொப்பரைக்காக, காய் 11 முதல் 12 மாதங்கள் மரத்திலேயே முற்றி, மட்டை பொன்னிறமாக மாறி, பருப்பு தடித்து 65–70% எண்ணெய் சத்து உச்சத்தை எட்டும்போது அனுபவமிக்க விவசாயிகளால் 30 முதல் 45 நாட்களுக்கு ஒருமுறை அறுவடை செய்யப்படுகிறது.',
    specsEn: [
      { label: 'Tender Coconut (Elaneer)', val: '6 — 7 Months Maturity', desc: 'Packed with natural potassium, magnesium, and enzymes; thin sweet gelatinous jelly.' },
      { label: 'Mature Copra Nut', val: '11 — 12 Months Maturity', desc: 'Thick firm white kernel, golden-brown husk, maximum oil yield for commercial milling.' },
      { label: 'Continuous Yield', val: 'Monthly Spadix Opening', desc: 'A well-watered palm produces 12–14 inflorescences and 80–120+ nuts annually.' },
      { label: 'Harvesting Art', val: 'Climbers & Pole Hooks', desc: 'Skilled climbers check bunch maturity and harvest every 30 to 45 days in Tamil Nadu.' }
    ],
    specsTa: [
      { label: 'இளநீர் பருவம்', val: '6 — 7 மாதங்கள்', desc: 'இயற்கையான பொட்டாசியம், மெக்னீசியம் நிறைந்த எலக்ட்ரோலைட் நீர் மற்றும் மென் வழுக்கை.' },
      { label: 'முற்றிய தேங்காய்', val: '11 — 12 மாதங்கள்', desc: 'தடிமனான வெள்ளை பருப்பு, பழுப்பு நிற மட்டை, ஆலைக்கான அதிகபட்ச எண்ணெய் சத்து.' },
      { label: 'தொடர் விளைச்சல்', val: 'மாதந்தோறும் பூம்பாளை', desc: 'வளமான தென்னை மரம் ஆண்டுக்கு 12–14 பாளைகள் வெடித்து 80–120+ காய்கள் தருகிறது.' },
      { label: 'பாரம்பரிய அறுவடை', val: 'மரமேறி & கொக்கி அறுவடை', desc: 'முதிர்ச்சியை சோதித்து காய்கள் சேதமடையாமல் 30–45 நாட்களுக்கு ஒருமுறை அறுவடை.' }
    ]
  },
  {
    code: '04',
    phaseEn: 'Processing',
    phaseTa: 'பதப்படுத்துதல்',
    titleEn: 'From Coconut to Golden Oil',
    titleTa: 'தேங்காயிலிருந்து தங்க நிற எண்ணெய் தயாரிப்பு',
    subtitleEn: 'Dehusking, shell removal, copra drying, pressing & filtration',
    subtitleTa: 'மட்டை உரித்தல், சிரட்டை உடைத்தல், கொப்பரை தயாரிப்பு & எண்ணெய் பிழிதல்',
    timelineEn: '24 — 72 Hours Processing',
    timelineTa: '24 — 72 மணிநேர செயல்முறை',
    storyEn: 'Sri Kuzhali Traders transforms farm-fresh mature coconuts into market-ready copra and pure golden oil. Dehusking strips the fibrous exocarp on high-tensile steel spikes; the shell is cracked into clean hemispheres; and the moist kernel is dried in clean biomass kilns and solar yards until moisture falls below 6%. The cured copra is fed into rotary expellers or wood presses to yield fragrant, golden coconut oil, which undergoes fine micro-filtration and bottling. Crucially, Virgin Coconut Oil (VCO) follows a distinct pathway: it is extracted within hours directly from fresh, raw wet coconut milk without copra drying.',
    storyTa: 'பண்ணைகளில் வாங்கிய முற்றிய தேங்காய்களை உயர்தர கொப்பரையாகவும் தூய எண்ணெயாகவும் மாற்றுவது ஸ்ரீ குழலி டிரேடர்ஸின் தனிச்சிறப்பு. எஃகு ஊசி மூலம் மட்டை உரிக்கப்பட்டு, உள் சிரட்டை சமமாக உடைக்கப்படுகிறது. ஈரப்பதம் நிறைந்த வெள்ளை பருப்பு நவீன புகை இல்லாத உலைகள் மற்றும் சூரிய ஒளி களங்களில் 6% ஈரப்பதத்திற்கும் குறைவாக நன்கு உலர்த்தப்படுகிறது. பின்னர் இந்த கொப்பரை மரச்செக்கு அல்லது ஆலையில் பிழியப்பட்டு, கசடுகள் பிரிக்கப்பட்டு, மூன்று அடுக்கு வடிகட்டப்பட்டு தங்க நிற நறுமண தேங்காய் எண்ணெயாக பாட்டிலில் அடைக்கப்படுகிறது. அதே சமயம், விர்ஜின் கோகனட் ஆயில் (VCO) உலர்த்தப்படாமல் புதிய தேங்காய் பாலிலிருந்தே நேரடியாக பிரித்தெடுக்கப்படுகிறது.',
    specsEn: [
      { label: 'Step 1: Dehusking', val: 'Steel Spike Stripping', desc: 'Separates outer fibrous husk cleanly while protecting the inner hard shell.' },
      { label: 'Step 2: Shell Removal', val: 'Hemisphere Cracking', desc: 'Splits nut into halves and drains coconut water for copra kiln preparation.' },
      { label: 'Step 3: Copra Drying', val: '<6% Moisture Kiln Curing', desc: 'Smoke-free hot-air kilns and solar drying prevent fungal contamination.' },
      { label: 'Step 4: Oil Extraction', val: 'Expeller & Cold Pressing', desc: 'Mechanical pressing expels aromatic oil, leaving protein-rich copra cake.' }
    ],
    specsTa: [
      { label: 'படி 1: மட்டை உரித்தல்', val: 'எஃகு ஊசி மூலம் உரித்தல்', desc: 'உள் சிரட்டை உடையாமல் நார் மட்டையை தனியாக பிரித்தெடுத்தல்.' },
      { label: 'படி 2: சிரட்டை உடைத்தல்', val: 'சமமாக பிளத்தல்', desc: 'தேங்காயை இரண்டு சம பாகங்களாக உடைத்து நீர் வடிக்கப்பட்டு உலர்த்தலுக்கு தயார்.' },
      { label: 'படி 3: கொப்பரை உலர்த்தல்', val: '<6% ஈரப்பத உலை உலர்த்தல்', desc: 'புகை இல்லாத சுத்தமான உலைகளில் பூஞ்சை பிடிக்காமல் உலர்த்தி தரமான கொப்பரை உருவாக்கம்.' },
      { label: 'படி 4: எண்ணெய் பிழிதல்', val: 'செக்கு & ஆலை அழுத்தம்', desc: 'உலர்ந்த கொப்பரையை அரைத்து பிழிந்து தூய வாசனைமிக்க எண்ணெய் பிரித்தெடுத்தல்.' }
    ]
  },
  {
    code: '05',
    phaseEn: 'Everyday Use',
    phaseTa: 'அன்றாட பயன்பாடு',
    titleEn: 'A Place in Every Kitchen',
    titleTa: 'ஒவ்வொரு சமையலறையிலும் ஒரு தனி இடம்',
    subtitleEn: 'Cooking oil, fresh grated coconut, coconut milk & rituals',
    subtitleTa: 'பாரம்பரிய சமையல், தூய எண்ணெய், தேங்காய்ப்பால், பூ மற்றும் வழிபாடுகள்',
    timelineEn: 'Daily Table Across India',
    timelineTa: 'தினசரி வாழ்வாதாரம்',
    storyEn: 'In Tamil Nadu, Kerala, and across India, the coconut is the lifeblood of daily home cooking and festive gastronomy. Fragrant cold-pressed coconut oil sizzles with mustard seeds and fresh curry leaves for sambar, avial, and poriyals. Freshly grated kernel creates silky morning coconut chutneys, fragrant coconut rice, and festive sweets like Thengai Burfi. First-press thick coconut milk and second-press broth lend velvety richness to curries, sodhi, and traditional payasam. On hot afternoons, tender coconut water hydrates naturally, while coconut broken at temple sanctums blesses every auspicious milestone.',
    storyTa: 'தமிழ்நாடு மற்றும் இந்தியா முழுவதும் ஒவ்வொரு சமையலறையின் ஆன்மாவாக விளங்குவது தென்னை. தாளிக்கும்போது கடுகு, கறிவேப்பிலையோடு பொரியும் தூய தேங்காய் எண்ணெய் வாசம் வீடெல்லாம் மணக்கும். சாம்பார், அவியல், பொரியல் முதல் காலை டிபன் சட்னி, தேங்காய் சாதம், பர்ஃபி வரை துருவிய தேங்காய் இன்றி சமையல் முழுமை பெறாது. அடர்த்தியான தேங்காய்ப்பால் சொதி, குருமா மற்றும் பாயாசத்திற்கு அபார சுவையைத் தருகிறது. கோடையில் தாகம் தீர்க்கும் இயற்கை இளநீரும், பூஜைகளில் உடைக்கப்படும் தேங்காயும் அன்றாட ஆன்மிக வாழ்வில் கலந்தவை.',
    specsEn: [
      { label: 'Culinary Cooking Oil', val: 'Tempering & Shallow Frying', desc: 'Distinct aroma, high heat stability, packed with heart-healthy medium-chain fats.' },
      { label: 'Fresh Grated Coconut', val: 'Chutneys, Poriyal & Rice', desc: 'Provides texture, wholesome fiber, and natural plant sweetness to everyday dishes.' },
      { label: 'Rich Coconut Milk', val: 'Curries, Sodhi & Payasam', desc: 'First and second extractions providing luscious plant-based creaminess.' },
      { label: 'Tender Coconut Water', val: 'Natural Mineral Hydration', desc: 'Nature’s sterile electrolyte beverage rich in potassium, glucose, and enzymes.' }
    ],
    specsTa: [
      { label: 'சமையல் எண்ணெய்', val: 'தாளிப்பு & பொரியல்', desc: 'அலாதியான நறுமணம், அதிக வெப்பநிலையை தாங்கும் திறன், நல்ல கொழுப்பு சத்து.' },
      { label: 'துருவிய தேங்காய்', val: 'சட்னி, அவியல் & சாதம்', desc: 'தினசரி சமையலுக்கு ஊட்டச்சத்து, நார்ச்சத்து மற்றும் இயற்கை சுவையை அளிக்கிறது.' },
      { label: 'தேங்காய்ப்பால்', val: 'குருமா, சொதி & பாயாசம்', desc: 'முதல் பால் மற்றும் இரண்டாம் பால் மூலம் தயாரிக்கப்படும் சுவையான உணவுகள்.' },
      { label: 'இளநீர் நீர்', val: 'இயற்கை எலக்ட்ரோலைட்', desc: 'தாகம் தீர்க்கும் பொட்டாசியம், குளுக்கோஸ் நிறைந்த மருத்துவக் குணம் கொண்ட பானம்.' }
    ]
  },
  {
    code: '06',
    phaseEn: 'Second Life',
    phaseTa: 'மறுவாழ்வு',
    titleEn: 'Nothing Goes to Waste',
    titleTa: 'வீணாக எதுவுமில்லை: முழுமையான மறுவாழ்வு',
    subtitleEn: 'Coir ropes, coco peat, activated carbon, shell crafts & mulch',
    subtitleTa: 'தேங்காய் நார், கொக்கோ பீட், சிரட்டை கரி, கைவினைப் பொருட்கள் மற்றும் உரம்',
    timelineEn: '100% Zero-Waste Circular Life',
    timelineTa: '100% மறுசுழற்சி & கற்பக விருட்சம்',
    storyEn: 'Known in Indian tradition as Kalpavriksha (கற்பக விருட்சம்)—the wish-fulfilling tree—every fiber of the coconut palm enjoys a valuable second life. The outer husk yields golden coir fiber spun into marine ropes, geotextiles for soil erosion, and resilient door mats. The washed coir pith becomes coco peat, an eco-friendly potting substrate that holds 800% its weight in water for greenhouse nurseries and terrace gardens. Dense coconut shells are pyrolyzed into activated carbon for advanced water purification and air filters or carved into artisan tableware. Fallen fronds thatch cooling roofs and craft broomsticks, creating a complete zero-waste cycle.',
    storyTa: 'பழங்காலம் முதலே தென்னை மரம் "கற்பக விருட்சம்" என அழைக்கப்படுகிறது. ஏனெனில் இதில் எந்த ஒரு பகுதியும் குப்பையாக வீணாவதில்லை. தேங்காய் மட்டையிலிருந்து எடுக்கப்படும் நார் கயிறுகள், மேட்கள் மற்றும் மண் அரிப்பைத் தடுக்கும் தரை விரிப்புகளாக மாறுகின்றன. அதன் துகள்கள் (கொக்கோ பீட்) 8 மடங்கு நீரைத் தக்கவைக்கும் சிறந்த மாடித் தோட்ட உரப் பொருளாக உலகெங்கும் ஏற்றுமதியாகிறது. கடினமான சிரட்டைகள் குடிநீர் மற்றும் காற்று சுத்திகரிப்புக்கான ஆக்டிவேட்டட் கார்பன் (Activated Carbon) கரியாகவும், அழகான கைவினை கிண்ணங்களாகவும் மாறுகின்றன. ஓலைகள் கூரை வேயவும், ஈர்க்கு மாறாகவும் பயன்பட்டு 100% சுற்றுச்சூழல் பாதுகாப்பை உறுதி செய்கின்றன.',
    specsEn: [
      { label: 'Coir Fiber & Ropes', val: 'Husk Byproduct', desc: 'Resilient golden fibers spun into heavy-duty maritime ropes, geotextiles, and door mats.' },
      { label: 'Coco Peat / Coir Pith', val: 'Horticultural Substrate', desc: 'High moisture-retention medium for terrace gardens, nurseries, and greenhouse farming.' },
      { label: 'Activated Carbon', val: 'Shell Pyrolysis', desc: 'Microporous carbon filters used globally for drinking water purification and air cleaning.' },
      { label: 'Artisan Shell Crafts', val: 'Eco Tableware & Bowls', desc: 'Polished shells carved into organic smoothie bowls, cutlery, buttons, and souvenirs.' },
      { label: 'Palm Fronds & Mulch', val: 'Thatch & Garden Mulch', desc: 'Woven into cooling thatched roofs, garden brooms, and weed-suppressing mulch.' },
      { label: 'Haustorium (Pongu)', val: 'Germinated Sprout Treat', desc: 'Sweet spongy nutrient-packed delicacy eaten fresh as a rare wellness superfood.' }
    ],
    specsTa: [
      { label: 'தேங்காய் நார் & கயிறு', val: 'மட்டை உபபொருள்', desc: 'உப்பு நீரிலும் அழுகாத வலிமையான கயிறுகள், கால் மிதியடிகள் மற்றும் தரை விரிப்புகள்.' },
      { label: 'கொக்கோ பீட் (Pith)', val: 'இயற்கை நர்சரி ஊடகம்', desc: '8 மடங்கு நீரை தேக்கி வைக்கும் மாடித் தோட்டம் மற்றும் நாற்று வளர்ப்பு பொருள்.' },
      { label: 'ஆக்டிவேட்டட் கார்பன்', val: 'சிரட்டை கரி சுத்திகரிப்பு', desc: 'குடிநீர், தொழிற்சாலை காற்று மற்றும் மருந்து சுத்திகரிப்புக்கான உயர்ரக கார்பன்.' },
      { label: 'கைவினைப் பொருட்கள்', val: 'இயற்கை கிண்ணங்கள்', desc: 'பாலிஷ் செய்யப்பட்ட சிரட்டை கிண்ணங்கள், கரண்டிகள் மற்றும் வீட்டு அலங்காரப் பொருட்கள்.' },
      { label: 'ஓலை & தழைகள்', val: 'கூரை & தோட்ட உரம்', desc: 'குளிர்ச்சியான கூரைகள், ஈர்க்கு மாறு மற்றும் மண்ணின் ஈரப்பதம் காக்கும் தழை உரம்.' },
      { label: 'பொங்கு (தேங்காய் பூ)', val: 'முளைத்த குருத்து உணவு', desc: 'இயற்கை ஊட்டச்சத்துக்கள் நிறைந்த சுவையான ஆரோக்கிய உணவாக விரும்பி உண்ணப்படுகிறது.' }
    ]
  }
];

const PROCESSING_STEPS = [
  {
    step: 1,
    titleEn: 'Dehusking (Exocarp Stripping)',
    titleTa: 'மட்டை உரித்தல் (நார் பிரித்தல்)',
    descEn: 'Skilled operators press the mature coconut onto an upward pointed steel spike to strip away the fibrous outer husk, leaving the intact inner coconut shell.',
    descTa: 'முற்றிய தேங்காயை எஃகு ஊசி மீது அழுத்தி, வெளிப்புற நார் மட்டை உரிக்கப்பட்டு கடினமான சிரட்டைப் பகுதி பாதுகாப்பாக பிரித்தெடுக்கப்படுகிறது.',
    icon: '🪓'
  },
  {
    step: 2,
    titleEn: 'Shell Removal & Water Draining',
    titleTa: 'சிரட்டை உடைத்தல் & நீர் வடித்தல்',
    descEn: 'The hard inner shell is cracked into two neat hemispheres. The remaining coconut water is drained to prepare the moist white kernel cups for immediate drying.',
    descTa: 'தேங்காய் இரண்டு சம அரைவட்டங்களாக உடைக்கப்பட்டு, மீதமுள்ள நீர் வடிக்கப்படுகிறது. ஈரமான வெள்ளை பருப்பு உடனடியாக உலர்த்துவதற்கு தயாராகிறது.',
    icon: '🥥'
  },
  {
    step: 3,
    titleEn: 'Kiln & Solar Copra Drying',
    titleTa: 'சூரிய ஒளி & உலை கொப்பரை உலர்த்தல்',
    descEn: 'The kernel halves are cured in smoke-free biomass kilns and open solar yards. Controlled heat drops moisture from 50% down to under 6%, creating amber copra cups.',
    descTa: 'நவீன புகை இல்லாத உலைகள் மற்றும் சூரிய ஒளி களங்களில் 50% ஈரப்பதம் 6% க்கும் குறைவாக குறையும் வரை உலர்த்தப்பட்டு தரமான கொப்பரை உருவாக்கப்படுகிறது.',
    icon: '☀️'
  },
  {
    step: 4,
    titleEn: 'Mechanical Expeller Crushing',
    titleTa: 'செக்கு & ஆலை அழுத்தம் (எண்ணெய் பிழிதல்)',
    descEn: 'Dried copra cups are cut into small pieces and crushed in rotary expellers or traditional wood presses, squeezing out fresh, raw aromatic golden coconut oil.',
    descTa: 'நன்கு காய்ந்த கொப்பரை துண்டுகளாக்கப்பட்டு மரச்செக்கு அல்லது ஆலையில் பிழியப்பட்டு, நறுமணமிக்க தூய தங்க நிற எண்ணெய் பிரித்தெடுக்கப்படுகிறது.',
    icon: '⚙️'
  },
  {
    step: 5,
    titleEn: 'Micro-Filtration & Food-Grade Bottling',
    titleTa: 'வடிகட்டுதல் & பாதுகாப்பான அடைப்பு',
    descEn: 'The raw oil passes through gravity settling tanks and multi-layer cloth filtration to remove all particulates, yielding crystal-pure golden oil ready for wholesale dispatch.',
    descTa: 'இயற்கை வண்டல் படிவு தொட்டிகள் மற்றும் துணி வடிகட்டிகள் மூலம் கசடுகள் முழுமையாக நீக்கப்பட்டு, ஸ்படிகத் தெளிவான எண்ணெய் பேக் செய்யப்படுகிறது.',
    icon: '🧪'
  }
];

export default function App() {
  const [lang, setLang] = useState<'en' | 'ta'>('en');
  const [route, setRoute] = useState<'home' | 'sell' | 'buy' | 'facts'>('home');
  const [factsCategory, setFactsCategory] = useState<'all' | 'science' | 'history' | 'tales' | 'quiz'>('all');
  const [quizAnswer, setQuizAnswer] = useState<Record<number, boolean>>({});
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  // Coconut Lifecycle Roadmap State
  const [lifecycleStage, setLifecycleStage] = useState<number>(0);
  const [lifecycleView, setLifecycleView] = useState<'stepper' | 'full'>('stepper');
  const [procSubstep, setProcSubstep] = useState<number>(0);

  const toggleQuiz = (id: number) => {
    setQuizAnswer((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const [productTab, setProductTab] = useState<'p1' | 'p2'>('p1');
  const [audienceTab, setAudienceTab] = useState<'fa' | 'bu'>('fa');
  const [openStep, setOpenStep] = useState<number>(1);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [locationStatus, setLocationStatus] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Main Enquiry Form State
  const [enqType, setEnqType] = useState<string>('sell my coconuts');
  const [enqQty, setEnqQty] = useState<string>('');
  const [enqQuality, setEnqQuality] = useState<string>('');
  const [enqName, setEnqName] = useState<string>('');
  const [enqPlace, setEnqPlace] = useState<string>('');

  // Sell Form State
  const [sellName, setSellName] = useState<string>('');
  const [sellPhone, setSellPhone] = useState<string>('');
  const [sellVillage, setSellVillage] = useState<string>('');
  const [sellLocation, setSellLocation] = useState<string>('');
  const [sellCount, setSellCount] = useState<string>('');
  const [sellQuality, setSellQuality] = useState<string>('');
  const [sellRate, setSellRate] = useState<string>('');

  // Buy Form State
  const [buyName, setBuyName] = useState<string>('');
  const [buyCompany, setBuyCompany] = useState<string>('');
  const [buyPhone, setBuyPhone] = useState<string>('');
  const [buyLocation, setBuyLocation] = useState<string>('');
  const [buyProduct, setBuyProduct] = useState<string>('coconut');
  const [buyQty, setBuyQty] = useState<string>('');
  const [buyQuality, setBuyQuality] = useState<string>('');
  const [buyPrice, setBuyPrice] = useState<string>('');

  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 2008;

  // Refs
  const heroRef = useRef<HTMLDivElement | null>(null);
  const globeStageRef = useRef<HTMLDivElement | null>(null);
  const globeRef = useRef<HTMLDivElement | null>(null);
  const bcardRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  const t = (key: string): string => {
    return T[lang]?.[key] || T['en']?.[key] || key;
  };

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'ta' || saved === 'en') {
      setLang(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const toggleLang = () => {
    const next = lang === 'en' ? 'ta' : 'en';
    setLang(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem('lang', next);
    } catch {}
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'sell') {
        setRoute('sell');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'buy') {
        setRoute('buy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setRoute('home');
        if (hash) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Scroll Progress Bar & Header Glass Intensity
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = total > 0 ? (h.scrollTop / total) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${p}%`;
      }
      setIsScrolled(h.scrollTop > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock background scroll when mobile drawer is open to prevent background bleed/scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);


  const handleGlobePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!globeRef.current || !globeStageRef.current) return;
    const b = globeStageRef.current.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    globeRef.current.style.setProperty('--rx', `${46 + y * 14}deg`);
    globeRef.current.style.setProperty('--rz', `${-12 + x * 20}deg`);
  };

  const handleGlobePointerLeave = () => {
    if (!globeRef.current) return;
    globeRef.current.style.removeProperty('--rx');
    globeRef.current.style.removeProperty('--rz');
  };

  const handleBcardPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !bcardRef.current) return;
    const r = bcardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    bcardRef.current.style.transform = `rotateY(${(x - 0.5) * 12}deg) rotateX(${(0.5 - y) * 10}deg)`;
    bcardRef.current.style.setProperty('--mx', `${x * 100}%`);
    bcardRef.current.style.setProperty('--my', `${y * 100}%`);
  };

  const handleBcardPointerLeave = () => {
    if (!bcardRef.current) return;
    bcardRef.current.style.transform = '';
    bcardRef.current.style.setProperty('--mx', '30%');
    bcardRef.current.style.setProperty('--my', '0%');
  };

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    });
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isTa = lang === 'ta';
    const reqText =
      enqType === 'sell my coconuts'
        ? (isTa ? 'தேங்காய் விற்பனை (Sell Coconuts)' : 'Sell my coconuts')
        : enqType === 'buy coconut'
        ? (isTa ? 'தேங்காய் வாங்குதல் (Buy Coconuts)' : 'Buy coconut')
        : (isTa ? 'கொப்பரை வாங்குதல் (Buy Copra)' : 'Buy copra');

    const lines: string[] = [
      isTa
        ? '🌴 ஸ்ரீ குழலி டிரேடர்ஸ் - வாட்ஸ்அப் நேரடி விசாரணை'
        : '🌴 Sri Kuzhali Traders - WhatsApp Direct Enquiry',
      '',
      isTa ? `வாடிக்கையாளர் பெயர் (Customer Name) : ${enqName || '-'}` : `Customer Name : ${enqName || '-'}`,
      isTa ? `தேவை (Requirement) : ${reqText}` : `Customer Requirement : ${reqText}`,
      isTa ? `அளவு / தரம் (Quantity / Quality) : ${enqQty || '-'}` : `Customer Quantity / Quality : ${enqQty || '-'}`
    ];
    if (enqQuality) {
      lines.push(isTa ? `தரம் (Customer Quality) : ${enqQuality}` : `Customer Quality : ${enqQuality}`);
    }
    if (enqPlace) {
      lines.push(isTa ? `ஊர் / இடம் (Customer Location) : ${enqPlace}` : `Customer Location : ${enqPlace}`);
    }

    window.open(`https://wa.me/917373855555?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  };

  const handleSellSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isTa = lang === 'ta';
    const lines: string[] = [
      isTa
        ? '🌴 ஸ்ரீ குழலி டிரேடர்ஸ் - விவசாயி தேங்காய் விற்பனை விவரம்'
        : '🌴 Sri Kuzhali Traders - Farmer Coconut Supply Details',
      '',
      isTa ? `வாடிக்கையாளர் பெயர் (Customer Name) : ${sellName}` : `Customer Name : ${sellName}`,
      isTa ? `வாடிக்கையாளர் எண் (Customer Phone) : ${sellPhone}` : `Customer Phone : ${sellPhone}`,
      isTa ? `வாடிக்கையாளர் ஊர் (Customer Village) : ${sellVillage}` : `Customer Village : ${sellVillage}`
    ];
    if (sellLocation) {
      lines.push(isTa ? `அடையாளம் / மேப் (Customer Location) : ${sellLocation}` : `Customer Location : ${sellLocation}`);
    }
    lines.push(isTa ? `தேங்காய் எண்ணிக்கை (Customer Quantity) : ${sellCount} காய்கள்` : `Customer Quantity : ${sellCount} coconuts`);
    if (sellQuality) {
      lines.push(isTa ? `தேங்காய் தரம் (Customer Quality) : ${sellQuality}` : `Customer Quality : ${sellQuality}`);
    }
    if (sellRate) {
      lines.push(isTa ? `எதிர்பார்க்கும் விலை (Customer Expected Rate) : ₹${sellRate}` : `Customer Expected Rate : ₹${sellRate}`);
    }
    window.open(`https://wa.me/917373855555?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  };

  const handleBuySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isTa = lang === 'ta';
    const prodName =
      buyProduct === 'coconut'
        ? (isTa ? 'தேங்காய் (Mature Coconuts)' : 'Mature Coconuts')
        : (isTa ? 'கொப்பரை (Kiln-Dried Copra)' : 'Kiln-Dried Milling Copra');

    const lines: string[] = [
      isTa
        ? '🌴 ஸ்ரீ குழலி டிரேடர்ஸ் - மொத்த கொள்முதல் விசாரணை'
        : '🌴 Sri Kuzhali Traders - Wholesale B2B Purchase Order',
      '',
      isTa ? `வாடிக்கையாளர் பெயர் (Customer Name) : ${buyName}` : `Customer Name : ${buyName}`,
      isTa ? `நிறுவன பெயர் (Company Name) : ${buyCompany}` : `Company Name : ${buyCompany}`,
      isTa ? `வாடிக்கையாளர் எண் (Customer Phone) : ${buyPhone}` : `Customer Phone : ${buyPhone}`,
      isTa ? `வாடிக்கையாளர் இடம் (Customer Location) : ${buyLocation}` : `Customer Location : ${buyLocation}`,
      isTa ? `பொருள் (Product) : ${prodName}` : `Product : ${prodName}`,
      isTa ? `தேவையான அளவு (Customer Quantity) : ${buyQty}` : `Customer Quantity : ${buyQty}`
    ];
    if (buyQuality) {
      lines.push(isTa ? `தேவையான தரம் (Customer Quality) : ${buyQuality}` : `Customer Quality : ${buyQuality}`);
    }
    if (buyPrice) {
      lines.push(isTa ? `வழங்கும் விலை (Customer Target Price) : ₹${buyPrice}` : `Customer Target Price : ₹${buyPrice}`);
    }
    window.open(`https://wa.me/917373855555?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus(
        lang === 'ta'
          ? 'இந்த சாதனத்தில் இடம் கிடைக்கவில்லை. லிங்க் அல்லது அடையாளம் எழுதுங்கள்.'
          : 'Location is not available here. Please type a link or landmark.'
      );
      return;
    }
    setLocationStatus(lang === 'ta' ? 'இடம் தேடப்படுகிறது...' : 'Finding your location...');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const link = `https://maps.google.com/?q=${pos.coords.latitude.toFixed(5)},${pos.coords.longitude.toFixed(5)}`;
        setSellLocation(link);
        setLocationStatus(lang === 'ta' ? 'இடம் சேர்க்கப்பட்டது.' : 'Location added.');
      },
      () => {
        setLocationStatus(
          lang === 'ta'
            ? 'இடம் கிடைக்கவில்லை. லிங்க் அல்லது அடையாளம் எழுதுங்கள்.'
            : 'Could not get location. Please type a link or landmark.'
        );
      },
      { timeout: 10000 }
    );
  };

  // Logistics Map Coordinate Calculations
  const erodeCoord = mercatorProj(77.72, 11.34);
  const destinations: Array<{ name: string; lon: number; lat: number; side: number }> = [
    { name: 'Karnataka', lon: 77.59, lat: 12.97, side: -1 },
    { name: 'Telangana', lon: 78.49, lat: 17.39, side: 1 },
    { name: 'Kolkata', lon: 88.36, lat: 22.57, side: 1 },
    { name: 'Ahmedabad', lon: 72.57, lat: 23.03, side: -1 },
    { name: 'Mumbai', lon: 72.88, lat: 19.08, side: -1 }
  ];
  const mapIndiaCenter = mercatorProj(79.6, 27.2);

  return (
    <>
      {/* Global Realistic Photographic Atmosphere System */}
      <div className="site-atmosphere-bg" aria-hidden="true">
        <div className="site-atmosphere-layer" />
        <div className="site-atmosphere-vignette" />
      </div>

      {/* Top Reading Progress Bar */}
      <div id="bar" ref={barRef} />

      {/* Floating Glass Header with Dynamic Opacity */}
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <a
            className="brand-lockup"
            href="#top"
            onClick={() => {
              setRoute('home');
              setMobileMenuOpen(false);
            }}
            aria-label="Sri Kuzhali Traders Home"
          >
            <div className="brand-logo-frame">
              <img
                src="/sriKuzhali-logo.svg"
                alt="Sri Kuzhali Traders Logo"
                className="brand-logo-asset"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf('sriKuzhali-logo.svg') !== -1) {
                    target.src = '/sriKuzhali.svg';
                  }
                }}
              />
            </div>
            <div className="brand-text-block">
              <span className="brand-name">
                {lang === 'ta' ? (
                  <>
                    <span className="hidden sm:inline">ஸ்ரீ குழலி டிரேடர்ஸ்</span>
                    <span className="sm:hidden">ஸ்ரீ குழலி</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Sri Kuzhali Traders</span>
                    <span className="sm:hidden">Sri Kuzhali</span>
                  </>
                )}
              </span>
              <span className="brand-subtext hidden md:block">
                {lang === 'ta' ? 'ஈரோடு · 2008 முதல்' : 'Erode · Since 2008'}
              </span>
            </div>
          </a>

          <nav aria-label="Main Navigation">
            <ul>
              <li><a href="#about" onClick={() => setRoute('home')}>{t('n1')}</a></li>
              <li><a href="#products" onClick={() => setRoute('home')}>{t('n2')}</a></li>
              <li><a href="#for" onClick={() => setRoute('home')}>{t('n3')}</a></li>
              <li><a href="#process" onClick={() => setRoute('home')}>{t('n4')}</a></li>
              <li><a href="#lifecycle" onClick={() => setRoute('home')}>{t('n_lifecycle')}</a></li>
              <li>
                <a
                  href="#facts"
                  onClick={(e) => {
                    e.preventDefault();
                    setRoute('facts');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[var(--gold)] font-medium"
                >
                  {lang === 'ta' ? 'அறிவியல் & வரலாறு' : 'Heritage & Lore'}
                </a>
              </li>
              <li><a href="#faq" onClick={() => setRoute('home')}>{t('n5')}</a></li>
              <li><a href="#contact" onClick={() => setRoute('home')}>{t('n6')}</a></li>
            </ul>
          </nav>

          <div className="nav-tools">
            <button className="lang-btn" type="button" onClick={toggleLang} aria-label="Switch language">
              {lang === 'ta' ? 'English' : 'தமிழ்'}
            </button>
            <a className="call-btn" href="tel:+919788626461">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-num">9788626461</span>
            </a>
            <button
              className="mobile-menu-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer - 100% Opaque & Background Protected */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <div className="flex items-center gap-2.5">
              <div className="brand-logo-frame">
                <img
                  src="/sriKuzhali-logo.svg"
                  alt="Sri Kuzhali Traders"
                  className="brand-logo-asset"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('sriKuzhali-logo.svg') !== -1) {
                      target.src = '/sriKuzhali.svg';
                    }
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="brand-name text-base font-semibold text-[var(--kombu-green)]">
                  {lang === 'ta' ? 'ஸ்ரீ குழலி டிரேடர்ஸ்' : 'Sri Kuzhali Traders'}
                </span>
                <span className="text-[11px] font-medium text-[var(--mut)]">
                  {lang === 'ta' ? 'தேங்காய் & கொப்பரை மொத்த வணிகம்' : 'Coconut & Copra Wholesale'}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="mobile-drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mobile-drawer-links">
            <a
              className="mobile-drawer-link"
              href="#about"
              onClick={() => { setRoute('home'); setMobileMenuOpen(false); }}
            >
              <span>{t('n1')}</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </a>
            <a
              className="mobile-drawer-link"
              href="#products"
              onClick={() => { setRoute('home'); setMobileMenuOpen(false); }}
            >
              <span>{t('n2')}</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </a>
            <a
              className="mobile-drawer-link"
              href="#for"
              onClick={() => { setRoute('home'); setMobileMenuOpen(false); }}
            >
              <span>{t('n3')}</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </a>
            <a
              className="mobile-drawer-link"
              href="#process"
              onClick={() => { setRoute('home'); setMobileMenuOpen(false); }}
            >
              <span>{t('n4')}</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </a>
            <a
              className="mobile-drawer-link"
              href="#lifecycle"
              onClick={() => { setRoute('home'); setMobileMenuOpen(false); }}
            >
              <span>{t('n_lifecycle')}</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </a>
            <a
              className="mobile-drawer-link highlight"
              href="#facts"
              onClick={() => {
                setRoute('facts');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>{lang === 'ta' ? 'அறிவியல், வரலாறு & கதைகள்' : 'Heritage, Science & Lore'}</span>
              <Sparkles className="w-4 h-4 text-[var(--gold)]" />
            </a>
            <a
              className="mobile-drawer-link"
              href="#faq"
              onClick={() => { setRoute('home'); setMobileMenuOpen(false); }}
            >
              <span>{t('n5')}</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </a>
            <a
              className="mobile-drawer-link"
              href="#contact"
              onClick={() => { setRoute('home'); setMobileMenuOpen(false); }}
            >
              <span>{t('n6')}</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </a>
          </div>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="mobile-drawer-lang-btn"
              onClick={() => {
                toggleLang();
              }}
            >
              <span>{lang === 'ta' ? '🌐 Switch to English' : '🌐 தமிழுக்கு மாறவும்'}</span>
            </button>
            <a className="btn primary w-full justify-center" href="tel:+919788626461">
              <Phone className="w-4 h-4" />
              <span>{t('fcall')} (<span className="font-num">9788626461</span>)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main id="top">
        {route === 'home' && (
          <div id="home">
            {/* HERO SECTION WITH REAL PHOTOGRAPHIC ATMOSPHERE */}
            <div className="hero" id="hero" ref={heroRef}>
              {/* Real Coconut Plantation & Palm Atmosphere Behind Glass */}
              <div className="hero-photo-atmosphere" aria-hidden="true">
                <div className="hero-photo-layer plantation-layer" />
                <div className="hero-photo-layer texture-layer" />
                <div className="hero-sunlight-bloom" />
              </div>

              {/* Subtle Embossed Official Brand Watermark */}
              <div className="hero-watermark" aria-hidden="true">
                <img src="/sriKuzhali.svg" alt="" className="hero-watermark-asset" />
              </div>

              <div className="wrap">
                <div className="hero-grid">
                  <div>
                    <div className="hero-eyebrow glass-frosted">
                      <Sprout className="w-3.5 h-3.5 text-[var(--moss-green)]" />
                      <span>{t('eyebrow')}</span>
                    </div>

                    <h1 dangerouslySetInnerHTML={{ __html: t('h1') }} />
                    <p>{t('hp')}</p>

                    <div className="hero-cta-group">
                      <a className="btn primary" href="#sell" onClick={() => setRoute('sell')}>
                        <span>{t('c1')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a className="btn secondary" href="#buy" onClick={() => setRoute('buy')}>
                        <span>{t('c2')}</span>
                      </a>
                    </div>
                  </div>

                  {/* Floating Glass Contact Panel Over Layered Foliage */}
                  <aside className="glass-contact-panel glass-light specular-glare glass-edge-top">
                    <h3 className="text-xl font-serif text-[var(--kombu-green)] mb-1">{t('qct')}</h3>
                    <p className="text-sm text-[var(--mut)] mb-3">{t('ctl')}</p>

                    <a className="contact-row-item" href="tel:+919788626461">
                      <div className="icon-box">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[var(--mut)]">{t('c3')}</div>
                        <div className="font-num font-bold text-xl text-[var(--kombu-green)] tracking-wider">9788626461</div>
                      </div>
                    </a>

                    <a
                      className="contact-row-item"
                      href="https://wa.me/917373855555"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="icon-box">
                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[var(--mut)]">{t('cw')}</div>
                        <div className="font-num font-bold text-xl text-[var(--kombu-green)] tracking-wider">7373855555</div>
                      </div>
                    </a>

                    <a
                      className="contact-row-item"
                      href="https://share.google/ZthVm60ksFAoTPaaU"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="icon-box">
                        <MapPin className="w-5 h-5 text-[var(--moss-green)]" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[var(--mut)]">{t('c5')}</div>
                        <div className="font-medium text-base text-[var(--kombu-green)]">{t('qcl')}</div>
                      </div>
                    </a>
                  </aside>
                </div>
              </div>
            </div>

            {/* ABOUT SECTION (EDITORIAL) */}
            <section id="about">
              <div className="wrap">
                <div className="about-header-grid">
                  <div>
                    <BrandSignature text="ESTABLISHED 2008" />
                    <h2>{t('at')}</h2>
                  </div>
                  <div>
                    <p className="lead" style={{ marginBottom: 0 }}>{t('al')}</p>
                  </div>
                </div>

                <div className="about-features-grid">
                  <div className="feature-glass-card glass-light specular-glare glass-edge-top">
                    <div className="feature-icon-wrapper">
                      <Sprout className="w-6 h-6" />
                    </div>
                    <h3>{t('a1t')}</h3>
                    <p>{t('a1d')}</p>
                  </div>

                  <div className="feature-glass-card glass-light specular-glare glass-edge-top">
                    <div className="feature-icon-wrapper">
                      <Scale className="w-6 h-6" />
                    </div>
                    <h3>{t('a2t')}</h3>
                    <p>{t('a2d')}</p>
                  </div>

                  <div className="feature-glass-card glass-light specular-glare glass-edge-top">
                    <div className="feature-icon-wrapper">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h3>{t('a3t')}</h3>
                    <p>{t('a3d')}</p>
                  </div>

                  <div className="feature-glass-card glass-light specular-glare glass-edge-top">
                    <div className="feature-icon-wrapper">
                      <Truck className="w-6 h-6" />
                    </div>
                    <h3>{t('a4t')}</h3>
                    <p>{t('a4d')}</p>
                  </div>
                </div>

                {/* Editorial Photographic Gallery */}
                <div className="about-editorial-gallery">
                  <div className="about-editorial-card glass-light specular-glare">
                    <img
                      src="/images/backgrounds/farm-direct-procurement.png"
                      alt="Direct Farm Gate Procurement"
                      loading="lazy"
                      width={1000}
                      height={700}
                    />
                    <div className="about-editorial-caption">
                      <span className="about-editorial-badge">Direct Farm Gate Procurement</span>
                      <span className="about-editorial-title">
                        {lang === 'ta' ? 'நேரடி பண்ணை கொள்முதல் மற்றும் உடனடி தீர்வு' : 'Direct Grove Sourcing & Rapid Spot Settlement'}
                      </span>
                    </div>
                  </div>

                  <div className="about-editorial-card glass-light specular-glare">
                    <img
                      src="/images/backgrounds/coconut-sorting-weighing.png"
                      alt="Certified Sorting and Weighing"
                      loading="lazy"
                      width={1000}
                      height={700}
                    />
                    <div className="about-editorial-caption">
                      <span className="about-editorial-badge">Certified Grade Calibration</span>
                      <span className="about-editorial-title">
                        {lang === 'ta' ? 'துல்லியமான தரம் பிரித்தல் மற்றும் எடை சரிபார்ப்பு' : 'Certified Weighbridge Calibration & Strict Grading'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Badges */}
                <div className="stats-floating-row">
                  <div className="stat-capsule glass-frosted">
                    <b className="font-num">{yearsInBusiness}+</b>
                    <span>{t('st1')}</span>
                  </div>
                  <div className="stat-capsule glass-frosted">
                    <b className="font-num">2</b>
                    <span>{t('st2')}</span>
                  </div>
                  <div className="stat-capsule glass-frosted">
                    <b className="font-num">1</b>
                    <span>{t('st3')}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* PRODUCTS SECTION */}
            <section id="products" className="alt">
              <div className="wrap">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                  <div>
                    <BrandSignature text="CORE CATALOG" />
                    <h2>{t('pt')}</h2>
                  </div>

                  {/* Segmented Glass Control */}
                  <div className="segmented-glass-control glass-frosted">
                    <button
                      className={productTab === 'p1' ? 'active' : ''}
                      onClick={() => setProductTab('p1')}
                      type="button"
                    >
                      {t('tp1')}
                    </button>
                    <button
                      className={productTab === 'p2' ? 'active' : ''}
                      onClick={() => setProductTab('p2')}
                      type="button"
                    >
                      {t('tp2')}
                    </button>
                  </div>
                </div>

                {productTab === 'p1' && (
                  <div className="product-showcase-card glass-light specular-glare glass-edge-top">
                    {/* Realistic Mature Coconuts Harvest Atmosphere under Glass */}
                    <div className="product-photo-underlay coconut-underlay" aria-hidden="true" />
                    <div className="relative z-10">
                      <div className="inline-block text-xs uppercase tracking-wider text-[var(--moss-green)] font-semibold mb-2">
                        Tamil Nadu Origin
                      </div>
                      <h3 className="text-3xl font-serif text-[var(--kombu-green)] mb-3">{t('p1t')}</h3>
                      <p className="lead" style={{ marginBottom: 28 }}>{t('p1d')}</p>
                      <a
                        className="btn primary"
                        href="#enquire"
                        onClick={() => setEnqType('buy coconut')}
                      >
                        <span>{t('pc1')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Dedicated Product Photo Frame */}
                    <div className="product-visual-panel glass-frosted border border-[rgba(255,255,255,0.45)] relative z-10">
                      <img
                        src="/images/backgrounds/product-mature-coconuts.png"
                        alt="Tamil Nadu Harvested Mature Coconuts"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                    </div>

                    <div className="glass-frosted p-6 rounded-2xl border border-[rgba(255,255,255,0.45)] relative z-10">
                      <ul className="product-bullet-list">
                        <li>
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{t('p1a')}</span>
                        </li>
                        <li>
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{t('p1b')}</span>
                        </li>
                        <li>
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{t('p1c')}</span>
                        </li>
                        <li>
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{t('p1d2')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {productTab === 'p2' && (
                  <div className="product-showcase-card glass-light specular-glare glass-edge-top">
                    {/* Realistic Kiln-Dried Copra Processing Atmosphere under Glass */}
                    <div className="product-photo-underlay copra-underlay" aria-hidden="true" />
                    <div className="relative z-10">
                      <div className="inline-block text-xs uppercase tracking-wider text-[var(--moss-green)] font-semibold mb-2">
                        In-House Kiln Dried
                      </div>
                      <h3 className="text-3xl font-serif text-[var(--kombu-green)] mb-3">{t('p2t')}</h3>
                      <p className="lead" style={{ marginBottom: 28 }}>{t('p2d')}</p>
                      <a
                        className="btn primary"
                        href="#enquire"
                        onClick={() => setEnqType('buy copra')}
                      >
                        <span>{t('pc2')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Dedicated Product Photo Frame */}
                    <div className="product-visual-panel glass-frosted border border-[rgba(255,255,255,0.45)] relative z-10">
                      <img
                        src="/images/backgrounds/product-kiln-dried-copra.png"
                        alt="In-House Kiln-Dried Copra"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                      <div className="product-kiln-preview-badge">
                        <img
                          src="/images/backgrounds/copra-processing-kiln.png"
                          alt="Kiln Curing Process"
                          className="w-10 h-10 rounded-full object-cover border border-white/60 shadow shrink-0"
                        />
                        <span className="text-xs font-semibold text-[var(--kombu-green)]">
                          {lang === 'ta' ? 'சொந்த களத்து உலர்த்தல் & பதப்படுத்தல்' : 'In-House Kiln Dried & Cured'}
                        </span>
                      </div>
                    </div>

                    <div className="glass-frosted p-6 rounded-2xl border border-[rgba(255,255,255,0.45)] relative z-10">
                      <ul className="product-bullet-list">
                        <li>
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{t('p2a')}</span>
                        </li>
                        <li>
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{t('p2b')}</span>
                        </li>
                        <li>
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{t('p2c')}</span>
                        </li>
                        <li>
                          <CheckCircle2 className="w-5 h-5" />
                          <span>{t('p2d2')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* FARMERS & BUYERS SECTION */}
            <section id="for">
              <div className="wrap">
                <div className="text-center max-w-xl mx-auto mb-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--moss-green)] mb-2">
                    PARTNERSHIP PROPOSITION
                  </div>
                  <h2>{t('ft')}</h2>
                </div>

                <div className="text-center mb-8">
                  <div className="audience-tabs-container glass-frosted">
                    <button
                      className={audienceTab === 'fa' ? 'active' : ''}
                      onClick={() => setAudienceTab('fa')}
                      type="button"
                    >
                      {t('tf1')}
                    </button>
                    <button
                      className={audienceTab === 'bu' ? 'active' : ''}
                      onClick={() => setAudienceTab('bu')}
                      type="button"
                    >
                      {t('tf2')}
                    </button>
                  </div>
                </div>

                {audienceTab === 'fa' && (
                  <div>
                    {/* Dedicated Farmer Audience Photographic Banner */}
                    <div className="audience-photo-banner glass-light specular-glare">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[var(--moss-green)] font-semibold mb-1">
                          {lang === 'ta' ? 'பண்ணை நேரடி கொள்முதல் சேவை' : 'Direct Farm-Gate Sourcing'}
                        </div>
                        <h3 className="text-2xl font-serif text-[var(--kombu-green)] mb-2">
                          {lang === 'ta' ? 'பண்ணையாளர்களுக்கான வெளிப்படையான எடை மற்றும் உடனடி பணப்பட்டுவாடா' : 'Zero Intermediary Commissions & Immediate Harvest Settlement'}
                        </h3>
                        <p className="text-sm text-[var(--cafe-noir)] mb-0">
                          {lang === 'ta' ? 'உங்கள் தோப்பிற்கே நேரடியாக வந்து அறுவடை செய்த தேங்காய்களை டிஜிட்டல் எடைக் கருவி மூலம் சரிபார்த்து கொள்முதல் செய்கிறோம்.' : 'We provide direct grove collection across Tamil Nadu with on-site electronic weighing and spot digital settlement.'}
                        </p>
                      </div>
                      <div className="audience-photo-img-wrap glass-frosted border border-[rgba(255,255,255,0.45)]">
                        <img
                          src="/images/backgrounds/farm-direct-procurement.png"
                          alt="Farmer Direct Procurement"
                          loading="lazy"
                          width={1000}
                          height={700}
                        />
                      </div>
                    </div>

                    <div className="audience-cards-grid">
                      <div className="feature-glass-card glass-light specular-glare">
                        <div className="feature-icon-wrapper">
                          <Scale className="w-5 h-5" />
                        </div>
                        <h3>{t('f1t')}</h3>
                        <p>{t('f1d')}</p>
                      </div>

                      <div className="feature-glass-card glass-light specular-glare">
                        <div className="feature-icon-wrapper">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h3>{t('f2t')}</h3>
                        <p>{t('f2d')}</p>
                      </div>

                      <div className="feature-glass-card glass-light specular-glare">
                        <div className="feature-icon-wrapper">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h3>{t('f3t')}</h3>
                        <p>{t('f3d')}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                      <a className="btn primary" href="#sell" onClick={() => setRoute('sell')}>
                        {t('fc')}
                      </a>
                      <a className="btn secondary" href="tel:+919788626461">
                        <Phone className="w-4 h-4" />
                        <span>{t('fcall')}</span>
                      </a>
                    </div>
                  </div>
                )}

                {audienceTab === 'bu' && (
                  <div>
                    {/* Dedicated Wholesale Buyer Photographic Banner */}
                    <div className="audience-photo-banner glass-light specular-glare">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[var(--moss-green)] font-semibold mb-1">
                          {lang === 'ta' ? 'மொத்த விநியோகம் & கிடங்கு' : 'Industrial & Mandi Wholesale Supply'}
                        </div>
                        <h3 className="text-2xl font-serif text-[var(--kombu-green)] mb-2">
                          {lang === 'ta' ? 'நிலையான தரத்துடன் கூடிய பான்-இந்தியா லாரி லோட் விநியோகம்' : 'Multi-Truckload Fulfillment & Moisture-Certified Warehousing'}
                        </h3>
                        <p className="text-sm text-[var(--cafe-noir)] mb-0">
                          {lang === 'ta' ? 'எண்ணெய் ஆலைகள் மற்றும் மொத்த வியாபாரிகளுக்கு ஆண்டு முழுவதும் தொடர்ச்சியான கொப்பரை மற்றும் தேங்காய் சப்ளை.' : 'Year-round bulk supply with rigorous moisture calibration, customized bag markings, and pan-India road freight tracking.'}
                        </p>
                      </div>
                      <div className="audience-photo-img-wrap glass-frosted border border-[rgba(255,255,255,0.45)]">
                        <img
                          src="/images/backgrounds/wholesale-trade-warehouse.png"
                          alt="Wholesale Trade Warehouse"
                          loading="lazy"
                          width={1200}
                          height={800}
                        />
                      </div>
                    </div>

                    <div className="audience-cards-grid">
                      <div className="feature-glass-card glass-light specular-glare">
                        <div className="feature-icon-wrapper">
                          <Truck className="w-5 h-5" />
                        </div>
                        <h3>{t('b1t')}</h3>
                        <p>{t('b1d')}</p>
                      </div>

                      <div className="feature-glass-card glass-light specular-glare">
                        <div className="feature-icon-wrapper">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <h3>{t('b2t')}</h3>
                        <p>{t('b2d')}</p>
                      </div>

                      <div className="feature-glass-card glass-light specular-glare">
                        <div className="feature-icon-wrapper">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <h3>{t('b3t')}</h3>
                        <p>{t('b3d')}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                      <a className="btn primary" href="#buy" onClick={() => setRoute('buy')}>
                        {t('bc')}
                      </a>
                      <a className="btn secondary" href="tel:+919788626461">
                        <Phone className="w-4 h-4" />
                        <span>{t('fcall2')}</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* LOGISTICS MAP - LUXURY SUPPLY NETWORK */}
                <div className="logistics-stage-wrapper glass-kombu">
                  <div className="max-w-2xl mb-4">
                    <BrandSignature text="LOGISTICS &amp; REACH" />
                    <h3 className="text-3xl font-serif text-[var(--bone-light)] mb-2">{t('mt')}</h3>
                    <p className="text-[var(--tan)] text-sm">{t('md')}</p>
                  </div>

                  <div
                    className="stage"
                    id="stage"
                    ref={globeStageRef}
                    onPointerMove={handleGlobePointerMove}
                    onPointerLeave={handleGlobePointerLeave}
                  >
                    <div className="sway">
                      <div className="globe" id="globe" ref={globeRef}>
                        <div className="ly gl" />
                        {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((k) => (
                          <div
                            key={k}
                            className="ly"
                            style={{ transform: `translateZ(-${k * 2.5}px)` }}
                          >
                            <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`}>
                              <path
                                d={INDIA_MAP_PATH}
                                fill={`hsl(94, 24%, ${22 + (9 - k) * 2.8}%)`}
                                stroke="rgba(207, 187, 153, 0.2)"
                                strokeWidth="1"
                              />
                            </svg>
                          </div>
                        ))}

                        {/* Top Surface with Routes and Pulses */}
                        <div className="ly">
                          <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`}>
                            <defs>
                              <linearGradient id="mapGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="#E5D7C4" />
                                <stop offset="100%" stopColor="#CFBB99" />
                              </linearGradient>
                            </defs>
                            <path
                              d={INDIA_MAP_PATH}
                              fill="url(#mapGradient)"
                              stroke="#889063"
                              strokeWidth="1.6"
                            />

                            {/* Logistics Routes */}
                            {destinations.map((c, j) => {
                              const destCoord = mercatorProj(c.lon, c.lat);
                              const dx = destCoord[0] - erodeCoord[0];
                              const dy = destCoord[1] - erodeCoord[1];
                              const dist = Math.hypot(dx, dy);
                              const sg = j % 2 ? 1 : -1;
                              const cx = (erodeCoord[0] + destCoord[0]) / 2 - (dy / dist) * dist * 0.2 * sg;
                              const cy = (erodeCoord[1] + destCoord[1]) / 2 + (dx / dist) * dist * 0.2 * sg;
                              const pathData = `M${erodeCoord[0]} ${erodeCoord[1]} Q${cx} ${cy} ${destCoord[0]} ${destCoord[1]}`;

                              return (
                                <g key={c.name}>
                                  <path
                                    className="dash"
                                    d={pathData}
                                    fill="none"
                                    stroke="#4C3D19"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                  />
                                  <circle r="4.5" fill="#354024">
                                    <animateMotion
                                      dur={`${3.8 + j * 0.5}s`}
                                      begin={`${j * 0.45}s`}
                                      repeatCount="indefinite"
                                      path={pathData}
                                    />
                                  </circle>
                                  <circle
                                    cx={destCoord[0]}
                                    cy={destCoord[1]}
                                    r="6"
                                    fill="#4C3D19"
                                    stroke="#FFFDF9"
                                    strokeWidth="2"
                                  />
                                  <circle
                                    cx={destCoord[0]}
                                    cy={destCoord[1]}
                                    r="6"
                                    fill="none"
                                    stroke="#889063"
                                    strokeWidth="1.6"
                                  >
                                    <animate
                                      attributeName="r"
                                      values="6;24"
                                      dur="2.5s"
                                      begin={`${j * 0.4}s`}
                                      repeatCount="indefinite"
                                    />
                                    <animate
                                      attributeName="opacity"
                                      values="0.9;0"
                                      dur="2.5s"
                                      begin={`${j * 0.4}s`}
                                      repeatCount="indefinite"
                                    />
                                  </circle>
                                </g>
                              );
                            })}

                            {/* Origin: Erode */}
                            <circle
                              cx={erodeCoord[0]}
                              cy={erodeCoord[1]}
                              r="9"
                              fill="#354024"
                              stroke="#FFFDF9"
                              strokeWidth="2.5"
                            />
                            <circle
                              cx={erodeCoord[0]}
                              cy={erodeCoord[1]}
                              r="9"
                              fill="none"
                              stroke="#4C3D19"
                              strokeWidth="2"
                            >
                              <animate
                                attributeName="r"
                                values="9;40"
                                dur="2.4s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values="0.85;0"
                                dur="2.4s"
                                repeatCount="indefinite"
                              />
                            </circle>

                            <text
                              x={mapIndiaCenter[0]}
                              y={mapIndiaCenter[1]}
                              textAnchor="middle"
                              className="ind"
                            >
                              INDIA
                            </text>
                            <g className="lbl">
                              {destinations.map((c) => {
                                const destCoord = mercatorProj(c.lon, c.lat);
                                return (
                                  <text
                                    key={c.name}
                                    x={destCoord[0] + c.side * 14}
                                    y={destCoord[1] + 6}
                                    textAnchor={c.side > 0 ? 'start' : 'end'}
                                  >
                                    {c.name}
                                  </text>
                                );
                              })}
                              <text
                                x={erodeCoord[0] + 16}
                                y={erodeCoord[1] + 6}
                                fontWeight="700"
                              >
                                Erode
                              </text>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Logistics Bulk Dispatch Hub Showcase */}
                  <div className="logistics-dispatch-card">
                    <div className="logistics-dispatch-img-wrap">
                      <img
                        src="/images/backgrounds/bulk-coconut-dispatch.png"
                        alt="Bulk Coconut Dispatch Fleet"
                        loading="lazy"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-light)] mb-1">
                        {lang === 'ta' ? 'ஈரோடு மொத்த சரக்கு ஏற்றுமதி முனையம்' : 'Erode Bulk Transit & Dispatch Terminal'}
                      </div>
                      <h4 className="text-xl font-serif text-[var(--bone-light)] mb-1">
                        {lang === 'ta' ? 'வட இந்திய சந்தைகளுக்கான தினசரி லாரி லோடு ஏற்றுமதி' : 'Direct Inter-State Truckload Loads to Mandis & Oil Mills'}
                      </h4>
                      <p className="text-sm text-[var(--bone)] mb-0 opacity-90">
                        {lang === 'ta'
                          ? 'ஈரோட்டிலிருந்து மகாராஷ்டிரா, குஜராத், மேற்கு வங்காளம் மற்றும் கர்நாடகாவிற்கு தரமான பேக்கிங் மற்றும் எடை சான்றிதழுடன் சரக்கு அனுப்பப்படுகிறது.'
                          : 'Full truckload dispatches packed in heavy-duty gunny bags with digital gross weight certificates and real-time transit coordination.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PROCESS SECTION */}
            <section id="process" className="alt">
              <div className="wrap">
                <div className="text-center max-w-xl mx-auto mb-10">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--moss-green)] mb-2">
                    FOUR-STAGE LIFECYCLE
                  </div>
                  <h2>{t('prt')}</h2>
                  <p className="lead" style={{ margin: '0 auto' }}>{t('prl')}</p>
                </div>

                <div className="timeline-editorial max-w-3xl mx-auto">
                  {[
                    { num: 1, title: t('s1'), desc: t('s1d'), img: '/images/backgrounds/farm-direct-procurement.png', alt: 'Farm assessment and harvesting' },
                    { num: 2, title: t('s2'), desc: t('s2d'), img: '/images/backgrounds/coconut-sorting-weighing.png', alt: 'Coconut sorting and calibration' },
                    { num: 3, title: t('s3'), desc: t('s3d'), img: '/images/backgrounds/copra-processing-kiln.png', alt: 'Copra drying and kiln curing' },
                    { num: 4, title: t('s4'), desc: t('s4d'), img: '/images/backgrounds/bulk-coconut-dispatch.png', alt: 'Packaging and interstate dispatch' }
                  ].map((step) => {
                    const isOpen = openStep === step.num;
                    return (
                      <div
                        key={step.num}
                        className={`timeline-step-glass glass-light specular-glare ${isOpen ? 'open' : ''}`}
                      >
                        <button
                          type="button"
                          className="timeline-step-header"
                          aria-expanded={isOpen}
                          onClick={() => setOpenStep(isOpen ? 0 : step.num)}
                        >
                          <span className="step-num-pill font-num">{step.num}</span>
                          <span className="flex-1">{step.title}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-[var(--moss-green)] transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div className="timeline-step-body">
                          <div className="process-step-layout">
                            <div>{step.desc}</div>
                            <div className="process-step-img-frame glass-frosted border border-[rgba(255,255,255,0.4)]">
                              <img
                                src={step.img}
                                alt={step.alt}
                                loading="lazy"
                                width={1000}
                                height={700}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* COCONUT LIFE CYCLE ROADMAP SECTION */}
            <section id="lifecycle">
              <div className="wrap">
                <div className="lifecycle-header">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--gold)] mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {lang === 'ta'
                        ? 'பயிரிடுதல் முதல் மறுவாழ்வு வரை · முழு வாழ்க்கைச் சுழற்சி'
                        : 'NATURE TO SUSTAINABILITY · COMPLETE ROADMAP'}
                    </span>
                  </div>
                  <h2 className="font-serif text-[var(--kombu-green)] mb-3">
                    {lang === 'ta'
                      ? 'தென்னை வாழ்க்கைச் சுழற்சி: விதையிலிருந்து மறுவாழ்வு வரை'
                      : 'The Coconut Life Cycle: From Seed to Second Life'}
                  </h2>
                  <p className="lead" style={{ margin: '0 auto', maxWidth: '780px' }}>
                    {lang === 'ta'
                      ? 'பயிரிடுதல் → வளர்ச்சி → அறுவடை → பதப்படுத்துதல் → அன்றாட சமையல் → 100% மறுசுழற்சி மறுவாழ்வு வரை கற்பக விருட்சத்தின் முழுமையான பயணம்.'
                      : 'The complete natural and circular story: Cultivation → Growth → Harvesting → Processing → Everyday Use → Second Life.'}
                  </p>

                  {/* View Mode Toggle: Interactive Stepper vs Full Roadmap View */}
                  <div className="lifecycle-controls">
                    <div className="lifecycle-view-toggle">
                      <button
                        type="button"
                        className={`lifecycle-toggle-btn ${lifecycleView === 'stepper' ? 'active' : ''}`}
                        onClick={() => setLifecycleView('stepper')}
                        aria-pressed={lifecycleView === 'stepper'}
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{lang === 'ta' ? 'ஊடாடும் நிலைகள் (Step-by-Step)' : 'Interactive Stepper'}</span>
                      </button>
                      <button
                        type="button"
                        className={`lifecycle-toggle-btn ${lifecycleView === 'full' ? 'active' : ''}`}
                        onClick={() => setLifecycleView('full')}
                        aria-pressed={lifecycleView === 'full'}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{lang === 'ta' ? 'முழு பயண வரைபடம் (Full Roadmap)' : 'Full Roadmap View'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {lifecycleView === 'stepper' ? (
                  <div>
                    {/* Stepper Navigation Track (6 Stages) */}
                    <div className="lifecycle-stepper-track" role="tablist" aria-label="Coconut Life Cycle Stages">
                      {LIFECYCLE_STAGES.map((stg, idx) => {
                        const isActive = lifecycleStage === idx;
                        return (
                          <button
                            key={stg.code}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            className={`lifecycle-step-tab ${isActive ? 'active' : ''}`}
                            onClick={() => {
                              setLifecycleStage(idx);
                              if (idx === 3) setProcSubstep(0);
                            }}
                          >
                            <div className="lifecycle-step-tab-num">
                              <span>{stg.code}</span>
                              <span className="text-[11px] font-medium uppercase tracking-wider opacity-75">
                                {lang === 'ta' ? stg.phaseTa : stg.phaseEn}
                              </span>
                            </div>
                            <div className="lifecycle-step-tab-title">
                              {lang === 'ta' ? stg.titleTa.split(':')[0] : stg.titleEn.split(':')[0]}
                            </div>
                            <div className="lifecycle-step-tab-sub">
                              {lang === 'ta' ? stg.timelineTa : stg.timelineEn}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Stage Card Content */}
                    {(() => {
                      const cur = LIFECYCLE_STAGES[lifecycleStage];
                      return (
                        <div className="lifecycle-card-stage glass-light specular-glare">
                          {/* Header Bar */}
                          <div className="lifecycle-stage-head">
                            <div className="flex flex-wrap items-center gap-3">
                              <span className="lifecycle-phase-badge">
                                <span className="font-num font-bold">{cur.code}</span>
                                <span>·</span>
                                <span>{lang === 'ta' ? cur.phaseTa : cur.phaseEn}</span>
                              </span>
                              <span className="lifecycle-timeline-pill">
                                <Clock className="w-3.5 h-3.5 text-[var(--gold)]" />
                                <span>{lang === 'ta' ? cur.timelineTa : cur.timelineEn}</span>
                              </span>
                            </div>

                            <div className="text-xs font-semibold text-[var(--mut)] uppercase tracking-wider">
                              {lang === 'ta' ? `நிலை ${lifecycleStage + 1} / 6` : `Stage ${lifecycleStage + 1} of 6`}
                            </div>
                          </div>

                          {/* Stage Title & Subtitle */}
                          <h3 className="text-2xl md:text-3xl font-serif text-[var(--kombu-green)] mb-1">
                            {lang === 'ta' ? cur.titleTa : cur.titleEn}
                          </h3>
                          <p className="text-sm font-medium text-[var(--gold)] mb-4">
                            {lang === 'ta' ? cur.subtitleTa : cur.subtitleEn}
                          </p>

                          {/* Editorial Narrative */}
                          <p className="text-[15.5px] md:text-[16.5px] leading-relaxed text-[#2D281B] mb-6">
                            {lang === 'ta' ? cur.storyTa : cur.storyEn}
                          </p>

                          {/* Stage Specific Highlights */}
                          {lifecycleStage === 3 ? (
                            /* Stage 04 Processing: Animated Pipeline + VCO Distinction */
                            <div>
                              <div className="text-xs font-bold uppercase tracking-widest text-[var(--kombu-green)] mb-2 flex items-center gap-2">
                                <Droplets className="w-4 h-4 text-[var(--gold)]" />
                                <span>
                                  {lang === 'ta'
                                    ? 'எண்ணெய் தயாரிப்பு படிநிலைகள் (அமுக்கிப் பார்க்கவும்)'
                                    : 'Interactive Extraction Pipeline (Click any step to inspect)'}
                                </span>
                              </div>

                              <div className="processing-stepper">
                                {PROCESSING_STEPS.map((pStep, pIdx) => {
                                  const isPActive = procSubstep === pIdx;
                                  return (
                                    <div
                                      key={pStep.step}
                                      className={`processing-step-chip ${isPActive ? 'active' : ''}`}
                                      onClick={() => setProcSubstep(pIdx)}
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="processing-step-num">{pStep.step}</div>
                                        <span className="text-lg">{pStep.icon}</span>
                                      </div>
                                      <div className="text-xs font-bold text-[var(--kombu-green)]">
                                        {lang === 'ta' ? pStep.titleTa : pStep.titleEn}
                                      </div>
                                      <div className="text-[11.5px] text-[var(--mut)] line-clamp-3">
                                        {lang === 'ta' ? pStep.descTa : pStep.descEn}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Virgin Coconut Oil (VCO) vs Copra Oil Highlight Callout */}
                              <div className="mt-5 p-4 md:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                                <div className="flex items-start gap-3">
                                  <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
                                    <Sparkles className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-amber-900 mb-1">
                                      {lang === 'ta'
                                        ? 'முக்கிய வேறுபாடு: விர்ஜின் கோகனட் ஆயில் (VCO) vs கொப்பரை எண்ணெய்'
                                        : 'Crucial Process Distinction: Virgin Coconut Oil (VCO) vs Copra Oil'}
                                    </div>
                                    <p className="text-xs md:text-sm text-amber-950/90 leading-relaxed mb-0">
                                      {lang === 'ta'
                                        ? 'பாரம்பரிய கொப்பரை எண்ணெய் உலர்த்தப்பட்ட கொப்பரை பருப்பிலிருந்து செக்கில் பிழியப்படுகிறது. ஆனால் விர்ஜின் கோகனட் ஆயில் (VCO) கொப்பரையாக உலர்த்தப்படாமல், காய் உடைந்த 4 மணி நேரத்திற்குள் புதிய பச்சை தேங்காய்ப் பாலிலிருந்தே நேரடியாக குளிர் அழுத்தம் (Centrifuge/Cold Press) முறையில் பிரித்தெடுக்கப்பட்டு இயற்கை லாரிக் அமிலம் மற்றும் ஆக்ஸிஜனேற்றிகளை முழுமையாக தக்கவைக்கிறது.'
                                        : 'While traditional golden coconut oil is milled from smoke-free kiln-cured dried copra kernels to maximize rich nutty aroma, Virgin Coconut Oil (VCO) follows a cold, wet pathway: it is extracted within 4 hours directly from fresh, raw wet coconut milk without copra drying or high heat, preserving virgin lauric acid antioxidants and water-clear lightness.'}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : lifecycleStage === 4 ? (
                            /* Stage 05 Everyday Kitchen Matrix */
                            <div>
                              <div className="text-xs font-bold uppercase tracking-widest text-[var(--kombu-green)] mb-2 flex items-center gap-2">
                                <CookingPot className="w-4 h-4 text-[var(--gold)]" />
                                <span>
                                  {lang === 'ta'
                                    ? 'பாரம்பரிய இந்திய சமையலறையின் 4 தூண்கள்'
                                    : 'Everyday Culinary Applications in Indian Kitchens'}
                                </span>
                              </div>
                              <div className="matrix-grid-2x3">
                                {(lang === 'ta' ? cur.specsTa : cur.specsEn).map((sp, sIdx) => (
                                  <div key={sIdx} className="matrix-item-card">
                                    <div className="matrix-item-icon">
                                      {sIdx === 0 ? '🍳' : sIdx === 1 ? '🥣' : sIdx === 2 ? '🥥' : '💧'}
                                    </div>
                                    <div>
                                      <div className="text-xs font-bold uppercase tracking-wider text-[var(--moss-green)] mb-0.5">
                                        {sp.label}
                                      </div>
                                      <div className="text-sm font-bold text-[var(--kombu-green)] mb-1">
                                        {sp.val}
                                      </div>
                                      <div className="text-xs text-[var(--mut)] leading-relaxed">
                                        {sp.desc}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : lifecycleStage === 5 ? (
                            /* Stage 06 Second Life Zero-Waste Matrix */
                            <div>
                              <div className="text-xs font-bold uppercase tracking-widest text-[var(--kombu-green)] mb-2 flex items-center gap-2">
                                <Recycle className="w-4 h-4 text-[var(--gold)]" />
                                <span>
                                  {lang === 'ta'
                                    ? '100% பூஜ்ஜிய கழிவு: மறுசுழற்சி பயன்கள் (கற்பக விருட்சம்)'
                                    : '100% Zero-Waste Circular Derivatives (Kalpavriksha)'}
                                </span>
                              </div>
                              <div className="matrix-grid-2x3">
                                {(lang === 'ta' ? cur.specsTa : cur.specsEn).map((sp, sIdx) => (
                                  <div key={sIdx} className="matrix-item-card">
                                    <div className="matrix-item-icon">
                                      {sIdx === 0 ? '🧶' : sIdx === 1 ? '🪴' : sIdx === 2 ? '🪵' : sIdx === 3 ? '🎨' : sIdx === 4 ? '🌿' : '🤍'}
                                    </div>
                                    <div>
                                      <div className="text-xs font-bold uppercase tracking-wider text-[var(--moss-green)] mb-0.5">
                                        {sp.label}
                                      </div>
                                      <div className="text-sm font-bold text-[var(--kombu-green)] mb-1">
                                        {sp.val}
                                      </div>
                                      <div className="text-xs text-[var(--mut)] leading-relaxed">
                                        {sp.desc}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            /* Stages 01, 02, 03 Standard Specs Grid */
                            <div className="lifecycle-specs-grid">
                              {(lang === 'ta' ? cur.specsTa : cur.specsEn).map((sp, sIdx) => (
                                <div key={sIdx} className="lifecycle-spec-box">
                                  <span className="lifecycle-spec-label">{sp.label}</span>
                                  <span className="lifecycle-spec-val">{sp.val}</span>
                                  <span className="lifecycle-spec-desc">{sp.desc}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Stepper Navigation Footer Actions */}
                          <div className="lifecycle-step-actions">
                            <button
                              type="button"
                              className="btn glass-btn"
                              disabled={lifecycleStage === 0}
                              onClick={() => {
                                setLifecycleStage((prev) => Math.max(0, prev - 1));
                                setProcSubstep(0);
                              }}
                            >
                              <ArrowLeft className="w-4 h-4" />
                              <span>
                                {lang === 'ta' ? 'முந்தைய நிலை' : 'Previous Stage'}
                              </span>
                            </button>

                            <div className="flex items-center gap-2">
                              {LIFECYCLE_STAGES.map((_, dotIdx) => (
                                <button
                                  key={dotIdx}
                                  type="button"
                                  onClick={() => setLifecycleStage(dotIdx)}
                                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    lifecycleStage === dotIdx
                                      ? 'bg-[var(--gold)] w-7'
                                      : 'bg-black/15 hover:bg-black/30'
                                  }`}
                                  aria-label={`Jump to stage ${dotIdx + 1}`}
                                />
                              ))}
                            </div>

                            {lifecycleStage < LIFECYCLE_STAGES.length - 1 ? (
                              <button
                                type="button"
                                className="btn primary"
                                onClick={() => {
                                  setLifecycleStage((prev) => Math.min(LIFECYCLE_STAGES.length - 1, prev + 1));
                                  setProcSubstep(0);
                                }}
                              >
                                <span>{lang === 'ta' ? 'அடுத்த நிலை' : 'Next Stage'}</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            ) : (
                              <a
                                href="#contact"
                                className="btn primary"
                                onClick={() => setRoute('home')}
                              >
                                <span>{lang === 'ta' ? 'எங்களை தொடர்பு கொள்ள' : 'Trade With Sri Kuzhali'}</span>
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  /* Expanded Full Vertical Roadmap Timeline */
                  <div className="lifecycle-full-timeline">
                    {LIFECYCLE_STAGES.map((stg) => {
                      const specs = lang === 'ta' ? stg.specsTa : stg.specsEn;
                      return (
                        <div key={stg.code} className="lifecycle-timeline-row">
                          <div className="lifecycle-timeline-node">
                            {stg.code}
                          </div>
                          <div className="lifecycle-timeline-content glass-light specular-glare">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                              <span className="lifecycle-phase-badge">
                                {lang === 'ta' ? stg.phaseTa : stg.phaseEn}
                              </span>
                              <span className="lifecycle-timeline-pill">
                                <Clock className="w-3.5 h-3.5 text-[var(--gold)]" />
                                <span>{lang === 'ta' ? stg.timelineTa : stg.timelineEn}</span>
                              </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-serif text-[var(--kombu-green)] mb-1">
                              {lang === 'ta' ? stg.titleTa : stg.titleEn}
                            </h3>
                            <p className="text-xs font-semibold text-[var(--gold)] mb-3">
                              {lang === 'ta' ? stg.subtitleTa : stg.subtitleEn}
                            </p>
                            <p className="text-sm md:text-base leading-relaxed text-[#2D281B] mb-4">
                              {lang === 'ta' ? stg.storyTa : stg.storyEn}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[rgba(76,61,25,0.08)]">
                              {specs.slice(0, 4).map((sp, spIdx) => (
                                <div key={spIdx} className="bg-white/60 p-2.5 rounded-xl border border-black/5">
                                  <div className="text-[11px] font-bold text-[var(--moss-green)] uppercase tracking-wider">
                                    {sp.label}
                                  </div>
                                  <div className="text-xs font-bold text-[var(--kombu-green)]">
                                    {sp.val}
                                  </div>
                                  <div className="text-[11px] text-[var(--mut)]">
                                    {sp.desc}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>

            {/* DID YOU KNOW? HERITAGE & SCIENCE SPOTLIGHT */}
            <section id="did-you-know">
              <div className="wrap">
                <div className="dyk-spotlight-card glass-light specular-glare">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--gold)] mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{lang === 'ta' ? 'அறிவியல் & வரலாற்று உண்மைகள்' : 'DID YOU KNOW? · KONGU BOTANICAL SPOTLIGHT'}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif text-[var(--kombu-green)] mb-2">
                        {lang === 'ta'
                          ? 'தெரியுமா? தென்னை மரத்தின் அதிசயங்கள், அறிவியல் & வரலாறு'
                          : 'Did you know? Fascinating Facts, Science & Sacred Lore of the Coconut'}
                      </h2>
                      <p className="lead" style={{ marginBottom: 0 }}>
                        {lang === 'ta'
                          ? '3,000 ஆண்டு கால இந்திய நாகரிகத்தின் வேர், கடல்சார் சோழர் வாணிபம் மற்றும் மருத்துவ பயன்கள் கொண்ட தென்னையின் அற்புதங்கள்.'
                          : 'Far beyond everyday trade, discover why ancient India revered the coconut as the divine wish-fulfilling tree, how Chola galleons carried copra across oceans, and the lipid chemistry inside every kernel.'}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setRoute('facts');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="btn primary shrink-0"
                    >
                      <span>{lang === 'ta' ? 'முழு வரலாற்றைப் படிக்க' : 'Explore Science, History & Tales'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 3 Clickable Teaser Question Cards */}
                  <div className="dyk-teaser-grid">
                    <div
                      className="dyk-teaser-item"
                      onClick={() => {
                        setRoute('facts');
                        setFactsCategory('science');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <div>
                        <span className="dyk-tag">🔬 {lang === 'ta' ? 'அறிவியல் & வேதியியல்' : 'Lipid Biochemistry'}</span>
                        <h4 className="dyk-question">
                          {lang === 'ta'
                            ? 'கொப்பரையின் ஈரப்பதம் ஏன் 6% கீழ் இருக்க வேண்டும்?'
                            : 'Why must copra moisture be strictly below 6%?'}
                        </h4>
                        <p className="dyk-preview">
                          {lang === 'ta'
                            ? '50% ஈரப்பதம் கொண்ட பச்சைக் கொப்பரையை முறையாக உலர்த்துவதன் மூலம் பூஞ்சை மற்றும் அஃப்லடாக்சின் தடுக்கப்பட்டு 64%+ எண்ணெய் பெறப்படுகிறது.'
                            : 'Raw coconut kernel holds 50% water. Calibrating copra strictly below 6% prevents Aspergillus fungi, locking in over 64% pure lauric-rich oil.'}
                        </p>
                      </div>
                      <span className="dyk-link-hint">
                        <span>{lang === 'ta' ? 'அறிவியல் உண்மைகள் →' : 'Read the science →'}</span>
                      </span>
                    </div>

                    <div
                      className="dyk-teaser-item"
                      onClick={() => {
                        setRoute('facts');
                        setFactsCategory('history');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="dyk-tag" style={{ marginBottom: 0 }}>📜 {lang === 'ta' ? 'சங்க காலம் & சோழர் வாணிபம்' : 'Ancient Maritime Trade'}</span>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--kombu-green)] text-[#F7E7B0]">
                            {lang === 'ta' ? 'வரலாற்று சித்திரம்' : 'Featured Art'}
                          </span>
                        </div>
                        <h4 className="dyk-question">
                          {lang === 'ta'
                            ? 'சோழர் கப்பல்களில் கொப்பரை ஏன் பிரதான உணவாக இருந்தது?'
                            : 'How did dried copra power Chola trans-oceanic expeditions?'}
                        </h4>
                        <p className="dyk-preview">
                          {lang === 'ta'
                            ? 'புறநானூற்றில் புகழப்பட்ட தென்னை, 1,000 ஆண்டுகளுக்கு முன் சுமாத்திரா வரை சென்ற சோழர் கடற்படைக்கு அழியாத ஊட்டச்சத்து உணவாக விளங்கியது.'
                            : 'Sun-cured copra served as non-perishable survival sustenance on 90-day monsoon voyages across the Indian Ocean to Sumatra and Malacca.'}
                        </p>
                      </div>
                      <span className="dyk-link-hint">
                        <span>{lang === 'ta' ? 'வரலாற்று சித்திரம் & குறிப்புகள் →' : 'View Chola history & artwork →'}</span>
                      </span>
                    </div>

                    <div
                      className="dyk-teaser-item"
                      onClick={() => {
                        setRoute('facts');
                        setFactsCategory('tales');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <div>
                        <span className="dyk-tag">🛕 {lang === 'ta' ? 'புராணங்கள் & சடங்குகள்' : 'Myths & Sacred Symbolism'}</span>
                        <h4 className="dyk-question">
                          {lang === 'ta'
                            ? 'தேங்காய் உடைப்பதன் தத்துவார்த்த அர்த்தம் என்ன?'
                            : 'Why do we break coconuts? The legend of Vishwamitra'}
                        </h4>
                        <p className="dyk-preview">
                          {lang === 'ta'
                            ? 'கடினமான ஓடு என்பது மனிதனின் அகந்தையைக் குறிக்கிறது; அதை உடைத்து இறைவனிடம் தூய வெண்மையான ஆன்மாவை அர்ப்பணிப்பதே இதன் தத்துவம்.'
                            : 'Shattering the stone-hard shell signifies surrendering the ego (Ahamkara) to reveal the pure, stainless inner soul (Atman) and divine water.'}
                        </p>
                      </div>
                      <span className="dyk-link-hint">
                        <span>{lang === 'ta' ? 'புராண கதைகள் →' : 'Read the legend & tales →'}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ SECTION */}
            <section id="faq">
              <div className="wrap max-w-3xl">
                <div className="text-center mb-10">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#2A341A] mb-2">
                    KNOWLEDGE BASE
                  </div>
                  <h2 className="text-[#1A2410] font-bold">{t('qt')}</h2>
                </div>

                <div className="faq-accordion-group">
                  <details open className="faq-glass-row glass-light specular-glare">
                    <summary className="faq-summary">
                      <span>{t('q1')}</span>
                      <ChevronDown className="faq-chevron w-5 h-5" />
                    </summary>
                    <div className="faq-body">{t('a1')}</div>
                  </details>

                  <details className="faq-glass-row glass-light specular-glare">
                    <summary className="faq-summary">
                      <span>{t('q2')}</span>
                      <ChevronDown className="faq-chevron w-5 h-5" />
                    </summary>
                    <div className="faq-body">{t('a2')}</div>
                  </details>

                  <details className="faq-glass-row glass-light specular-glare">
                    <summary className="faq-summary">
                      <span>{t('q3')}</span>
                      <ChevronDown className="faq-chevron w-5 h-5" />
                    </summary>
                    <div className="faq-body">{t('a3')}</div>
                  </details>

                  <details className="faq-glass-row glass-light specular-glare">
                    <summary className="faq-summary">
                      <span>{t('q4')}</span>
                      <ChevronDown className="faq-chevron w-5 h-5" />
                    </summary>
                    <div className="faq-body">{t('a4')}</div>
                  </details>
                </div>
              </div>
            </section>

            {/* QUICK WHATSAPP ENQUIRY FORM */}
            <section id="enquire" className="alt">
              <div className="wrap max-w-3xl">
                <div className="text-center mb-10">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--moss-green)] mb-2">
                    DIRECT DISPATCH INTAKE
                  </div>
                  <h2>{t('et')}</h2>
                  <p className="lead" style={{ margin: '0 auto' }}>{t('el')}</p>
                </div>

                <form className="glass-form-card glass-light specular-glare glass-edge-top" onSubmit={handleEnquirySubmit}>
                  <div className="form-grid-2 mb-4">
                    <div className="form-field-group">
                      <label>{t('l1')}</label>
                      <select
                        className="glass-select"
                        value={enqType}
                        onChange={(e) => setEnqType(e.target.value)}
                      >
                        <option value="sell my coconuts">{t('o1')}</option>
                        <option value="buy coconut">{t('o2')}</option>
                        <option value="buy copra">{t('o3')}</option>
                      </select>
                    </div>

                    <div className="form-field-group">
                      <label>{t('l2')}</label>
                      <input
                        className="glass-input"
                        placeholder={t('ph1')}
                        value={enqQty}
                        onChange={(e) => setEnqQty(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2 mb-6">
                    <div className="form-field-group">
                      <label>{t('l3')}</label>
                      <input
                        className="glass-input"
                        autoComplete="name"
                        placeholder={lang === 'ta' ? 'வாடிக்கையாளர் பெயர் (Customer Name)' : 'Customer Name'}
                        value={enqName}
                        onChange={(e) => setEnqName(e.target.value)}
                      />
                    </div>

                    <div className="form-field-group">
                      <label>{t('l4')}</label>
                      <input
                        className="glass-input"
                        placeholder={lang === 'ta' ? 'ஊர் அல்லது மாவட்டம்' : 'Village, town or district'}
                        value={enqPlace}
                        onChange={(e) => setEnqPlace(e.target.value)}
                      />
                    </div>
                  </div>

                  <button className="btn primary w-full" type="submit">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <span>{t('sb')}</span>
                  </button>
                </form>
              </div>
            </section>

            {/* CONTACT SECTION & 3D HOLOGRAPHIC BUSINESS CARD */}
            <section id="contact">
              <div className="wrap">
                <div className="contact-section-grid">
                  <div>
                    <BrandSignature text="COMMUNICATIONS &amp; VISITS" />
                    <h2 className="text-[#1A2410] font-bold">{t('ct')}</h2>
                    <p className="lead text-[#2D281B]">{t('ctl')}</p>

                    <ul className="contact-channels-list">
                      <li className="contact-channel-row">
                        <a className="channel-link-glass glass-light specular-glare" href="tel:+919788626461">
                          <div className="channel-icon phone">
                            <Phone className="w-5 h-5" />
                          </div>
                          <div className="channel-texts">
                            <small>{t('c3')}</small>
                            <b className="font-num">9788626461</b>
                          </div>
                        </a>
                        <button
                          type="button"
                          className="channel-copy-btn"
                          onClick={() => copyText('9788626461', 'phone')}
                          aria-label="Copy phone number"
                        >
                          {copiedKey === 'phone' ? <Check className="w-4 h-4 text-[#25D366]" /> : <Copy className="w-4 h-4" />}
                          <span>{copiedKey === 'phone' ? t('cpd') : t('cp')}</span>
                        </button>
                      </li>

                      <li className="contact-channel-row">
                        <a
                          className="channel-link-glass glass-light specular-glare"
                          href="https://wa.me/917373855555"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="channel-icon whatsapp">
                            <MessageCircle className="w-5 h-5" />
                          </div>
                          <div className="channel-texts">
                            <small>{t('cw')}</small>
                            <b className="font-num">7373855555</b>
                          </div>
                        </a>
                        <button
                          type="button"
                          className="channel-copy-btn"
                          onClick={() => copyText('7373855555', 'wa')}
                          aria-label="Copy WhatsApp number"
                        >
                          {copiedKey === 'wa' ? <Check className="w-4 h-4 text-[#25D366]" /> : <Copy className="w-4 h-4" />}
                          <span>{copiedKey === 'wa' ? t('cpd') : t('cp')}</span>
                        </button>
                      </li>

                      <li className="contact-channel-row">
                        <a
                          className="channel-link-glass glass-light specular-glare"
                          href="https://share.google/ZthVm60ksFAoTPaaU"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="channel-icon pin">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div className="channel-texts">
                            <small>{t('c5')}</small>
                            <b className="sm">{t('c6')}</b>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* 3D Holographic Trading Card with Official Logo */}
                  <div className="bcard-container">
                    <div
                      className="bcard"
                      id="bcard"
                      ref={bcardRef}
                      onPointerMove={handleBcardPointerMove}
                      onPointerLeave={handleBcardPointerLeave}
                    >
                      <div className="bcard-header">
                        <div className="bcard-logo-badge" title="Sri Kuzhali Traders">
                          <div className="brand-logo-frame bcard-logo-frame">
                            <img
                              src="/sriKuzhali.svg"
                              alt="Sri Kuzhali Traders Logo"
                              className="brand-logo-asset bcard-logo-asset"
                            />
                          </div>
                        </div>
                        <span className="bcard-badge font-num">{t('bsy')}</span>
                      </div>

                      <div className="bcard-identity">
                        <div className="bcard-name">Sri Kuzhali Traders</div>
                        <div className="bcard-sub">{t('bcs')}</div>
                      </div>

                      <div className="bcard-details">
                        <div>
                          <Phone className="w-4 h-4 shrink-0" />
                          <span className="font-num">9788626461</span>
                        </div>
                        <div>
                          <MessageCircle className="w-4 h-4 shrink-0 text-[#25D366]" />
                          <span className="font-num">7373855555</span>
                        </div>
                        <div>
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>{t('qcl')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-center w-full">
                      <a className="btn primary flex-1" href="tel:+919788626461">
                        <Phone className="w-4 h-4" />
                        <span>{t('fcall')}</span>
                      </a>
                      <a
                        className="btn secondary flex-1"
                        href="https://wa.me/917373855555"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>{t('c4')}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* DEDICATED FARMER PROCUREMENT VIEW (#sell) */}
        {route === 'sell' && (
          <div id="pg-sell" className="dedicated-page">
            <div className="wrap max-w-3xl">
              <a className="back-link" href="#top" onClick={() => setRoute('home')}>
                <ArrowLeft className="w-4 h-4" />
                <span>{t('back')}</span>
              </a>

              <div className="mb-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--moss-green)] mb-1">
                  DIRECT FARM GATE PROCUREMENT
                </div>
                <h2>{t('xst')}</h2>
                <p className="lead">{t('xsl')}</p>
              </div>

              {/* Dedicated Farmer Visual Strip */}
              <div className="dedicated-visual-strip">
                <div className="dedicated-visual-card glass-light specular-glare">
                  <img
                    src="/images/backgrounds/farm-direct-procurement.png"
                    alt="Direct Farm Gate Procurement"
                    loading="lazy"
                    width={1000}
                    height={700}
                  />
                  <div className="dedicated-visual-badge">
                    {lang === 'ta' ? 'தோட்டத்திற்கே நேரடி வருகை & கொள்முதல்' : 'Direct Grove Collection & Sourcing'}
                  </div>
                </div>

                <div className="dedicated-visual-card glass-light specular-glare">
                  <img
                    src="/images/backgrounds/coconut-sorting-weighing.png"
                    alt="Certified Weighbridge and Count"
                    loading="lazy"
                    width={1000}
                    height={700}
                  />
                  <div className="dedicated-visual-badge">
                    {lang === 'ta' ? 'வெளிப்படையான டிஜிட்டல் எடை & ஸ்பாட் பேமெண்ட்' : 'Certified Weighbridge & Spot Settlement'}
                  </div>
                </div>
              </div>

              <form className="glass-form-card glass-light specular-glare glass-edge-top" onSubmit={handleSellSubmit}>
                <div className="form-grid-2 mb-4">
                  <div className="form-field-group">
                    <label>{t('l3')}</label>
                    <input
                      className="glass-input"
                      required
                      autoComplete="name"
                      placeholder={lang === 'ta' ? 'வாடிக்கையாளர் பெயர் (Customer Name)' : 'Customer Name'}
                      value={sellName}
                      onChange={(e) => setSellName(e.target.value)}
                    />
                  </div>

                  <div className="form-field-group">
                    <label>{t('xs2')}</label>
                    <input
                      className="glass-input"
                      type="tel"
                      inputMode="tel"
                      required
                      autoComplete="tel"
                      value={sellPhone}
                      onChange={(e) => setSellPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-grid-2 mb-4">
                  <div className="form-field-group">
                    <label>{t('xs3')}</label>
                    <input
                      className="glass-input"
                      required
                      value={sellVillage}
                      onChange={(e) => setSellVillage(e.target.value)}
                    />
                  </div>

                  <div className="form-field-group">
                    <label>{t('xs4')}</label>
                    <input
                      className="glass-input"
                      placeholder={t('xp4')}
                      value={sellLocation}
                      onChange={(e) => setSellLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-grid-2 mb-4">
                  <div className="form-field-group">
                    <label>{t('xs5')}</label>
                    <input
                      className="glass-input"
                      inputMode="numeric"
                      required
                      placeholder={t('xp5')}
                      value={sellCount}
                      onChange={(e) => setSellCount(e.target.value)}
                    />
                  </div>

                  <div className="form-field-group">
                    <label>{t('xsQuality')}</label>
                    <input
                      className="glass-input"
                      placeholder={t('xpQuality')}
                      value={sellQuality}
                      onChange={(e) => setSellQuality(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field-group mb-6">
                  <label>{t('xs6')}</label>
                  <input
                    className="glass-input"
                    inputMode="decimal"
                    placeholder={t('xp6')}
                    value={sellRate}
                    onChange={(e) => setSellRate(e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <button
                    type="button"
                    className="btn secondary"
                    onClick={handleGetLocation}
                  >
                    <Navigation className="w-4 h-4 text-[var(--moss-green)]" />
                    <span>{t('xloc')}</span>
                  </button>
                  {locationStatus && <span className="text-sm text-[var(--mut)]">{locationStatus}</span>}
                </div>

                <button className="btn primary w-full" type="submit">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>{t('sendwa')}</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* DEDICATED B2B BUYER ORDER VIEW (#buy) */}
        {route === 'buy' && (
          <div id="pg-buy" className="dedicated-page">
            <div className="wrap max-w-3xl">
              <a className="back-link" href="#top" onClick={() => setRoute('home')}>
                <ArrowLeft className="w-4 h-4" />
                <span>{t('back')}</span>
              </a>

              <div className="mb-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--moss-green)] mb-1">
                  B2B WHOLESALE &amp; OIL MILL DISPATCH
                </div>
                <h2>{t('xbt')}</h2>
                <p className="lead">{t('xbl')}</p>
              </div>

              {/* Dedicated Buyer Visual Strip */}
              <div className="dedicated-visual-strip">
                <div className="dedicated-visual-card glass-light specular-glare">
                  <img
                    src="/images/backgrounds/product-mature-coconuts.png"
                    alt="Processed Mature Coconuts"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="dedicated-visual-badge">
                    {lang === 'ta' ? 'ஏற்றுமதி தர தேங்காய் (550g - 750g)' : 'Semi-Husked Coconuts (550g - 750g)'}
                  </div>
                </div>

                <div className="dedicated-visual-card glass-light specular-glare">
                  <img
                    src="/images/backgrounds/product-kiln-dried-copra.png"
                    alt="Kiln-Dried Milling Copra"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="dedicated-visual-badge">
                    {lang === 'ta' ? 'கொப்பரை (< 6% ஈரப்பதம், > 64% எண்ணெய்)' : 'Kiln-Dried Copra (< 6% Moisture)'}
                  </div>
                </div>

                <div className="dedicated-visual-card glass-light specular-glare">
                  <img
                    src="/images/backgrounds/wholesale-trade-warehouse.png"
                    alt="Wholesale Trade Warehouse"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                  <div className="dedicated-visual-badge">
                    {lang === 'ta' ? 'பான்-இந்தியா லாரி லோட் விநியோகம்' : 'Interstate Multi-Truckload Supply'}
                  </div>
                </div>
              </div>

              <form className="glass-form-card glass-light specular-glare glass-edge-top" onSubmit={handleBuySubmit}>
                <div className="form-grid-2 mb-4">
                  <div className="form-field-group">
                    <label>{t('l3')}</label>
                    <input
                      className="glass-input"
                      required
                      autoComplete="name"
                      placeholder={lang === 'ta' ? 'வாங்குபவர் / வாடிக்கையாளர் பெயர்' : 'Customer Name'}
                      value={buyName}
                      onChange={(e) => setBuyName(e.target.value)}
                    />
                  </div>

                  <div className="form-field-group">
                    <label>{t('xb2')}</label>
                    <input
                      className="glass-input"
                      required
                      autoComplete="organization"
                      value={buyCompany}
                      onChange={(e) => setBuyCompany(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-grid-2 mb-4">
                  <div className="form-field-group">
                    <label>{t('xs2')}</label>
                    <input
                      className="glass-input"
                      type="tel"
                      inputMode="tel"
                      required
                      autoComplete="tel"
                      value={buyPhone}
                      onChange={(e) => setBuyPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-field-group">
                    <label>{t('xb4')}</label>
                    <input
                      className="glass-input"
                      required
                      value={buyLocation}
                      onChange={(e) => setBuyLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-grid-2 mb-6">
                  <div className="form-field-group">
                    <label>{t('xb5')}</label>
                    <select
                      className="glass-select"
                      value={buyProduct}
                      onChange={(e) => setBuyProduct(e.target.value)}
                    >
                      <option value="coconut">{t('o2b')}</option>
                      <option value="copra">{t('o3b')}</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label>{t('xb6')}</label>
                    <input
                      className="glass-input"
                      required
                      placeholder={t('xp7')}
                      value={buyQty}
                      onChange={(e) => setBuyQty(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-grid-2 mb-6">
                  <div className="form-field-group">
                    <label>{t('xbQuality')}</label>
                    <input
                      className="glass-input"
                      placeholder={t('xpBQuality')}
                      value={buyQuality}
                      onChange={(e) => setBuyQuality(e.target.value)}
                    />
                  </div>

                  <div className="form-field-group">
                    <label>{t('xb7')}</label>
                    <input
                      className="glass-input"
                      placeholder={t('xp8')}
                      value={buyPrice}
                      onChange={(e) => setBuyPrice(e.target.value)}
                    />
                  </div>
                </div>

                <button className="btn primary w-full" type="submit">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>{t('sendwa')}</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* DEDICATED FACTS, SCIENCE, HISTORY & LORE PAGE (#facts) */}
        {route === 'facts' && (
          <div id="pg-facts" className="dedicated-page">
            <div className="wrap max-w-5xl">
              <button
                type="button"
                className="back-link cursor-pointer border-none bg-transparent"
                onClick={() => {
                  setRoute('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{lang === 'ta' ? 'முகப்புக்கு திரும்புக' : 'Back to Home'}</span>
              </button>

              {/* Facts Hero */}
              <div className="facts-hero">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--gold)] mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {lang === 'ta'
                      ? 'தென்னை களஞ்சியம் · அறிவியல், வரலாறு & கதைகள்'
                      : 'THE COCONUT CHRONICLE · SCIENCE, HISTORY & SACRED LORE'}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-serif text-[var(--kombu-green)] mb-4">
                  {lang === 'ta'
                    ? 'தென்னை: அறிவியல் நுணுக்கங்கள், சோழர் வரலாறு மற்றும் இந்தியப் புராணக் கதைகள்'
                    : 'The Wonder of Coconut: Science, Ancient History & Sacred Lore of India'}
                </h1>
                <p className="lead max-w-3xl mx-auto text-[#2D281B]">
                  {lang === 'ta'
                    ? 'ஈரோட்டின் கொப்பரை உலைகளுக்கு அப்பால், 3,000 ஆண்டு கால தமிழக சோழர் கடல் வாணிபம், வேதியியல் அறிவியல் மற்றும் இந்தியப் பண்பாட்டில் கற்பக விருட்சமாக விளங்கும் தென்னையின் முழுமையான களஞ்சியம்.'
                    : 'Beyond everyday wholesale trading in Erode, explore the lipid thermodynamics of copra, 3,000 years of Chola maritime seafaring, and the profound Vedic philosophy behind India’s sacred Kalpavriksha.'}
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="facts-tabs-nav">
                <button
                  type="button"
                  className={`facts-tab-btn ${factsCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setFactsCategory('all')}
                >
                  {lang === 'ta' ? 'அனைத்தும் (All Chapters)' : 'All Chapters'}
                </button>
                <button
                  type="button"
                  className={`facts-tab-btn ${factsCategory === 'science' ? 'active' : ''}`}
                  onClick={() => setFactsCategory('science')}
                >
                  🔬 {lang === 'ta' ? 'அறிவியல் & வேதியியல்' : 'Lipid Science & Copra'}
                </button>
                <button
                  type="button"
                  className={`facts-tab-btn ${factsCategory === 'history' ? 'active' : ''}`}
                  onClick={() => setFactsCategory('history')}
                >
                  📜 {lang === 'ta' ? '3,000 ஆண்டு வரலாறு & சோழர் வாணிபம்' : 'Indian Maritime History'}
                </button>
                <button
                  type="button"
                  className={`facts-tab-btn ${factsCategory === 'tales' ? 'active' : ''}`}
                  onClick={() => setFactsCategory('tales')}
                >
                  🛕 {lang === 'ta' ? 'புராணங்கள் & ஆன்மிகக் கதைகள்' : 'Sacred Lore & Tales'}
                </button>
                <button
                  type="button"
                  className={`facts-tab-btn ${factsCategory === 'quiz' ? 'active' : ''}`}
                  onClick={() => setFactsCategory('quiz')}
                >
                  🧠 {lang === 'ta' ? 'வினாடி-வினா (Quiz)' : 'Knowledge Quiz'}
                </button>
              </div>

              {/* CHAPTER 1: THE SCIENCE & COPRA THERMODYNAMICS */}
              {(factsCategory === 'all' || factsCategory === 'science') && (
                <div className="facts-chapter-card glass-light specular-glare mb-10">
                  <div className="facts-chapter-header">
                    <div className="facts-chapter-icon">
                      <Flame className="w-6 h-6 text-[#F7E7B0]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
                        {lang === 'ta' ? 'அத்தியாயம் 01 · உயிர் வேதியியல்' : 'CHAPTER 01 · LIPID BIOCHEMISTRY & THERMODYNAMICS'}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif text-[var(--kombu-green)] m-0">
                        {lang === 'ta'
                          ? 'கொப்பரை வேதியியல் & ஈரப்பதம் 6% ரகசியம்'
                          : 'The Physics of Copra: Moisture Control & Lipid Chemistry'}
                      </h2>
                    </div>
                  </div>

                  <div className="facts-split-grid mb-6">
                    <div>
                      <h3 className="text-xl font-serif text-[var(--kombu-green)] mb-3">
                        {lang === 'ta' ? 'ஏன் 6% கீழ் உலர்த்தப்பட வேண்டும்?' : 'Why Must Moisture Be Strictly Below 6%?'}
                      </h3>
                      <p className="text-[var(--cafe-noir)] leading-relaxed mb-4">
                        {lang === 'ta'
                          ? 'பச்சைத் தேங்காயின் பருப்பில் (kernel) தொடக்கத்தில் 50% வரை தண்ணீர் இருக்கும். இந்த ஈரப்பதத்தை உடனடியாகக் குறைக்கவில்லையெனில், அஸ்பெர்கிலஸ் (Aspergillus) பூஞ்சைகள் தோன்றி அஃப்லடாக்சின் நச்சுக்களை உருவாக்கும். இதனால் எண்ணெய் கெட்டுப்போகும்.'
                          : 'Freshly harvested mature coconut kernel contains approximately 50% water. If not dried rapidly, hydrolytic enzymes and Aspergillus molds produce harmful aflatoxins, causing rapid rancidity and spoiling the oil yield.'}
                      </p>
                      <p className="text-[var(--cafe-noir)] leading-relaxed mb-4">
                        {lang === 'ta'
                          ? 'ஈரோட்டில் உள்ள ஸ்ரீ குழலி டிரேடர்ஸின் நவீன உலைகளில் (Hot-Air Kilns), சூடான காற்று சீராக செலுத்தப்பட்டு 24 முதல் 36 மணி நேரத்திற்குள் ஈரப்பதம் 6% கீழ் கொண்டுவரப்படுகிறது. இது 64% க்கும் அதிகமான தூய எண்ணெயைப் பாதுகாத்து, பல மாதங்கள் வட இந்திய பயணங்களின்போது கெடாமல் இருக்கச் செய்கிறது.'
                          : 'At Sri Kuzhali Traders in Erode, controlled hot-air kilns circulate dry heat at 55°C–65°C, reducing moisture strictly below 6% within 24 to 36 hours without smoke soot. This preserves over 64% pure lauric-rich oil, allowing copra to travel across India without degradation.'}
                      </p>

                      <div className="facts-anatomy-list">
                        <div className="facts-anatomy-item">
                          <strong className="text-[var(--kombu-green)] block mb-1">
                            🧴 {lang === 'ta' ? 'லாரிக் அமிலம் (Lauric Acid - C12:0):' : 'Lauric Acid (C12:0) & Monolaurin:'}
                          </strong>
                          <span className="text-sm text-[var(--cafe-noir)] leading-relaxed">
                            {lang === 'ta'
                              ? 'தேங்காய் எண்ணெயில் 48% முதல் 52% வரை லாரிக் அமிலம் உள்ளது. தாய்ப்பாலுக்கு அடுத்தபடியாக இதில் மட்டுமே அதிக அளவில் உள்ள இது, உடலில் மோனோலாரின் ஆக மாறி நோய் எதிர்ப்புச் சக்தியைத் தருகிறது.'
                              : 'Pure coconut kernel contains 48%–52% Lauric Acid, the highest natural concentration outside mother’s milk. In human metabolism, it synthesizes into monolaurin, a potent antimicrobial and immune shield.'}
                          </span>
                        </div>
                        <div className="facts-anatomy-item">
                          <strong className="text-[var(--kombu-green)] block mb-1">
                            ⚡ {lang === 'ta' ? 'நடுத்தர சங்கிலி கொழுப்பு அமிலங்கள் (MCT):' : 'Medium-Chain Triglycerides (MCTs):'}
                          </strong>
                          <span className="text-sm text-[var(--cafe-noir)] leading-relaxed">
                            {lang === 'ta'
                              ? 'மற்ற கொழுப்புகளைப் போலல்லாமல், MCT கொழுப்புகள் கணைய நொதிகள் இல்லாமலேயே கல்லீரலுக்கு நேரடியாகச் சென்று உடனடியாக உடலுக்கு ஆற்றலை வழங்குகின்றன.'
                              : 'Unlike long-chain dietary fats, MCTs are rapidly absorbed through the portal vein straight into the liver, converting directly into cellular energy (ATP) without requiring bile salt emulsification.'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="facts-photo-frame mb-4">
                        <img
                          src="/images/backgrounds/copra-processing-kiln.png"
                          alt="Copra Processing Kiln at Sri Kuzhali Traders"
                        />
                        <div className="facts-photo-caption">
                          {lang === 'ta'
                            ? 'ஸ்ரீ குழலி டிரேடர்ஸ் கொப்பரை உலர்த்தி: புகை படியாமல் சீரான வெப்பத்தில் உலர்த்தப்படும் முறை'
                            : 'Sri Kuzhali Traders Hot-Air Kiln: Clean thermodynamic curing for premium milling copra'}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/70 border border-[#CFBB99]/40">
                        <h4 className="font-serif text-[var(--kombu-green)] font-bold mb-2">
                          {lang === 'ta' ? 'தேங்காயின் உடற்கூறியல் அடுக்குகள்' : 'Botanical Drupe Anatomy'}
                        </h4>
                        <ul className="text-xs space-y-1.5 text-[var(--cafe-noir)]">
                          <li><strong>1. Exocarp:</strong> {lang === 'ta' ? 'வெளி மெழுகுத் தோல் (ஈரப்பதத் தடுப்பு)' : 'Outer waterproof, waxy protective cuticle'}</li>
                          <li><strong>2. Mesocarp:</strong> {lang === 'ta' ? 'நார்ப்பகுதி (கயிறு தயாரிப்புக்குரிய நார்)' : 'Fibrous husk yield (marine coir cordage)'}</li>
                          <li><strong>3. Endocarp:</strong> {lang === 'ta' ? 'கடின ஓடு (3 கண்கள் கொண்ட பாதுகாப்பு ஓடு)' : 'Stone-hard shell with 3 germination pores'}</li>
                          <li><strong>4. Solid Endosperm:</strong> {lang === 'ta' ? 'வெண்மையான பருப்பு (கொப்பரை & எண்ணெய்)' : 'White kernel (dried into commercial copra)'}</li>
                          <li><strong>5. Liquid Endosperm:</strong> {lang === 'ta' ? 'இயற்கை இளநீர் (மின்பகுபொருள் சமநிலை)' : 'Sterile, potassium-rich isotonic water'}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CHAPTER 2: 3,000-YEAR INDIAN HISTORY & CHOLA SEAFARING */}
              {(factsCategory === 'all' || factsCategory === 'history') && (
                <div className="facts-chapter-card glass-light specular-glare mb-10">
                  <div className="facts-chapter-header">
                    <div className="facts-chapter-icon">
                      <BookOpen className="w-6 h-6 text-[#F7E7B0]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
                        {lang === 'ta' ? 'அத்தியாயம் 02 · கடல்சார் வணிகம்' : 'CHAPTER 02 · 3,000 YEARS OF INDIAN MARITIME TRADE'}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif text-[var(--kombu-green)] m-0">
                        {lang === 'ta'
                          ? 'சங்க இலக்கியம், சோழர் கடற்படை & கொப்பரை வாணிபம்'
                          : 'Sangam Tamil Classics, Chola Galleons & Trans-Oceanic Copra'}
                      </h2>
                    </div>
                  </div>

                  {/* High-Resolution Panoramic Artwork - Mobile Optimized 16:9 */}
                  <div className="mb-6">
                    <div
                      className="facts-photo-frame cursor-pointer group"
                      onClick={() => setZoomImage("/background images/Coconut Trade_ From Chola Voyages to Erode-1.png")}
                      title={lang === 'ta' ? 'முழுத்திரையில் காண தட்டவும்' : 'Tap to expand full panoramic painting'}
                    >
                      <img
                        src="/background images/Coconut Trade_ From Chola Voyages to Erode-1.png"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          if (!target.src.includes('chola-voyages-erode.png')) {
                            target.src = "/images/backgrounds/chola-voyages-erode.png";
                          }
                        }}
                        alt={lang === 'ta'
                          ? 'சோழர் கடற்படை வாணிபம் முதல் ஈரோடு வரை - தேங்காய் வரலாற்று சித்திரம்'
                          : 'Coconut Trade: From Chola Voyages to Erode Historical Artwork'}
                        className="transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="facts-photo-badge">
                        <span>🏛️ {lang === 'ta' ? 'கி.பி. 1025 · சோழர் கடற்படை' : '1025 CE · Chola Armada'}</span>
                      </div>
                      <button
                        type="button"
                        className="facts-photo-zoom-btn"
                        aria-label="Expand image"
                        onClick={(e) => {
                          e.stopPropagation();
                          setZoomImage("/background images/Coconut Trade_ From Chola Voyages to Erode-1.png");
                        }}
                      >
                        <Maximize2 className="w-4 h-4 text-white" />
                        <span className="text-[11px] font-semibold text-white ml-1">
                          {lang === 'ta' ? 'பெரிதாக்கு' : 'Zoom'}
                        </span>
                      </button>
                    </div>

                    <div className="facts-photo-caption">
                      <strong className="text-[var(--kombu-green)]">
                        {lang === 'ta' ? 'வரலாற்று சித்திரம்:' : 'Historical Masterpiece:'}{' '}
                      </strong>
                      <span>
                        {lang === 'ta'
                          ? 'சோழர் கடற்படை வாணிபம் முதல் இன்றைய ஈரோடு கொப்பரை சந்தை வரை — 3,000 ஆண்டுகால தென்னை வணிகப் பயணம்.'
                          : 'Coconut Trade: From Chola Voyages to Erode — tracing 3,000 years of spice expeditions to modern wholesale auctions.'}
                      </span>
                    </div>

                    {/* Quick Micro-Stats for Mobile Fast-Glance */}
                    <div className="facts-micro-stats">
                      <div className="facts-micro-stat-card">
                        <span className="val">1025 CE</span>
                        <span className="lbl">
                          {lang === 'ta' ? 'முதலாம் இராஜேந்திர சோழர்' : 'Rajendra Chola Armada to Srivijaya'}
                        </span>
                      </div>
                      <div className="facts-micro-stat-card">
                        <span className="val">90 Days</span>
                        <span className="lbl">
                          {lang === 'ta' ? 'கெடாத கொப்பரை உணவு' : 'Monsoon voyage non-rotting copra'}
                        </span>
                      </div>
                      <div className="facts-micro-stat-card">
                        <span className="val">0 Nails</span>
                        <span className="lbl">
                          {lang === 'ta' ? 'தேங்காய் நார் தைத்த கப்பல்கள்' : 'Coir-stitched saltwater flex vessels'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Split Narrative Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div>
                      <h3 className="text-xl font-serif text-[var(--kombu-green)] mb-3">
                        {lang === 'ta' ? 'சோழர் கப்பல்களின் ரகசிய உணவு: உலர்ந்த கொப்பரை' : 'How Copra Sustained Chola Trans-Oceanic Conquests'}
                      </h3>
                      <p className="text-[var(--cafe-noir)] leading-relaxed mb-4 text-sm sm:text-base">
                        {lang === 'ta'
                          ? 'கி.பி. 11-ஆம் நூற்றாண்டில் முதலாம் இராஜேந்திர சோழரின் கடற்படை வங்காள விரிகுடாவைக் கடந்து சுமத்ரா, மலேசியா (கடாரம்) வரை சென்றபோது, 90 நாட்கள் கடல் பயணத்தில் கெடாத ஒரே மாபெரும் ஊட்டச்சத்து உணவாக தமிழகத்தின் உலர்ந்த கொப்பரை திகழ்ந்தது.'
                          : 'In the 11th century CE, Rajendra Chola I mobilized the largest naval armada in Asian history across the Bay of Bengal to conquer Srivijaya (Sumatra) and Kedah (Malaysia). A key military asset was sun-cured copra: calorie-dense rations that never rotted in tropical ocean humidity over 90-day voyages.'}
                      </p>

                      <div className="facts-anatomy-item mb-4">
                        <strong className="text-[var(--kombu-green)] block mb-1">
                          📜 {lang === 'ta' ? 'புறநானூற்றில் தென்னை சான்று:' : 'Sangam Literature Testimony:'}
                        </strong>
                        <span className="text-xs sm:text-sm text-[var(--cafe-noir)] leading-relaxed italic block">
                          {lang === 'ta'
                            ? '“தெங்கு சூழ் சோலை தழீஇய பொய்கை...” — சங்க கால காவிரிப்பூம்பட்டினத்தின் துறைமுகங்களில் கொப்பரையும் வாசனைப் பொருட்களும் வெளிநாட்டுக் கப்பல்களில் ஏற்றப்பட்டதை புறநானூறும் பட்டினப்பாலையும் விவரிக்கின்றன.'
                            : '“Groves encircled by towering coconut palms hugging ancient lake waters...” — Sangam poems in Purananuru and Pattinappalai record ports where copra and fragrant spices were laden onto Mediterranean and Asian vessels.'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-[var(--kombu-green)] mb-3">
                        {lang === 'ta' ? 'இரும்பு ஆணிக்கு பதிலாக தேங்காய் நார் கயிறு' : 'Sewn Ships: Coconut Coir vs Iron Nails'}
                      </h3>
                      <p className="text-[var(--cafe-noir)] leading-relaxed mb-4 text-sm sm:text-base">
                        {lang === 'ta'
                          ? 'பண்டைய தமிழக கப்பல் கட்டும் கலைஞர்கள் மரப்பலகைகளை இணைக்க இரும்பு ஆணிகளைப் பயன்படுத்தவில்லை; ஏனெனில் கடல் நீரில் இரும்பு துருப்பிடிக்கும். அதற்குப் பதிலாக தேங்காய் மட்டையிலிருந்து பெறப்பட்ட நார் கயிறுகளால் பலகைகளை தைத்தனர். நனைந்த நார் விரிவடைந்து நீர்க்கசிவை முற்றிலுமாகத் தடுத்தது.'
                          : 'Ancient Indian shipbuilders eschewed iron nails that corroded in saltwater. Instead, planks were stitched using heavy ropes spun from retted coconut coir. When submerged, coir fibers swelled to create an impermeable watertight seal while flexing naturally with gigantic monsoon ocean waves.'}
                      </p>

                      <div className="p-4 rounded-xl bg-white/75 border border-[#CFBB99]/40 shadow-sm">
                        <h4 className="font-serif text-[var(--kombu-green)] font-bold mb-2 text-base">
                          {lang === 'ta' ? 'கொங்கு மண்டலத்தின் புவியியல் சிறப்பு & ஈரோடு' : 'Why Erode is India’s Modern Coconut Capital'}
                        </h4>
                        <p className="text-xs sm:text-sm text-[var(--cafe-noir)] leading-relaxed">
                          {lang === 'ta'
                            ? 'காவிரி மற்றும் பவானி நதிகளின் வண்டல் மண், ஆண்டு முழுவதும் பாயும் பாசனக் கால்வாய்கள் மற்றும் மேற்கு தொடர்ச்சி மலையின் மிதமான தட்பவெப்பநிலை காரணமாக ஈரோடு வட்டார தேங்காய்கள் அதிக எடையும் தடிமனான கொப்பரையும் கொண்டுள்ளன. ஸ்ரீ குழலி டிரேடர்ஸ் இந்த மரபினை நவீன நேர்மையான வணிகத்துடன் தொடர்கிறது.'
                            : 'Flanked by the Cauvery and Bhavani river basins, Kongu Nadu features deep alluvial loam and canal networks, yielding dense shells and kernels with extraordinary lipid concentration. Sri Kuzhali Traders honors this ancient heritage with modern fair-trade weighing.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CHAPTER 3: SACRED LORE & VEDIC SYMBOLISM */}
              {(factsCategory === 'all' || factsCategory === 'tales') && (
                <div className="facts-chapter-card glass-light specular-glare mb-10">
                  <div className="facts-chapter-header">
                    <div className="facts-chapter-icon">
                      <Sparkles className="w-6 h-6 text-[#F7E7B0]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
                        {lang === 'ta' ? 'அத்தியாயம் 03 · ஆன்மிகத் தத்துவம்' : 'CHAPTER 03 · SACRED LORE, MYTHS & VEDIC SYMBOLISM'}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif text-[var(--kombu-green)] m-0">
                        {lang === 'ta'
                          ? 'விசுவாமித்திரரின் தவம், திரிசங்கு சொர்க்கம் & தேங்காய் உடைத்தல் தத்துவம்'
                          : 'Sage Vishwamitra’s Pole, Lord Shiva’s Trinetra & Shattering the Ego'}
                      </h2>
                    </div>
                  </div>

                  <div className="facts-split-grid mb-6">
                    <div>
                      <h3 className="text-xl font-serif text-[var(--kombu-green)] mb-3">
                        {lang === 'ta' ? 'திரிசங்கு சொர்க்கமும் தென்னை மரத்தின் பிறப்பும்' : 'The Legend of Rishi Vishwamitra & Trishanku Swarga'}
                      </h3>
                      <p className="text-[var(--cafe-noir)] leading-relaxed mb-4">
                        {lang === 'ta'
                          ? 'மனித உடலோடு சொர்க்கம் செல்ல விரும்பிய திரிசங்கு மன்னனை இந்திரன் கீழே தள்ளினார். அப்போது மாமுனிவர் விசுவாமித்திரர் மன்னனை அந்தரத்திலேயே நிறுத்தி, அவருக்கென ஒரு தனி சொர்க்கத்தை உருவாக்கினார். மன்னனைத் தாங்குவதற்காக ஒரு பெரிய தங்கக் கம்பத்தை நட்டார்.'
                          : 'When King Trishanku sought to enter heaven in mortal form, Indra expelled him downward. The formidable Sage Vishwamitra froze the king in mid-air and created a parallel cosmos (Trishanku Swarga). To support the king between heaven and earth, Vishwamitra thrust a mighty golden celestial pole into the skies.'}
                      </p>
                      <p className="text-[var(--cafe-noir)] leading-relaxed mb-4">
                        {lang === 'ta'
                          ? 'பிரபஞ்ச அமைதி திரும்பியதும், அந்தத் தங்கக் கம்பம் பூமியில் வேரூன்றி தென்னை மரமாக மாறியது; மனித முகத்தைப் போலவே மூன்று கண்கள், முடி போன்ற நார் கொண்ட தேங்காயை உச்சி தாங்கியது என்கிறது புராண வரலாறு.'
                          : 'When cosmic order was restored, that celestial pole took root in Indian soil as the coconut palm (Cocos nucifera), crowned at its apex with a fruit bearing human features: fibrous hair (coir) and three distinct eyes.'}
                      </p>

                      <div className="facts-anatomy-list">
                        <div className="facts-anatomy-item">
                          <strong className="text-[var(--kombu-green)] block mb-1">
                            👁️ {lang === 'ta' ? 'சிவனின் முக்கண் (Trinetra):' : 'Lord Shiva’s Trinetra (The Three Eyes):'}
                          </strong>
                          <span className="text-sm text-[var(--cafe-noir)] leading-relaxed">
                            {lang === 'ta'
                              ? 'தேங்காயின் மூன்று கண்கள் சிவனின் முக்கண்களைக் குறிக்கின்றன. இது ஞானம், சத்யம் மற்றும் அறியாமை என்ற இருளை அழிக்கும் சக்தியின் குறியீடு.'
                              : 'The three germination pores symbolize Lord Shiva’s third eye (Trinetra) — penetrating beyond worldly illusion (Maya) to illuminate transcendent wisdom.'}
                          </span>
                        </div>

                        <div className="facts-anatomy-item">
                          <strong className="text-[var(--kombu-green)] block mb-1">
                            🔨 {lang === 'ta' ? 'தேங்காய் உடைப்பதன் தத்துவம்:' : 'Why Do We Break Coconuts? Shattering Ahamkara:'}
                          </strong>
                          <span className="text-sm text-[var(--cafe-noir)] leading-relaxed">
                            {lang === 'ta'
                              ? 'கடினமான ஓடு என்பது மனிதனின் அகந்தை (Ego / அகங்காரம்); அதை உடைக்கும் போது உள்ளிருக்கும் தூய நீர் பக்தியையும், வெண்மையான பருப்பு மாசற்ற ஆன்மாவையும் (Atman) குறிக்கிறது.'
                              : 'The hard outer shell represents the stubborn human Ego (Ahamkara). Smashing it before the deity represents destroying vanity, while the pristine white kernel offers the stainless soul (Atman) and the clear water signifies selfless devotion (Bhakti).'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="facts-photo-frame mb-4">
                        <img
                          src="/images/backgrounds/product-mature-coconuts.png"
                          alt="Mature Coconuts of Tamil Nadu"
                        />
                        <div className="facts-photo-caption">
                          {lang === 'ta'
                            ? 'தெய்வீகக் கற்பக விருட்சம்: மனிதனின் அனைத்துத் தேவைகளையும் பூர்த்தி செய்யும் அற்புத மரம்'
                            : 'Kalpavriksha: The Wish-Fulfilling Divine Palm of Indian Tradition'}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/70 border border-[#CFBB99]/40">
                        <h4 className="font-serif text-[var(--kombu-green)] font-bold mb-2">
                          {lang === 'ta' ? 'பூரண கும்பம் & லட்சுமி கடாட்சம்' : 'The Sacred Purna Kumbha (பூரண கும்பம்)'}
                        </h4>
                        <p className="text-xs text-[var(--cafe-noir)] leading-relaxed">
                          {lang === 'ta'
                            ? 'பித்தளை அல்லது செம்பு கலசத்தில் புனித நீர் நிரப்பி, மா இலைகளுடன் உச்சியில் தேங்காய் வைக்கப்படும் பூரண கும்பம் லட்சுமி தேவியின் அருளையும் மங்களகரமான வெற்றியையும் குறிக்கிறது. புதுமனை புகுவிழா, திருமணம், கோவில் கும்பாபிஷேகங்களில் இது முதலிடம் பெறுகிறது.'
                            : 'A sacred vessel crowned with mango leaves and a mature coconut represents the living presence of Goddess Lakshmi and mother earth. No Indian Grihapravesham, wedding, or temple consecration begins without this beacon of divine abundance.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CHAPTER 4: INTERACTIVE KNOWLEDGE QUIZ */}
              {(factsCategory === 'all' || factsCategory === 'quiz') && (
                <div className="facts-quiz-container mb-10">
                  <div className="flex items-center gap-3 mb-2">
                    <HelpCircle className="w-6 h-6 text-[#F7E7B0]" />
                    <h2 className="text-2xl md:text-3xl font-serif text-[#F7E7B0] m-0">
                      {lang === 'ta' ? 'தென்னை அறிவு வினாடி-வினா (Interactive Quiz)' : 'Coconut Trivia & Knowledge Check'}
                    </h2>
                  </div>
                  <p className="text-sm opacity-90 mb-6">
                    {lang === 'ta'
                      ? 'கேள்வியைத் தொட்டு சரியான விடையையும் அறிவியல் விளக்கத்தையும் உடனடியாகக் காண்க:'
                      : 'Test your understanding of coconut lore, history, and biochemistry. Tap any question to reveal the verified answer:'}
                  </p>

                  <div className="space-y-4">
                    {/* Question 1 */}
                    <div
                      className="facts-quiz-item"
                      onClick={() => toggleQuiz(1)}
                    >
                      <div className="flex items-center justify-between gap-4 font-semibold text-base md:text-lg">
                        <span>
                          {lang === 'ta'
                            ? '1. பச்சைக் கொப்பரையில் எத்தனை சதவீத நீர் இருக்கும்? உலர்த்திய பின் எவ்வளவு இருக்க வேண்டும்?'
                            : '1. What percentage of water is in fresh coconut kernel, and what must it be in copra?'}
                        </span>
                        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${quizAnswer[1] ? 'rotate-180 text-[var(--gold)]' : ''}`} />
                      </div>
                      {quizAnswer[1] && (
                        <div className="mt-3 pt-3 border-t border-white/20 text-sm opacity-95 leading-relaxed text-[#FFFDF5]">
                          {lang === 'ta'
                            ? 'விடை: பச்சைக் கொப்பரையில் சுமார் 50% நீர் இருக்கும். ஸ்ரீ குழலி டிரேடர்ஸ் உலைகளில் முறையாக உலர்த்தப்பட்ட பின், பூஞ்சை தொற்றாமல் இருக்க ஈரப்பதம் கட்டாயம் 6% கீழ் இருக்க வேண்டும்.'
                            : 'Answer: Fresh raw kernel contains ~50% moisture. After thermodynamic hot-air kiln curing, it must be strictly below 6% to halt lipolytic enzymes and Aspergillus mold.'}
                        </div>
                      )}
                    </div>

                    {/* Question 2 */}
                    <div
                      className="facts-quiz-item"
                      onClick={() => toggleQuiz(2)}
                    >
                      <div className="flex items-center justify-between gap-4 font-semibold text-base md:text-lg">
                        <span>
                          {lang === 'ta'
                            ? '2. தேங்காய் எண்ணெயில் உள்ள பிரதான கொழுப்பு அமிலம் எது? அதன் சிறப்பு என்ன?'
                            : '2. What is the primary fatty acid in coconut oil and why is it unique?'}
                        </span>
                        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${quizAnswer[2] ? 'rotate-180 text-[var(--gold)]' : ''}`} />
                      </div>
                      {quizAnswer[2] && (
                        <div className="mt-3 pt-3 border-t border-white/20 text-sm opacity-95 leading-relaxed text-[#FFFDF5]">
                          {lang === 'ta'
                            ? 'விடை: லாரிக் அமிலம் (Lauric Acid - C12:0), சுமார் 48-52% உள்ளது. இது உடலில் மோனோலாரினாக மாறி நோய் எதிர்ப்பு சக்தியையும் இயற்கையான நுண்ணுயிர் எதிர்ப்பையும் தருகிறது.'
                            : 'Answer: Lauric Acid (C12:0), comprising 48%–52% of total lipids. It metabolizes into monolaurin, which provides potent natural antimicrobial and immune-supporting properties.'}
                        </div>
                      )}
                    </div>

                    {/* Question 3 */}
                    <div
                      className="facts-quiz-item"
                      onClick={() => toggleQuiz(3)}
                    >
                      <div className="flex items-center justify-between gap-4 font-semibold text-base md:text-lg">
                        <span>
                          {lang === 'ta'
                            ? '3. சோழர் காலக் கப்பல்களில் இரும்பு ஆணிகளுக்குப் பதிலாக எதைப் பயன்படுத்தினர்?'
                            : '3. Why did ancient Chola shipwrights use coconut coir instead of iron nails?'}
                        </span>
                        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${quizAnswer[3] ? 'rotate-180 text-[var(--gold)]' : ''}`} />
                      </div>
                      {quizAnswer[3] && (
                        <div className="mt-3 pt-3 border-t border-white/20 text-sm opacity-95 leading-relaxed text-[#FFFDF5]">
                          {lang === 'ta'
                            ? 'விடை: தேங்காய் நார் கயிறுகளால் கப்பல் பலகைகளைத் தைத்தனர். கடல்நீரில் இரும்பு துருப்பிடிக்கும்; நார் கயிறு தண்ணீரில் ஊறி விரிவடைந்து நீர்க்கசிவை முற்றிலுமாக தடுத்தது.'
                            : 'Answer: Planks were sewn with heavy coconut coir cordage. Iron rusted in seawater, whereas coir expanded when wet to create an impermeable seal while flexing naturally with ocean swells.'}
                        </div>
                      )}
                    </div>

                    {/* Question 4 */}
                    <div
                      className="facts-quiz-item"
                      onClick={() => toggleQuiz(4)}
                    >
                      <div className="flex items-center justify-between gap-4 font-semibold text-base md:text-lg">
                        <span>
                          {lang === 'ta'
                            ? '4. வழிபாட்டில் தேங்காய் உடைப்பதன் தத்துவார்த்த அர்த்தம் என்ன?'
                            : '4. What is the philosophical meaning behind breaking a coconut before God?'}
                        </span>
                        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${quizAnswer[4] ? 'rotate-180 text-[var(--gold)]' : ''}`} />
                      </div>
                      {quizAnswer[4] && (
                        <div className="mt-3 pt-3 border-t border-white/20 text-sm opacity-95 leading-relaxed text-[#FFFDF5]">
                          {lang === 'ta'
                            ? 'விடை: கடினமான ஓடு என்பது மனிதனின் அகந்தை (Ego / அகங்காரம்). அதை உடைத்து இறைவனிடம் தூய வெண்மையான ஆன்மாவையும் (Atman) பக்தியையும் அர்ப்பணிப்பதே இதன் தத்துவம்.'
                            : 'Answer: The hard shell represents human ego (Ahamkara). Smashing it symbolizes surrendering vanity to offer the stainless soul (Atman) and pure devotion (Bhakti) to the Divine.'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* COMMERCIAL CTA CARD */}
              <div className="facts-chapter-card glass-dark text-white text-center py-10">
                <div className="max-w-2xl mx-auto">
                  <div className="bcard-logo-badge mx-auto mb-4 bg-white rounded-xl p-2 inline-flex">
                    <div className="brand-logo-frame">
                      <img src="/sriKuzhali.svg" alt="Sri Kuzhali Traders" className="brand-logo-asset" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#F7E7B0] mb-3">
                    {lang === 'ta'
                      ? 'தரமான தேங்காய் & கொப்பரை வணிகத்திற்கு எங்களைத் தொடர்பு கொள்க'
                      : 'Bring Nature’s Finest Coconut & Copra to Your Business'}
                  </h3>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    {lang === 'ta'
                      ? '2008 முதல் விவசாயிகளிடம் நேரடி கொள்முதல், நேர்மையான எடை மற்றும் வட இந்தியா முழுவதும் மொத்த விற்பனை. இன்றே ஸ்ரீ குழலி டிரேடர்ஸிடம் பேசுங்கள்.'
                      : 'Since 2008, Sri Kuzhali Traders has supplied direct-farm mature coconuts and kiln-dried copra to oil mills and wholesalers across India. Connect with our team today.'}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      className="btn primary"
                      href="https://wa.me/917373855555"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>{t('cw')} (<span className="font-num">7373855555</span>)</span>
                    </a>
                    <a className="btn secondary" href="tel:+919788626461">
                      <Phone className="w-4 h-4" />
                      <span>{t('fcall')} (<span className="font-num">9788626461</span>)</span>
                    </a>
                    <button
                      type="button"
                      className="btn secondary"
                      onClick={() => {
                        setRoute('home');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <span>{lang === 'ta' ? 'முகப்புக்குச் செல்க' : 'Back to Home'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fullscreen Artwork Lightbox Modal for Phone & Desktop */}
        {zoomImage && (
          <div
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
            onClick={() => setZoomImage(null)}
          >
            <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <div className="w-full flex items-center justify-between mb-3 text-white px-2">
                <span className="text-xs sm:text-sm font-medium tracking-wide text-[#F7E7B0]">
                  🏛️ {lang === 'ta' ? 'சோழர் கடற்படை வாணிபம் முதல் ஈரோடு வரை' : 'Coconut Trade: From Chola Voyages to Erode'}
                </span>
                <button
                  type="button"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                  onClick={() => setZoomImage(null)}
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-black max-h-[82vh] w-full flex items-center justify-center">
                <img
                  src={zoomImage}
                  alt="Chola Voyages to Erode"
                  className="max-w-full max-h-[80vh] object-contain rounded-xl select-none"
                />
              </div>
              <p className="text-white/80 text-xs sm:text-sm mt-3 text-center max-w-2xl px-2">
                {lang === 'ta'
                  ? 'சோழர் கடற்படை மற்றும் தமிழக கொப்பரை வாணிபத்தின் வரலாற்று சித்திரம் (11-ஆம் நூற்றாண்டு)'
                  : 'Epic historical panorama: 11th-century Chola maritime expeditions and the timeless coconut commerce of Tamil Nadu.'}
              </p>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-brand-lockup">
            <div className="footer-logo-badge">
              <div className="brand-logo-frame">
                <img src="/sriKuzhali.svg" alt="Sri Kuzhali Traders" className="brand-logo-asset" />
              </div>
            </div>
            <div className="footer-brand-title">Sri Kuzhali Traders</div>
            <div className="footer-brand-tagline">Nature in Every Trade</div>
          </div>
          <p className="opacity-80">© {currentYear} Sri Kuzhali Traders · {t('ft2')}</p>
        </div>
      </footer>

      {/* REFINED FLOATING ACTION BUTTONS (FAB) */}
      <div className="fab-container">
        <a className="fab-pill call" href="tel:+919788626461" aria-label="Call Sri Kuzhali Traders">
          <div className="fab-icon">
            <Phone className="w-5 h-5" />
          </div>
          <span className="fab-label">{t('fcall')}</span>
        </a>

        <a
          className="fab-pill maps"
          href="https://share.google/ZthVm60ksFAoTPaaU"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Sri Kuzhali Traders location in Google Maps"
        >
          <div className="fab-icon">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="fab-label">{t('qcl')}</span>
        </a>

        <a
          className="fab-pill wa"
          href="https://wa.me/917373855555"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <div className="fab-icon">
            <MessageCircle className="w-6 h-6 text-[#06301A]" />
          </div>
          <span className="fab-label">{t('cw')}</span>
        </a>
      </div>
    </>
  );
}
