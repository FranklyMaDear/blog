---
title: Αρχική
---
<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <title>Franklymadear News</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3186700611266549" crossorigin="anonymous"></script>

    <style>
        /* ΝΕΑΝΙΚΟ 3D DESIGN ΜΕ ΜΟΝΤΕΡΝΑ ΧΡΩΜΑΤΑ */
        :root { 
            --bg-body: #f4f5f8; 
            --bg-card: #ffffff; 
            --primary: #4f46e5; /* Έντονο Indigo */
            --accent: #f43f5e; /* Νεανικό Ροζ/Κόκκινο */
            --text-main: #0f172a; 
            --text-muted: #64748b; 
            --shadow-3d: 0 6px 0 #cbd5e1;
            --shadow-3d-active: 0 2px 0 #cbd5e1;
            --radius-lg: 24px;
            --radius-md: 18px;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        body { font-family: 'Inter', sans-serif; background: var(--bg-body); color: var(--text-main); line-height: 1.5; overflow: hidden; padding-bottom: 80px; }
        body.unlocked { overflow: auto; }
        a { text-decoration: none; color: inherit; }
        
        /* Container */
        .container { max-width: 720px; margin: 0 auto; padding: 0 16px; }

        /* Header - Σαν App Bar */
        header { background: var(--bg-card); padding: 16px 0; position: sticky; top: 0; z-index: 100; border-bottom: 2px solid #e2e8f0; border-radius: 0 0 24px 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); margin-bottom: 16px;}
        .nav { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 24px; font-weight: 900; color: var(--text-main); letter-spacing: -0.5px; }
        .logo span { color: var(--accent); }
        .menu a { font-weight: 700; font-size: 14px; background: #f1f5f9; color: var(--primary); padding: 10px 20px; border-radius: 50px; transition: 0.2s; box-shadow: 0 3px 0 #cbd5e1; display: inline-block;}
        .menu a:active { transform: translateY(3px); box-shadow: 0 0 0 #cbd5e1; }
        
        /* Hero - Πιο Pop Αισθητική */
        .hero { text-align: center; padding: 24px 12px; margin-bottom: 10px; }
        .hero h1 { font-size: 32px; font-weight: 900; color: var(--text-main); letter-spacing: -1px; text-transform: uppercase; }
        .hero p { font-size: 16px; color: var(--text-muted); font-weight: 600; margin-top: 6px; }

        /* Section Titles */
        .section-title { font-size: 20px; font-weight: 900; margin-bottom: 20px; color: var(--text-main); display: flex; align-items: center; gap: 10px; }
        .section-title i { color: var(--primary); font-size: 24px; }

        /* ΑΡΘΡΑ - 3D Κάρτες */
        .posts-grid { display: flex; flex-direction: column; gap: 24px; margin-bottom: 32px; }
        .post-card { background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; border: 2px solid #e2e8f0; box-shadow: var(--shadow-3d); transition: all 0.15s ease-out; display: block; }
        .post-card:active { transform: translateY(4px); box-shadow: var(--shadow-3d-active); }
        .post-card img { width: 100%; height: 220px; object-fit: cover; display: block; border-bottom: 2px solid #e2e8f0; }
        .post-content { padding: 20px; }
        .post-meta { font-size: 12px; background: #fee2e2; color: var(--accent); padding: 4px 10px; border-radius: 8px; font-weight: 800; text-transform: uppercase; display: inline-block; margin-bottom: 10px; letter-spacing: 0.5px; }
        .post-card h2 { font-size: 20px; font-weight: 900; margin-bottom: 8px; line-height: 1.3; }
        .post-excerpt { font-size: 15px; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 12px; font-weight: 500; }
        .read-more { font-weight: 800; font-size: 15px; color: var(--primary); display: inline-flex; align-items: center; gap: 6px; }

        /* ΔΙΑΦΗΜΙΣΕΙΣ - Προσαρμοσμένες στο UI */
        .ad-container { margin: 12px 0 24px; width: 100%; background: #e2e8f0; border-radius: var(--radius-md); text-align: center; padding: 16px; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); }
        .ad-container::before { content: 'ΔΙΑΦΗΜΙΣΗ'; font-size: 11px; color: #64748b; font-weight: 800; display: block; margin-bottom: 8px; letter-spacing: 1px; }
        .separator-ad { margin-top: 32px; margin-bottom: 32px; }

        /* ΒΙΝΤΕΟ - 3D Video Cards */
        .video-grid { display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 32px; }
        .video-card { background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; border: 2px solid #e2e8f0; box-shadow: var(--shadow-3d); display: flex; flex-direction: column; transition: all 0.15s ease-out; }
        .video-card:active { transform: translateY(4px); box-shadow: var(--shadow-3d-active); }
        .video-card img { width: 100%; height: 220px; object-fit: cover; display: block; border-bottom: 2px solid #e2e8f0; }
        .video-content { padding: 16px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .video-title { font-weight: 800; font-size: 17px; color: var(--text-main); line-height: 1.3; margin-bottom: 16px; display: block; min-height: 44px; }
        
        /* 3D Κουμπί Αναπαραγωγής */
        .play-btn { display: flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, var(--primary), #818cf8); color: #fff; padding: 14px; border-radius: 14px; font-weight: 800; font-size: 15px; text-transform: uppercase; box-shadow: 0 4px 0 #3730a3; transition: all 0.1s; width: 100%; border: none; }
        .video-card:active .play-btn { transform: translateY(4px); box-shadow: 0 0 0 #3730a3; }

        /* POP UP ΕΙΣΟΔΟΥ - Εντυπωσιακό & 3D */
        .entry-overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 99999; padding: 20px; transition: opacity 0.4s ease, visibility 0.4s ease; }
        .entry-overlay.hidden { opacity: 0; visibility: hidden; }
        .entry-modal { background: var(--bg-body); padding: 32px 24px; border-radius: var(--radius-lg); text-align: center; max-width: 400px; width: 100%; border: 4px solid var(--primary); box-shadow: 0 12px 0 var(--primary); transform: translateY(-10px); }
        .entry-modal h2 { color: var(--text-main); font-size: 28px; font-weight: 900; margin-bottom: 20px; letter-spacing: -1px; }
        .entry-modal h2 span { color: var(--accent); }
        
        /* Κεντρικό 3D Κουμπί Εισόδου */
        .btn-enter { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; margin-top: 24px; padding: 18px; font-size: 16px; font-weight: 900; color: #fff; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(135deg, var(--accent), #e11d48); box-shadow: 0 6px 0 #be123c; transition: all 0.15s ease-out; text-transform: uppercase; letter-spacing: 1px; }
        .btn-enter:active { transform: translateY(6px); box-shadow: 0 0 0 #be123c; }

        /* STICKY ADS - Μοντέρνα παρουσίαση */
        .sticky-ad { position: fixed; left: 0; width: 100%; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); padding: 8px; box-shadow: 0 -4px 20px rgba(0,0,0,0.1); z-index: 9999; text-align: center; display: flex; justify-content: center; transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .sticky-top { top: 0; transform: translateY(-100%); border-bottom: 3px solid var(--accent); border-radius: 0 0 20px 20px; }
        .sticky-top.show { transform: translateY(0); }
        .sticky-bottom { bottom: 0; transform: translateY(100%); border-top: 3px solid var(--accent); border-radius: 20px 20px 0 0; }
        .sticky-bottom.show { transform: translateY(0); }
        .sticky-close { position: absolute; background: var(--text-main); color: #fff; border: none; width: 30px; height: 30px; border-radius: 50%; font-size: 14px; cursor: pointer; top: -15px; right: 16px; box-shadow: 0 4px 0 #000; transition: 0.15s; font-weight: bold; }
        .sticky-close:active { transform: translateY(4px); box-shadow: 0 0 0 #000; }
        
        /* FOOTER */
        footer { text-align: center; padding: 32px 16px; background: var(--text-main); color: #94a3b8; font-size: 14px; font-weight: 600; border-radius: 24px 24px 0 0; }
        footer span { color: #ffffff; font-weight: 800; }

        /* DESKTOP/TABLET */
        @media (min-width: 600px) {
            .video-grid { grid-template-columns: repeat(2, 1fr); }
            .posts-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
            .ad-container { grid-column: 1 / -1; } /* Οι διαφημίσεις πιάνουν όλο το πλάτος */
        }
    </style>
</head>
<body>
    <!-- Οθόνη Υποδοχής -->
    <div class="entry-overlay" id="entryOverlay">
        <div class="entry-modal">
            <h2>Franklymadear <span>News</span></h2>
            <div style="min-height: 200px; border-radius:16px; border:2px dashed #cbd5e1; display:flex; align-items:center; justify-content:center; background:#f8fafc; overflow: hidden;">
                <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            <button class="btn-enter" onclick="enterPage()">
                ΣΥΝΕΧΕΙΑ <i class="fas fa-rocket"></i>
            </button>
        </div>
    </div>

    <!-- Sticky Διαφήμιση Πάνω -->
    <div class="sticky-ad sticky-top" id="topAd">
        <button class="sticky-close" onclick="this.parentElement.classList.remove('show')"><i class="fas fa-times"></i></button>
        <ins class="adsbygoogle" style="display:block; width:100%; height:50px;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>

    <header>
        <div class="container nav">
            <div class="logo">Franklymadear<span>.</span></div>
            <div class="menu">
                <a href="/"><i class="fas fa-home"></i> Αρχική</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Η Ενημέρωση Αλλιώς</h1>
            <p>Ειδήσεις & Αποκλειστικά Βίντεο</p>
        </div>
    </section>

    <div class="container">
        <!-- ΕΝΟΤΗΤΑ 1: ΑΡΘΡΑ -->
        <h2 class="section-title"><i class="fas fa-bolt"></i> Τελευταία Νέα</h2>
        <section class="posts-grid">
            
            <!-- Άρθρο 1 -->
            <a href="/post/four/index.html" class="post-card">
                <img src="/post/four/photo7.png" alt="SHOWBIZ">
                <div class="post-content">
                    <span class="post-meta">12 Αυγ 2026</span>
                    <h2>💥 SHOWBIZ EXPLOSION</h2>
                    <p class="post-excerpt">10 Σοκαριστικές Αλήθειες & Ανατροπές που Συμβαίνουν Τώρα!</p>
                    <span class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></span>
                </div>
            </a>
            
            <!-- 1η Διαφήμιση -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>
            
            <!-- Άρθρο 2 -->
            <a href="/post/one/index.html" class="post-card">
                <img src="/post/one/photo4.png" alt="Προσωπικός Βοηθός">
                <div class="post-content">
                    <span class="post-meta">12 Αυγ 2026</span>
                    <h2>Έως 1.939 ευρώ τον μήνα για τον Προσωπικό Βοηθό</h2>
                    <p class="post-excerpt">Σημαντικές εξελίξεις φέρνει το Υπουργείο Κοινωνικής Συνοχής.</p>
                    <span class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></span>
                </div>
            </a>
            
            <!-- 2η Διαφήμιση -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>
            
            <!-- Άρθρο 3 -->
            <a href="/post/two/index.html" class="post-card">
                <img src="/post/two/photo5.png" alt="Πυρκαγιές">
                <div class="post-content">
                    <span class="post-meta">11 Αυγ 2026</span>
                    <h2>🚨 ΩΡΑ ΜΗΔΕΝ: Η Ελλάδα φλέγεται</h2>
                    <p class="post-excerpt">Οι πύρινες φλόγες καταπίνουν τα πάντα. Κατηγορία 5.</p>
                    <span class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></span>
                </div>
            </a>
            
            <!-- 3η Διαφήμιση -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>
            
            <!-- Άρθρο 4 -->
            <a href="/post/three/index.html" class="post-card">
                <img src="/post/three/photo6.png" alt="Σεισμοί">
                <div class="post-content">
                    <span class="post-meta">10 Αυγ 2026</span>
                    <h2>Η θεωρία του Σοκ στον Εγκέλαδο</h2>
                    <p class="post-excerpt">Η χρονική και γεωγραφική σύμπτωση των φονικών σεισμών.</p>
                    <span class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></span>
                </div>
            </a>
        </section>

        <!-- ΚΕΝΤΡΙΚΗ ΔΙΑΦΗΜΙΣΗ -->
        <div class="ad-container separator-ad">
            <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <!-- ΕΝΟΤΗΤΑ 2: ΒΙΝΤΕΟ -->
        <h2 class="section-title"><i class="fas fa-play-circle"></i> Τελευταία Βίντεο</h2>
        <section class="video-grid">
            
            {% for video in site.data.videos %}
            <a href="{{ video.url }}" class="video-card">
                <img src="{{ video.image }}" alt="{{ video.title }}">
                <div class="video-content">
                    <span class="video-title">{{ video.title }}</span>
                    <button class="play-btn"><i class="fas fa-play"></i> Play Video</button>
                </div>
            </a>

            <!-- Διαφήμιση μετά το 1ο και 3ο βίντεο -->
            {% if forloop.index == 1 or forloop.index == 3 %}
            <div class="ad-container">
                <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            {% endif %}

            {% endfor %}

        </section>
    </div>

    <!-- Sticky Διαφήμιση Κάτω -->
    <div class="sticky-ad sticky-bottom" id="bottomAd">
        <button class="sticky-close" onclick="this.parentElement.classList.remove('show')"><i class="fas fa-times"></i></button>
        <ins class="adsbygoogle" style="display:block; width:100%; height:50px;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>

    <footer><div class="container">&copy; 2026 <span>Franklymadear</span> News. Built for Mobile.</div></footer>

    <script>
        function enterPage() {
            document.getElementById('entryOverlay').classList.add('hidden');
            document.body.classList.add('unlocked');
            setTimeout(() => {
                document.getElementById('topAd').classList.add('show');
                document.getElementById('bottomAd').classList.add('show');
            }, 600);
        }
    </script>
</body>
</html>
