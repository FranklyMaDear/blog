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
        /* ΚΡΑΤΗΣΑ ΟΛΟ ΤΟ ΠΕΡΙΕΧΟΜΕΝΟ. ΑΛΛΑΞΑ ΜΟΝΟ ΤΟ DESIGN. */
        :root { 
            --bg-body: #f2f5f9; 
            --bg-card: #ffffff; 
            --primary: #0b1222; 
            --accent: #dc2626; 
            --text-main: #1e293b; 
            --text-muted: #64748b; 
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
            --shadow-md: 0 4px 12px rgba(0,0,0,0.06);
            --radius-lg: 16px;
            --radius-md: 12px;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: var(--bg-body); color: var(--text-main); line-height: 1.5; overflow: hidden; padding-bottom: 80px; }
        body.unlocked { overflow: auto; }
        a { text-decoration: none; color: inherit; }
        
        /* Container */
        .container { max-width: 720px; margin: 0 auto; padding: 0 16px; }

        /* Header - Στιβαρό και Καθαρό */
        header { background: var(--bg-card); padding: 14px 0; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid #e2e8f0; box-shadow: var(--shadow-sm); }
        .nav { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 22px; font-weight: 900; color: var(--primary); letter-spacing: -0.5px; }
        .logo span { color: var(--accent); }
        .menu a { font-weight: 600; font-size: 13px; background: #f1f5f9; padding: 8px 16px; border-radius: 50px; transition: 0.2s; }
        .menu a:hover { background: #e2e8f0; }
        
        /* Hero - Μεγάλο και Ξεκάθαρο */
        .hero { text-align: center; padding: 32px 12px 24px; }
        .hero h1 { font-size: 28px; font-weight: 900; color: var(--primary); letter-spacing: -0.5px; }
        .hero p { font-size: 14px; color: var(--text-muted); margin-top: 4px; }

        /* Section Titles */
        .section-title { font-size: 18px; font-weight: 800; margin-bottom: 20px; color: var(--primary); border-left: 4px solid var(--accent); padding-left: 12px; display: flex; align-items: center; gap: 10px; }

        /* ΑΡΘΡΑ - Μοντέρνες κάρτες */
        .posts-grid { display: flex; flex-direction: column; gap: 18px; margin-bottom: 24px; }
        .post-card { background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid #eef2f6; transition: 0.2s; }
        .post-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .post-card img { width: 100%; height: 200px; object-fit: cover; display: block; }
        .post-content { padding: 16px; }
        .post-meta { font-size: 11px; color: var(--accent); font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 4px; letter-spacing: 0.5px; }
        .post-card h2 { font-size: 18px; font-weight: 800; margin-bottom: 6px; line-height: 1.3; }
        .post-card h2 a:hover { color: var(--accent); }
        .post-excerpt { font-size: 14px; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 8px; }
        .read-more { font-weight: 700; font-size: 13px; color: var(--primary); display: inline-flex; align-items: center; gap: 4px; }
        .read-more:hover { color: var(--accent); gap: 8px; }

        /* ΔΙΑΦΗΜΙΣΕΙΣ - Διακριτικές */
        .ad-container { margin: 8px 0 16px; width: 100%; background: #f8fafc; border-radius: var(--radius-md); text-align: center; padding: 16px; border: 1px dashed #cbd5e1; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .ad-container::before { content: 'ΔΙΑΦΗΜΙΣΗ'; font-size: 10px; color: #94a3b8; font-weight: 700; display: block; margin-bottom: 6px; letter-spacing: 1px; }
        .separator-ad { margin-top: 24px; margin-bottom: 24px; }

        /* ΒΙΝΤΕΟ - Στυλ Media Player (Mobile first) */
        .video-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 20px; }
        .video-card { background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid #eef2f6; display: flex; flex-direction: column; transition: 0.2s; }
        .video-card:hover { box-shadow: var(--shadow-md); }
        .video-card img { width: 100%; height: 210px; object-fit: cover; display: block; }
        .video-content { padding: 14px 16px 16px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .video-title { font-weight: 800; font-size: 16px; color: var(--primary); line-height: 1.3; margin-bottom: 12px; display: block; min-height: 42px; }
        .play-btn { display: flex; align-items: center; justify-content: center; gap: 8px; background: var(--primary); color: #fff; padding: 12px; border-radius: 50px; font-weight: 700; font-size: 13px; margin-top: auto; transition: 0.2s; width: 100%; }
        .video-card:hover .play-btn { background: var(--accent); }

        /* POP UP ΕΙΣΟΔΟΥ - Τέλειο */
        .entry-overlay { position: fixed; inset: 0; background: rgba(10, 10, 26, 0.92); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 99999; padding: 20px; transition: opacity 0.4s ease, visibility 0.4s ease; }
        .entry-overlay.hidden { opacity: 0; visibility: hidden; }
        .entry-modal { background: var(--bg-card); padding: 28px; border-radius: var(--radius-lg); text-align: center; max-width: 400px; width: 100%; box-shadow: 0 20px 40px rgba(0,0,0,0.5); border-top: 5px solid var(--accent); }
        .entry-modal h2 { color: var(--primary); font-size: 24px; font-weight: 900; margin-bottom: 16px; }
        .btn-enter { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; margin-top: 16px; padding: 16px; font-size: 15px; font-weight: 800; color: #fff; border-radius: 50px; border: none; cursor: pointer; background: var(--accent); transition: 0.2s; }
        .btn-enter:hover { background: #b91c1c; transform: scale(1.02); }

        /* STICKY ADS */
        .sticky-ad { position: fixed; left: 0; width: 100%; background: #ffffff; padding: 6px; box-shadow: 0 -4px 14px rgba(0,0,0,0.08); z-index: 9999; text-align: center; display: flex; justify-content: center; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .sticky-top { top: 0; transform: translateY(-100%); border-bottom: 2px solid var(--accent); }
        .sticky-top.show { transform: translateY(0); }
        .sticky-bottom { bottom: 0; transform: translateY(100%); border-top: 2px solid var(--accent); }
        .sticky-bottom.show { transform: translateY(0); }
        .sticky-close { position: absolute; background: var(--primary); color: #fff; border: none; width: 26px; height: 26px; border-radius: 50%; font-size: 12px; cursor: pointer; top: -13px; right: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); transition: 0.2s; }
        .sticky-close:hover { transform: scale(1.1); }
        
        /* FOOTER */
        footer { text-align: center; padding: 24px 16px; background: var(--primary); color: #94a3b8; font-size: 13px; margin-top: 20px; }
        footer span { color: #ffffff; font-weight: 700; }

        /* DESKTOP/TABLET - Πιο όμορφο σε μεγάλη οθόνη */
        @media (min-width: 600px) {
            .video-grid { grid-template-columns: repeat(2, 1fr); }
        }
    </style>
</head>
<body>
    <!-- Οθόνη Υποδοχής -->
    <div class="entry-overlay" id="entryOverlay">
        <div class="entry-modal">
            <h2>Franklymadear <span>News</span></h2>
            <div style="min-height: 200px; border-radius:12px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; background:#f8fafc;">
                <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            <button class="btn-enter" onclick="enterPage()">ΣΥΝΕΧΕΙΑ ΣΤΟ BLOG <i class="fas fa-arrow-right"></i></button>
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
            <div class="menu"><a href="/"><i class="fas fa-home"></i> Αρχική</a></div>
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
        <h2 class="section-title"><i class="far fa-newspaper"></i> Τελευταία Νέα</h2>
        <section class="posts-grid">
            
            <!-- Άρθρο 1 -->
            <article class="post-card">
                <img src="/post/four/photo7.png" alt="SHOWBIZ">
                <div class="post-content">
                    <span class="post-meta">12 Αυγούστου 2026</span>
                    <h2><a href="/post/four/index.html">💥 SHOWBIZ EXPLOSION</a></h2>
                    <p class="post-excerpt">10 Σοκαριστικές Αλήθειες & Ανατροπές που Συμβαίνουν Τώρα!</p>
                    <a href="/post/four/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
            
            <!-- 1η Διαφήμιση -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>
            
            <!-- Άρθρο 2 -->
            <article class="post-card">
                <img src="/post/one/photo4.png" alt="Προσωπικός Βοηθός">
                <div class="post-content">
                    <span class="post-meta">12 Αυγούστου 2026</span>
                    <h2><a href="/post/one/index.html">Έως 1.939 ευρώ τον μήνα για τον Προσωπικό Βοηθό</a></h2>
                    <p class="post-excerpt">Σημαντικές εξελίξεις φέρνει το Υπουργείο Κοινωνικής Συνοχής.</p>
                    <a href="/post/one/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
            
            <!-- 2η Διαφήμιση -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>
            
            <!-- Άρθρο 3 -->
            <article class="post-card">
                <img src="/post/two/photo5.png" alt="Πυρκαγιές">
                <div class="post-content">
                    <span class="post-meta">11 Αυγούστου 2026</span>
                    <h2><a href="/post/two/index.html">🚨 ΩΡΑ ΜΗΔΕΝ: Η Ελλάδα φλέγεται</a></h2>
                    <p class="post-excerpt">Οι πύρινες φλόγες καταπίνουν τα πάντα. Κατηγορία 5.</p>
                    <a href="/post/two/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
            
            <!-- 3η Διαφήμιση -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>
            
            <!-- Άρθρο 4 -->
            <article class="post-card">
                <img src="/post/three/photo6.png" alt="Σεισμοί">
                <div class="post-content">
                    <span class="post-meta">10 Αυγούστου 2026</span>
                    <h2><a href="/post/three/index.html">Η θεωρία του Σοκ στον Εγκέλαδο</a></h2>
                    <p class="post-excerpt">Η χρονική και γεωγραφική σύμπτωση των φονικών σεισμών.</p>
                    <a href="/post/three/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        </section>

        <!-- ΚΕΝΤΡΙΚΗ ΔΙΑΦΗΜΙΣΗ -->
        <div class="ad-container separator-ad">
            <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <!-- ΕΝΟΤΗΤΑ 2: ΒΙΝΤΕΟ (ΔΥΝΑΜΙΚΑ ΑΠΟ ΤΟ _data/videos.yml) -->
        <h2 class="section-title"><i class="far fa-play-circle"></i> Τελευταία Βίντεο</h2>
        <section class="video-grid">
            
            {% for video in site.data.videos %}
            <a href="{{ video.url }}" class="video-card">
                <img src="{{ video.image }}" alt="{{ video.title }}">
                <div class="video-content">
                    <span class="video-title">{{ video.title }}</span>
                    <span class="play-btn"><i class="fas fa-play"></i> Παρακολούθηση</span>
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

    <footer><div class="container">&copy; 2026 <span>Franklymadear</span> News.</div></footer>

    <script>
        function enterPage() {
            document.getElementById('entryOverlay').classList.add('hidden');
            document.body.classList.add('unlocked');
            setTimeout(() => {
                document.getElementById('topAd').classList.add('show');
                document.getElementById('bottomAd').classList.add('show');
            }, 800);
        }
    </script>
</body>
</html>
