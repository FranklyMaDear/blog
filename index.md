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
        /* ΚΡΑΤΗΣΑ ΟΛΟ ΤΟ ΠΕΡΙΕΧΟΜΕΝΟ. ΑΛΛΑΞΑ ΜΟΝΟ ΤΟ DESIGN — dark, streaming-style (Netflix/Spotify). */
        :root {
            --bg-body: #0a0a0d;
            --bg-card: #16161c;
            --bg-card-hover: #202028;
            --primary: #ffffff;
            --accent: #e50914;
            --accent-2: #1db954;
            --text-main: #f2f2f4;
            --text-muted: #9a9aa5;
            --border: #26262f;
            --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
            --shadow-md: 0 10px 30px rgba(0,0,0,0.55);
            --radius-lg: 16px;
            --radius-md: 10px;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: var(--bg-body); color: var(--text-main); line-height: 1.5; overflow: hidden; padding-bottom: 80px; }
        body.unlocked { overflow: auto; }
        a { text-decoration: none; color: inherit; }
        ::-webkit-scrollbar { height: 8px; width: 8px; }
        ::-webkit-scrollbar-thumb { background: #333340; border-radius: 8px; }

        /* Container */
        .container { max-width: 1100px; margin: 0 auto; padding: 0 16px; }

        /* Header - Σκούρο, sticky, Netflix-style */
        header { background: linear-gradient(180deg, rgba(6,6,8,0.97), rgba(6,6,8,0.9)); padding: 14px 0; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid var(--border); backdrop-filter: blur(10px); }
        .nav { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 22px; font-weight: 900; color: var(--primary); letter-spacing: -0.5px; text-transform: uppercase; }
        .logo span { color: var(--accent); }
        .menu a { font-weight: 700; font-size: 13px; background: rgba(255,255,255,0.06); color: var(--text-main); padding: 8px 18px; border-radius: 50px; transition: 0.2s; border: 1px solid var(--border); }
        .menu a:hover { background: var(--accent); border-color: var(--accent); color: #fff; }

        /* Hero - Cinematic banner */
        .hero { text-align: center; padding: 48px 12px 32px; background: radial-gradient(ellipse at top, rgba(229,9,20,0.15), transparent 60%); }
        .hero h1 { font-size: 32px; font-weight: 900; color: var(--primary); letter-spacing: -0.8px; }
        .hero p { font-size: 14px; color: var(--text-muted); margin-top: 6px; letter-spacing: 0.5px; text-transform: uppercase; }

        /* Section Titles - σαν "σειρές" streaming */
        .section-title { font-size: 19px; font-weight: 800; margin-bottom: 20px; color: var(--primary); padding-left: 14px; position: relative; display: flex; align-items: center; gap: 10px; }
        .section-title::before { content: ''; position: absolute; left: 0; top: 2px; bottom: 2px; width: 4px; background: linear-gradient(180deg, var(--accent), var(--accent-2)); border-radius: 4px; }

        /* ΑΡΘΡΑ - Οριζόντιο scroll σαν Netflix row */
        .posts-grid { display: flex; flex-direction: row; overflow-x: auto; gap: 16px; margin-bottom: 24px; padding-bottom: 8px; scroll-snap-type: x proximity; -webkit-overflow-scrolling: touch; }
        .post-card { background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border); transition: 0.25s; flex: 0 0 260px; scroll-snap-align: start; }
        .post-card:hover { box-shadow: var(--shadow-md); transform: translateY(-4px) scale(1.02); background: var(--bg-card-hover); border-color: #3a3a46; }
        .post-card img { width: 100%; height: 150px; object-fit: cover; display: block; }
        .post-content { padding: 14px; }
        .post-meta { font-size: 10px; color: var(--accent); font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 4px; letter-spacing: 0.8px; }
        .post-card h2 { font-size: 16px; font-weight: 800; margin-bottom: 6px; line-height: 1.3; color: var(--primary); }
        .post-card h2 a:hover { color: var(--accent-2); }
        .post-excerpt { font-size: 13px; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 10px; }
        .read-more { font-weight: 700; font-size: 12px; color: var(--accent-2); display: inline-flex; align-items: center; gap: 4px; }
        .read-more:hover { gap: 8px; color: #21e065; }

        /* ΔΙΑΦΗΜΙΣΕΙΣ - Διακριτικές, σκούρες */
        .ad-container { margin: 8px 0 16px; width: 100%; background: #101014; border-radius: var(--radius-md); text-align: center; padding: 16px; border: 1px dashed #33333d; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .ad-container::before { content: 'ΔΙΑΦΗΜΙΣΗ'; font-size: 10px; color: #5a5a66; font-weight: 700; display: block; margin-bottom: 6px; letter-spacing: 1px; }
        .separator-ad { margin-top: 24px; margin-bottom: 24px; }
        .posts-grid + .ad-container, .video-grid .ad-container { flex: 0 0 auto; width: 100%; }

        /* ΒΙΝΤΕΟ - Poster-style κάρτες, Netflix look */
        .video-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 20px; }
        .video-card { background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border); display: flex; flex-direction: column; transition: 0.25s; position: relative; }
        .video-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); border-color: #3a3a46; }
        .video-card img { width: 100%; height: 210px; object-fit: cover; display: block; filter: brightness(0.85); transition: 0.25s; }
        .video-card:hover img { filter: brightness(1); }
        .video-content { padding: 14px 16px 16px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .video-title { font-weight: 800; font-size: 16px; color: var(--primary); line-height: 1.3; margin-bottom: 12px; display: block; min-height: 42px; }
        .play-btn { display: flex; align-items: center; justify-content: center; gap: 8px; background: var(--accent-2); color: #06120a; padding: 12px; border-radius: 50px; font-weight: 800; font-size: 13px; margin-top: auto; transition: 0.2s; width: 100%; }
        .video-card:hover .play-btn { background: #21e065; }

        /* POP UP ΕΙΣΟΔΟΥ - Netflix splash style */
        .entry-overlay { position: fixed; inset: 0; background: radial-gradient(ellipse at center, rgba(30,4,6,0.96), rgba(4,4,6,0.98)); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 99999; padding: 20px; transition: opacity 0.4s ease, visibility 0.4s ease; }
        .entry-overlay.hidden { opacity: 0; visibility: hidden; }
        .entry-modal { background: var(--bg-card); padding: 28px; border-radius: var(--radius-lg); text-align: center; max-width: 400px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.7); border: 1px solid var(--border); border-top: 4px solid var(--accent); }
        .entry-modal h2 { color: var(--primary); font-size: 24px; font-weight: 900; margin-bottom: 16px; }
        .btn-enter { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; margin-top: 16px; padding: 16px; font-size: 15px; font-weight: 800; color: #fff; border-radius: 50px; border: none; cursor: pointer; background: var(--accent); transition: 0.2s; }
        .btn-enter:hover { background: #ff0a17; transform: scale(1.02); }

        /* STICKY ADS */
        .sticky-ad { position: fixed; left: 0; width: 100%; background: #101014; padding: 6px; box-shadow: 0 -4px 20px rgba(0,0,0,0.5); z-index: 9999; text-align: center; display: flex; justify-content: center; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); border-color: var(--border); }
        .sticky-top { top: 0; transform: translateY(-100%); border-bottom: 2px solid var(--accent); }
        .sticky-top.show { transform: translateY(0); }
        .sticky-bottom { bottom: 0; transform: translateY(100%); border-top: 2px solid var(--accent); }
        .sticky-bottom.show { transform: translateY(0); }
        .sticky-close { position: absolute; background: var(--accent); color: #fff; border: none; width: 26px; height: 26px; border-radius: 50%; font-size: 12px; cursor: pointer; top: -13px; right: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.4); transition: 0.2s; }
        .sticky-close:hover { transform: scale(1.1); }

        /* FOOTER */
        footer { text-align: center; padding: 28px 16px; background: #050506; color: var(--text-muted); font-size: 13px; margin-top: 20px; border-top: 1px solid var(--border); }
        footer span { color: var(--accent); font-weight: 800; }

        /* DESKTOP/TABLET */
        @media (min-width: 600px) {
            .video-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
            .video-grid { grid-template-columns: repeat(3, 1fr); }
            .post-card { flex: 0 0 300px; }
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
